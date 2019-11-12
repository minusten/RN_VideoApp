import React from 'react';
import { ImageBackground, View } from 'react-native';
import NewPlaylistComponent from '../newPlaylist/newPlaylist';
//Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
//Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Router-flux
import { Actions } from 'react-native-router-flux';
import HeaderContainer from '../../containers/header';

//Fonts
import Cinzel from '../../../assets/fonts/Cinzel-Regular';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.View`
  height: 250px;
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

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin: 10px 10px;
`;

interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}
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
          <View>
           {showDetails ?
             <NewPlaylistComponent playlist='' />
            :
             <Title>Home</Title>
            }
          </View>
        <Icon name='playlist-plus' size={40} color='#000' onPress={this.addNewPlaylist}/>
       <Button  type='outline' titleStyle={{color: 'black'}} buttonStyle={{borderColor: 'black', marginBottom: 10, width: 150}} title='Go to Playlist' onPress={this.navigateToPlaylistComponent} />
       <Button  type='outline' titleStyle={{color: 'black'}} buttonStyle={{borderColor: 'black', width: 150}} title='Go to Favorites' onPress={this.navigateToFavoritesComponent} />
      </StyledContainer>
     </StyledView>
    </ImageBackground>
    );
  }
}

export default HomeComponent;
