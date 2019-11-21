import React from 'react';
import { Alert, View } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Router-flux
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 70%;
  border-radius: 15;
  flex-direction: row;
  background-color: rgba(244, 207, 174, 0.47);
`;

const ButtonContainer = styled.View`
  flex-direction: column;
`;

interface Props {
  text: string;
  playlist: string[];
  isSkipped: boolean;
  addPlaylist(arr: string[]): string[];
}

interface State {
  playlistTitle: string;
  isSkipped: boolean;
  text: string;
}

class NewPlaylistComponent extends React.Component<Props, State> {
 constructor(props: Props){
  super(props);
  this.state = {
    playlistTitle: '',
    text: '',
    isSkipped: false,
  };
 }

savePlaylist = () => {
  if (this.state.playlistTitle) {
    const newArr = this.props.playlist.slice();
    newArr.push(this.state.playlistTitle);
    this.props.addPlaylist(newArr);
    Actions.playlist();
  } else {
    Alert.alert('Please, enter playlist name');
  }
  this.setState({
    playlistTitle: '',
  });
}

skipSavingPlaylist = () => {
  this.setState({
    isSkipped: !this.state.isSkipped,
  });
}

 render() {
    return (
      <StyledView>
        <Input
            placeholderTextColor={'black'}
            placeholder='New playlist'
            value={this.state.playlistTitle}
            onChangeText={playlistTitle => this.setState({ playlistTitle })}
        />
        <ButtonContainer> 
          <Button title='Add' onPress={this.savePlaylist} type='outline' 
            titleStyle={{color: 'black'}} buttonStyle={{borderColor: 'black', marginRight: 5, marginBottom: 5}}
          />
          <Button title='Cancel' onPress={this.skipSavingPlaylist} type='outline' 
            titleStyle={{color: 'black'}} buttonStyle={{borderColor: 'black', marginRight: 5}}
          />
        </ButtonContainer>
      </StyledView>
      );
   }
}

export default NewPlaylistComponent;
