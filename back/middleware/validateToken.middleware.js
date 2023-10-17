const jwt = require('jsonwebtoken');

const { SERVER_SECRET } = process.env;

function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization || req.query.token;

    if (!token) {
      res.status(401).send('Access denied');
    } else {
      jwt.verify(token, SERVER_SECRET, (err, user) => {
        if (err) {
          res.status(401).send('Access denied, token expired or incorrect'); // Unauthorized
        } else {
          req.user = user;
          next();
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { validateToken };
