const { Op } = require("sequelize");
const { Book, BookSection } = require('../../app/models');
const bookSectionsJson = require('./data/smartsite-book-sections.json');

const sectionsByPartChapter = bookSectionsJson.reduce((sectionsByPartChapter, bookPart) => {
  const { childSections, sequence: partSequence } = bookPart;
  const sections = childSections.filter((f) => f.sectionType == 'section');

  sections.forEach((section) => {
    const partSequence = section.parentSection.parentSectionPart;
    const chapterSequence = section.parentSection.parentSectionSequence;
    delete section.parentSection;

    sectionsByPartChapter[partSequence] = sectionsByPartChapter[partSequence] || {};
    sectionsByPartChapter[partSequence][chapterSequence] = sectionsByPartChapter[partSequence][chapterSequence] || [];
    sectionsByPartChapter[partSequence][chapterSequence].push(section);
  }, {});

  return sectionsByPartChapter;
}, {});

module.exports = {
  async up (queryInterface, Sequelize) {
    const book = await Book.findOne({ where: { title: 'Build a SmartSite' } });
    const bookSections = await BookSection.findAll({
      where: {
        bookId: book.id,
        sectionType: 'section'
      }
    });
    
    const allSections = [];
    for (let partSequence in sectionsByPartChapter) {
      let bookPart = await BookSection.findOne({ where: {
        bookId: book.id,
        sectionType: 'part',
        sequence: Number(partSequence)
      }});

      for (let chapterSequence in sectionsByPartChapter[partSequence]) {
        let chapter = await BookSection.findOne({ where: {
          bookId: book.id,
          sectionType: 'chapter',
          parentSectionId: bookPart.id,
          sequence: Number(chapterSequence)
        }});

        let sections = sectionsByPartChapter[partSequence][chapterSequence];

        sections = sections.map((section) => {
          section.parentSectionId = chapter.id;
          section.bookId = book.id;
          section.createdAt = new Date();
          section.updatedAt = new Date();
          return section;
        });

        allSections.push(...sections);
      }
    }

    return await queryInterface.bulkInsert('BookSections', allSections, {});
  },

  async down (queryInterface, Sequelize) {
    const book = await Book.findOne({ where: { title: 'Build a SmartSite' } });

    const sectionSlugs = bookSectionsJson.reduce((slugs, section) => {
      const { childSections } = section;
      const newSlugs = childSections
        .filter((childSection) => childSection.sectionType == 'section')
        .map((childSection) => childSection.slug);
      return [...slugs, ...newSlugs];
    }, []);

    return await queryInterface.bulkDelete('BookSections', {
      slug: {
        [Op.in]: sectionSlugs
      },
      sectionType: {
        [Op.eq]: 'section'
      },
      bookId: {
        [Op.eq]: book.id
      }
    });
  }
};
