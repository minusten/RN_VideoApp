import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import HeaderComponent from '../header/header';
import NewPlaylistComponent from '../newPlaylist/newPlaylist';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

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
      <Text>Home</Text>
      <View>
        {showDetails
          &&
        <NewPlaylistComponent />
        }
      </View>
      <Icon name='ios-add-circle-outline' size={30} color='#000' onPress={this.addNewPlaylist}/>
      <Button title='Go to Playlist' onPress={this.navigateToPlaylistComponent} />
     </StyledView>
    );
  }
}

export default HomeComponent;
