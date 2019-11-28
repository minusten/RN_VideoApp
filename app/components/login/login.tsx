import React from 'react';
import { Alert, ImageBackground, Text } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Button, Input } from 'react-native-elements';
import { Toast } from 'native-base';
 
//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//Router-flux
import { Actions } from 'react-native-router-flux';

//Google login
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

//Redux
import { addUserName } from '../../actions/actions';

//Firebase
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface Props { 
  addUserName(username: string): string;
  addGooglePhoto(photo: string): string;
}

interface State {
  isLogged: boolean;
  text: string;
  loggedInUser: string;
  token: string;
  isSigninInProgress: boolean;
  isUserSignedIn: boolean;
  showToast: boolean;
  userInfo: any;
  loggedIn: boolean;
  userData: null;
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
        showToast: false,
        userInfo: '',
        loggedIn: false,
        userData: null,
    };
 }
  saveUserName = () => {
    this.props.addUserName(this.state.text);
    this.props.addGooglePhoto('');
    if(this.state.text) {
      this.setState({
        text: '',
      });
      Actions.home();
    } else {
      Toast.show({
        text: 'Enter username!',
        position: 'bottom',
        type: 'danger',
      });}
    }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '112391187575-gf1855g3vusoamjpmt05fngchn9ror86.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: 'gmail.com', 
      forceConsentPrompt: true, 
      loginHint: '',
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });
      database().ref('/users').once('value').then(snapshot => {
        const pro = snapshot.val()
        this.setState({userData: pro})
        console.log(this.state.userData)
    });
  }

  onSignInPress = async () => {
    try {
      this.setState({ isSigninInProgress: true });
      GoogleSignin.hasPlayServices();
       await GoogleSignin.signIn()
      .then((loggedInUser: any) => {
        console.log('user', loggedInUser);
        this.setState({
          loggedInUser,
          isUserSignedIn: true,
          isSigninInProgress: false,
        });
        const credential = firebase.auth.GoogleAuthProvider.credential(loggedInUser.idToken);
        firebase.auth().signInWithCredential(credential);
        // const user = firebase.auth().currentUser;
        // firebase.auth().onAuthStateChanged(user => {console.log(user)});
      
        let rootRef = database().ref('users');
        rootRef
        .orderByChild('idToken')
        .equalTo(loggedInUser.idToken)
        .once('value')
        .then(snapshot => {
          // if (snapshot.exists()) {
            let user = snapshot.val();
            console.log(snapshot.exists())
          // } else {
          //   database().ref('users').push({loggedInUser});
          // }
        })

       
        this.props.addUserName(loggedInUser.user.givenName);
        this.props.addGooglePhoto(loggedInUser.user.photo);
        Actions.home();
      });
      // .done();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled');
      } else {
        console.log(error);
      }
    }
  };

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
      <Text style={{marginTop: 50, color: '#00a4db'}}>or</Text>
      <GoogleSigninButton
        style={{ width: '60%', height: 48, borderWidth: 1, borderColor: '#00a4db'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.onSignInPress}
        // disabled={this.state.isSigninInProgress}
        />
      </StyledView>
    </ImageBackground>
    );
  }
}

export default LoginComponent;