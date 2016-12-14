import * as APIUtil from '../util/field_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_FIELD = "RECEIVE_FIELD";
export const RECEIVE_FIELDS = "RECEIVE_FIELDS";
export const RECEIVE_FIELD_INDEX = "RECEIVE_FIELD_INDEX";
export const RECEIVE_STATE_FIELD = "RECEIVE_STATE_FIELD";

export const receiveField = field => {
  return {
    type: RECEIVE_FIELD,
    field
  };
};

export const receiveFields = fields => {
  return {
    type: RECEIVE_FIELDS,
    fields
  };
};

export const receiveFieldIndex = index => {
  return {
    type: RECEIVE_FIELD_INDEX,
    index
  };
};

export const receiveStateField = field => {
  return {
    type: RECEIVE_STATE_FIELD,
    field
  };
};


export function changeFieldIndex(index) {
  return (dispatch) => {
    dispatch(receiveFieldIndex(index));
  };
}

export function updateStateField(field) {
  return (dispatch) => {
    dispatch(receiveStateField(field));
  };
}


export function createField(field) {
  return (dispatch) => {
    return APIUtil.createField(field).then(
      (field) => dispatch(receiveField(field)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function updateField(field) {
  return (dispatch) => {
    return APIUtil.updateField(field).then(
      (fields) => dispatch(receiveFields(fields)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function deleteField(field) {
  return (dispatch) => {
    return APIUtil.deleteField(field).then(
      (fields) => dispatch(receiveFields(fields)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
