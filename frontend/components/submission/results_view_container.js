import ResultsView from './results_view';
import { connect } from 'react-redux';
import { fetchSubmissions } from '../../actions/submission_actions';
import { fetchForm } from '../../actions/form_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, location) => {
  return {
    formId: location.params.formdId,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmissions: (formId) => dispatch(fetchSubmissions(formId)),
    fetchForm: (formId) => dispatch(fetchForm(formId)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsView);
