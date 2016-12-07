import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const initState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
    case CLEAR_ERRORS:
      return { currentUser: action.currentUser, errors: [] };
    default:
      return state;
  }
};

export default SessionReducer;
