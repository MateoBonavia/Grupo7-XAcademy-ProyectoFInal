// Definir rutas de la aplicacion

const express = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middleware/validateToken.middleware');

const router = express.Router();

router.get('/hi', (req, res) => {
  res.send('Hola desde user');
});
router.get('/', validateToken, userController.getAllUsers);
router.get('/:userId', validateToken, userController.getUser);
router.post('/', validateToken, userController.createUser);

module.exports = router;
