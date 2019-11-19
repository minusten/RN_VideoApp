import * as reactRedux from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlaylist } from '../actions/actions';
import NewPlaylistComponent from '../components/newPlaylist/newPlaylist';
import { AppState } from 'react-native';

const mapStateToProps = (state: { playlist: string[]; }) => {
  console.log('state', state);
  return {
    playlist: state.playlist,
  };
};
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ addPlaylist }, dispatch),
});

const NewPlaylistContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistComponent);

export default NewPlaylistContainer;