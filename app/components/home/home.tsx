import React from 'react';
import { Button, Text, View } from 'react-native';
import HeaderComponent from '../header/header';
import NewPlaylistComponent from '../newPlaylist/newPlaylist';
//Style
import styled from 'styled-components/native';
//Icon
import Icon from 'react-native-vector-icons/Ionicons';
//Router-flux
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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
  someText: string;
}

class HomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showDetails: false,
      someText: 'help',
    };
  }

  navigateToPlaylistComponent = () => {
    Actions.playlist();
  }
  addNewPlaylist = () => {
    this.setState({
        showDetails: !this.state.showDetails,
    });
    console.log(this.state.showDetails);
  }

  render() {
    const {showDetails, someText} = this.state;
    return (
    <StyledView>
      <HeaderComponent someText={someText} />
        <Title>Home</Title>
          <View>
           {showDetails
            &&
           <NewPlaylistComponent playlist='' />
            }
          </View>
        <Icon name='ios-add-circle-outline' size={30} color='#000' onPress={this.addNewPlaylist}/>
       <Button title='Go to Playlist' onPress={this.navigateToPlaylistComponent} />
     </StyledView>
    );
  }
}

export default HomeComponent;
