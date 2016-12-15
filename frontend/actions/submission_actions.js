import * as APIUtil from '../util/submission_api_util';

export function createSubmission(formId, values, router) {
  return (dispatch) => {
    APIUtil.createSubmission(formId, values);
    router.push('/submission');
  };
}
