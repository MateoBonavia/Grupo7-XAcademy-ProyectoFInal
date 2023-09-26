const Sequelize = require('sequelize');
const logger = require('../../utils/winston.logger');

const sequelizeOptions = {
  logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  operatorsAliases: '0',
  timezone: '-03:00',
  dialectOptions: {
    timezone: '-03:00',
    dateStrings: true,
    typeCast: true,
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // Drop table if true
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Hubo un error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
