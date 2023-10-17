// eslint-disable-next-line consistent-return

const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

const { SERVER_SECRET } = process.env;

router.post('/', (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      res.status(400).send('Token not provided');
    } else {
      jwt.verify(token, SERVER_SECRET, (err) => {
        if (err) {
          res.status(401).send(false);
        } else {
          res.status(200).send(true);
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
