import { RECEIVE_FORM, RECEIVE_ERRORS } from '../actions/form_actions';
import merge from 'lodash/merge';

const FormsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FORM:
      const newForm = { [action.form.id]: action.form, errors: [] };
      return merge({}, newForm);
    case RECEIVE_ERRORS:
      return { forms: null, errors: action.errors };
    default:
      return state;
  }
};

export default FormsReducer;
