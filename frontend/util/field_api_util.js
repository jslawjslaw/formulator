export const createField = (field) => {
  return $.ajax({
    method: "POST",
    url: `/api/forms/${field.form_id}/fields`,
    data: { field }
  });
};

export const updateField = (field) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/forms/${field.form_id}/fields/${field.id}`,
    data: { field }
  });
};

export const updateFields = (field1, field2) => {
  return $.ajax({
    method: "PATCH",
    url: "api/fields/update_field_ords",
    data: { field1, field2 }
  });
}

export const deleteField = (field) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/forms/${field.form_id}/fields/${field.id}`
  });
}
