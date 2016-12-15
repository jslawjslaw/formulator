export const getAllForms = ({ forms }) => {
  let arrayForms = [];
  Object.keys(forms.allForms).forEach( (formId) => {
    const form = forms.allForms[formId];
    arrayForms.push(form);
  });

  return arrayForms;
}

export const removeFalse = (value) => {
  const newValue = [];
  value.forEach( (choice) => {
    if (choice !== false) {
      newValue.push(choice);
    } 
  });

  return newValue;
}
