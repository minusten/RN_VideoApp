import React from 'react';
import { Alert, ImageBackground, Text } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Button, Input } from 'react-native-elements';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//Router-flux
import { Actions } from 'react-native-router-flux';

// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

//Redux
import { addUserName } from '../../actions/actions';
import { connect } from 'react-redux';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface Props { 
  addUserName(username: string): string;
}

interface State {
  isLogged: boolean;
  text: string;
  loggedInUser: string;
  token: string;
  isSigninInProgress: boolean;
  isUserSignedIn: boolean;
}

class LoginComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        isLogged: false,
        text: '',
        loggedInUser: '',
        token: '',
        isSigninInProgress: false,
        isUserSignedIn: false,
    };
 }
  saveUserName = () => {
    this.props.addUserName(this.state.text);
    if(this.state.text) {
      return Actions.home();
    } else {
      Alert.alert('Please, enter username');
    }
  };

  // onSignInPress = () => {
  //   try {
  //     this.setState({ isSigninInProgress: true });
  //     GoogleSignin.hasPlayServices();
  //     const loggedInUser =  GoogleSignin.signIn()
  //     .then((loggedInUser) => {
  //       console.log('user', loggedInUser);
  //       this.setState({
  //         loggedInUser,
  //         isUserSignedIn: true,
  //         isSigninInProgress: false,
  //       });
  //       Actions.home();
  //     })
  //     .done();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
  <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%'}}> 
    <StyledView>
       <Input
        inputStyle={{color: 'white', marginTop: 150, fontFamily: 'CormorantGaramond-Bold', fontSize: 30}}
        leftIconContainerStyle={{paddingEnd: 5, marginTop: 150}}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        placeholder='Enter name'
        placeholderTextColor='#00a4db'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='#00a4db'
            />
          }
        />
      <Button buttonStyle={{width: '100%', marginTop: 50}} titleStyle={{fontFamily: 'CormorantGaramond-Bold', fontSize: 30}} title='Login' onPress={this.saveUserName} type='outline'/>
      <Text style={{marginTop: 150, color: '#00a4db'}}>or</Text>
      {/* <GoogleSigninButton
        style={{ width: '60%', height: 48, borderWidth: 1, borderColor: '#00a4db'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.onSignInPress}
        disabled={this.state.isSigninInProgress}
        /> */}
     </StyledView>
    </ImageBackground>
    );
  }
}

export default LoginComponent;