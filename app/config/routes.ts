import * as reactNavigation from 'react-navigation';
import LoginComponent from '../components/login/login';
import HomeComponent from '../components/home/home';
import HeaderComponent from '../components/header/header';
import PlaylistComponent from '../components/playlist/playlist';
import SettingComponent from '../components/setting/setting';

const AppNavigator = reactNavigation.createStackNavigator(
  {
    LoginComponent: {
      screen: LoginComponent,
    },
    HomeComponent: {
      screen: HomeComponent,
    },
    HeaderComponent: {
      screen: HeaderComponent,
    },
    PlaylistComponent: {
      screen: PlaylistComponent,
    },
    SettingComponent: {
      screen: SettingComponent,
    },
  },
  {
    initialRouteName: 'LoginComponent',
  }
);

export default reactNavigation.createAppContainer(AppNavigator);
