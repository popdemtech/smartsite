const { Op } = require("sequelize");
const { Book } = require('../../app/models');

const books = [{
  title: 'Build a SmartSite',
  author: 'Popular Demand',
  description: 'A step-by-step guide to creating a dynamic website using Node.js.',
  blurb: 'A step-by-step guide to creating a dynamic website using Node.js.',
  slug: 'build-a-smartsite',
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', books, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', {
      title: {
        [Op.eq]: books[0].title
      }
     }, {});
  }
};
