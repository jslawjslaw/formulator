import { connect } from 'react-redux';
import UserGeneratedForm from './user_generated_form';
import { fetchUserForm } from '../../actions/form_actions';
import { updateStateValues, clearStateValues } from '../../actions/field_actions';
import { createSubmission } from '../../actions/submission_actions';
import { checkPassword } from '../../actions/form_actions';

const mapStateToProps = (state, location) => {
  return {
    permanent_link: location.params.token,
    values: state.values,
    router: location.router,
    check: state.forms.passCheck
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserForm: (permanent_link) => dispatch(fetchUserForm(permanent_link)),
    updateStateValues: (field, value) => dispatch(updateStateValues(field, value)),
    clearStateValues: () => dispatch(clearStateValues()),
    createSubmission: (formId, values, router) => dispatch(createSubmission(formId, values, router)),
    checkPassword: (formId, password) => dispatch(checkPassword(formId, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGeneratedForm);
