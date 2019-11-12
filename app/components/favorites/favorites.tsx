import React from 'react';
import { Text, ImageBackground } from 'react-native';

// Style
import styled from 'styled-components/native';
import HeaderContainer from '../../containers/header';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d8e6e8;
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 100%;
  flex-direction: row;
`;

const Name = styled.Text`
  font-weight: bold;
  margin-top: 20px;
  color: black;
  font-size: 50px;
`;

interface Props { }

class FavoritesComponent extends React.Component<Props> {
//   constructor(props: Props){
//     super(props);
//     this.state = {
//     };
//   }

  render() {
    return (
        <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
         <StyledView>
           <HeaderContainer />
           <Name> Favorites video </Name>
           <Text> FAVORITES  </Text>
         </StyledView>
        </ImageBackground>
    );
  }
}

export default FavoritesComponent; 