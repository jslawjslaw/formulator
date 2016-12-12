import * as APIUtil from '../util/field_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_FIELD = "RECEIVE_FIELD";
export const RECEIVE_FIELDS = "RECEIVE_FIELDS";

export const receiveField = field => {
  return {
    type: RECEIVE_FIELD,
    field
  };
};

export const receiveFields = fields => {
  return {
    type: RECEIVE_FORMS,
    fields
  };
};

export function createField(field, formId) {
  return (dispatch) => {
    return APIUtil.createField(field, formId).then(
      (field) => dispatch(receiveField(field)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function updateField(field, formId) {
  return (dispatch) => {
    return APIUtil.updateField(field, formId).then(
      (field) => dispatch(receiveField(field)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function deleteField(fieldId, formId) {
  return (dispatch) => {
    return APIUtil.deleteField(fieldId, formId).then(
      (fields) => dispatch(receiveFields(fields)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
