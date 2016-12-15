export const createSubmission = (formId, values) => {
  return $.ajax({
    method: "POST",
    url: `/api/forms/${formId}/submissions`,
    data: { formId, values }
  });
};

export const fetchSubmissions = (formId) => {
  return $.ajax({
    method: "GET",
    url: `/api/forms/${formId}/submissions`
  });
}
