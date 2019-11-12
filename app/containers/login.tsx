import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../actions/actions';
import LoginComponent from '../components/login/login';
// import { UserState } from '../actions/types';

const mapStateToProps = (state: {username: any}) => {
  console.log('state', state);
  return {
    username: state.username,
  };
};
const mapDispatchToProps = dispatch => {
    return ({
        ...bindActionCreators({ addUserName }, dispatch),
    });
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;