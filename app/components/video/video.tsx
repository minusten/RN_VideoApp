import React from 'react';
import { View, Text, Button, ScrollView, Image, TouchableOpacity, Animated, Alert} from 'react-native';

//Style
import styled from 'styled-components/native';
import { Toast } from 'native-base';

//Video
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

//Axios
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-color: rgba(244, 207, 174, 0.47);
`;

const StyledText = styled.Text`
  font-size: 20;
  font-family: 'CormorantGaramond-Bold';
`;

const StyledContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 370px; */
  height: 400px;
  border: 2px solid black;
  margin-bottom: 5px;
  padding: 10px 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'AbrilFatface-Regular';
  margin-top: 20;
`; 

const ACCESS_TOKEN = '4d51be248a8e7d14eddc69bba0d7f5e7';

interface Props {
  addFavorites(arr: string[]): any;
  favorites: string[];
}

interface State {
    vimeo: string[];
    isFavorite: boolean;
    favoriteVideo: string[];
    opacity: any;
}

class VideoComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            vimeo:[],
            isFavorite: false,
            opacity: new Animated.Value(0),
            favoriteVideo: [],
        };
    }

  async getVideosForChannel() {
      const  { data }  = await axios.get(
        'https://api.vimeo.com/channels/1511223/videos',
         {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
         }
      );
    this.setState({
      vimeo: data.data.map((item: { isFavorite: boolean; videoId: number; }) => {
        item.isFavorite = this.state.isFavorite;
        return item;
      }),
    });
      console.log('VIMEO', this.state.vimeo);
    }

  addToFavorites = (videoId: number) => {
    const newArr = this.state.vimeo;
    newArr[videoId].isFavorite = !newArr[videoId].isFavorite;
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
    const favArr = this.props.favorites.slice();
    favArr.push(newArr[videoId])
    this.props.addFavorites(favArr);
    console.log(newArr);
      Toast.show({
        text: 'Added to favorites video!',
        position: 'top',
        type: 'success',
      });
  }

  componentDidMount() {
    this.getVideosForChannel();
    Animated.timing(
      this.state.opacity, 
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }
    ).start();
  }

  onRemove = () => {
    this.setState(state => {
      const [first, ...rest] = state.vimeo;
      return {
        vimeo: rest,
      };
    });
  };
  
  render() {
    return (
      <StyledView>
        <ScrollView> 
         <Title> My videos</Title> 
          {this.state.vimeo.map((video: any, videoId: number) => {
          return (
           <Animated.View style = {[{opacity: this.state.opacity,
              transform: [{scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
               }),
              }],
             }]}
             key={videoId}
            > 
            <StyledContainer>
             <WebView source={{uri: video.link}} 
                useWebKit={true} 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                originWhitelist={['file://', '*']} 
                style={{ flex: 1, height: 400, width: 350 }}
                />
               <StyledText>{video.name}</StyledText>
               <StyledText>{Math.floor(video.duration % 3600 / 60)}:{Math.floor(video.duration % 3600 % 60)}</StyledText>
               <TouchableOpacity key={videoId} onPress={() =>this.addToFavorites(videoId)} > 
                { video.isFavorite  ?
                <Image source={require('../../../assets/images/icons8-heart-24-filled.png')} /> :
                <Image source={require('../../../assets/images/icons8-heart-24.png')} />  }
                </TouchableOpacity> 
              </StyledContainer>
            </Animated.View>
          );
        })} 
      </ScrollView>
    </StyledView>
   );
  }
}

export default VideoComponent;