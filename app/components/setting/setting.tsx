import React from 'react';
import { Text, ImageBackground } from 'react-native';
//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Components
import HeaderContainer from '../../containers/header';

const StyledView = styled.View`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
  background-color: rgba(244, 207, 174, 0.47);
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

const Container = styled.View`
  width: 300px;
  height: 300px;
  background-color: rgba(244, 207, 174, 0.47);
`;

interface Props {}

interface State {
  newUserName: string;
}

class SettingComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newUserName: '',
    };
  }

  saveNewName = (e: any) => {
    console.log(e.target.value);
  }
  render() {
    return (
    <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
      <HeaderContainer someText=''/>
      <StyledView>
        <Title> Setting </Title>
       
         <Text> Add new name </Text>
              <Input
               placeholder='New username'
               value={this.state.newUserName}
               onChangeText={newUserName => this.setState({ newUserName })}
              />
            <Button title='Save' onPress={this.saveNewName} type='outline' />
        <Text> Choose another google account </Text>
        {/* <GoogleSigninButton
        style={{ width: '100%', height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        // onPress={this.signIn}
        // disabled={this.state.isSigninInProgress}
        /> */}
     
     </StyledView>
    </ImageBackground>
    );
  }
}

export default SettingComponent;
