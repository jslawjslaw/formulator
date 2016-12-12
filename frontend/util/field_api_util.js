export const createField = (field, formId) => {
  return $.ajax({
    method: "POST",
    url: `/api/forms/${formId}/fields`,
    data: { field }
  });
};

export const updateField = (field, formId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/forms/${formId}/fields/${field.id}`,
    data: { field }
  });
};

export const deleteField = (fieldId, formId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/forms/${formId}/fields/${field.id}`
  });
}
