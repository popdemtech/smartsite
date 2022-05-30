module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.addColumn('BookSections', 'parentSectionId', {
       type: Sequelize.INTEGER,
       references: {
          model: {
            tableName: 'BookSections'
          },
          key: 'id'
        }
     })
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('BookSections', 'parentSectionId');
  }
};
