const { formProvider } = require('../providers');

const createForm = async (form) => formProvider.createForm(form);

const getForm = async (formId) => {
  const form = await formProvider.getForm(formId);
  if (form) {
    console.log(form);
  }
  return formProvider.getForm(formId);
};

const getAllForms = async () => {
  const formsFound = await formProvider.getAllForms();
  return formsFound;
};

module.exports = { createForm, getForm, getAllForms };
