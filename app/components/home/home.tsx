import React from 'react';
import { ImageBackground, View } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

//Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Router-flux
import { Actions } from 'react-native-router-flux';
import HeaderContainer from '../header/container';

//Containers
import NewPlaylistContainer from '../newPlaylist/container';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.View`
  height: 300px;
  width: 330px;
  background-color: rgba(244, 207, 174, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 20px;
  color: black;
`;

const Image = styled.View`
  background-image: url('../../../assets/images/1.jpg');
  background-position: cover;
  background-repeat: no-repeat;
`;

const Title = styled.Text`
  font-size: 30;
  margin: 10px 10px;
  font-family: 'AbrilFatface-Regular';
`;

interface Props { }

interface State {
  showDetails: boolean;
}

class HomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  navigateToPlaylistComponent = () => {
    Actions.playlist();
  }

  navigateToFavoritesComponent = () => {
    Actions.favorites();
  }

  addNewPlaylist = () => {
    this.setState({
        showDetails: !this.state.showDetails,
    });
    console.log(this.state.showDetails);
  }

  render() {
    const { showDetails } = this.state;
    return (
    <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
      <StyledView>
       <HeaderContainer />
        <StyledContainer> 
        <Title>Welcome to home</Title>
          <View style={{marginBottom: 10}}>
           {showDetails ?
             <NewPlaylistContainer />
            :
            <Icon name='playlist-plus' size={40} color='#000' onPress={this.addNewPlaylist}/>
            }
          </View>
       <Button  type='outline' titleStyle={{color: 'black', fontFamily: 'CormorantGaramond-Bold'}} buttonStyle={{borderColor: 'black', marginBottom: 10, width: 150 }} title='Go to Playlist' onPress={this.navigateToPlaylistComponent} />
       <Button  type='outline' titleStyle={{color: 'black', fontFamily: 'CormorantGaramond-Bold'}} buttonStyle={{borderColor: 'black', width: 150}} title='Go to Favorites' onPress={this.navigateToFavoritesComponent} />
      </StyledContainer>
     </StyledView>
    </ImageBackground>
    );
  }
}

export default HomeComponent;
