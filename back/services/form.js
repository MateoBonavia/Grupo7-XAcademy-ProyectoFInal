const { formProvider } = require('../providers');

const createForm = async (form) => formProvider.createForm(form);

const getForm = async (formId) => formProvider.getForm(formId);

const getAllForms = async () => formProvider.getAllForms();

module.exports = { createForm, getForm, getAllForms };
