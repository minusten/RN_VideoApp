import React from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

// Style
import styled from 'styled-components/native';

//Icon
import Icon from 'react-native-vector-icons/Feather';

import User from '../../actions/types';
import { addUserName } from '../../actions/actions';

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
`;

const Name = styled.Text`
  color: black;
  font-size: 20;
  font-family: 'AbrilFatface-Regular';
  text-shadow: 2px 0 2px #f7d79e;
`;

const StyledText = styled.Text`
  color: black;
  font-size: 20;
  font-family: 'CormorantGaramond-Regular';
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
           <StyledText>Hello, <Name>{this.props.username}</Name> </StyledText>
           <Icon name='menu' size={30} color='#000' onPress={this.goToSetting}/>
         </StyledView>
    );
  }
}

export default HeaderComponent; 