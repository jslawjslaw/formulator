import { RECEIVE_VALUE, CLEAR_VALUES } from '../actions/field_actions';

const ValuesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VALUE:
      let newState = Object.assign([], state);
      newState = readyState(newState, action.field.ord);
      if (action.field.field_type === 'checkbox') {
        
      } else {
        newState.splice(action.field.ord, 1);
        newState.splice(action.field.ord, 0, action.value);
      }
      return newState;
    case CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

// adds necessary padding to array
function readyState(newState, ord) {
  if (newState.length <= ord) {
    const diff = ord + 1 - newState.length;
    for(let i = 0; i < diff; i++) {
      newState.push("");
    }
  }

  return newState;
}

export default ValuesReducer;
