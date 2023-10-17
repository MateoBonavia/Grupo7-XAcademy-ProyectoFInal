const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth.middleware');
const { userService } = require('../services');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const userFound = await userService.validateUser(email, password);
  if (userFound) {
    const token = jwt.sign({ email, role: 'Admin' }, authMiddleware.SERVER_SECRET);
    res.header('authorization', token).json({ message: 'Usuario logeado', token });
  } else {
    res.status(401).json({ error: 'Invalid User' });
  }
});

module.exports = router;
