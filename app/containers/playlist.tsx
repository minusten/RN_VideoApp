import * as reactRedux from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlaylist, removePlaylist } from '../actions/actions';
import PlaylistComponent from '../components/playlist/playlist';

const mapStateToProps = (state: { playlist: string[]; }) => {
  console.log('state', state);
  return {
    playlist: state.playlistReducer.playlist,
  };
};
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ addPlaylist, removePlaylist }, dispatch),
});

const PlaylistContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistComponent);

export default PlaylistContainer;