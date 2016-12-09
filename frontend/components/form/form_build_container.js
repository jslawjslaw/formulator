import { connect } from 'react-redux';
import FormBuilder from './form_builder';
import { logout } from '../../actions/session_actions';
import { fetchForm, updateForm, createForm } from '../../actions/form_actions';


const mapStateToProps = (state, ownProps) => {
  let formId;
  if (ownProps.params.id) {
    formId = parseInt(ownProps.params.id);
  }
  const userId = state.session.currentUser.id;
  return {
    formId,
    userId,
    router: ownProps.router,
    currentForm: state.forms.currentForm
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchForm: (id) => dispatch(fetchForm(id)),
    createForm: (form) => dispatch(createForm(form)),
    updateForm: (form) => dispatch(updateForm(form))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
