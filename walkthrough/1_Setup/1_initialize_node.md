## Initialize Node
It's time to create the first files of the web application. 

### Initialize
The `npm init` command will start a setup wizard for the Node application. In Terminal, navigate to the application directory, and run `npm init`.

<div class="filename">command line</div>

```bash
$ cd path/to/my-app
$ npm init
```

For `entry point:`, use `index.js`; it is the default option, and required for parity with the walkthroughs. The default options for the rest of the selections is fine. Feel free to investigate the meaning of each, and customize the values as desired. Selection made in this wizard can be changed.

Here is example output from `npm init`:

<div class="filename">command line</div>

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my-app) 
version: (1.0.0) 
description: my-app Web Application Guide
entry point: (index.js) 
test command: 
git repository: (https://github.com/popdemtech/my-app.git) 
keywords: 
author: Popular Demand
license: (ISC) 
About to write to /Users/popdemtech/popdemtech/my-app/package.json:

{
  "name": "my-app",
  "version": "1.0.0",
  "description": "my-app Web Application Guide",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/popdemtech/my-app.git"
  },
  "author": "Popular Demand",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/popdemtech/my-app/issues"
  },
  "homepage": "https://github.com/popdemtech/my-app#readme"
}


Is this OK? (yes)
``` 

This command generates a `package.json` file in the directory in which it is run. `package.json` is used for configuration of Node.js applications, and will be revisited throughout the development process.

### Start the application
An application is a software script that is executed on a computer. To "start" this application, like every software, application code must be written and a command that starts the application must be defined.

Node.js scripts are run by passing its filename to the `node` executable. The `node` program reads the file, interprets the Javascript, and runs the functionality specified by the application.

To run the application, first create a file, `index.js` for the application code.

1. Create `index.js`
In the root of the project, create a file titled `index.js`. Any valid JavaScript can go in this file -- a `console.log` statement is shown in the example.

<div class="filename">index.js</div>

```javascript
console.log('Welcome to My App!');
```

At this point, the application can be run with `node index.js`.

2. Create the start script
A Node.js application's `package.json` is the place to define commonly used commands such as `start` and `test`. A top-level property `"scripts"` is used to map developer-selected command names to executable scripts. `package.json` already contains a `test` script.

Add a script called `start` that executes the `node` executable with `index.js`, and save the file.

<div class="filename">package.json</div>

```js
{
  ...,
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```

A script defined in `"scripts"` can be invoked from the command line with `npm run [script]`.

3. Run start script

<div class="filename">command line</div>

```
$ npm run start
```

You should see the output `Welcome to My App!` in the console. Just like that we have a simple yet functional Node.js application.