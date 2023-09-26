const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/files/sequelize.config');

const Cuestionario = sequelize.define('Cuestionarios', {
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
  procedencia: {
    cuidad: {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    provincia: {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    pais: {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
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
  hospedaje: {
    reserva: {
      type: DataTypes.BOOLEAN,
    },
    tipo: {
      type: DataTypes.STRING,
    },
    calidadServicio: {
      type: DataTypes.STRING,
    },
    recibioInformacion: {
      type: DataTypes.STRING,
    },
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

module.exports = Cuestionario;
