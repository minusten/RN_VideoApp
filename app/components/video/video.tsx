import React from 'react';
import { View, Text, Button, ScrollView, Image, TouchableOpacity} from 'react-native';

//Style
import styled from 'styled-components/native';

//Video
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

//Axios
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

//Animated video list
import DraggableFlatList, { RenderItemInfo, OnMoveEndInfo } from 'react-native-draggable-flatlist';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 207, 174, 0.47);
`;

const StyledContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 370px;
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
`; 

const CLIENT_ID = 'f37f467dae619c20091373e3a873f337ab790609';
const CLIENT_SECRET = 'f1c+7wQ+T6nQs34aQP4Y4KMKWPh4DvLUPrGiYASnv0d1fjYg7T9Y9Qz1xW63J5fLhvg+bDwlczZg4gveA+9d9ETaJXdrVSxUDrDtcBstnf3gCCDhuB1W8RAwLcmQUCUI';
const ACCESS_TOKEN = '4d51be248a8e7d14eddc69bba0d7f5e7';

type Video = {
  id: number,
  name: string,
  favorite: boolean,
};

interface Props {}

interface State {
    vimeo: any[];
    image: string;
    data: Video[];
}

class VideoComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            vimeo: [],
            image: '',
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
      vimeo: data.data,
    });
    console.log('VIMEO', this.state.vimeo);
  }

  componentDidMount() {
    this.getVideosForChannel();
  }
  

  render() {
    return (
      <StyledView>
        <ScrollView> 
         <Title> My videos</Title>
          {/* <Button title='Go to favorites' onPress={this.goToFavorites} /> */}
          {this.state.vimeo.map((video, name) => {
          return (
            <StyledContainer key={name}> 
              <WebView source={{uri: video.link}} 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                useWebKit={true}   
                startInLoadingState={true}
                originWhitelist={['file://', '*']} 
                style={{
                  flex: 1,
                  height: 400, 
                  width: 350,
                }}
                />
               <Text>{video.name}</Text>
              <Text>{Math.floor(video.duration % 3600 / 60)}:{Math.floor(video.duration % 3600 % 60)}</Text>
          </StyledContainer>
         );
        })}
      </ScrollView>
    </StyledView>
   
   );
 }
 
}

export default VideoComponent;