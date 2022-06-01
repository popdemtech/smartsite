## Create the Web Server
As it stands, `smartsite` is a functioning Node.js application, but it doesn't do much. It prints a message in the terminal. We're here to build an application that serves web traffic. This means a user can navigate to our web pages and functionality from an internet browser.

For the purposes of this guide, the term "web server" should be taken to mean an application that serves web traffic. The term "web server" can (and often does) apply to any physical or digital component that makes up the OSI model. These components funtionally operate different levels of abstraction, and in the most general sense, constitute a pipeline of request handling. Node.js web servers operate at the "Application Layer" of the model.

A web server library written for the JavaScript ecosystem will be included into application scripts. There are many such libraries in the Node.js ecosystem from which to choose. The ideal library for our purposes provides a developer friendly abstraction over the gritty details of TCP and HTTP communication protocols. A large network of developers using the library is a strong bonus as well. Express [https://expressjs.com](https://expressjs.com) is a web framework that checks all of the boxes.

### Express

Express provides an abstraction over low-level HTTP handling by using sensible defaults for HTTP configuration, while still allowing for low-level configuation as the needs of the application are discovered. For the developer, Express provides a straight-forward, route declaration approach for serving web requests.

Express has been a mainstay library for since the early days of Node.js, and beginner to advanced online resources can be found with ease.

### 1. Install Express

Use `npm` to install Express. Within `smartsite`'s root directory, run the following:

<div class="filename">command line</div>

```
$ npm install express
```

This command adds Express as a dependency to the application, and installs the library into the `node_modules` folder. Since Express is the first external library added to the application, the `node_modules` folder will be created in the root directory.

### 2. Create the Express server
Express provides JavaScript classes and functions that, when used within a Node.js script, start a webserver process. To do so, we'll need to `require` the Express library, then instantiate an instance of Express.

An instance of Express is conventionally called `app`. The instance provides methods for routing HTTP requests, rendering HTML views, registering a template engine, and configuring middleware. `smartsite` will utilize all of these methods.

First, modify `index.js` to import in the `express` library and instantiate an `app`. Register a `GET` route to the root route, `/`.

<div class="filename">index.js</div>

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(request, response) {
  response.send('<h1>Welcome to SmaRtsite!</h1>');
});

app.listen(PORT, () => {
  console.log(`SmaRtsite listening on port ${PORT}`);
});
```

### 3. Run the Application
Starting the application with `npm run start` will begin the Express server. Based on the code above, this web server can be accessed by navigating to `http://localhost:3000` in a web browser.

Open a web browser and navigate to `localhost:3000`. You should see a large heading with the words "Welcome to SmaRtsite!".

[image welcome to my app]

### 6. Git commit the changes
This was a significant unit of development. The Express library was added and the initial web route was added to the application. `git commit` the changes to signify the completion of this development.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add express'
```

### Resources
Express: [expressjs.com](https://expressjs.com)