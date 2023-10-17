const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

const { SERVER_SECRET } = process.env;

router.post('/', async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(404).send('Token not found');
  }
  jwt.verify(token, SERVER_SECRET, (err) => {
    if (err) {
      return res.status(404).send(false);
    }
    return res.status(201).send(true);
  });

  return res.status(404).send('Token not found');
});

module.exports = router;
