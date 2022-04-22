const { Op } = require("sequelize");

const posts = [{
  title: 'Hello World',
  content: 'This is the first post!',
  publishDate: new Date('2022-01-01'),
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Lorem Ipsum',
  content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of Latin literature from 45 BC.
  `,
  publishDate: new Date('2022-01-02'),
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', posts, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Posts', {
      title: {
        [Op.in]: posts.map((post) => post.title)
      }
     }, {});
  }
};
