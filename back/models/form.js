const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/files/sequelize.config');

const Form = sequelize.define('Forms', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  edadTurista: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sexoTurista: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acompañantes: {
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
  recibioInformacionAdicional: {
    type: DataTypes.BOOLEAN,
  },
  informacionAdicionalRecibida: {
    type: DataTypes.STRING,
  },
  consideraDestinoCompleto: {
    type: DataTypes.STRING,
  },
  recomendariaDestino: {
    type: DataTypes.STRING,
  },
});

module.exports = Form;
