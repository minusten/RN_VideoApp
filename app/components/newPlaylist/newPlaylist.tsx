import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 300;
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
    } catch (e) {
      console.log(e);
    }
    this.setState({
        playlist: '',
    });
  }
 render() {
    return (
      <StyledView>
        <Input
            placeholder='New playlist'
            value={this.state.playlist}
            onChangeText={playlist => this.setState({ playlist })}
        />
        <Icon name='ios-add-circle-outline' size={30} color='#000'  onPress={this.savePlaylist} />
      </StyledView>
      );
   }
}

export default NewPlaylistComponent;
