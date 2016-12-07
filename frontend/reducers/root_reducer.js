import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  forms: FormReducer
});

export default rootReducer;
