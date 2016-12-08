export const receiveForm = (form) => {
  return $.ajax({
    method: "POST",
    url: "/api/forms",
    data: { form }
  });
};

export const fetchForms = () => {
  return $.ajax({
    method: "GET",
    url: "/api/forms"
  });
};

export const fetchForm = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/forms/${id}`
  });
};

export const makePrivate = (form) => {
  form.private = true;
  return $.ajax({
    method: "PATCH",
    url: `/api/forms/${form.id}`,
    data: { form }
  });
};

export const deleteForm = (formId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/forms/${formId}`
  });
};
