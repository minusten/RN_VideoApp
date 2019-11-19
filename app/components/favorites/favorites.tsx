import React from 'react';
import { ImageBackground } from 'react-native';

// Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

//Containers
import HeaderContainer from '../../containers/header';

//Router-flux
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContainer = styled.View`
  height: 250px;
  width: 100%;
  margin-top: 20;
  background-color: rgba(244, 207, 174, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
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

  goToVideo = () => {
    Actions.video();
  }

  render() {
    return (
        <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
         <StyledView>
           <HeaderContainer />
           <StyledContainer> 
            <Name> Favorites video </Name>
            <Button  type='outline' titleStyle={{color: 'black', fontFamily: 'CormorantGaramond-Bold'}} buttonStyle={{borderColor: 'black', width: 150}} title='Add new video' onPress={this.goToVideo}/>
           </StyledContainer>
         </StyledView>
        </ImageBackground>
    );
  }
}

export default FavoritesComponent; 