import { connect } from 'react-redux';
import UserGeneratedForm from './user_generated_form';
import { fetchUserForm } from '../../actions/form_actions';

const mapStateToProps = (state, location) => {
  return {
    permanent_link: location.params.token
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserForm: (permanent_link) => dispatch(fetchUserForm(permanent_link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGeneratedForm);
