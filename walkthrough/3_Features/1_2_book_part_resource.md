## The Book Divison Resource

BookPart
- title
- slug
- content
- sectionType
- sequence
- parent_part
- book

### 1. Create the Data Model

1. Generate model
```
npx sequelize model:generate --name BookSection --attributes title:string,slug:string,content:text,sectionType:string,sequence:integer,bookId:integer
```

2. Customize generated files
Customize the generated model and migration files to refect the Book to Book Section one-to-many relatonship.
model file:

```
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookSection extends Model {
    static associate(models) {
      BookSection.belongsTo(models.Book, { foreignKey: 'bookId' });
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
```

migration, changes to slug and bookId:
```
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      sectionType: {
        type: Sequelize.STRING
      },
      sequence: {
        type: Sequelize.INTEGER
      },
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Books'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookSections');
  }
};
```

```
$ npx sequelize db:migrate
```

### 3. Add Parent Section Reference
1. generate migration
```
$ npx sequelize migration:generate --name add-parent-book-section
```

2. Fill in migration
```
module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.addColumn('BookSections', 'parentSectionId', {
       type: Sequelize.INTEGER,
       references: {
          model: {
            tableName: 'BookSections'
          },
          key: 'id'
        }
     })
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('BookSections', 'parentSectionId');
  }
};
```

3. Run migration
```
$ npx sequelize db:migrate
```

4. Modify the Model
```

```


### 2. Seed Book Sections
```
$ npx sequelize seed:generate --name first-book-sections
```


### 2. List Book Sections

### Resources
Associations in the model definition: https://sequelize.org/docs/v6/core-concepts/model-basics/#column-declaration-shorthand-syntax