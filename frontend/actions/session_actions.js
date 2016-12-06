import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = currentUser => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};


export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
