export const getAllForms = ({ forms }) => {
  return Object.keys(forms).map(id => forms[id]);
}
