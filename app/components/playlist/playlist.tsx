import React from 'react';
import { ImageBackground } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { SwipeRow, View, Text, Icon } from 'native-base';

//Components
import VideoComponent from '../video/video';
import HeaderContainer from '../header/container';
import NewPlaylistContainer from '../newPlaylist/container';

//Router-flux
import { Actions } from 'react-native-router-flux';
import VideoContainer from '../video/container';

const StyledView = styled.View`
  color: black;
  font-size: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.Text`
  border: 1px solid black;
  border-radius: 15px; 
  width: 80%;
  height: 50;
  font-size: 30;
  padding-left: 5px; 
  background-color: rgba(244, 207, 174, 0.47);
  display: flex;
  justify-content: space-between;
  padding: 5px 5px;
`;

const StyledCont = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 90%;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 30;
  margin: 10px 10px;
  color: #dbb26b;
  font-family: 'AbrilFatface-Regular';
  text-shadow: 2px 2px 2px #000;
`;

interface Props { 
  playlist: string[];
  removePlaylist(id: number): void;
}

interface State { 
  playlist: string;
  showVideo: boolean;
  isDeleted: boolean;
}

class PlaylistComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      playlist: '',
      showVideo: false,
      isDeleted: false,
    };
  }

  showVideoFunc = async () => {
    this.setState({
      showVideo: !this.state.showVideo,
    });
    console.log('dddddd');
  }

  deletePlaylist = (e: { preventDefault: () => void; }, id: number) => {
    e.preventDefault();
    this.props.removePlaylist(id);
    if (id === 0) {
      // this.setState({
      //   isDeleted: !this.state.isDeleted,  
      // });
      Actions.pop();
    } else {
      console.log('Playlist ready');
    }
  }
  render() {
    return (
      <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
        <HeaderContainer someText=''/>
        {
          this.state.showVideo ? <VideoContainer /> :
        <StyledView>
        <Title> My playlist's </Title>
        {this.props.playlist.map((video, name) => {
          return (
           <StyledCont key={name}> 
             <StyledContainer onPress={this.showVideoFunc}>
               {video}
             </StyledContainer> 
            <Button title='Delete' onPress={e => this.deletePlaylist(e, name)} buttonStyle={{backgroundColor: '#d96e3d', marginLeft: 10, height: 40}} titleStyle={{color: 'black'}}/>
           </StyledCont>
           );
         })}
         {/* {this.state.isDeleted ? <NewPlaylistContainer/> : null} */}
        </StyledView>
       }
      </ImageBackground>
    );
  }
}

export default PlaylistComponent;
