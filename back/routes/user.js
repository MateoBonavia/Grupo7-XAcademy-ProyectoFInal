// Definir rutas de la aplicacion

const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:userId', userController.getUser);

module.exports = router;
