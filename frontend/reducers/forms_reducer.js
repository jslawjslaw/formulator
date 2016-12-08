import { RECEIVE_FORMS, RECEIVE_FORM, RECEIVE_ERRORS } from '../actions/form_actions';
import merge from 'lodash/merge';

const _nullForms = Object.freeze({
  allForms: {},
  currentForm: {},
  errors: []
});

const FormsReducer = (state = _nullForms, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FORM:
      const currentForm = action.currentForm;
      newState = Object.assign({}, state);
      return merge({}, _nullForms, { currentForm, allForms: newState.allForms });
    case RECEIVE_FORMS:
      const allForms = action.forms;
      return merge({}, _nullForms, { allForms });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullForms, { errors });
    default:
      return state;
  }
};

export default FormsReducer;
