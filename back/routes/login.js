const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth.middleware');
const { userService } = require('../services');

router.post('/', async (req, res) => {
  const { user, pass } = req.body;
  const userFound = await userService.validateUser(user, pass);
  if (userFound) {
    const token = jwt.sign({ user, role: 'User' }, authMiddleware.SERVER_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid User' });
  }
});

module.exports = router;
