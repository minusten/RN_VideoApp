import React from 'react';
import { ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

// Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { Toast } from 'native-base';

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
  width: 370px;
  height: 400px;
  border: 1px solid black;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: white;
`;
const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 600px;  */
  background-color: rgba(244, 207, 174, 0.47);
`;
const Name = styled.Text`
  font-size: 30;
  margin: 10px 10px;
  font-family: 'AbrilFatface-Regular';
`;

interface Props {
  favorites: string[];
  removeFavorite(id: number): void;
 }

class FavoritesComponent extends React.Component<Props> {

  goToVideo = () => {
    Actions.video();
  }

  removeFav = (id: number) => {
    this.props.removeFavorite(id);
    Toast.show({
      text: 'Deleted from favorites video!',
      position: 'top',
    });
  }

  render() {
    return (
        <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
           <HeaderContainer />
           <ScrollView>
           <StyledView>
            <Name> Favorite video </Name>
            {this.props.favorites.map((fav: string | any, name: number) => {
              return (
              <StyledContainer key={name}> 
                 <TouchableOpacity onPress={() => this.removeFav(name)}  
                  style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',  marginTop: 5}} 
                  >
                  <Image source={require('../../../assets/images/icon.png')} 
                    style={{height: 30, width: 30, }}
                  />
                  </TouchableOpacity>
                    <WebView source={{uri: fav.link}} 
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    useWebKit={true}   
                    startInLoadingState={true}
                    originWhitelist={['file://', '*']} 
                    style={{ flex: 1, height: 320, width: 350 }}
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