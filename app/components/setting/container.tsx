import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName } from '../../actions/actions';
import SettingComponent from './setting';

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

const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingComponent);

export default SettingContainer;