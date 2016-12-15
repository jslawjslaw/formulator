export const createSubmission = (formId, values) => {
  return $.ajax({
    method: "POST",
    url: `/api/forms/${formId}/submissions`,
    data: { formId, values }
  });
};

export const deleteSubmission = (formId, submissionId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/forms/${formId}/submissions/${submissionId}`
  });
}
