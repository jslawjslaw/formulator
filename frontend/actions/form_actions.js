import * as APIUtil from '../util/form_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_FORM = "RECEIVE_FORM";
export const RECEIVE_FORMS = "RECEIVE_FORMS";

export const receiveForm = (currentForm, router) => {
  return {
    type: RECEIVE_FORM,
    currentForm,
    router
  };
};

export const receiveForms = forms => {
  return {
    type: RECEIVE_FORMS,
    forms
  };
};

//
export function createForm(form, router) {
  return (dispatch) => {
    return APIUtil.createForm(form).then(
      (form) => dispatch(receiveForm(form, router)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

// This is an update when I'm on the form builder page
// This needs to receive a single form
export function updateForm(form) {
  return (dispatch) => {
    return APIUtil.updateForm(form).then(
      (form) => dispatch(receiveForm(form)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function updateStateForm(form) {
  return (dispatch) => {
    dispatch(receiveForm(form));
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
export function makePrivateOrPublic(form, render) {
  return (dispatch) => {
    return APIUtil.updateForm(form, render).then(
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
