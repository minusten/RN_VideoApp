import React from 'react';

//Components
import HomeComponent from '../home/home';
import NewPlaylistComponent from '../newPlaylist/newPlaylist';
import PlaylistComponent from '../playlist/playlist';
import SettingComponent from '../setting/setting';
import VideoComponent from '../video/video';
import FavoritesComponent from '../favorites/favorites';

//Router-flux
import { Router, Scene } from 'react-native-router-flux';

//Redux containers
import LoginContainer from '../../containers/login';
import HeaderContainer from '../../containers/header';
import { View } from 'react-native';

//Font
import Crimson from '../../assets/fonts/CrimsonText-Regular.ttf';
import CrimsonItalic from '../../assets/fonts/CrimsonText-Italic.ttf';
import NewPlaylistContainer from '../../containers/newPlaylist';

interface Props {}

class Routes extends React.Component<Props> {
    render() {
      return(
        <Router>
          <Scene key = 'root' navigationBarStyle={{ backgroundColor: '#00a4db', height: 25}} >
            <Scene key = 'home' component = {HomeComponent} title = 'Home' hideNavBar={true}/>
            <Scene key = 'header' component = {HeaderContainer} title = 'Header' hideNavBar={true}/>
            <Scene key = 'login' component = {LoginContainer} title = '' initial = {true}  />
            <Scene key = 'newPlaylist' component = {NewPlaylistContainer} title = 'New Playlist' hideNavBar={true}/>
            <Scene key = 'playlist' component = {PlaylistComponent} title = 'Playlist' hideNavBar={true}/>
            <Scene key = 'setting' component = {SettingComponent} title = 'Setting' hideNavBar={true}/>
            <Scene key = 'video' component = {VideoComponent} title = 'Video' hideNavBar={true}/>
            <Scene key = 'favorites' component = {FavoritesComponent} title = 'Favorites video' hideNavBar={true} />
          </Scene>
         </Router>
      );
    }
}
export default Routes;