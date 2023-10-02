const { Form } = require('../models/form');

const createForm = async (form) => {
  try {
    const newForm = await Form.create(form);
    return newForm;
  } catch (err) {
    console.error('Error when creating Form', err);
    throw err;
  }
};

const getForm = async (formId) => {
  try {
    const form = await Form.findByPk(formId, { include: { all: true } });
    return form;
  } catch (err) {
    console.error('Error when fetching Form', err);
    throw err;
  }
};

const getAllForms = async () => {
  try {
    const form = await Form.findAll();
    if (form.length !== 0) {
      return form;
    }
    return false;
  } catch (err) {
    console.error('Error when get all forms', err);
    return false;
  }
};

module.exports = { createForm, getForm, getAllForms };
