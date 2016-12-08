import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormsReducer from './forms_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  forms: FormsReducer
});

export default rootReducer;
