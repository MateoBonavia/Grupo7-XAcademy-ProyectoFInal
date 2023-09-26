// Definir rutas de la aplicacion

const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola desde user');
});
router.get('/:userId', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;
