import { connect } from 'react-redux';
import UserGeneratedForm from './user_generated_form';
import { fetchUserForm } from '../../actions/form_actions';
import { updateStateValues, clearStateValues } from '../../actions/field_actions';
import { createSubmission } from '../../actions/submission_actions';
import { checkPassword, setPassCheck } from '../../actions/form_actions';

const mapStateToProps = (state, location) => {
  let error = "";
  if (state.errors.length) error = state.errors[0];
  return {
    permanent_link: location.params.token,
    values: state.values,
    router: location.router,
    isOpen: state.forms.passCheck,
    error
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserForm: (permanent_link) => dispatch(fetchUserForm(permanent_link)),
    updateStateValues: (field, value) => dispatch(updateStateValues(field, value)),
    clearStateValues: () => dispatch(clearStateValues()),
    createSubmission: (formId, values, router) => dispatch(createSubmission(formId, values, router)),
    checkPassword: (formId, password) => dispatch(checkPassword(formId, password)),
    setIsOpen: (bool) => dispatch(setPassCheck(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGeneratedForm);
