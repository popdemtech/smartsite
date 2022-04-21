const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    publish_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};