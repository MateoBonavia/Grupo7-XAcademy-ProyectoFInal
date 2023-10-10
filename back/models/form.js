const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/files/sequelize.config');

const Form = sequelize.define('Forms', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncremet: true,

  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  procedencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acompañamiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medioConocimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motivoEleccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tieneReserva: {
    type: DataTypes.BOOLEAN,
  },
  tipoHospedaje: {
    type: DataTypes.STRING,
  },
  calidadReserva: {
    type: DataTypes.STRING,
  },
  recibioInfoReserva: {
    type: DataTypes.STRING,
  },
  pidioInformacion: {
    type: DataTypes.BOOLEAN,
  },
  oficinaInformacion: {
    type: DataTypes.STRING,
  },
  tipoInformacionPedida: {
    type: DataTypes.STRING,
  },
  medioPedidoInformacion: {
    type: DataTypes.STRING,
  },
  tipoMaterialEntregado: {
    type: DataTypes.STRING,
  },
  calidadServicioOficina: {
    type: DataTypes.STRING,
  },
  recibioInfoExtra: {
    type: DataTypes.BOOLEAN,
  },
  tipoInfoExtra: {
    type: DataTypes.STRING,
  },
  destinoCompleto: {
    type: DataTypes.STRING,
  },
  recomendaria: {
    type: DataTypes.STRING,
  },
});

module.exports = Form;
