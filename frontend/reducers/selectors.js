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

export const orderFields = (fields) => {
  const orderedFields = new Array(fields.length);
  fields.forEach( (field) => {
    orderedFields[field.ord] = field;
  });

  return orderedFields;
}

// adds necessary padding to array
export const readyState = (newState, ord) => {
  if (newState.length <= ord) {
    const diff = ord + 1 - newState.length;
    for(let i = 0; i < diff; i++) {
      newState.push("");
    }
  }

  return newState;
}
