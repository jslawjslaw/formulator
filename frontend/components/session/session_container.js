import { connect } from 'react-redux';
import Session from './session';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const loggedIn = state.session.currentUser ? true : false;
  return { loggedIn, errors: state.session.errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  let processForm;
  if (ownProps.location.pathname === '/login') {
    formType = 'login';
    processForm = (user) => ( dispatch(login(user)) );
  } else {
    formType = 'signup';
    processForm = (user) => ( dispatch(signup(user)) );
  }

  return { formType, processForm };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
