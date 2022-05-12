## Liquid Templating
A benefit of a template engine is the ability to separate units of presentation. This allows developers to define view logic once, and reuse the template across multiple pages. This concept will become more explicit by practice. This section details reusing template components between pages to eliminate the need to repeat and maintain separate view scripts.

### 1. Create a new page
Within the `views` directory, create a new file names `hello-world.liquid`.

<div class="filename">views/hello-world.liquid</div>

```html
<!DOCTYPE html>
<head>
  <title>My App</title>
</head>
<html>
  <body>
    <h1>Hello World!</h1>

    {% if showDog %}
      <img src="https://i.imgur.com/5Swc751.png" alt="brown dog marley" width="150px"/>
    {% endif %}

    <p>Show Marley with query parameter <code>showDog</code>.</p>
    <p><code>Page loaded at {{ serverDate }}.</code></p>
  </body>
</html>
```

### 2. Create a new route
Register a route with the application to allow users to access the new page from a web browser.

<div class="filename">index.js</div>

```javascript
app.get('/hello-world', function(request, response) {
  const showDog = request.query.showDog;
  response.render('hello-world', {
    showDog,
    serverDate: new Date()
  });
});
```

With the server running (`npm run start`), navigate to `localhost:3000/hello-world`, and you should be presented with the greeting "Hello World!"

### The Need for Templating

Take a look at `index.liquid` and `hello-world.liquid`. Both pages have the standard HTML boilerplate -- `<html>`, `<head>`, `<body>` -- in common. In fact, any new HTML page will need the basic HTML layout. As front-end development development, it is highly likely that `CSS` and JavaScript assets will be shared between pages. Given the current paradigm of fully separating each web page, a developer adding a global CSS asset would have to add a `<link>` tag *each* .liquid file.

Standard application of the DRY principle (Don't Repeat Yourself) dictates we isolate and define repeated patterns, and reference the one-time definition where necessary. To DRY up `my-app`'s presentational layer, we need to isolate the base HTML markup layout, and implement the layout in each of the view scripts. This strategy is known as "template inheritance."

### 3. Add a Liquid `layout`
Liquid has a standard concept of a "layout" template. A layout template defines whatever view logic it is meant to encapsulate, and defines areas within its markup meant to be customized by each implementer of the layout.

Create a file to serve as the layout. This file will contain HTML boilerplate, as well as a delimited section for child pages to provide custom content.

<div class="filename">views/default-layout.liquid</div>

```html
<!DOCTYPE html5>
<html>
  <head>
    <title>my-app</title>
  </head>
  <body>
    <header>
      <a href="/">home</a>
    </header>
    {% block content %}
      default-html.liquid's default content is showing.
    {% endblock %}
    <br/><br/>
    <footer>&copy; by Popular Demand</footer>
  </body>
</html>
```

The syntax `{% block <block_name> %}{% endblock %}` specifies an area of the template to be overwritten by child pages. A developer can provide default markup within the layouts `block`; the default content is rendered if the child page does not define its own markup for the area.

### 4. Use the layout
The `block` to be referenced in the sub-pages is named `content`. An individual sub-page must reference the parent layout, `default-layout.liquid`, and define its own `content` block. A reference to the parent layout is defined with a `layout` block.

Modify `hello-world.liquid` to implement the layout and define custom `content`.

<div class="filename">views/hello-world.liquid</div>

```html
{% layout 'default-layout.liquid' %}

{% block content %}
  <h1>Hello World!</h1>

  {% if showDog %}
    <img src="https://i.imgur.com/5Swc751.png" alt="brown dog marley" width="150px"/>
  {% endif %}

  <p>Show Marley with query parameter <code>showDog</code>.</p>
  <p><code>Page loaded at {{ serverDate }}.</code></p>
{% endblock %}
```

Notice this page no longer features any boiler plate HTML. It only defines two features -- a `layout`
block and a `content` block.

From the browser, reload the `/hello-world` route to be delivered the page with its newly defined layout. The main content of the pages, a heading and two paragraphs should remain visible. There should also be two elements added from the `default-layout.liquid` layout -- a page header with a link to the root route and a footer element with site information.

### 5. Refactor `index.liquid`
<dl>
  <dt>Refactor</dt>
  <dd>restructure the code of an application so as to improve it without altering functionality</dd>
</dl>

Isolating the base HTML into a layout was an improvement to the codebase in terms of maintainability. Let's reuse this architecture in all of the pages of the application.

<div class="filename">views/index.liquid</div>

```html
{% layout 'default-layout.liquid' %}

{% block content %}
  <h1>Welcome to My App!</h1>
  {% if debug %}
    <p><b>Debug Information</b></p>
    <p>Node version: {{ nodeVersion }}</p>
    <p>Server Time: {{ serverTime }}</p>
  {% endif %}
{% endblock %}
```

Again, the child page must define its parent `layout` and the `content` block to fill in the layout's `content` block.

Navigating to the root route, `/`, in the broswer should render the `Welcome to My App!` heading as well as the Header and footer defined in `default-layout.liquid`.

### Review

`block` is a standard tag provided by Liquid. A layout file uses a `block` tag to define an area that will be replaces with a child page's content. A child page uses `block` to define what to render in its layout's identically named `block`.

`layout` is a functional tag provided by Liquid. It is used in a child page to define what layout the defined markup should be rendered within.

In the specific case of these changes, "`content`" is a developer defined variable name that references an area within the parent layout to be replaced by the markup of a identically named block within the child page.


### 6. Add a link to Hello World!
As new pages are added to the application, it is good practice to give users an easy method of navigating to the page. Below the heading on the index page, add a link to `hello-world`. (**Note:** In this code block and going forward, only the affected parts of the code are shown. It's unnecessary to alter the unshown elements. Use discernment.)

<div class="filename">views/index.liquid</div>

```html
<h1>Welcome to My App!</h1>
<p>Links</p>
<ul>
  <li><a href="/hello-world">hello-world</a></li>
</ul>
```

### 7. `git commit`
Creating a view layout architecture within `my-app` is a significant unit of development. Time to save to version control.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Add default layout and hello-world'
```

### Reference
1. Liquid's `layout`: [https://liquidjs.com/tags/layout.html](https://liquidjs.com/tags/layout.html)