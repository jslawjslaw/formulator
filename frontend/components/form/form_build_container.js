import { connect } from 'react-redux';
import FormBuilder from './form_builder';
import { logout } from '../../actions/session_actions';
import { fetchForm, updateForm, createForm } from '../../actions/form_actions';
import { createField, updateField, deleteField } from '../../actions/field_actions';

const mapStateToProps = (state, ownProps) => {
  let formId;
  if (ownProps.params.id) {
    formId = parseInt(ownProps.params.id);
  }
  const userId = state.session.currentUser.id;
  const panes = ['formSettings', 'addField' ];

  return {
    formId,
    userId,
    panes,
    router: ownProps.router,
    currentForm: state.forms.currentForm,
    errors: state.forms.errors
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchForm: (id) => dispatch(fetchForm(id)),
    createForm: (form) => dispatch(createForm(form)),
    updateForm: (form) => dispatch(updateForm(form)),
    createField: (field, formId) => dispatch(createField(field, formId)),
    updateField: (field, formId) => dispatch(updateField(field, formId)),
    deleteField: (fieldId, formId) => dispatch(deleteField(fieldId, formId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
