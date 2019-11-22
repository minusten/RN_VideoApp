import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName, addGooglePhoto } from '../../actions/actions';
import HeaderComponent from './header';

const mapStateToProps = (state: { username: string; userReducer: any, photoReducer: any}) => {
  console.log('state', state);
  return {
    username: state.userReducer.username,
    photo: state.photoReducer.photo,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addUserName, addGooglePhoto }, dispatch),
    });
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default HeaderContainer;