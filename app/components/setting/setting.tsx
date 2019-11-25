import React from 'react';
import { Text, ImageBackground, View } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Containers
import HeaderContainer from '../header/container';

//Google login
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

const StyledView = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(244, 207, 174, 0.47);
`;

const StyledMainContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  flex-direction: row;
  margin: 20px 20px;
`;

const Title = styled.Text`
  font-size: 30;
  margin: 10px 10px;
  font-family: 'AbrilFatface-Regular';
`;


interface Props {
  addUserName(username: string | null): string;
  addGooglePhoto(photo: string | null): string;
}

interface State {
  newUserName: string;
  loggedInUser: string;
  token: string;
  isSigninInProgress: boolean;
  isUserSignedIn: boolean;
}

class SettingComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newUserName: '',
      loggedInUser: '',
      token: '',
      isSigninInProgress: false,
      isUserSignedIn: false,
    };
  }

  saveNewName = (e: any) => {
    this.props.addUserName(this.state.newUserName);
    e.preventDefault();
    this.setState({newUserName: ''});
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '112391187575-gf1855g3vusoamjpmt05fngchn9ror86.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: '', 
      forceConsentPrompt: true, 
      });
  }

  onSignInPress = () => {
    try {
      this.setState({ isSigninInProgress: true });
      GoogleSignin.hasPlayServices();
      const loggedInUser =  GoogleSignin.signIn()
      .then((loggedInUser) => {
        console.log('user', loggedInUser);
        this.setState({
          loggedInUser,
          isUserSignedIn: true,
          isSigninInProgress: false,
        });
        this.props.addUserName(loggedInUser.user.givenName);
        this.props.addGooglePhoto(loggedInUser.user.photo);
      })
      .done();
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    return (
    <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
      <HeaderContainer someText=''/>
      <StyledView>
       <StyledMainContainer>
        <Title> Setting </Title>
         <Text> Add new name </Text>
         <StyledContainer> 
              <Input
               placeholder='Add new username'
               placeholderTextColor={'black'}
               value={this.state.newUserName}
               onChangeText={newUserName => this.setState({ newUserName })}
              />
            <Button title='Save' onPress={this.saveNewName} type='outline'  titleStyle={{color: 'black', fontFamily: 'CormorantGaramond-Bold'}} buttonStyle={{marginLeft: 50, borderColor: 'black', backgroundColor: '#f08f3a'}} />
          </StyledContainer> 
        <Text style={{marginTop: 50, marginBottom: 20}}> Choose another google account </Text>
        <GoogleSigninButton
        style={{ width: '90%', height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.onSignInPress}
        disabled={this.state.isSigninInProgress}
         /> 
       </StyledMainContainer>
     </StyledView>
    </ImageBackground>
    );
  }
}

export default SettingComponent;
