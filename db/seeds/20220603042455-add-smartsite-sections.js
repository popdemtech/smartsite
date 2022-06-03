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
    const bookParts = await BookSection.findAll({
      where: {
        bookId: book.id,
        sectionType: 'part'
      }
    });

    const allChapters = [];
    for (let partSequence in sectionsByChapter) {
      const part = bookParts.find((p) => p.sequence == partSequence);
      let chapters = sectionsByChapter[partSequence].map((chapter) => {
        delete chapter.parentSection;
        chapter.bookId = part.bookId;
        chapter.parentSectionId = part.id;
        chapter.createdAt = new Date();
        chapter.updatedAt = new Date();
        return chapter;
      });
      allChapters.push(...chapters);
    }

    await queryInterface.bulkInsert('BookSections', allChapters, {});
  },

  async down (queryInterface, Sequelize) {
    const book = await Book.findOne({ where: { title: 'Build a SmartSite' } });

    const chapterSlugs = bookSectionsJson.reduce((slugs, section) => {
      const { childSections } = section;
      const newSlugs = childSections
        .filter((childSection) => childSection.sectionType == 'chapter')
        .map((childSection) => childSection.slug);
      return [...slugs, ...newSlugs];
    }, []);

    await queryInterface.bulkDelete('BookSections', {
      slug: {
        [Op.in]: chapterSlugs
      },
      bookId: {
        [Op.eq]: book.id
      }
    });
  }
};
