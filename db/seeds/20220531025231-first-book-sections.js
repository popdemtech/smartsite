const fs = require('fs');
const path = require('path');
const { Book } = require('../../app/models');

const isDirectory = (filename) => fs.statSync(filename).isDirectory();
const readFile = (path) => fs.readFileSync(path, { encoding: 'utf8' });
const parseDirname = (dirname) => {
  const DIR_SEQUENCE_SLUG = /(\d)_(.+)/;
  let [sequence, slug] = dirname.split(DIR_SEQUENCE_SLUG).filter(f => f.length > 0);
  const title = slug.replace('_', ' ');
  sequence = Number(sequence);
  slug = slug.toLowerCase().replace('_', '-');
  return [sequence, slug, title];
};
const parseFilename = (filename) => {
  const FILE_SEQUENCE_SLUG = /\d_(\d)_(.+).md/;
  let [sequence, slug] = filename.split(FILE_SEQUENCE_SLUG).filter(f => f.length > 0);
  sequence = Number(sequence);
  slug = slug.toLowerCase().replace('_', '-');
  return [sequence, slug];
};

const BOOK_DIR = __dirname + '/../../walkthrough';
const bookParts = fs.readdirSync(BOOK_DIR);
// BookPart
// - title
// - slug
// - content
// - sectionType
// - sequence
// - parent_part
// - book
bookParts.map(async (filename) => {
  const filePath = path.join(BOOK_DIR, filename);
  const [sequence, slug, title] = parseDirname(filename);
  const book = await Book.findOne({ where: { title: 'Build a SmartSite' } });
  const content = fs.readFileSync(path.join(BOOK_DIR, filename, 'README.md'), { encoding: 'utf8' });

  const bookSection = {
    title: title,
    slug: slug,
    content: content,
    sectionType: 'part',
    sequence: sequence,
    parentSectionId: null,
    bookId: book.id
  };

  console.log(bookSection)
  return bookSection;
});

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */

//     return await queryInterface.bulkInsert('BookSections', bookSections, {});
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
