const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookSection extends Model {
    static associate(models) {
      BookSection.belongsTo(models.Book, { foreignKey: 'bookId' });
      BookSection.hasOne(models.BookSection, {
        foreignKey: 'parentSectionId'
      });
      BookSection.hasMany(models.BookSection, {
        foreignKey: 'parentSectionId'
      });
    }
  }

  BookSection.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    sectionType: DataTypes.STRING,
    sequence: DataTypes.INTEGER,
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id'
      }
    },
    parentSectionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BookSections',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'BookSection',
  });

  return BookSection;
};