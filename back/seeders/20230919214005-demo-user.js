'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const data = [{
        id: 1,
        email: "admin@gmail.com",
        password: "admin",
        user: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }];

      const data2 = [{
        id: 2,
        email: "admin2@gmail.com",
        password: "admin",
        user: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }];
      
      await queryInterface.bulkInsert('Users', data);
      await queryInterface.bulkInsert('Users', data2);

      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};