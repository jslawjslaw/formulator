import ResultsView from './results_view';
import { connect } from 'react-redux';
import { fetchSubmissions } from '../../actions/submission_actions';
import { fetchForm } from '../../actions/form_actions';

const mapStateToProps = (state, location) => {
  return {
    formId: location.params.formdId,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmissions: (formId) => dispatch(fetchSubmissions(formId)),
    fetchForm: (formId) => dispatch(fetchForm(formId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsView);
