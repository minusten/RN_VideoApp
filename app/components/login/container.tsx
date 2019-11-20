import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../../actions/actions';
import LoginComponent from './login';

const mapStateToProps = (state: {username: string}) => {
  return {
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addUserName }, dispatch),
    });
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;