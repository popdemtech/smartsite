const { Book } = require('../../app/models');
const bookSections = require('./data/smartsite-book-sections.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    const book = await Book.findOne({ where: { title: 'Build a SmartSite' } }, ['id']);
    const parts = bookSections.map((section) => {
      let { childFiles, ...bookSection } = section;
      bookSection.bookId = book.id;
      bookSection.createdAt = new Date();
      bookSection.updatedAt = new Date();
      return bookSection;
    });
    return await queryInterface.bulkInsert('BookSections', parts, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('BookSections', null, {});
  }
};
