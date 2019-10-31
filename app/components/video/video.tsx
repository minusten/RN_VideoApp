import React from 'react';
import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native'
import Video from 'react-native-video';
import axios from 'axios'

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`
interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}
interface State {
    video: string
}

class VideoComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            video: ''
        }
    }
 navigateToHome = () => this.props.navigation.navigate('HomeComponent');
 componentDidMount() {
    axios.get('https://api.vimeo.com/videos/365130086')
    .then(res =>
        this.setState({
            video: res
        })
    ) 
    .catch(function (error) {
        console.log(error);
      })
}
   
 render() {
    return (
        <StyledView>
          <Text> My videos </Text>
          {/* <Text>{this.state.video}</Text> */}
          <Video source={{uri: 'https://api.vimeo.com/videos/365130086'}} />
       </StyledView>
      );
 }
 
};

export default VideoComponent;