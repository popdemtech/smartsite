module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      sectionType: {
        type: Sequelize.STRING
      },
      sequence: {
        type: Sequelize.INTEGER
      },
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Books'
          },
          key: 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('BookSections');
  }
};