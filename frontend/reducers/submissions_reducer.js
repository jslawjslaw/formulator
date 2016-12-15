import { RECEIVE_SUBMISSIONS } from '../actions/submission_actions';

const SubmissionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SUBMISSIONS:
      return action.submissions
    default:
      return state;
  }
};

export default SubmissionsReducer;
