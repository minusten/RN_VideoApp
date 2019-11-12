import React from 'react';
import { ImageBackground } from 'react-native';

//Style
import styled from 'styled-components/native';

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
  height: 50;
  width: 90%;
  background-color: rgba(244, 207, 174, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 30;
  padding-left: 5px;
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin: 10px 10px;
  color: #dbb26b;
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

  showVideoFunc = async () => {
    this.setState({
      showVideo: !this.state.showVideo,
    });
    console.log('dddddd');
  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/images/1.jpg')} style={{width: '100%', height: '100%',}}> 
        <HeaderContainer someText=''/>
        {
          this.state.showVideo ? <VideoComponent /> :
        <StyledView>
        <Title> My playlist's </Title>
        <StyledContainer onPress={this.showVideoFunc}>{this.state.playlist}</StyledContainer>
        </StyledView>
        }
      </ImageBackground>
    );
  }
}

export default PlaylistComponent;
