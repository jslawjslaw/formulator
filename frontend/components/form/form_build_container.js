import { connect } from 'react-redux';
import FormBuilder from './form_builder';
import { logout } from '../../actions/session_actions';
import { fetchForm } from '../../actions/form_actions';


const mapStateToProps = (state, ownProps) => {
  const formId = parseInt(ownProps.params.id);
  return {
    formId,
    router: ownProps.router,
    currentForm: state.forms.currentForm
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchForm: (id) => dispatch(fetchForm(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
