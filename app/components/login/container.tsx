import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName, addGooglePhoto } from '../../actions/actions';
import LoginComponent from './login';

const mapStateToProps = (state: {username: string, photo: string}) => {
  return {
    username: state.username,
    photo: state.photo,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addUserName, addGooglePhoto }, dispatch),
    });
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;