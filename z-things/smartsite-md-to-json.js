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
    const sectionType = sequence == 0 ? 'chapter' : 'section';
    sequence = sectionType == 'chapter' ? parentChapter : sequence;

    console.log('=============')
    console.log('sectionType ', sectionType)
    console.log('sequence ', sequence)
    console.log('parent section type', sectionType == 'chapter' ? 'part' : 'chapter')
    console.log('parent section sequence ', parentSectionSequence: sectionType == 'chapter' ? bookSection.sequence : parentChapter)
    console.log('=============')

    return {
      title: title,
      slug: slug,
      content: content,
      sectionType: sectionType,
      sequence: sequence,
      parentSection: {
        parentSectionPart: bookSection.sequence,
        parentSectionType: sectionType == 'chapter' ? 'part' : 'chapter',
        parentSectionSequence: sectionType == 'chapter' ? bookSection.sequence : parentChapter
      }
    };
  });

  bookSection.childFiles = childFiles;

  return bookSection;
});

// run from the db/seeds directory
fs.writeFile(path.join(__dirname, 'data', 'smartsite-book-sections.json'), JSON.stringify(bookSections, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file written successfully');
  }
});

// test helper
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