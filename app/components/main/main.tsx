import React from 'react';

//Components
import HomeComponent from '../home/home';
import HeaderComponent from '../header/header';
import LoginComponent from '../login/login';
import NewPlaylistComponent from '../newPlaylist/newPlaylist';
import PlaylistComponent from '../playlist/playlist';
import SettingComponent from '../setting/setting';
import VideoComponent from '../video/video';

//Router-flux
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

interface Props {}

interface State {
    username: string;
}

class Routes extends React.Component<Props, State> {
   constructor(props: Props) {
     super(props);
     this.state = {
       username: '',
     };
   }
   changeInputValue = (e: { target: { value: any; }; }) => {
     this.setState({
       username: e.target.value,
     });
       Actions.home();
   }
    render() {
      return(
        <Router>
          <Scene key = 'root'>
            <Scene key = 'home' component = {HomeComponent} title = 'Home' />
            <Scene key = 'header' component = {HeaderComponent} title = 'Header' />
            <Scene key = 'login' component = {LoginComponent} title = 'Login' initial = {true} username={this.state.username} changeInputValue={(e: any) => {this.changeInputValue(e);}} />
            <Scene key = 'newPlaylist' component = {NewPlaylistComponent} title = 'New Playlist' />
            <Scene key = 'playlist' component = {PlaylistComponent} title = 'Playlist' />
            <Scene key = 'setting' component = {SettingComponent} title = 'Setting' />
            <Scene key = 'video' component = {VideoComponent} title = 'Video' />
          </Scene>
         </Router>
      );
    }
}
export default Routes;