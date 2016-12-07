import * as APIUtil from '../util/form_api_util';

export const RECEIVE_FORM = "RECEIVE_FORMS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveForm = form => {
  return {
    type: RECEIVE_FORM,
    form
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
