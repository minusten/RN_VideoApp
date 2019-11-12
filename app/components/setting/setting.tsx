import React from 'react';
import { Text, ImageBackground } from 'react-native';
//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Components
import HeaderContainer from '../../containers/header';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin: 10px 10px;
`;

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 300px;
  border-radius: 15;
  flex-direction: row;
  /* background-color: rgba(244, 207, 174, 0.47); */
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
      <StyledView>
        <HeaderContainer someText=''/>
        <Title> Setting </Title>
         <Text> Add new name </Text>
          <Container> 
              <Input
               placeholder='New username'
               value={this.state.newUserName}
               onChangeText={newUserName => this.setState({ newUserName })}
              />
            <Button title='Save' onPress={this.saveNewName} type='outline' />
         </Container>
        <Text> Choose another google account </Text>
        <Container> 
        {/* <GoogleSigninButton
        style={{ width: '100%', height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        // onPress={this.signIn}
        // disabled={this.state.isSigninInProgress}
        /> */}
      </Container>
     </StyledView>
    </ImageBackground>
    );
  }
}

export default SettingComponent;
