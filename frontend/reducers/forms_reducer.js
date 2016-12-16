import { RECEIVE_FORMS, RECEIVE_FORM, PASS_CHECK } from '../actions/form_actions';
import { RECEIVE_FIELDS, RECEIVE_FIELD, RECEIVE_STATE_FIELD } from '../actions/field_actions';
import merge from 'lodash/merge';

const _nullForms = Object.freeze({
  allForms: {},
  currentForm: { fields: [] },
  passCheck: false
});

const FormsReducer = (state = _nullForms, action) => {
  Object.freeze(state);
  let newState;
  let newCurrentForm;
  switch(action.type) {
    case RECEIVE_FORM:
      const currentForm = action.currentForm;
      newState = Object.assign({}, state);
      return merge({}, _nullForms, { currentForm, allForms: newState.allForms });
    case RECEIVE_FORMS:
      const allForms = action.forms;
      return merge({}, _nullForms, { allForms });
    case RECEIVE_FIELD:
      newState = Object.assign({}, state);
      newState.currentForm.fields.push(action.field);
      return newState;
    case RECEIVE_FIELDS:
      newState = Object.assign({}, state);
      newCurrentForm = Object.assign({}, newState.currentForm);
      newCurrentForm.fields = orderFields(action.fields);
      newState.currentForm = newCurrentForm;
      return newState;
    case RECEIVE_STATE_FIELD:
      newState = Object.assign({}, state);
      newCurrentForm = Object.assign({}, newState.currentForm);
      newCurrentForm.fields.splice(action.field.ord, 1);
      newCurrentForm.fields.splice(action.field.ord, 0, action.field);
      newState.currentForm = newCurrentForm;
      return newState;
    case PASS_CHECK:
      newState = Object.assign({}, state);
      newState.passCheck = action.check;
      return newState;
    default:
      return state;
  }
};

function orderFields(fields) {
  const orderedFields = new Array(fields.length);
  fields.forEach( (field) => {
    orderedFields[field.ord] = field;
  });

  return orderedFields;
}

export default FormsReducer;
