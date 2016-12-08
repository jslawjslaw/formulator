import * as APIUtil from '../util/form_api_util';

export const RECEIVE_FORM = "RECEIVE_FORM";
export const RECEIVE_FORMS = "RECEIVE_FORMS";
export const DELETE_FORM = "DELETE_FORM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveForm = currentForm => {
  return {
    type: RECEIVE_FORM,
    currentForm
  };
};

export const receiveForms = forms => {
  return {
    type: RECEIVE_FORMS,
    forms
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export function createForm(form) {
  return (dispatch) => {
    return APIUtil.receiveForm(form).then(
      (form) => dispatch(receiveForm(form)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function deleteForm(form) {
  return (dispatch) => {
    return APIUtil.deleteForm(form).then(
      (forms) => dispatch(receiveForms(forms)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function makePrivate(form) {
  return (dispatch) => {
    return APIUtil.makePrivate(form).then(
      (forms) => dispatch(receiveForms(forms)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function fetchForms() {
  return (dispatch) => {
    return APIUtil.fetchForms().then(
      (forms) => dispatch(receiveForms(forms)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function fetchForm(id) {
  return(dispatch) => {
    return APIUtil.fetchForm(id).then(
      (form) => dispatch(receiveForm(form)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
