import { RECEIVE_FIELD_INDEX } from '../actions/field_actions';

const FieldIndexReducer = (state = 0, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FIELD_INDEX:
      return action.index;
    default:
      return state;
  }
};

export default FieldIndexReducer;
