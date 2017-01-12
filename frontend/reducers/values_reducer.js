import { RECEIVE_VALUE, CLEAR_VALUES } from '../actions/field_actions';
import { readyState } from './selectors';

const ValuesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VALUE:
      let newState = Object.assign([], state);
      newState = readyState(newState, action.field.ord);
      newState.splice(action.field.ord, 1);
      newState.splice(action.field.ord, 0, action.value);
      return newState;
    case CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export default ValuesReducer;
