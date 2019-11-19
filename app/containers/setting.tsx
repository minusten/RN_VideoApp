import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../actions/actions';
import SettingComponent from '../components/setting/setting';

const mapStateToProps = (state: {username: string}) => {
  return {
    username: state.username,
  };
};
const mapDispatchToProps = dispatch => {
    return ({
        ...bindActionCreators({ addUserName }, dispatch),
    });
};

const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingComponent);

export default SettingContainer;