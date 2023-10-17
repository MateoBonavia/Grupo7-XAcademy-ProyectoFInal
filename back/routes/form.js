const express = require('express');
const { formController } = require('../controllers');
const { validateToken } = require('../middleware/validateToken.middleware');

const router = express.Router();

router.get('/hi', validateToken, (req, res) => {
  res.json({ saludo: 'Hola desde form', user: req.user });
});
router.get('/', validateToken, formController.getAllForms);
router.get('/:formId', validateToken, formController.getForm);
router.post('/', formController.createForm);

module.exports = router;
