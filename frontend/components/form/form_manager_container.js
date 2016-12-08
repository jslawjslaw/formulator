import { connect } from 'react-redux';
import FormManager from './form_manager';
import { createForm } from '../../actions/form_actions';
import { logout } from '../../actions/session_actions';
import { getAllForms } from '../../reducers/selectors';
import { fetchForms } from '../../actions/form_actions';

const mapStateToProps = (state) => {
  return { forms: getAllForms(state), errors: state.forms.errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createForm: () => dispatch(createForm()),
    fetchForms: () => dispatch(fetchForms()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormManager);
