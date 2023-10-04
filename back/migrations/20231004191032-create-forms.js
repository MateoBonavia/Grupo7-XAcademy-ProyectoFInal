'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Forms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      procedencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      acompañamiento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medioConocimiento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      motivoEleccion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tieneReserva: {
        type: Sequelize.BOOLEAN,
      },
      tipoHospedaje: {
        type: Sequelize.STRING,
      },
      calidadReserva: {
        type: Sequelize.STRING,
      },
      recibioInfoReserva: {
        type: Sequelize.STRING,
      },
      pidioInformacion: {
        type: Sequelize.BOOLEAN,
      },
      oficinaInformacion: {
        type: Sequelize.STRING,
      },
      tipoInformacionPedida: {
        type: Sequelize.STRING,
      },
      medioPedidoInformacion: {
        type: Sequelize.STRING,
      },
      tipoMaterialEntregado: {
        type: Sequelize.STRING,
      },
      calidadServicioOficina: {
        type: Sequelize.STRING,
      },
      recibioInfoExtra: {
        type: Sequelize.BOOLEAN,
      },
      tipoInfoExtra: {
        type: Sequelize.STRING,
      },
      destinoCompleto: {
        type: Sequelize.STRING,
      },
      recomendaria: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Forms');
  }
};