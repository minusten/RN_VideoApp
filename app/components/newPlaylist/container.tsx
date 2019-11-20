import * as reactRedux from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlaylist } from '../../actions/actions';
import NewPlaylistComponent from './newPlaylist';

const mapStateToProps = (state: { playlist: string[]; playlistReducer: any}) => {
  return {
    playlist: state.playlistReducer.playlist,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({ addPlaylist }, dispatch),
});

const NewPlaylistContainer = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistComponent);

export default NewPlaylistContainer;