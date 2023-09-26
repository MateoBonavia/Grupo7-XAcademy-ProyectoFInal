const { User } = require('../models/user');

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error('Error when creating User', err);
    throw err;
  }
};

const getUser = async (userId) => {
  try {
    // console.log(User);
    const user = await User.findByPk(userId, { include: { all: true } });
    return user;
  } catch (err) {
    console.error('Error when fetching User', err);
    throw err;
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await User.findAll({
      where: {
        email,
        password,
      },
    });
    if (user.length !== 0) {
      return user;
    }
    return false;
  } catch (err) {
    console.error('Error when validating User', err);
    return false;
  }
};

module.exports = { createUser, getUser, validateUser };
