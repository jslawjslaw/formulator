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
