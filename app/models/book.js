const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.hasMany(models.BookSection, { foreignKey: 'bookId' });
    }
  }

  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    blurb: DataTypes.TEXT,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};