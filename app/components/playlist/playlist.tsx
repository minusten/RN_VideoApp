import React from 'react';
import { View } from 'react-native';

//Style
import styled from 'styled-components/native';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//Storage
import AsyncStorage from '@react-native-community/async-storage';

//Components
import HeaderComponent from '../header/header';
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

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin: 10px 10px;
`;
interface Props { 
  
}

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
        <HeaderComponent someText=''/>
        <StyledView>
        <Title> My playlist's </Title>
        <StyledPlaylist onPress={this.showVideoFunc}>{this.state.playlist}<Icon name='remove' size={30} color='#000' onPress={this.removeFromAsyncStorage}/></StyledPlaylist>
        {this.state.showVideo && <VideoComponent /> }
        </StyledView>
        {/* <MyBackButton /> */}
      </View>
    );
  }
}

export default PlaylistComponent;
