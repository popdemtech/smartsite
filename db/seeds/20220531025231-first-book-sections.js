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
  const FILE_SEQUENCE_SLUG = /(\d)_(\d)_(.+).md/;
  let [parentChapter, sequence, slug] = filename.split(FILE_SEQUENCE_SLUG).filter(f => f.length > 0);
  const title = slug.split('_').map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');
  sequence = Number(sequence);
  parentChapter = Number(parentChapter);
  slug = slug.replace(/_/g, '-');

  return [parentChapter, sequence, slug, title];
};

const BOOK_DIR = __dirname + '/../../walkthrough';
const bookSections = fs.readdirSync(BOOK_DIR).map((filename) => {
  let [sequence, slug, title] = parseDirname(filename);
  const content = fs.readFileSync(path.join(BOOK_DIR, filename, 'README.md'), { encoding: 'utf8' });

  // Build parent section
  const bookSection = {
    title: title,
    slug: slug,
    content: content,
    sectionType: 'part',
    sequence: sequence,
    parentSectionId: null
  };

  // Build children sections
  const filePath = path.join(BOOK_DIR, filename);
  let childFiles = fs.readdirSync(filePath).filter((f) => f != 'README.md');

  childFiles = childFiles.map((file) => {
    let [parentChapter, sequence, slug, title] = parseFilename(file);
    const content = fs.readFileSync(path.join(filePath, file), { encoding: 'utf8' });

    return {
      title: title,
      slug: slug,
      content: content,
      sectionType: sequence == 0 ? 'chapter' : 'section',
      sequence: sequence,
      parentSection: {
        parentSectionPart: bookSection.sequence,
        parentSectionType: sequence == 0 ? 'part' : 'chapter',
        parentSectionSequence: sequence == 0 ? bookSection.sequence : parentChapter
      }
    };
  });

  bookSection.childFiles = childFiles;

  return bookSection;
});

function testCreate() {
  console.log('=====creating parts=====')
  bookSections.map((section) => {
    let { childFiles, ...bookSection } = section;
    // console.log(bookSection);
  });

  bookSections.map((section) => {
    let { childFiles, ...bookPart } = section;
  
    console.log('=====creating chapters=====')
    const chapters = childFiles.filter((section) => section.sectionType == 'chapter');
    chapters.forEach((chapter) => {
      const { parentSection, ...bookSection } = chapter;
      // console.log(parentSection) // find parent, set parentsection id
      // save resource
    });

    console.log('=====creating sections=====')
    const sections = childFiles.filter((section) => section.sectionType == 'section');
    sections.forEach((section) => {
      const { parentSection, ...bookSection } = section;

      // set parentSectionId: find parent based on  {
      //   parentSectionPart: 3,
      //   parentSectionType: 'chapter',
      //   parentSectionSequence: 1
      // }
      // console.log(parentSection);

      // save resource
    });
  });

}

module.exports = {
  async up (queryInterface, Sequelize) {
    const book = await Book.findOne({ where: { title: 'Build a SmartSite' } }, ['id']);
    const createBookParts = async () => {
      const parts = bookSections.map((section) => {
        let { childFiles, ...bookSection } = section;
        bookSection.bookId = book.id;
        return bookSection;
      });
      return queryInterface.bulkInsert('BookSections', parts, {});
    }

    const createBookChapters = async () => {
      const chapters = bookSections
        .map((section) => {
          let { childFiles, ...bookSection } = section;
          return childFiles;
        })
        .filter((section) => section.sectionType == 'chapter');

      chapters.forEach((chapter) => {
        const { parentSection, ...bookSection } = chapter;
        bookSection.bookId = book.id;
        const parentSection = BookSection.findOne({ where: { sectionType: parentSection.parentSectionType, sequence: parentSection.parentSectionSequence }})
        // console.log(parentSection) // find parent, set parentsection id
        // save resource
      });
    }

    return createBookParts()
    .then(() => {
      return createBookChapters();
    })
    .then(() => {
      return createBookSections();
    });



    // return await queryInterface.bulkInsert('BookSections', bookSections, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
