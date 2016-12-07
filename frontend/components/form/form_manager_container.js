import { connect } from 'react-redux';
import FormManager from './form_manager';
import { createForm } from '../../actions/form_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { forms: state.forms, errors: state.forms.errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createForm: () => dispatch(createForm()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormManager);
