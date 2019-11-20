import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../../actions/actions';
import HeaderComponent from './header';

const mapStateToProps = (state: { username: string; userReducer: any}) => {
  console.log('state', state);
  return {
    username: state.userReducer.username,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addUserName }, dispatch),
    });
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default HeaderContainer;