import React from 'react';
import { Button, Text, View, ViewComponent } from 'react-native';
import styled from 'styled-components/native';
import MyBackButton from '../MyBackButton';
import HeaderComponent from '../header/header';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import VideoComponent from '../video/video';

const StyledView = styled.View`
  color: black;
  font-size: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledPlaylist = styled.Text`
  color: black;
  font-size: 30;
  border: 1px solid black;
  height: 50;
  width: 90%;
  background-color: #c0deeb;
  display: flex;
  justify-content: space-between;
`;

interface Props { }

interface State { 
  playlist: string;
  showVideo: boolean;
}

class PlaylistComponent extends React.Component<{}, State, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      playlist: '',
      showVideo: false,
    };
  }
  displayData = async ()=> {  
    try{
      this.setState({playlist: await AsyncStorage.getItem('playlist')});
      console.log(this.state.playlist);
    }
    catch(error){
      console.log(error);
    }
  }
  componentDidMount() {
    this.displayData();
  }
   removeFromAsyncStorage = async () =>{
    try {
      await AsyncStorage.removeItem('playlist');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }
  showVideoFunc = () => {
    console.log('dddddd');
    this.setState({
      showVideo: !this.state.showVideo,
    });
  }
  render() {
    return (
      <View>
        <HeaderComponent />
        <StyledView>
        <Text> My playlist's </Text>
        <StyledPlaylist onPress={this.showVideoFunc}>{this.state.playlist}<Icon name='remove' size={30} color='#000' onPress={this.removeFromAsyncStorage}/></StyledPlaylist>
        {this.state.showVideo && <VideoComponent /> }
        </StyledView>
        {/* <MyBackButton /> */}
      </View>
    );
  }
}

export default PlaylistComponent;
