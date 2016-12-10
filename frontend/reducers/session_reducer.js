import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initState = {
  currentUser: null
};

const SessionReducer = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default SessionReducer;
