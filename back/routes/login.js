/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const { userService } = require("../services");

router.get("/", async (req, res) => {
  const { user, pass } = req.body;
  const userFound = await userService.validateUser(user, pass);
  if (userFound) {
    const token = jwt.sign(
      { user, role: "User" },
      // eslint-disable-next-line comma-dangle
      authMiddleware.SERVER_SECRET
    );
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid User" });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Hola aaa");
    const hola = "Hola en Insomnia";
    res.send(hola);
    console.log("chau");
    res.end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
