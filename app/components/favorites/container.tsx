import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorites, removeFavorite } from '../../actions/actions';
import FavoritesComponent from './favorites';

const mapStateToProps = (state: {favorites: string[], favoritesReducer: any}) => {
  return {
    favorites: state.favoritesReducer.favorites,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addFavorites, removeFavorite }, dispatch),
    });
};

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesComponent);

export default FavoritesContainer;