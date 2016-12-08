import { connect } from 'react-redux';
import FormManager from './form_manager';
import { createForm } from '../../actions/form_actions';
import { logout } from '../../actions/session_actions';
import { getAllForms } from '../../reducers/selectors';
import { fetchForms, deleteForm, makePrivate, fetchForm } from '../../actions/form_actions';

const mapStateToProps = (state, ownProps) => {
  return { forms: getAllForms(state), errors: state.errors, router: ownProps.router };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createForm: () => dispatch(createForm()),
    fetchForms: () => dispatch(fetchForms()),
    fetchForm: (id) => dispatch(fetchForm(id)),
    deleteForm: (id) => dispatch(deleteForm(id)),
    makePrivate: (id) => dispatch(makePrivate(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormManager);
