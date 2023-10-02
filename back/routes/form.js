const express = require('express');
const { formController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hola desde form');
  res.send(formController.getAllForms);
});
router.get('/:formId', formController.getForm);
router.post('/', formController.createForm);

module.exports = router;
