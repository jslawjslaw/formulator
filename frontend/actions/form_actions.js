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
    return APIUtil.createForm(form).then(
      (form) => dispatch(receiveForm(form)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

// this is an update when I'm on the form builder page
// this needs to receive a single form
export function updateForm(form) {
  return (dispatch) => {
    return APIUtil.updateForm(form).then(
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

// This is an update when I'm on the form manager page
// This needs to receive all the forms (because I'm on the user's index page)
export function makePrivate(form) {
  return (dispatch) => {
    return APIUtil.updateForm(form).then(
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
