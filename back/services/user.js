const { userProvider } = require('../providers');

const createUser = async (user) => userProvider.createUser(user);

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    console.log(user.user);
  }
  return userProvider.getUser(userId);
};

const validateUser = async (user, pass) => {
  const userFound = await userProvider.validateUser(user, pass);
  return userFound;
};

module.exports = { createUser, getUser, validateUser };
