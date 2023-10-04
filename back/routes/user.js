// Definir rutas de la aplicacion

const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/hi', (req, res) => {
  res.send('Hola desde user');
});
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;
