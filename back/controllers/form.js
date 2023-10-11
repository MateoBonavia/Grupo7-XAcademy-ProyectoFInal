const { formService } = require('../services');

const createForm = async (req, res) => {
  try {
    const newForm = await formService.createForm(req.body);
    res.json(newForm);
  } catch (err) {
    res.status(500).json({ action: 'createForm', error: err.message });
  }
};

const getForm = async (req, res) => {
  try {
    console.log('Llegue al cotroller');
    const form = await formService.getForm(req.params.formId);

    if (!form) {
      res.status(404).json({ action: 'getForm', error: 'Form not found' });
    }
    res.json(form);
  } catch (err) {
    res.status(500).json({ action: 'getForm', error: err.message });
  }
};

const getAllForms = async (req, res) => {
  try {
    const forms = await formService.getAllForms();
    if (!forms) {
      res.status(404).json({ action: 'getAllForms', error: 'Forms not found' });
    }
    res.json(forms);
  } catch (err) {
    res.status(500).json({ action: 'getAllForms', error: err.message });
  }
};
module.exports = {
  createForm,
  getForm,
  getAllForms,
};
