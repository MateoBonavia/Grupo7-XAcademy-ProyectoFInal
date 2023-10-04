const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ action: 'createUser', error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res.status(404).json({ action: 'getUser', error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: 'getUser', error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      res.status(404).json({ action: 'getAllUsers', error: 'Users not found' });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ action: 'getAllUsers', error: err.message });
  }
};
module.exports = {
  createUser,
  getUser,
  getAllUsers,
};
