# Add a Filesystem Watcher
As we will be developing in `smartsite`, we will be making changes to our script files. As we are making changes, we want to be able to test our changes just as a web user would use the functionality. A filesystem watcher is a program that ensures a running development application is providing the most recent changes to code as the developer is making changes and testing the changes.  The use case for a filesystem watcher is best illustrated by example. 

### 1. Ensure the node server is running 

<div class="filename">command line</div>

```bash
$ npm run start
```

### 2. Modify a `index.js`

Currently, the root route in `index.js` returns an HTML string with the phrase `Hello SmaRtsite`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Welcome to SmaRtsite!</h1>');
});
```

Change the sent response to read `Hello World` instead of `Welcome to SmaRtsite`, and save the file.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Hello World!</h1>');
});
```

### 3. Check for changes
In the broswer, navigate to `localhost:3000`, and check out the heading. It still says `Hello SmaRtsite!`.

This is because when the application is run with `node index.js`, all application files are cached in the state they were in when the command was invoked. To see the modified response, you must stop the currently running server process in the terminal. This can be accomplished by opening the terminal window and pressing `CMD+C` or `CTRL+C` depending on your operating system. Restart the server with `npm run start`. Navigate to the browser, and it now displays the updated text.

Restarting the server after every change is tedious, time-consuming, and presents a near impossible developer experience long-term. As such, `smartsite` will implement the file watching library `nodemon`.

<hr>

## Add nodemon
Nodemon is a library that is used to initialize a process from the local operating system, and is therefore a development dependency rather than an application dependency. Install the library as a dev dependency.

### 1. Install nodemon
<div class="filename">command line</div>

```bash
$ npm install --save-dev nodemon
```

### 2. Use nodemon
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

The `npx` command can be thought of as "**n**ode **p**ackage e**x**ecute." This signals to use the executable found within the local `node_modules` directory -- in this case `nodemon`.

### 3. Restart the server
Running `npm run start` will now invoke `nodemon`. `nodemon` will start the application as usual and restart the server process as code within the directory is changed. Restart the server.

<div class="filename">command line</div>

```
$ npm run start
```

### 4. Modify the code
Change the text sent from the root route back to `Welcome to SmaRtsite`, and *do not* restart the server.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Welcome to SmaRtsite!</h1>');
});
```

### 5. Check for changes
In the broswer, navigate to `localhost:3000`, and check out the heading. It now says `Welcome to SmaRtsite!` without needing a server restart. The filesystem watcher is working!

### 6. Git commit the changes
This was a significant unit of development. A development library was added, and it's functionality was fully implemented. `git commit` the changes to signify the completion of this development.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add nodemon'
```

### Resources
Nodemon: [npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)