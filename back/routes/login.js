/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const { userService } = require("../services");

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const userFound = await userService.validateUser(email, password);
  if (userFound) {
    const token = jwt.sign({ email, role: 'Admin' }, authMiddleware.SERVER_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid User" });
  }
});

module.exports = router;
