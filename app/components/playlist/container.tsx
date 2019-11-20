import * as reactRedux from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlaylist, removePlaylist } from '../../actions/actions';
import PlaylistComponent from './playlist';

const mapStateToProps = (state: { playlist: string[]; playlistReducer: any}) => {
  return {
    playlist: state.playlistReducer.playlist,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({ addPlaylist, removePlaylist }, dispatch),
});

const PlaylistContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistComponent);

export default PlaylistContainer;