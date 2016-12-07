export const receiveForm = (form) => {
  return $.ajax({
    method: "POST",
    url: "/api/forms",
    data: { form }
  });
};
