import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import HeaderComponent from '../header/header';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const SettingComponent: React.FC<Props> = (props) => {
  return (
    <StyledView>
      <HeaderComponent />
      <Text> Setting </Text>
   </StyledView>
  );
};

export default SettingComponent;
