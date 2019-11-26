import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorites } from '../../actions/actions';
import VideoComponent from './video';

const mapStateToProps = (state: {favorites: string[], favoritesReducer: any}) => {
  return {
    favorites: state.favorites,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addFavorites }, dispatch),
    });
};

const VideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoComponent);

export default VideoContainer;