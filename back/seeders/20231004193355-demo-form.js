'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const data = [{
        id: 1,
        edad: 22,
        sexo: "Masculino",
        procedencia: "Cordoba",
        acompañamiento: "Pareja",
        medioConocimiento: "Pagina Web",
        motivoEleccion: "Ya conocia",
        tieneReserva: true,
        tipoHospedaje: "Cabaña",
        calidadReserva: "Excelente",
        recibioInfoReserva: "Si, a",
        pidioInformacion: true,
        oficinaInformacion: "Oficina de la rotonda de ingreso",
        tipoInformacionPedida: "Paseos",
        medioPedidoInformacion: "Personalmente",
        tipoMaterialEntregado: "Folleto",
        calidadServicioOficina: "Buena",
        recibioInfoExtra: true,
        tipoInfoExtra: "Espectaculos en Mina Clavero",
        destinoCompleto: "Si, por que si",
        recomendaria: "Si, por que si",
        createdAt: new Date(),
        updatedAt: new Date()
      }];
      
      await queryInterface.bulkInsert('Forms', data);

      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Forms', null, {});
  }
};