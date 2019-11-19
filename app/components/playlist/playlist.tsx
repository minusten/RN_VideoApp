import React from 'react';
import { ImageBackground, View } from 'react-native';

//Style
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//Storage
import AsyncStorage from '@react-native-community/async-storage';

//Components
import VideoComponent from '../video/video';
import HeaderContainer from '../../containers/header';

const StyledView = styled.View`
  color: black;
  font-size: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.Text`
  /* /* height: 50;
  

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; */
  border: 1px solid black;
  border-radius: 15px; 
  width: 80%;
  height: 50;
  font-size: 30;
  padding-left: 5px; 
  background-color: rgba(244, 207, 174, 0.47);
  display: flex;
  justify-content: space-between;
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

  showVideoFunc = async () => {
    this.setState({
      showVideo: !this.state.showVideo,
    });
    console.log('dddddd');
  }

  deletePlaylist = (e: { preventDefault: () => void; }, id: any) => {
    e.preventDefault();
    this.props.removePlaylist(id);
    console.log('delete');
  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
        <HeaderContainer someText=''/>
        {
          this.state.showVideo ? <VideoComponent /> :
        <StyledView>
        <Title> My playlist's </Title>
        {this.props.playlist.map((video: string[], name: string)=>{
          return (
          <StyledCont> 
           <StyledContainer onPress={this.showVideoFunc} key={name}>
            {video}
           </StyledContainer> 
           <Button title='Delete' onPress={e => this.deletePlaylist(e, name)} buttonStyle={{backgroundColor: '#d96e3d', marginLeft: 10, height: 40}} titleStyle={{color: 'black'}}/>
          </StyledCont>
          );
        })}
        </StyledView>
        }
      </ImageBackground>
    );
  }
}

export default PlaylistComponent;
