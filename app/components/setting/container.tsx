import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserName, addGooglePhoto } from '../../actions/actions';
import SettingComponent from './setting';

const mapStateToProps = (state: {username: string}) => {
  return {
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return ({
        ...bindActionCreators({ addUserName, addGooglePhoto }, dispatch),
    });
};

const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingComponent);

export default SettingContainer;