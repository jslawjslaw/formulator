import { connect } from 'react-redux';
import UserGeneratedForm from './user_generated_form';
import { fetchUserForm } from '../../actions/form_actions';
import { updateStateValues, clearStateValues } from '../../actions/field_actions';

const mapStateToProps = (state, location) => {
  return {
    permanent_link: location.params.token,
    values: state.values
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserForm: (permanent_link) => dispatch(fetchUserForm(permanent_link)),
    updateStateValues: (field, value) => dispatch(updateStateValues(field, value)),
    clearStateValues: () => dispatch(clearStateValues())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGeneratedForm);
