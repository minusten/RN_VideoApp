import React from 'react';
import { Alert } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

//Storage
import AsyncStorage from '@react-native-community/async-storage';

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
  background-color: #e6edf0;
`;

interface Props {
  text: string;
  playlist: string;
}

interface State {
  playlist: string;
}

class NewPlaylistComponent extends React.Component<State, Props> {
 constructor(props: Props){
  super(props);
  this.state = {
      playlist: '',
      text: '',
  };
 }
 savePlaylist = async(_key: string, value: string) => {
    try {
      await AsyncStorage.setItem('playlist', this.state.playlist);
      if (this.state.playlist !== '') {
        Actions.playlist();
      } else {
        Alert.alert('Please, enter name of playlist');
      }
    } catch (e) {
      console.log(e);
    }
  }
 render() {
    return (
      <StyledView>
        <Input
            placeholder='New playlist'
            value={this.state.playlist}
            onChangeText={playlist => this.setState({ playlist })}
        />
        <Button title='Add' onPress={() => {this.savePlaylist('playlist', this.state.playlist);}} type='outline' />
      </StyledView>
      );
   }
}

export default NewPlaylistComponent;
