import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../actions/actions';
import HeaderComponent from '../components/header/header';

const mapStateToProps = (state: { username: string; }) => {
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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default HeaderContainer;