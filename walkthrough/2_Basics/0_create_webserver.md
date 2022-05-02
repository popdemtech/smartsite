## Create the Web Server
As it stands, `my-app` is a functioning Node.js application, but it doesn't do much. It prints a message in the terminal. We're here to build an application that serves web traffic. This means a user can navigate to our web pages and functionality from an internet browser.

For the purposes of this guide, the term "web server" should be taken to mean an application that serves web traffic. The term "web server" can (and often does) apply to any physical or digital component that makes up the OSI model. These components funtionally operate different levels of abstraction, and in the most general sense, constitute a pipeline of request handling. Node.js web servers operate at the "Application Layer" of the model.

A web server library written for the JavaScript ecosystem will be included into application scripts. There are many such libraries in the Node.js ecosystem from which to choose. The ideal library for our purposes provides a developer friendly abstraction over the gritty details of TCP and HTTP communication protocols. A large network of developers using the library is a strong bonus as well. Express [https://expressjs.com](https://expressjs.com) is a web framework that checks all of the boxes.

### Express

Express provides an abstraction over low-level HTTP handling by using sensible defaults for HTTP configuration, while still allowing for low-level configuation as the needs of the application are discovered. For the developer, Express provides a straight-forward, route declaration approach for serving web requests.

Express has been a mainstay library for since the early days of Node.js, and beginner to advanced online resources can be found with ease.

### 1. Install Express

1. Use `npm` to install Express
Within `my-app`'s root directory, run the following:

<div class="filename">command line</div>

```
$ npm install express
```

This command adds Express as a dependency to the application, and installs the library into the `node_modules` folder. Since Express is the first external library added to the application, the `node_modules` folder will be created in the root directory.

### 2. Create the Express server
Express provides JavaScript classes and functions that, when used within a Node.js script, start a webserver process. To do so, we'll need to `require` the Express library, then instantiate an instance of Express.

An instance of Express is conventionally called `app`. The instance provides methods for routing HTTP requests, rendering HTML views, registering a template engine, and configuring middleware. `my-app` will utilize all of these methods.

First, modify `index.js` to import in the `express` library and instantiate an `app`. Register a `GET` route to the root route, `/`.

<div class="filename">index.js</div>

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(request, response) {
  response.send('<h1>Welcome to My App!</h1>');
});

app.listen(PORT, () => {
  console.log(`My App listening on port ${PORT}`);
});
```

### 3. Run the Application
Starting the application with `npm run start` will begin the Express server. Based on the code above, this web server can be accessed by navigating to `http://localhost:3000` in a web browser.

Open a web browser and navigate to `localhost:3000`. You should see a large heading with the words "Welcome to My App!".

[image welcome to my app]

### 4. Setting up filesystem watcher for development
At this point, if you were to change the sent response from "Welcome to My App" to "Hello World" and refresh the browser, you would see no change in the response. This is because when the application is run with `node index.js`, all application files are cached in the state they were in when the command was called. To see the changed response, stop the currently running server with `CMD+C` or `CTRL+C` depending on your operating system, and restart it with `npm run start`. Navigating to the browser now will display the updated text.

Restartiing the server after every change will get annoying pretty quick. Luckily, there are programs that will handle automatically restarting the server after every change. These programs are called "filesystem watchers." The filesystem watcher `my-app` will use is nodemon (pronounced "node-mon").

1. Install nodemon
Because nodemon is a library that is used to initialize a process from the local operating system, it's not considered an application dependency. It is a development dependency. Install the library as a development dependency.

<div class="filename">command line</div>

```bash
$ npm install --save-dev nodemon
```

2. Use nodemon
nodemon wraps the `node` process with an additional file-checking functionality. Change the start script within `package.json` to use `nodemon` instead of `node` to start the server process.

<div class="filename">package.json</div>

```javascript
{
  ...,
  "scripts": {
    "start": "npx nodemon .",
    ...
  },
  ...
}
```

The `npx` command can be thought of as "**n**ode **p**ackage e**x**ecute." This signals to use the executable provided by a program found within the local `node_modules` directory -- in this case `nodemon`.

3. Restart the server
Running `npm run start` will now invoke `nodemon`. `nodemon` will start the application as usual and restart the server process as code within the directory is changed. Restart the server.

<div class="filename">command line</div>

```
$ npm run start
```

### 5. Send an HTML file
Currently, the application is configured to send an HTML string when the root route, `/`, is requested. While this is valid, it is more valuable to pull the HTML into its own document, and configure the route handler to serve the HTML file. The separation of concerns between web application and view is standard practice. It allows the developer to utilize the benefits of the full HTML specification without filling `index.js` with pages of HTML.

1. Create a file named `index.html` in the root directory.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<head>
  <title>My App</title>
</head>
<html>
  <body>
    <h1>Welcome to My App!</h1>
  </body>
</html>
```

2. Send the `index.html` as the response from `/`.
Modify the route handler of `/` to use `sendFile` instead of `send`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
```

`__dirname` is a Node.js variable containing the directory name of the currently executing file. Because we know the location of `index.html` to be in the same directory as `index.js`, simply appending the HTML's filename to `__dirname` yields the correct location for the file.

### Resources

Express: [expressjs.com](https://expressjs.com)
Nodemon: [npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)