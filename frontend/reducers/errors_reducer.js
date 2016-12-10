import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const FormsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default FormsReducer;
