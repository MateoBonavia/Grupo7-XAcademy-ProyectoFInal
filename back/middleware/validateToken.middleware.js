// eslint-disable-next-line consistent-return

const jwt = require('jsonwebtoken');

const { SERVER_SECRET } = process.env;

function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization || req.query.token;

    if (!token) {
      return res.status(401).send('Access denied');
    }

    jwt.verify(token, SERVER_SECRET, (err, user) => {
      if (err) {
        return res.status(401).send('Access denied, token expired or incorrect'); // Unauthorized
      }
      req.user = user;
      return next();
    });
    return res.status(404).send('Token not found');
  } catch (err) {
    return err;
  }
}

module.exports = { validateToken };
