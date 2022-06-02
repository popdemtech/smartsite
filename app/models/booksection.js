const { Model } = require('sequelize');
const { groupBy } = require('lodash');

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

    static toTree(bookSections) {
      const byParentSection = groupBy(bookSections, 'parentSectionId');
      const getChildren = (sectionId) => {
        const children = byParentSection[sectionId];
        if (!children) return;

        for (let i = 0; i > children.length; i++) {
          let child = children[i];
          let grandChildren = getChildren(byParentSection[child.id]);
          child['childSections'] = grandChildren;
        }

        return children;
      };

      const root = byParentSection[null];
      root.forEach((section) => {
        section['childSections'] = getChildren(section.id);
      });

      return root;
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