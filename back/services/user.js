const { userProvider } = require('../providers');

const createUser = async (user) => userProvider.createUser(user);

const getUser = async (userId) => userProvider.getUser(userId);

const getAllUsers = async () => userProvider.getAllUsers();

const validateUser = async (email, password) => userProvider.validateUser(email, password);

module.exports = {
  createUser, getUser, getAllUsers, validateUser,
};
