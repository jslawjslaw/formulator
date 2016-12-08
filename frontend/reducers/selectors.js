var merge = require('lodash.merge');

export const getAllForms = ({ forms }) => {
  let arrayForms = [];
  Object.keys(forms.allForms).forEach( (formId) => {
    const form = forms.allForms[formId];
    arrayForms.push(form);
  });

  return arrayForms;
}
