import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormsReducer from './forms_reducer';
import ErrorsReducer from './errors_reducer';
import FieldIndexReducer from './field_index_reducer';
import TabIndexReducer from './tab_index_reducer';
import ValueReducer from './values_reducer';
import SubmissionsReducer from './submissions_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  forms: FormsReducer,
  errors: ErrorsReducer,
  fieldIndex: FieldIndexReducer,
  tabIndex: TabIndexReducer,
  values: ValueReducer,
  submissions: SubmissionsReducer
});

export default rootReducer;
