import { connect } from 'react-redux';
import FormBuilder from './form_builder';
import { logout } from '../../actions/session_actions';
import { fetchForm, updateForm, createForm, updateStateForm } from '../../actions/form_actions';
import { createField, updateField, deleteField, changeFieldIndex, updateStateField } from '../../actions/field_actions';
import { changeTabIndex } from '../../actions/tab_actions';

const mapStateToProps = (state) => {
  let userId;
  if (state.session.currentUser) {
    userId = state.session.currentUser.id;
  } else {
    userId = null;
  }
  return {
    userId,
    fieldIndex: state.fieldIndex,
    tabIndex: state.tabIndex,
    currentForm: state.forms.currentForm,
    errors: state.forms.errors
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchForm: (id) => dispatch(fetchForm(id)),
    createForm: (form, router) => dispatch(createForm(form, router)),
    updateForm: (form) => dispatch(updateForm(form)),
    createField: (field) => dispatch(createField(field)),
    updateField: (field) => dispatch(updateField(field)),
    deleteField: (field) => dispatch(deleteField(field)),
    changeFieldIndex: (index) => dispatch(changeFieldIndex(index)),
    changeTabIndex: (index) => dispatch(changeTabIndex(index)),
    updateStateForm: (form) => dispatch(updateStateForm(form)),
    updateStateField: (field) => dispatch(updateStateField(field))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
