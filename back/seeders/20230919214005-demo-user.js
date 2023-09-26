'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const data = [{
        "id": "1",
        "email": "admin@gmail.com",
        "password": "admin",
        "user": "admin",
        "createdAt":"2023-09-26",
        "updatedAt":"2023-09-26 "
      }];
      
      await queryInterface.bulkInsert('Users', data);

      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};