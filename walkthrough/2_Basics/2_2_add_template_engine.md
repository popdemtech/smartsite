# Add a Template Engine
The Express ecosystem supports many trusted template languages. `smartsite` will use the Liquid template language.

### 1. Install template libraries
The Node.js application requires functionality for parsing and rendering the template language into HTML. The package `liquidjs` provides the JavaScript bindings for Liquid template rendering. Use `npm install` to add the library.

<div class="filename">command line</div>

```bash
$ npm install liquidjs
```

### 2. Register the Liquid template engine
Using `liquidjs` as the template engine in the application server requires importing the library, initializing it, and registering it with the Express `app`.

Code like the following should be added to `index.js` before the route declarations.

<div class="filename">index.js</div>

```javascript
const { Liquid } = require('liquidjs');
app.engine('liquid', new Liquid().express());
```

Express' `app.engine` method relates a file extension with a rendering engine. As Liquid files are created, they should be created with the `.liquid` file extension (e.g. `filename.liquid`). Express allows multiple `app.engine`s to be set. As such, multiple extensions and multiple rendering engines are valid.

### 3. Create a view template
A liquid template file supports all valid HTML with the additional functionality of variable rendering and Liquid's logicial operators. They use a file extension of `.liquid` instead of `.html`. Copy the current `index.html` into a new file named `index.liquid` in the root directory of the application.

<div class="filename">index.liquid</div>

```html
<!DOCTYPE html>
<head>
  <title>SmaRtsite</title>
</head>
<html>
  <body>
    <h1>Welcome to SmaRtsite!</h1>
  </body>
</html>
```

### 4. Render the view template
To send a static HTML file, Express' `response.sendFile` method was used. In the case of view template rendering, a different method must be used to indicate the desired response to send to the user must first be generated through a templating engine. The method is `response.render`.

`response.render` accepts two parameters, 1) the filename and 2) an object of variables with which to render the file.

Use `response.render` within the root route handler in place of `response.sendFile`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render(__dirname + '/index.liquid');
});
```

You should now be able to navigate to `localhost:3000` and see the exact page as before.

<hr>

## View options
An Express application can be configured with a variety of view options. Setting these options globally explicity defines filesystem architecture, often allows for cleaner code in Express middleware, and generally improves developer experience.

To continue the trend of clearly separating concerns, the architecture of `smartsite` will utilize a views directory. Once created, files that are meant to be rendered and/or sent as a user response should be placed in this folder to clearly separate the presentation layer from the JavaScript logic.

### 1. Create a new folder named `views` in the root directory
Express, by default, will look for views (i.e. templates) in a directory named `views`. Specifically, it will look for a directory matching the definition `process.cwd() + '/views'`, where `process.cwd()` is the "current working directory" (`cwd`). As most node applications initialize from the root directory, the expanded file path is `<root directory>/views`. Although `smartsite` will utilize the default, this setting is configurable.

### 2. Move `index.liquid` into the `views` folder.

<div class="filename">views/index.liquid</div>

```html
<!DOCTYPE html>
<head>
  <title>SmaRtsite</title>
</head>
<html>
  <body>
    <h1>Welcome to SmaRtsite!</h1>
  </body>
</html>
```

At this point, visiting `localhost:3000` should lead to an error response returned. follow the next step to correct this.

### 3. Modify `index.js` to render `views/index.liquid`
Since the Express application defaults to serving files from the `/views` director, route handlers no longer have to specify the full file path to files in that directory. Modify the handler of the root route, `/`, by removing references to `_dirname`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render('index.liquid');
});
```

`localhost:3000` should now render the familiar "Hello!" message.

### 4. Set the view engine
Express' `app.set` method provides a way for developers to configure application-wide settings. A standard setting is "view engine" which is used to configure the default file extension for views. Adding the view engine setting allows for developers to omit the file extension from calls to `app.render`.

Add the "view engine" setting to `index.js` and remove the `.liquid` extension in the root route.

```javascript
app.set('view engine', 'liquid');

app.get('/', function(request, response) {
  response.render('index');
});
```

The application should work as expected.

## Git

Configuring and initializing the view engine within `smartsite` is a significant unit of development. This is a perfect time to bookmark filesystem state within version control.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Add template engine'
```

<div class="informational">
<b>Keep in mind:</b> As application development continues, place template files in the <code>/views</code> directory with a file extension of <code>.liquid</code>. The files may contain static or dynamic content.
<div>

### Resources
Express' `app.set`: [https://expressjs.com/en/api.html](https://expressjs.com/en/api.html#app.set)

Express' `response.render`: [https://expressjs.com/en/api.html](https://expressjs.com/en/api.html#res.render)