import React from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Storage

//Router-flux
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 80%;
  border-radius: 15;
  flex-direction: row;
  background-color: rgba(244, 207, 174, 0.47);
`;

interface Props {
  text: string;
  playlistTitle: string;
  playlist: string[];
}

interface State {
  playlistTitle: string;
}

class NewPlaylistComponent extends React.Component<State, Props> {
 constructor(props: Props){
  super(props);
  this.state = {
    playlistTitle: '',
    text: '',
    playlist: [],
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
        <Button title='Add' onPress={this.savePlaylist} type='outline' 
        titleStyle={{color: 'black'}} buttonStyle={{borderColor: 'black', marginRight: 5}}
        />
      </StyledView>
      );
   }
}

export default NewPlaylistComponent;
