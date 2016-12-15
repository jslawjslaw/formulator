import * as APIUtil from '../util/submission_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SUBMISSIONS = "RECEIVE_SUBMISSIONS";

export const receiveSubmissions = (submissions) => {
  return {
    type: RECEIVE_SUBMISSIONS,
    submissions
  };
}

export function createSubmission(formId, values, router) {
  return (dispatch) => {
    APIUtil.createSubmission(formId, values);
    router.push('/submission');
  };
}

export function fetchSubmissions(formId) {
  return (dispatch) => {
    return APIUtil.fetchSubmissions(formId).then(
      (submissions) => dispatch(receiveSubmissions(submissions)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
