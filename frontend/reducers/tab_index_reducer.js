import { RECEIVE_INDEX } from '../actions/tab_actions';

const TabIndexReducer = (state = 0, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INDEX:
      return action.index;
    default:
      return state;
  }
};

export default TabIndexReducer;
