const express = require('express');
const { formController } = require('../controllers');

const router = express.Router();

router.get('/hi', (req, res) => {
  res.send('Hola desde form');
});
router.get('/', formController.getAllForms);
router.get('/:formId', formController.getForm);
router.post('/', formController.createForm);

module.exports = router;
