import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

//Style
import styled from 'styled-components/native';

//Video
import Video from 'react-native-video';

//Axios
import axios from 'axios';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CLIENT_ID = 'f37f467dae619c20091373e3a873f337ab790609';
const CLIENT_SECRET = 'f1c+7wQ+T6nQs34aQP4Y4KMKWPh4DvLUPrGiYASnv0d1fjYg7T9Y9Qz1xW63J5fLhvg+bDwlczZg4gveA+9d9ETaJXdrVSxUDrDtcBstnf3gCCDhuB1W8RAwLcmQUCUI';

interface Props {
}
interface State {
    vimeo: string[];
}

class VideoComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            vimeo: [],
        };
    }

  async getVideosForChannel(access_token: any) {
      const { data } = await axios.get(
        'https://api.vimeo.com/channels/1511223/videos',
         {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
         }
      );
    this.setState({ vimeo: data.data });
    console.log('VIMEO', this.state.vimeo);
}
  async componentDidMount() {
    try {
      const { data } = await axios.post(
       'https://api.vimeo.com/oauth/authorize',
         { grant_type: 'client_credentials' },
        {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    }
  );
  this.getVideosForChannel(data.access_token);
  } catch (error) {
    console.log(error);
    }
  }
   
 render() {
    return (
        <StyledView>
          <Text> My videos</Text>
          {this.state.vimeo.map((video, i) => {
         return <View key={i} ><WebView source={{uri: video}} style={{height: 100, width: 100}} originWhitelist={['*']}/></View>;
          })}
       </StyledView>
      );
 }
 
}

export default VideoComponent;