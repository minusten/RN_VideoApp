import React from 'react';
import { Text, Button, View, Image } from 'react-native';

//Roter-flux
import { Actions } from 'react-native-router-flux';

// Style
import styled from 'styled-components/native';

//Icon
import Icon from 'react-native-vector-icons/Feather';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffa45e;
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 100%;
  flex-direction: row;
  padding-top: 5px;
`;

const Name = styled.Text`
  color: black;
  font-size: 20;
  font-family: 'AbrilFatface-Regular';
  text-shadow: 2px 0 2px #f7d79e;
  margin-left: 5px;
`;

const Welcome = styled.Text`
  color: black;
  font-size: 20;
  font-family: 'CormorantGaramond-Bold';
  margin-left: 5px;
`;

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

interface Props {
  username: string;
}

class HeaderComponent extends React.Component<Props> {
  goToSetting = () => {
    Actions.setting();
  };
  render() {
    return (
         <StyledView>
           <StyledContainer>
             {
             this.props.photo === '' ? 
              <Image source={require('../../../assets/images/user.png')} style={{height: 50, width: 50}} /> 
             :
              <Image source={{uri: this.props.photo}} style={{height: 50, width: 50, borderRadius: 20}} />
             }
             <Name><Welcome>Hello, </Welcome>{this.props.username}</Name>
            </StyledContainer>
           <Icon name='menu' size={30} color='#000' onPress={this.goToSetting}/>
         </StyledView>
    );
  }
}

export default HeaderComponent; 