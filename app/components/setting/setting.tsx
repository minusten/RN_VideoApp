import React from 'react';
import { Text, ImageBackground } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Components
import HeaderContainer from '../header/container';

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
  addUserName(username: string): string;
}

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
    this.props.addUserName(this.state.newUserName);
    e.preventDefault();
    this.setState({newUserName: ''});
  }

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
        <Text> Choose another google account </Text>
        {/* <GoogleSigninButton
        style={{ width: '100%', height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        // onPress={this.signIn}
        // disabled={this.state.isSigninInProgress}
        /> */}
       </StyledMainContainer>
     </StyledView>
    </ImageBackground>
    );
  }
}

export default SettingComponent;
