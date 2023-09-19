const { userProvider } = require('../providers');

const createUser = async (user) => userProvider.createUser(user);

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    console.log(user.user);
  }
  return userProvider.getUser(userId);
};

const validateUser = async (email, password) => {
  const userFound = await userProvider.validateUser(email, password);
  return userFound;
};

module.exports = { createUser, getUser, validateUser };
