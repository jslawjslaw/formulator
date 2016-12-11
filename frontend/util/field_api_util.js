export const createField = (field) => {
  return $.ajax({
    method: "POST",
    url: `/api/forms/${formId}/fields`,
    data: { field }
  });
};
