import React from 'react';
import { ImageBackground, View, ScrollView } from 'react-native';

// Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

//Containers
import HeaderContainer from '../header/container';

//Router-flux
import { Actions } from 'react-native-router-flux';

//Style mixins
import styledViewMixins from '../styles/styledViewMixins';
import WebView from 'react-native-webview';

const StyledContainer = styled.View`
 display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 370px; */
  height: 400px;
  border: 2px solid black;
  margin-bottom: 5px;
  padding: 10px 10px;
`;
const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%;*/
  height: 100%; 
  background-color: rgba(244, 207, 174, 0.47);
`;
const Name = styled.Text`
  font-size: 30;
  margin: 10px 10px;
  font-family: 'AbrilFatface-Regular';
`;

interface Props {
  favorites: string[];
 }

class FavoritesComponent extends React.Component<Props> {

  goToVideo = () => {
    Actions.video();
  }

  render() {
    return (
        <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
           <HeaderContainer />
           <ScrollView>
           <StyledView>
            <Name> Favorite video </Name>
            {this.props.favorites.map((fav, name) => {
              return (
              <StyledContainer key={name}> 
                    <WebView source={{uri: fav.link}} 
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    useWebKit={true}   
                    startInLoadingState={true}
                    originWhitelist={['file://', '*']} 
                    style={{ flex: 1, height: 400, width: 350 }}
                  />
              </StyledContainer>
             );
            })}
           <Button  type='outline' titleStyle={{color: 'black', fontFamily: 'CormorantGaramond-Bold'}} buttonStyle={{borderColor: 'black', width: 150}} title='Add new video' onPress={this.goToVideo}/>
          </StyledView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default FavoritesComponent; 