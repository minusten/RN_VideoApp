import React from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Welcome = styled.Text`
  font-size: 50;
  color: #88a8b8;
`;
interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}
interface State {
  isLogged: boolean;
  text: string;
  userInfo: string;
  token: string;
}

class LoginComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        isLogged: false,
        text: '',
        userInfo: '',
        token: '',
    };
 }

  saveName = async(key: string, value: string)  => {
    try {
      await AsyncStorage.setItem('name', this.state.text);
      if (AsyncStorage.getItem('name')) {
        Actions.home();
      } else if (AsyncStorage.getItem('')) {
        Alert.alert('ERRR');
      }
    } catch (e) {
      console.log(e);
    }
    this.setState({
      text: '',
    });
  }

  signIn = async() => {
    console.log('adfdsfsdf');
    try {
      const userInfo = await GoogleSignin.signIn() && GoogleSignin.configure({
        offlineAccess: false,
        iosClientId: '864164948272-t63e5jl1e1nqpr2rq80t0n3gmj59c9h1.apps.googleusercontent.com',
        webClientId: '864164948272-v6o7ltcsb146tk4j425hfvb8pvbvir8u.apps.googleusercontent.com',
      });
      this.setState({ userInfo });
      console.log(this.state.userInfo);
      if(this.state.userInfo) {
        Actions.home();
      } else {
        console.log('NOOO');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
    <StyledView>
      <Welcome> Hello </Welcome>
       <Input
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        placeholder='Enter name'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='#10a3c7'
            />
          }
        />
        <GoogleSigninButton
        style={{ width: '100%', height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.signIn}
        // disabled={this.state.isSigninInProgress}
        />
      <Button buttonStyle={{width: '100%', marginTop: 50}} title='Login' onPress={this.saveName} type='outline'/>
     </StyledView>
    );
  }
}

export default LoginComponent;
