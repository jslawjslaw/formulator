import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormsReducer from './forms_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  forms: FormsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
