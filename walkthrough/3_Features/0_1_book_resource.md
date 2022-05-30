## The Book Resource

### 1. Create the Book Data Model
1. Generate the book model
```
npx sequelize model:generate --name Book --attributes title:string,author:string,description:text,blurb:text,slug:string
```

2. Seed the database
```
 npx sequelize seed:generate --name first-book
 ```

 ```javascript
const { Op } = require("sequelize");
const { Book } = require('../../app/models');

const books = [{
  title: 'Build a SmartSite',
  author: 'Popular Demand',
  description: 'A step-by-step guide to creating a dynamic website using Node.js.',
  blurb: 'A step-by-step guide to creating a dynamic website using Node.js.',
  slug: 'build-a-smartsite',
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', books, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', {
      title: {
        [Op.eq]: books[0].title
      }
     }, {});
  }
};
 ```

 ```
npx sequelize-cli db:seed:all
 ```

### 2. All Books index page

1. Create Books index route
```
const { Post, Click, Book } = require('./app/models');
app.get('/books', async function(request, response) {
  const books = await Book.findAll();
  response.render('books/index', { books });
});
```

2. Create Books index view
```
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<div>
  <h1>Books</h1>

  {% for book in books %}
    <h2>{{ book.title }}</h2>
    <p><i>{{ book.author }}</i></p>
    <p>{{ book.blurb }}</p>
  {% else %}
    <p><i>There are no books to display.</i></p>
  {% endfor %}
</div>
{% endblock %}
```

```
<li><a href="/books">Books</a></li>
```

Books page is available at `localhost:3000/books`.

### 3. One Book show page

1. Create show route for single Book
```
app.get('/books/:slug', async function(request, response, next) {
  const book = await Book.findOne({ where: { slug: request.params.slug }});
  if (book == null) {
    // handling if a book is not found is covered next
  }
  response.render('books/show', { book });
});
```

2. Create Book show view
```
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<div>
  <h1>{{ book.title }}</h1>
  <p><i>{{ book.author }}</i></p>
  <p>{{ book.description }}</p>
</div>
{% endblock %}
```

3. Link to the book show page
```
<a href="/books/{{ book.slug }}">
  <span class="book-panel">
    <h2>{{ book.title }}</h2>
    <p><i>{{ book.author }}</i></p>
    <p>{{ book.blurb }}</p>
  </span>
</a>
```

### 4. 404 - Not Found Route
1. Handle if a book is not found
Set the response status to `404`, and forward the request to the next middleware.
```
app.get('/books/:slug', async function(request, response, next) {
  const book = await Book.findOne({ where: { slug: request.params.slug }});
  if (book == null) {
    response.status(404);
    next();
    return;
  }
  response.render('books/show', { book });
});
```

2. Create a 404 middleware
```
app.use(function(request, response, next) {
  if (response.statusCode === 404) {
    response.render('404');
    return;
  }
  next();
});
```

3. Create a 404 view template
```
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<div>
  <h1>Not Found</h1>

  <p>
    The requested resource was not found.
  </p>
</div>
{% endblock %}
```

### 5. Add Breadcrumbs
Add breadcrumbs to the show page.
```
<div class="breadcrumbs">
  <a href="/books">Books</a> > {{ book.title }}
</div>
```