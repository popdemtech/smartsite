# Setup

## Git `my-app`
Git the only developer tool required before beginning this walkthrough. It's required for you to run the first command, `git clone`, and sync the starting directory to your local computer.

### What is Git?

Imagine every time you made a change to a project, you had to make a brand new directory, copy your existing work into it, make changes in this totally new directory, then _somehow_ totally replace the old work with the new work both locally and in production when the changes are finished. In the early days of the internet, this was solved with creative use of file transport protocol (FTP). The Git program both solves the tedious workflow and improves on full-file, FTP syncing.

Git is a version control management system that maintains what the software looked like in the past and what it looks like now. It keeps track of each incremental change to the codebase which allows for efficient filesystem syncing between local and remote environments by only applying the changeset at the time of sync.

A collection of files that is being tracked by Git is called a repository. The files on hard disk are called the Working Directory.

A repository is a virtual collection, the working directory is the filesystem a developer is modifying. As changes in the working directory are accepted to be code complete, they are added via command to the Git repository. The repository can then be synced between local environments and remote environments.

The Git development workflow also provides the ability to split-off (or "branch") new development work from a pre-established "master" branch. This allows the developer to build new features on top of the currently sanctified codebase, only adding the a new changeset. Once the new changes are approved, finalizing the changes into the existing project takes one command. If the new changes end up not making the cut, they can be reverted, discarded and/or saved for a later date.

In essence, Git takes snapshots of application files over time and allows developers to manage each snapshot independent of one another. There may be a revision on the developer's local computer, a different revision being visited by live traffic in production, and an entirely different revision up for development team review on a shared repository management system like Github.

### 1. Install Git

To get Git, use the [official installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


You're done with Git installation when you can run `git --version` and be presented with your installed Git gersion.

<div class="filename">command line</div>

```
$ git --version
```

### 2. Clone `my-app`
The `git clone` command downloads a git repository from the internet to a local working directory. Within the terminal, navigate to the directory you'd like to save `my-app` and run `git clone`.

<div class="filename">command line</div>

```
$ cd path/to/parent_directory
$ git clone https://github.com/popdemtech/my-app.git
$ cd my-app
```

This series of commands downloads `my-app` and places the terminal in the `my-app` directory.

The starting `my-app` directory is just this walkthrough. Following the steps provided, you will build out a Node.js web server, and the nearly empty directory will blossom into an internet application of whatever you wish it to be.

We just gotta create the application now. Let's get to it.

### Resources
A Simple Guide to Git: [http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/)

---

## Install Node.js

This walkthrough will cover building a web server application using Node.js. While JavaScript was initially developed for and still maintains its scripting dominance in a browser environment, Node.js is a JS runtime for use outside of a browser.

Node.js is an open source development platform for executing JavaScript code server-side. While JavaScript runs natively in a browser (i.e. client-side), Node.js provides developers the platform with which to build applications for a controlled environment that runs on a host computer (server-side), separate from the JavaScript that is delivered to the client's browser. In this way, a Node.js application is comparable to PHP, Java, and Ruby, and other application environments that handle web-traffic requests, but are not delivered to the client.

Windows users see [Install Node.js on Windows].

MacOS users, check out [Install Node.js on MacOS] for installation instructions.

Linux users, search a trusted search engine with the phrase "install node js linux" to find what you need.

## Install Node.js on Windows

### 1. Navigate to nodejs.org

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_0.png" style="width:50%;min-width:320px;" />
</p>

Navigate to [nodejs.org](https://nodejs.org) and select the version of node you want to download. Even number versions have Long-Term Support (LTS).

Long-term support "typically guarantees that critical bugs will be fixed for a total of 30 months." Production applications should use LTS versions. Use a more recent odd number version to test out latest features.

Read more about node's release schedule in the Resources.

### 2. Setup Wizard

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_1.png" style="width:50%;min-width:320px;" />
</p>

Once the installer finishes downloading, open the downloaded file to open the installation wizard.

### 3. Accept Terms

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_2.png" style="width:50%;min-width:320px;" />
</p>

Accept the terms of the License Agreement if you agree.

### 4. Select the Installation Directory

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_3.png" style="width:50%;min-width:320px;" />
</p>

The default location, `C:\Program Files\nodejs\`, is fine. If you install in a non-default location, ensure the directory is located within your command-line's `$PATH` variable.

### 5. Customize Features

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_4.png" style="width:50%;min-width:320px;" />
</p>

Click next unless you are certain you want something different. I have never customized this step.

### 6. Install Tools for Native Modules

You will need a few software tools to be installed in addition to NodeJS in order to compile certain JavaScript/C++ npm modules. NPM modules are 3rd party libraries that can be used to extend the functionality of your application.

If you decide not to install the tools, they can be installed later.

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_5.png" style="width:50%;min-width:320px;" />
</p>

I checked the box because I know I want the tools.

### 7. Install

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_6.png" style="width:50%;min-width:320px;" />
</p>

Install.

### 8. Watch the Progress Bar

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_7.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/installing_node_js.gif" style="width:50%;min-width:320px;" />
</p>

The installation took me \~3 minutes total.

### 9. Allow Node.js to make changes to the device

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_8.png" style="width:50%;min-width:320px;" />
</p>

### 10. After installation, Install Native Module Tools

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_9.png" style="width:50%;min-width:320px;" />
</p>

If you selected "Automatically install the necessary tools" in **Step 6**, a window will appear with some information about the libraries that are about to be installed. Continue through the prompts.

### 11. Finish Tools' Install in Powershell 

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_10.png" style="width:50%;min-width:320px;" />
</p>

The process will open a Powershell window with Administrator rights, and finish the installation in Powershell. Allow Powershell to make changes to the device.

### 12. Wait for and Debug Tools Install

This installation process takes longer than the Node.js install. The installer recommends closing *all* programs other than the installer during the install process.

I did not do that, and did not find the performance of my PC affected during install. However, I did experience an installation failure the first time...

### 12a. Repair Native Modules Install

It is common for the native modules installation to "fail" the first time. It's so common the installation wizard comes with a Repair button. If the native modules installation fails the first time, reactivate the Node.js installer download, and select the 'Repair' option. See "Repair Node Installation" in the Resources for details. See the Resourcse as well if you have an installation failure not fixed by this solution:

Find the downloaded file from **Step 1**, and select it.

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_11.png" style="width:50%;min-width:320px;" />
</p>

Select next, then select 'Repair.'

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_12.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_13.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_14.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_15.png" style="width:50%;min-width:320px;" />
</p>

### 13. Check Installation

Node and NPM should now be installed. If you installed the native modules, you will have those as well. From Windows Terminal (or similar), run the following commands and check the output:

<div class="filename">command line</div>

```
> node -v
v16.13.2

> npm -v
v8.2.1
```

`node -v` checks the version of node, and `npm -v` checks the version of npm, node package manager.

If native modules were installed, run the following to check the version of the installed libraries:

<div class="filename">command line</div>

```
> choco list -lo

Chocolatey v0.10.15
chocolatey 0.10.15
...long list...
visualstudio-installer 2.0.2
visualstudio2019-workload-vctools 1.0.1
visualstudio2019buildtools 16.11.9.0
21 packages installed.
```

In particular, check for the existance of visualstudio-installer, visualstudio2019-workload-vctools, and visualstudio2019buildtools libraries. (Note: The exact version and name of the Visual Studio tool may have progressed to higher versions than in the example output.)

Now that Node is installed, we'll get to building out `my-app`. Keep the following in mind: Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, developer libraries (things that can be `npm install`ed), and more. The Node.js ecosystem is ripe for software creation.

### Resources

Node.js Release Schedule and Information: [nodejs.org/en/about/releases](https://nodejs.org/en/about/releases/)

Manage PATH System Variable on Windows: [docs.oracle.com](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

Install Tools for Native Modules: [github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)

Repair Node Installation: [stackoverflow.com/a/68912225](https://stackoverflow.com/a/68912225)

---

## Install Node.js on MacOS

To develop a Node.js application on MacOS, the Node binaries must be installed. This guide walks through installing Homebrew, Node.js, and Node Version Manager (nvm).

### 1. Create a user with admin access.
Chances are you are already a user with admin access. If you are aware that you are not a user with admin access, follow [these steps](https://osxdaily.com/2017/07/17/how-create-new-admin-account-mac/) (osxdaily.com) to create such a user. You will need a user *with* admin access to create this new user, so contact an admin if necessary.

### 2. Install Homebrew
Homebrew is a package manager for MacOS. An OS package manager is used for downloading programs and libraries. Homebrew is used for installing and managing versions of CLI tools and other packages.

<div class="filename">command line</div>

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew -v
```

### 3. Remove existing node versions
In case there is already a Node installation on the Mac, remove it. We will be using nvm to manage Node versions, and a pre-existing installation will hijack any invocations of the `node` executable.

<div class="filename">command line</div>

```
$ brew uninstall --force node
```

### 4. Install NVM
Node Version Manager allows the developer to install and manage different versions of Node both a global and project-by-project basis.

<div class="filename">command line</div>

```
$ brew update
$ brew install nvm
```

### 5. Follow the instructions output by the nvm installer
<div class="filename">command line output</div>

```
You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.zshrc or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
/usr/local/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

Type `nvm help` for further information.
```

Practically, issue the following command:

<div class="filename">command line</div>

```
$ mkdir ~/.nvm
```

Copy the indicated output and paste it into `.zshrc`, and use the command `source` to load the new configuration into the active terminal.

<div class="filename">command line</div>

```
$ nano ~/.zshrc
$ source ~/.zshrc
```

### 6. Install the latest long-term support version of Node.js.
<div class="filename">command line</div>

```
$ nvm install --lts
$ nvm current
```

`nvm current` displays the currently active node version. It should be the version that was installed with `nvm install --lts`.

### 7. Check the installations
You should now have nvm and Node.js installed. Check the installation. Here are the commands with example output.

<div class="filename">command line</div>

```
$ nvm -v
0.39.1
$ node -v
v16.14.2
```

Now that Node is installed, we'll get to building out `my-app`. Keep the following in mind: Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, developer libraries (things that can be `npm install`ed), and more. The Node.js ecosystem is ripe for software creation.

## Resources

Similar walkthrough: https://tecadmin.net/install-nvm-macos-with-homebrew/

---

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

---

## Git Usage
Git is the industry-leading version control management tool. It provides character by character change tracking and syncing of changes between local and shared environment. Git commands and algorithms warrant a deep dive of their own. This walkthrough provides the simplest possible `git` workflow for a solo developer.

A useful advantage are the branching and merge strategies provided by Git which allow for multiple developers to work within the same codebase while keeping in sync with other developers' changes. For a solo developer, these strategies are useful in organizing product development and capturing each incremental change in a visualizable format.

Git is also required for Heroku, the deployed environment used in this walkthough. This will keep the files we develop locally in sync with the public server's filesystem.

### 1. Create .gitignore file
A `.gitignore` file is used to define which files and folders should not be saved to version control. Common elements not saved to version control are in-project dependency folders, such as `node_modules`, files containing sensitive information (such as private keys), and certain files used only by the developer's local operating system, such as Apple's `.DS_Store` file.

Create a file named `.gitignore` in the root directory with the following:

<div class="filename">.gitignore</div>

```
/node_modules
npm-debug.log
.DS_Store
/*.env
```

### 2. Save changes with `git`
As changes are made in local development, Git keeps track of them, but does not automatically save the changes to version control. Saving to version control is a two step process. First the changes must be "staged". This is essentially a holding area for changes that the developer can review before finalizing the changes. The second step is to finalize, or "commit", the changes.

The command to stage changes is `git add`. The command to finalize the changes into version control is `git commit`.

1. `git add`
Git's `add` command takes a list of files and directories that should be staged as a parameter.

<div class="filename">command line</div>

```
$ git add .
```

The `.` symbol is shorthand for "the current working directory." Calling `git add` with this parameter signals to Git to save all changes in the current directory. The command can also be run with a list file and directory names as parameters -- e.g. `git add index.js package.json`.

2. `git commit`
Git enforces that every commit have a commit message describing why the commit was made. A repository's commit messages should be a human-readable log of the changes over time. Use the `-m` flag with `git commit` to add a commit message inline. If the `-m` flag is not used, the terminal will open the default text editor for the developer to enter the commit message.

<div class="filename">command line</div>

```
$ git commit -m 'Initialize my app'
```

Git provides an immense catalog of functionality for repository management. As a developer's needs grow more complex, an expanded Git repetoire is a must. I recommend is this [Simple Guide to Git](http://rogerdudler.github.io/git-guide/)(http://rogerdudler.github.io/git-guide/) for next steps in building Git proficiency.

---

# Basics

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

### 6. Git commit the changes
This was a significant unit of development. The Express library was added and the initial web route was added to the application. `git commit` the changes to signify the completion of this development.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add express'
```

### Resources
Express: [expressjs.com](https://expressjs.com)

---

## Add a Filesystem Watcher
A filesystem watcher is a program that ensures a running development application is providing the most recent changes to code. The use case for a filesystem watcher is best illustrated by example. 

1. Ensure the node server is running `npm run start`

2. Modify a `index.js`
The current state of the root route in `index.js` is that it returns an HTML string with the phrase `Hello World`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Welcome to My App!</h1>');
});
```

Change the sent response to read `Hello World` instead of `Welcome to My App`, and save the file.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Hello World!</h1>');
});
```

3. Check for changes
In the broswer, navigate to `localhost:3000`, and check out the heading. It still says `Hello World!`.

This is because when the application is run with `node index.js`, all application files are cached in the state they were in when the command was invoked. To see the modified response, stop the currently running server with `CMD+C` or `CTRL+C` depending on your operating system, and restart it with `npm run start`. Navigating to the browser now will display the updated text.

Restarting the server after every change is tedious and will seem *more* tedious over time. And presents a near impossible developer experience long-term. As such, `my-app` will implement the file watching library `nodemon`.

### 1. Add nodemon
Nodemon is a library that is used to initialize a process from the local operating system, and is therefore a development dependency rather than an application dependency. Install the library as a dev dependency.

1. Install nodemon
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

4. Modify the code
Change the text sent from the root route back to `Welcome to My App`, and *do not* restart the server.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.send('<h1>Welcome to My App!</h1>');
});
```

5. Check for changes
In the broswer, navigate to `localhost:3000`, and check out the heading. It now says `Welcome to My App!` without needing a server restart. The filesystem watcher is working!

### 6. Git commit the changes
This was a significant unit of development. A development library was added, and it's functionality was fully implemented. `git commit` the changes to signify the completion of this development.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add nodemon'
```

### Resources
Nodemon: [npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

---

## Sending Web Pages
Currently, the application is configured to send an HTML string when the root route, `/`, is requested. While this is a valid use of Express route handling, a better approach is to keep end-user presentation and the application logic into separate files.

<dl>
    <dt>Application Logic</dt>
    <dd>The scripted code that handles the request/response cycle</dd>
    <dt>Presentation</dt>
    <dd>The response displayed to the consumer</dd>
</dl>

The separation of concerns between the routing and view layers is standard practice. This technique allows developer to optimize and organize the two areas separately which will become more important as the application grows.

### The Presentation Layer
It is safe to expect web-traffic to be viewed using a internet browsing application such as Chrome or Microsoft Edge. Modern internet broswers are equipped to translate many common web response formats into human usable form. The most familiar of these formats is likely HTML.

To start `my-app`'s presentation layer, we will send a basic HTML file.

### Sending HTML

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
Separation of Concerns: [https://deviq.com/principles/separation-of-concerns](https://deviq.com/principles/separation-of-concerns)

What is HTML?: [https://www.hostinger.com/tutorials/what-is-html](https://www.hostinger.com/tutorials/what-is-html)

---

## Dynamically Generated Web Pages

Static HTML files make up the majority of web pages delivered on the internet. An HTML file is considered "static" because the content is the same regardless of user identity or any other real-time factors. The benefit of a web *application* is that the application layer has the ability to process the user request and deliver a dynamic experience.

The ability to deliver a dynamic experience at the view layer is accomplished by use of **view templating.** This allows developers to create files that are a mix of static content and variables which are determined at the time the template is rendered, e.g. in response to a user request.

A template file is written in a **template language**. Template languages are often HTML-like, and support variable injection and often more complex scripting logic such as `for` loops. Modern web browsers cannot natively read the template language. A **templating engine** handles the conversion of a template and variables to an HTML file which is then delivered to the users' browsers.

A view template may have the content `<p>Hello, {{ user.name }}!</p>`, and a template engine would render `<p>Hello, Alexa!</p>`.

There are several template languages from which to choose. Because of the separation of presentational concerns from application logic, a given language is usually not specfic to a given application architecture, e.g. Node.js. Learning the template language once is transferrable  The application logic will invoke the template *engine* with parameters for which template file to render and what variables should be rendered therein, so it is important to choose a language with a respective template engine compatible with the application.

Given the ubiquity of view templating across all web server architectures, the problem of compatibility is not generally a concern. Many architectures come with built-in template rendering and a default templating language, and a developer can customize away from the default by adding a new rendering library.

The Express ecosystem supports many trusted template languages. `my-app` will use the Liquid template language.

### 1. Install template libraries
The Node.js application requires functionality for parsing and rendering the template language into HTML. The package `liquidjs` provides the JavaScript bindings for Liquid template rendering. use `npm install` to add the library.

<div class="filename">command line</div>

```
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
A liquid template file supports all valid HTML with the additional functionality of variable rendering and logicial operators. They use a file extension of `.liquid` instead of `.html`. Copy the current `index.html` into a new file named `index.liquid` in the root directory of the application.

<div class="filename">index.liquid</div>

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

### 4. Render the view template
To send a static HTML file, Express' `response.sendFile` method was used. In the case of view template rendering, a different method must be used to indicate the desired response to send to the user must first be generated through a templating engine, `response.render`.

`response.render` accepts two parameters, 1) the filename and 2) an object of variables with which to render the file.

1. Use `response.render` within the root route handler in place of `response.sendFile`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render(__dirname + '/index.liquid');
});
```

2. Save and navigate to `localhost:3000`.

[image welcome to my app]


### 3. Configure view options
An Express application can be configured with a variety of view options. Setting these options globally well explicity set filesystem architecture, and often allow for cleaner code in Express' middleware and 

To continue the trend of clearly separating concerns, the architecture of `my-app` will utilize a views directory. Once created, files that are meant to be rendered and/or sent as a user response should be placed in this folder to clearly separate the presentation layer from the JavaScript logic.

1. Create a new folder named `views` in the root directory
Express, by default, will look for views (i.e. templates) in a directory named `views`. Specifically, it will look for a directory matching the definition `process.cwd() + '/views'`, where `process.cwd()` is the "current working directory" (`cwd`). As most node applications initialize from the root directory, the expanded file path is `<root directory>/views`. Although `my-app` will utilize the default, this setting is configurable.

2. Move `index.liquid` into the `views` folder.

<div class="filename">views/index.liquid</div>

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

At this point, visiting `localhost:3000` should lead to an error response returned. follow the next step to correct this.

3. Modify `index.js` to render `views/index.liquid`
With the Express application set to default its search for views in `/views`, route handlers no longer have to specify the full file path to renderable files. Modify the handler of `/` by removing references to `_dirname`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render('index.liquid');
});
```

`localhost:3000` should now render the familiar "Welcome!" message.

3. Set the view engine
Express' `app.set` method provides a way for developers to configure application-wide settings. A standard setting is "view engine" which is used to configure the default file extension for views. Adding the view engine setting allows for developers to omit the file extension from calls to `app.render`.

Add the setting to `index.js` and remove the `.liquid` extension in the root route.

```javascript
app.set('view engine', 'liquid');

app.get('/', function(request, response) {
  response.render('index');
});
```

The application should work as expected.

### 4. Render dynamic content
A benefit of using view templates is the ability to add content to be rendered at the point of a user request. Within a Liquid template, use the syntax `{{ variable_name }}` to indicate a value passed at render time should be rendered to string. In addition, Liquid's `if/else` syntax `{% if variable_name %} ... {% else %} ... {% endif %}`, offers basic logical switching to determine what block of content to render based on whether the variable is defined at render time. If the statement evaluates to true, 

To directly render a variable, use the double curly brace syntax, `{{ }}`. To script non-rendered view logic, use the curly brace and percent sign syntax, `{% %}`.

1. Modify the view to respond to dynamically injected variables.
Add a section to `index.liquid` that renders passed in variables. 

<div class="filename">views/index.liquid</div>

```html
<!DOCTYPE html>
<head>
  <title>My App</title>
</head>
<html>
  <body>
    <h1>Welcome to My App!</h1>
    <p>This application is running in the <b>{{ nodeEnv }}</b> environment.</p>
    {% if debug %}
      <p><b>Debug Information</b></p>
      <p>Node version: {{ nodeVersion }}</p>
      <p>Server Time: {{ serverTime }}</p>
    {% endif %}
    <p></p>
  </body>
</html>
```

Notice that the "Debug Information" section will only render if the `debug` variable is defined. If you navigate to the page at `localhost:3000`, there will be no visible difference. We need to render the page with at least the `debug` variable.

2. Render the template with variables.
Modify the `/` route handler to define the variables `debug`, `nodeVersion`, and `serverTime`, and pass them in as the second parameter to `response.render`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  const debug = request.query.debug;
  const nodeVersion = process.version;
  const serverTime = new Date();
  response.render('index', { debug, nodeVersion, serverTime });
});
```

Notice the definition of the `debug` variable: `request.query.debug`. The `query` property of Express `Request` objects returns the query parameters section of the requested URL string. By default, query parameters found at `request.query` are formatted as a JavaScript object. For example, the query string of `?debug=true&limit=10` will be of the form `{ debug: 'true', limit: '10' }`.

**Note:** Query string values are necessarily coerced to string for HTTP transport. While a developer may intend to use a boolean or number value from the query string, Express provides the values as strings that must be type cast for use as a boolean or number, etc.

3. Load the page
With the above changes in place, loading the page at `localhost:3000` renders the same landing page.

To see the new changes, request the page with a `debug` query string parameter: `localhost:3000?debug=true`. The page should now display a section of "Debug Information."

[image debug information]

### 5. `git commit`
Configuring and initializing the view engine within `my-app` is a significant unit of development. This is a perfect time to bookmark filesystem state within version control.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Add template engine'
```

### Summary

As application development continues, place template files in the `/views` directory with a file extension of `.liquid`. The files may contain static or dynamic content. If the content should be dynamically rendered, provide an object of local variables as the second parameter `response.render`.

The Liquid template language provides additional functiontality to the HTML specification in the form of flow control (`if/else`), iteration, and many more advanced operations. Visit the Liquid reference guide in **Resources** section to explore Liquid's full feature set.

### Resources
Template engines in Express: [https://expressjs.com/en/guide/using-template-engines](https://expressjs.com/en/guide/using-template-engines.html)

Express' `app.set`: [https://expressjs.com/en/api.html](https://expressjs.com/en/api.html#app.set)

Express' `response.render`: [https://expressjs.com/en/api.html](https://expressjs.com/en/api.html#res.render)

Liquid Template Language: [https://shopify.github.io/liquid/](https://shopify.github.io/liquid/)

---

## Deploying to Heroku

So far, `my-app` has only been served from a local development server. To open the application for public web traffic, the application has to have a public IP address, the proper configuration with OSI layer-7 programs allowing public web traffic. Chances are you do not want to open your personal computer to public traffic. As well, learning how to provision a operating system level server is a walkthrough in its own. Luckily, there are Platforms-as-a-Service that provide fully-provisioned server space for launching public web applications with ease. One such platform is Heroku.

Heroku provides server-space in the form of what they call "dynos." Heroku's free-tier includes unlimited dynos and 550 dyno hours per month. Verifying the account with a credit card will increase the number of free dyno hours to 1100. Dynos on the free tier will sleep after 30 minutes of inactivity. Visiting the web address of a sleeping dyno will take longer than usual to render the first request as the dyno is activated from the sleeping state.

When an application is ready for production-level availability, simply upgrade the dyno to a paid tier to have the application accessible 24/7. At the time of this writing, paid tiers start at $7 per month per dyno.

In addition to upgrading application availability, Heroku has an Add-ons marketplace which provides database, cache, and application monitoring services to name a few. These services include industry standard tools specially configured for plug-and-play interfacing with the Heroku platform. Each add-on has it's own tiered pricing system, and there are many with a free tier which match Heroku's free tier on being perfectly suited for learning and prototyping.

### 1. Heroku Prerequisites
Heroku manages application deployments with Git. A Git application repository is Prerequisite 0, and necessary for Heroku deployment. A `my-app` Git repository was initialized in a previous section, but keep this requirement in mind for any future new build.

1. Create a Heroku account
To get started with Heroku, you will need a Heroku account. If you do not yet have a Heroku account, navigate to [heroku.com](https://heroku.com) and create one.

2. Install the Heroku CLI
Heroku provides a command-line interface so that creating, configuring, and maintaining Heroku applications and add-ons is as easy as a terminal command. This is very powerful functionality that ultimately could be done via Heroku's web interface, yet the Heroku terminal commands are much more concise approach to accomplishing these tasks. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (https://devcenter.heroku.com/articles/heroku-cli).

### 1. `heroku create`
Run the `heroku create` command. Use the optional `<appName>` parameter to create a user friendly slug.

<div class="filename">command line</div>

```bash
$ heroku create <appName>
```
Replace `<appName>` with your choice of app name. This affects the application's URL. For example, `heroku create my-app` will be accessible from the URL `my-app.herokuapp.com`. The output of the command will list the remote application's URL.

<div class="filename">command line</div>

```bash
$ heroku create my-app
Creating ⬢ my-app... done
https://my-app.herokuapp.com/ | https://git.heroku.com/my-app.git
````

Heroku subdomains must be unique. If the `<appName>` selected is already in use, you will need to re-run the command with a new name. If no `<appName>` is provided, creates the app with a random slug. For example `heroku create` with no name specified will create the URL with a random subdomain such as `sleepy-meadow-81798.herokuapp.com`.

Notice as well that the output of the `create` command also lists the URL for the application's Heroku Git repository. This is Heroku's copy of the filesystem to which `git commit`ed changesets will be applied.

### 2. `git commit`
The most recent git commit is what will go live on Heroku. If there are local changes to the working directory that are not committed, they will not be made live on Heroku. Keep this in mind, and use it when appropriate. For now, we will save all local changes to the local git repository and sync the changes to Heroku.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Create commit'
```

### 3. Push to Heroku
The `heroku create` command added a remote git repository on Heroku's servers. See this new remote by running the command `$ git remote -v`. Push the code to this remote.

<div class="filename">command line</div>

```
$ git push heroku [branchName]
```

You can watch the build logs output in the terminal. Whether the deployment is successful or not is displayed in the terminal at the end of the logs.

### 4. Access the application.
The deployed application can be accessed by navigating in the browser to the URL output by Step 1. You can also open the deployed application with the command `heroku open`.

<div class="filename">command line</div>

```bash
$ heroku open
```

---

## Add Functionality to the Frontend
Adding functionality to a website takes it from being a presentational asset to an interactive asset. This functionality is what will keep you and the site's visitors engaged and coming back.

We'll make something useful -- a PDF invoice generator. All of the code will be browser-based with a server-side route to deliver the static assets (HTML/CSS/JS).

### 1. Add `generate-pdf.liquid` View
Within the views folder, add a webpage that will be delivered when the user navigates to the "/generate-pdf" route of the website.

If you've been following along, copy and paste the boilerplate templating from the `hello-world.liquid` example. Within the `{% block content %}` block, add the following code. Feel free to add your own twist. We'll be fleshing out the JavaScript in a moment.
```html
<h1>Generate PDF</h1>

<button onclick="generatePDF()">Generate PDF</button>

<script>
  function generatePDF() {
    alert('pdf generating');
  }
</script>
```

### 2. Add Route to `index.js`
When the user navigates to `/generate-pdf`, they should receive the newly added view. Within `index.js`, add a route that delivers `generate-pdf.liquid`.
```javascript
app.get('/generate-pdf', function(request, response) {
  response.render('generate-pdf');
});
```

### 3. Include `jspdf`
The library `jspdf` will be used to convert text and HTML to the PDF file format.

1. Go to the [JsPDF repository](https://github.com/parallax/jsPDF) and navigate to the [docs](http://raw.githack.com/MrRio/jsPDF/master/docs/index.html).

2. Copy the CDN link. It will be used as the `src` value of a `<script>` tag. My CDN link is `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`.

3. Add the script to `generate-pdf.liquid`.
Above the existing script tag, add the following script:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

4. Generate a PDF
Replace the code within `generatePDF` with code that will actually generate a PDF!
```javascript
const { jsPDF } = window.jspdf;
const doc = new jsPDF();
doc.text("The PDF text", 10, 10);
doc.save("generate-pdf.pdf");
```

### 4. Customize the PDF

1. Configure `jspdf` to produce a desired page layout.
The [jsPDF constuctor](http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html) accepts an options object for configuring the PDF.

```
# Configuration keys with default values
new jsPDF({
 orientation: 'p',
 unit: 'mm',
 format: 'a4',
 putOnlyUsedFonts:true,
 compress: false,
 precision: 16,
 userUnit: 16,
 encryption: {
 	userPassword:,
 	ownerPassword:,
 	userPermissions:,
 },
 floatPrecision: 16
});
```

For a portrait, letter-sized page, measured by inches, use the following constructor:
```javascript
const { jsPDF } = window.jspdf;
const doc = new jsPDF({
  unit: 'px',
  format: 'letter'
});
doc.text("The PDF text", 100, 100); // 100px from left and top
```

### 5. Generate the PDF from HTML
For the invoice generator, we will use the `html()` method available on the `jsPDF` object. This requires an additional library be included.

1. Add the following script after the `jspdf` script tag:
```
<script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
```

2. Add an HTML element to the page that will contain the PDF's html.
```html
<div style="border: 1px solid black;width:fit-content;">
  <div id="pdf-html" style="width:6.5in; padding:1in;font-family:sans-serif;">

    <div class="invoice">
      <div class="invoice-number">Invoice #0045</div>
      <div class="invoice-date">Date: 04/02/2022</div>
      <div class="invoice-due-date">Due Date: 04/17/2022</div>
      <div class="invoice-balance-due">Balance Due: $1000.00</div>
    </div>

    <div class="company">
      <div class="company-name small-heading">POPULAR DEMAND</div>
      <div class="company-contact">popdemtech@gmail.com</div>
      <div class="company-address">www.popdemtech.com</div>
    </div>

    <br>

    <div class="bill-to">
      <div class="bill-to small-heading">BILL TO</div>
      <div class="bill-to-name">Love's Presents</div>
      <div class="bill-to-contact">support@lovespresents.com</div>
    </div>

    <br><hr><br>

    <h2 class="section-heading">Invoice</h2>

    <table class="line-items">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr class="line-item-1">
          <td class="line-item-date">04/2022</td>
          <td class="line-item-description">Business Management</td>
          <td class="line-item-rate">$1000/mo</td>
          <td class="line-item-amount">$1000.00</td>
        </tr>
      </tbody>

      <tfoot>
        <tr class="padding-row" style="color:transparent;">
          <td>padding-row</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="balance-due"><b>Balance Due</b></td>
          <td class="balance-amount">$1000.00</td>
        </tr>
      </tfoot>
    </table>

    <br><br>

    <div class="memo">
      <div class="memo small-heading">MEMO</div>
      <div class="memo-text">Pleasure doing buisness with you :)</div>
    </div>
  </div>
</div>
```

We will be selecting the element `#pdf-html` and converting it to PDF. Whatever the HTML content of this element is will end up in the generated PDF. For now it is static boiler plate for an invoice. See **References** for CSS styles to make the PDF more visually appealing.

3. Use JavaScript to convert the HTML to PDF
Within `generatePDF`, select `#pdf-html` and use it within `.html()` to set the content of the PDF.
```javascript
const { jsPDF } = window.jspdf;
const doc = new jsPDF({
  unit: 'px',
  format: 'letter',
  hotfixes: ['px_scaling']
});

const pdfHtml = document.getElementById('pdf-html');

doc.html(pdfHtml, {
  callback: function (pdf) {
    pdf.save('generate-pdf.pdf');
  }
});
```

The `callback` option provides access to the PDF data generated from the HTML. This `callback` area is the only place the generated PDF is exposed. Save it, email it, or do what you need with it in the `callback` function.

Initialize the `jsPDF` with `hotfixes: ['px_scaling']`. As of this writing, this hotfix is required for HTML elements to render at the correct scale within the PDF. For the curious, remove the hotfix and see what happens.

You should now be able to run the server, and generate a PDF at the `/generate-pdf` route.

4. Add `/generate-pdf` to the navigation list of `index.liquid`.

### Resources
1. Should I add script tags to `<head>` or `<body>`?: [https://stackoverflow.com/a/23185283](https://stackoverflow.com/a/23185283)

2. Add the following CSS to the page to have a more visually friendly PDF:
```html
<style>
.small-heading {
  font-weight: 700;
  font-variant: small-caps;
  font-size: 1.1em;
}

.section-heading {
  margin-top: 0;
}

#pdf-html {
  position: relative;
}

.top-box {
  position:absolute;
  top:0;
  left:0;
  width:8.5in;
  height:.5in;
  background-color:#ccc;
  z-index:-1;
}

.invoice {
  float: right;
  width: 2in;
  padding: .1in;
  border: 2px solid black;
}

.line-items {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}

th, td {
  padding: .1in 0;
}

.padding-row {
  color: transparent;
}

.balance-due {
  background-color: #ccc;
  border: 1px solid black;
}

.balance-amount {
  border: 1px solid black;
}

.balance-due, .balance-amount {
  padding: .1in;
}
</style>
```

---

## Invoice Creator
The use case for an invoice generator is a sole proprietor or business needing to provide an invoice for services they provided. An invoice is an itemized list that records the products or services you provided to your customers, the total amount due, and a method for them to pay you for those items or services.

The PDF generated in the `/generate-pdf` module is perfect in this use case as a template. Some details, such as company name, email, and line items need to be filled in after the user has loaded the page. We will use a `<input>` elements with JavaScript to accomplish this.


### Maintaining Code
As I copy `generate-pdf.liquid` as a template for the new file, I immediately recognize a common sense refactor that will improve legibility -- there are `class` attributes throughout the HTML that are not being used and are not providing much new context. It's a cleaner look without these redundant values.

A question arises: Should I also clean up the code in `generate-pdf.liquid`? The answer to this question, like most if not all development questions is the usual: It depends.

What is the purpose of the `generate-pdf.liquid` file? In this specialty case, the file exists as an artifact to the `/generate-pdf` module. In a more standard use case for web development, the intermediate step of delivering a singularly useful PDF would not remain as a standalone webpage. The HTML for `generate-pdf.liquid` and `invoice-creator.liquid` would *not* be duplicated. Any refactors for the later revision of the page would exist as the state of the webpage.

For `invoice-creator.liquid`, I will remove the redundant classes. In `generate-pdf.liquid`, I leave the code for posterity

### Pseudocode
The strategy for selecting and replacing text with JavaScript is to keep a record of known replaceable fields. The replaceable fields will be indicated by a `<span>` with a unique `data-pdf-field` attibute. We will map each field to an `<input/>` element, and allow the user to update each field individually.

### Resources
Data attributes: [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

---

## Authentication
User authentication allows developers of a web application to craft individualized experiences. In practice, this means allowing access to priveleged material such as creating database records and visiting . This ability to deliver dynamic content individualized per visitor session is the general differentiator between a web*site* and a web *application*.

The ability to register a user account with the app, and sign in and out on request is the basis of user authentication. Identity and Access Management systems is a discipline in its own right. It is a foundational component to the interactive internet. Consider the example of a social media platform.

Once a user logs in, the application can display content based on user preferences and saved data. Consider the FaceBook profile page. Every user of FaceBook can navigate to `facebook.com/profile`, and be presented with a profile page. Despite receiving the same webpage template, the page is customized to display the feed and information of the currently logged in user

Further, if a user *is not* a logged in user of FaceBook, the page does not display and instead redirects to registration form. The ability to gate features is an additional benefit of adding an authentication component to a web application.

---

## Add Authentication with Auth0

### Auth0
`my-app` will utilize the Auth0 service for authentication. Auth0 is a drop-in IAM solution to add authentication and authorization services to an application. Notably, it comes with single-sign on which will allow users of `my-app` to sign up with the social provider (e.g. Google, Apple) of their choice. In addition to the fundamental authentication flow featured in `my-app` Basics, Auth0 offers further authentication features such as multi-factor authentication, custom landing pages, and multi-domain applications.

### 1. Sign up for Auth0
Auth0 provides a user interface for configuring applications' authentication settings. Setting up an application in the interface is a step-by-step walkthrough process.

1. Sign up for Auth0's free tier
2. Navigate to the Applications Dashboard
3. "Create Application". Set name and select "Regular Web Application"
4. Select Node.js from the list of supported frameworks and "Integrate now"
5. Set the "Allowed Callback URL"
  * Set this value to `https://localhost:3001/callback`.
  * More the callback URL is covered in the "Caddy reverse proxy" section.
* Set "Allowed Logout URLs"
  * Set this value to `https://localhost:3001`

### 2. Add Auth0 to `my-app`
Now that the third-party service is configured to accept requests, we must now add code within `my-app` that makes calls to Auth0's application interface (API). While using raw HTTP calls to accomplish this is possible, `my-app` will utilize Auth0 provided API wrapping library, `express-openid-connect`. This package abstracts the HTTP routing and configuration to JavaScript functions and classes with developer-friendly interfaces.

1. Install the `express-openid-connect` authentication middleware.

<div class="filename">command line</div>

```
$ npm install express-openid-connect
```

2. Copy the configuration code provided by Auth0's Quick Start wizard.

The Express OpenID library provides a router that defines authentication routes -- `/login`, `/logout`, and `/callback` -- for the application. Under the hood, the package is using the familiar syntax for defining a route for an Express app.

```javascript
app.get('/login', handleLogin);
app.get('/logout', handleLogout);
```

Instead of the end using developer having to define this logic or handling functions, `express-openid-connect` exposes a configuration object interface. The developer simply initializes the router with application specific configuration, and all authentication routing is forwarded to Auth0 as necessary.

Better yet, Auth0 provides the configuration object and JavaScript snippet within their Quick Start interface. The snippet goes in `index.js`. It requires the `auth` router from `express-openid-connect`, and configures the `auth` router with variables provided by Auth0.

<div class="filename">index.js</div>

```javascript
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://localhost:3001',
  clientID: '[UNIQUE CLIENT ID]',
  issuerBaseURL: 'https://[UNIQUE ID].us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
```

Next, the snippet provides an example route that utilizes the `isAuthenticated` helper method provided by the `auth` middleware. `my-app` already has a `/` route, so if you intend to keep the example route, rename its path to avoid pathname conflicts.

<div class="filename">index.js</div>

```javascript
// req.oidc is provided from the auth router
// isAuthenticated is a method on the req.oidc object
app.get('/auth-check', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
```

### 3. Set up an HTTPS proxy
Notice that the `baseURL` Auth0 is aware of is `https://localhost:3001`. Auth0 requires authentication traffic be delivered via the HTTP**Secure** protocol. HTTPS is an extension to the HTTP protocol, but includes layers of security via encryption and certificate checking to ensure the identity of web servers.

The Auth0 configuration is different in two ways from the Express server in `index.js`:

<ol>
  <li>It is served over the <pre>HTTPS</pre> protocol.</li>
  <li>Its port address is 3001.</li>
</ol>

In this step, we'll set up a webserver to traffic (i.e. proxy) HTTPS web traffic at port 3001 to the Express server listening at port 3000. When the proxy server is running, the application available at both `http://localhost:3000` and `https://localhost:3001`.

Note: This solution is for local development. The proxy server will not need to be run in production because Heroku defaults to serving all web traffic over HTTPS.

Install the `@leafac/caddy` npm library as a dev dependency.

<div class="filename">command line</div>

```
$ npm i --save-dev @leafac/caddy
```

### 4. Create a start script for the proxy server

Add a script, `https-proxy`, to `package.json`:

<div class="filename">package.json</div>

```javascript
"scripts": {
  ...,
  "https-proxy": "npx @leafac/caddy reverse-proxy --from localhost:3001 --to localhost:3000"
}
```

The caddy library defaults to interpreting the `--from` parameter as `https` and the `to` parameter as `http` -- exactly what is needed in this case.

We can now run `npm run https-proxy` and the proxy server will initialize and forward traffic HTTPS traffic at port 3001 to port 3000. You will have to open seperate terminal windows to run `npm run start` and `npm run https-proxy` concurrently. Alternatively, look into an npm library like [`npm-run-all`](https://www.npmjs.com/package/npm-run-all) for a tool to run both commands from one terminal window.

### 5. Test locally
1. Within `index.js`, alter `/` route to pass the `isAuthenticated()` boolean to the front end.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render('index', {
    loggedIn: request.oidc.isAuthenticated()
  });
});
```

2. Alter `index.liquid` to show a Logout or Login button depending on whether there is a currently logged in user. Within the list of links:

<div class="filename">index.liquid</div>

```html
<li>
  {% if loggedIn %}
  <a href="/logout">Logout</a>
  {% else %}
  <a href="/login">Login</a>
  {% endif %}
</li>
``` 

3. To see the full changes, first run the Express and Caddy servers (`npm run start` and `npm run dev-proxy` respectively.) Next, open a browser to `localhost:3001`, and navigate through the authentication flow.

<ol>
  <li>Click Login</li>
  <li>Authenticate with Auth0</li>
  <li>Be redirected back to the base URL, <pre>localhost:3001</pre>.</li>
  <li>Click Logout</li>
</ol>

### 6. Git commit the changes
This was a significant unit of development. The server now has the ability to authenticate users, albeit only for the local environment. We will look at authentication for the deployed environment in the next section. For now, `git commit`!

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add auth in development'
```

### Resources
Auth0: https://auth0.com/docs/
Auth0 Explainer Video: https://auth0.com/resources/videos/auth0-explainer-video
Auth0 Express: https://auth0.com/docs/quickstart/webapp/express
HTTPS in Development: https://auth0.com/docs/libraries/secure-local-development
Run Node Commands Simultaneously: https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93


---

## Authentication in the Deployed Environment
To get authentication accessible to an internet audience, we will have to get the feature live in a deployed environment. After some minor changes to the Auth0 configuration and application code, the application will be ready for deploy to Heroku.

The application, both within the code and within the Auth0 interface, is currently configured to use `localhost` addresses for callbacks and redirects. The base URL in the deployed state will be different -- `<your_app_slug>.herokuapp.com` if you are following this walkthrough.

The first approach to look at is using the same Auth0 application for local development and in the deployed environment. There are use cases for this method, but it is not the most robust solution.

### Authentication Using the Same Auth0 Application
Within the Auth0 interface, the application will need to be configured to listen for traffic coming from both the development server *and* the live deployment server. Notably, these servers have different root URLs. 

### 1. Modify the Auth0 configuration

Add `https://<your-app>.herokuapp.com` alongside the `https://localhost` entries.

[image callback_urls.png]

The "Allowed Callback URLs" and "Allowed Logout URLs" fields accept comma-separated values. Be sure to use `https` as you type these values. Save changes.

### 2. Modify the Express server
Within `index.js`, alter the Auth0 configuration to conditionally use the Heroku URL as the application's `baseURL`.

<div class="filename">index.js</div>

```javascript
// Auth0
const config = {
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://<your-app>.herokuapp.com' : 'https://localhost:3001',
  ...
};
```

### 3. Modify the Procfile
The conditional added in step 2 evaluates to true if the `NODE_ENV` environment variable is set to `'production'`. If the env variable is not set or is set to a different value, the conditional will evaluate to false. We will force the environment variable to be set to `'production'` when Heroku starts the server process.

A common method of providing environment variables to a process is to define them immediately before the process command. The `Procfile` contains the command Heroku uses to start the web server. Define `NODE_ENV` at the start of the `web` process.

<div class="filename">Procfile</div>

```
web: NODE_ENV=production npm run start
```

4. Deploy the application to Heroku.
`git add` and `commit` all changes, then push the Git repository to Heroku.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add auth for Heroku'
$ git push heroku master
```

When the deploy is finished and if all is configured properly, the application will be available at its deployed URL with the authentication feature. Use the `heroku open` utility to open the app in a web browser.

<div class="filename">command line</div>

```
$ heroku open
```

### Resources
Environment Variables in Node.js: [https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

---

## Environment Variables
The need for environment specific configuration is inherent in developing a web application. Environment variables are variables that describe the environment in which the application or script is being invoked. `my-app` is currently configured to run in two environments: a developer's local system and Heroku for production. As we encountered in the last section, a web application will likely be required to have different configuration for the different environments.

Specifically, the application needed to be aware of which environment it was running in to know with what `baseUrl` to configure the Auth0 middleware.

<div class="filename">index.js</div>

```javascript
const config = {
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://<your-app>.herokuapp.com' : 'https://localhost:3001',
  ...
};
```

Environment variables are the solution for the differing configuration variables, yet the implementation varies. Currently, `my-app` uses an inline ternary operator to determine a selection between two publically available datum. This solution a) does not scale, and b) will not work for datasets we would not like to be publically exposed.

To get a good grasp on the issues of scalability and security, let's look at the example of adding a new application configuration that will need to be different per environment. For illustration, we'll consider adding database credentials. A database connection requires the Node.js application to be configured with a username, password, and host URL to authenticate with the database server. These values will be different between environments.

As a look ahead, the foundations covered here will be implemented in the **Database** section.

### Scalability
Because `my-app` runs in only two environments, checking if an environment variable is one of the possible values is able to be accomplished in one line. But what if there were more than two environments? To use the example of adding database credentials, the application will need to be configured for development, production and *test* environment -- this would require a check for one of three values.

<div class="filename">pseudocode</div>

```
const dbHost = process.env.NODE_ENV == 'production' ? 'production.database' : process.env.NODE_ENV == 'test' ? 'test.database' : 'development.database';
```

This process is barely legible using ternary operators, and a `switch` statement is likely more suited:

<div class="filename">pseudocode</div>

```javascript
let dbHost;
switch(process.env.NODE_ENV) {
  case 'production':
    dbHost = 'production.database'
  case 'test':
    dbHost = 'test.database'
  default:
    dbHost = 'development.database'
}
```

This is barely more readable. Developers must now contend with minimum 9-line `switch` statements for each database configuration variable. If this pattern continues into future development, each new database, third-party integration or *<reason>* to use environment variables will come with the same burden of clutter.

A solution for scalability looks like keeping configuration variables stored in environment-specific objects. When the application boots up, select the appropriate configuration object based on `NODE_ENV`.

<div class="filename">pseudocode</div>

```javascript
// index.js
const environments = {
  "development": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "my-app",
    "dbHost": "localhost:5432"
  },
  "production": {
    "dbUser": "my-app",
    "dbPassword": "myappXYZ123",
    "dbName": "my-app",
    "dbHost": 'heroku-postgres://my-app',
  },
  "test": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "my-app-test",
    "dbHost": "localhost:5432"
  }
};

const config = environments[process.env.NODE_ENV] || environments['development'];
```

By collecting variables into environment specific objects, using environment variables within application scripts is as simple as accessing the appropriate property on the environment specific `config` object. Because checking `NODE_ENV` occurs at the point of selecting the correct `config` object, the need for `switch` statments and ternary operators is removed.

<div class="filename">pseudocode</div>

```javascript

const dbHost = process.env.NODE_ENV == 'production' ? 'production.database' : process.env.NODE_ENV == 'test' ? 'test.database' : 'development.database';

// turns into

const dbHost = config.dbHost;
```

This solves scalability in the following ways:

1. As new **environment variables** are added, the process for development is to add the variable to each environment's object, and access the variable within the JavaScript as `config.<property>`.

2. As new **environments** are added -- such as a remote test environment for a continuous integration workflow -- configuring a environment is as simple as adding a new top-level configuration object, and setting `NODE_ENV` to the proper value at server initialization.

3. There is no complex logic involved in determining the correct set of environment variables to use.

### Security
The need for security arises when a web application needs access to data that should not be checked into source code. This is clearly illustrated in the example database credentials within the `environments` object:

<div class="filename">pseudocode</div>

```javascript
const environments = {
  "production": {
    "dbUser": "my-app",
    "dbPassword": "myappXYZ123",
    "dbName": "my-app",
    "dbHost": 'heroku-postgres://my-app',
  }
};
```

If this code is checked into the source repository using `git commit`, a nefarious internet abuser would be able to impersonate the application, and gain full access to the database. While there are many safeguards in place to encrypt transmissions carrying the source code, e.g. HTTPS, there are many areas of the deployment pipeline where application code is readable in plaintext.

**Do not save private keys and passwords to source code.** More than a best practice, this is standard operating procedure for organizational and user security.

We have been speaking of environment variables in terms of their use in a web application, but have glossed over their practical feature as it pertains to application development at large. An environment variable, conventionally written in `ALL_CAPS` snakecase, is set at the *operating system* or *process* level. This is external to the JavaScript application. The `process.env` variable within Node.js has access to these lower-level variables.

After setting the variables within the operating system environment, using these variables within the app is as simple as `process.env`.

<div class="filename">pseudocode</div>

```javascript
const environments = {
  "production": {
    "dbUser": process.env.DB_USER,
    "dbPassword": process.env.DB_PASS,
    "dbName": process.env.DB_NAME,
    "dbHost": process.env.DB_HOST,
  }
};
```

While the secure variable now will be defined external to the application, an open question remains: *"Where will environment variables be defined?"*

For local development, a file that's been added to `.gitignore` suffices. Heroku, the deployed environment, provides both a CLI and graphic interface for entering custom environment variables.

### Review
Environment variables provide a standard interface for developers to specifiy configuration on a per-environment basis. By extracting environment-dependent configuration into a structured object, we simplify the application code. The code is simplified by a reduction of logic and a compacting of locations where environment variable data can be found.

Environment variables are also used to keep secure data out of application logic. By defining and providing variables *external* to the application, these values are not accessible to unethical hackers who may get access to source code.

### Resources
Environment variable: [https://en.wikipedia.org/wiki/Environment_variable](https://en.wikipedia.org/wiki/Environment_variable)

Working with Environment Variables in Node.js: [https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

The Twelve Factor App (Config): [https://12factor.net/config](https://12factor.net/config)

---

## Using Environment Variables
As covered in the last section, environment variables are used to capture environment specifc configuration. We will use the conventions outlined in the previous section to handle environment variables in `my-app`.

The Node.js community has converged on the `dotenv` library to manage environment variables in application code. We will add `dotenv` to the application and use environment variables to manage Auth0 configuration variables.

### 1. Install dotenv
Dotenv will be used in all environments. Save it as an application dependency.

<div class="filename">command line</div>

```
$ npm install dotenv
```

### 2. Create .env
Dotenv works by reading a file named `.env` located in the root directory. Variables defined in `.env` using the format `VARIABLE_NAME="value"` are read into the application and made available on the `process.env` object.

1. Create `.env`
In the root directory, create a new file named `.env`. In this file, define a variable for Auth0 base URL.

<div class="filename">.env</div>

```
AUTH0_BASE_URL="https://localhost:3001"
```

### 3. Use the variables in the application
Using the dotenv library within the web application involves importing the library, and calling it's `config()` method. This method call attaches the variables to `process.env`, and should be invoked as early in the application script as necessary.

1. Require `dotenv`

<div class="filename">index.js</div>

```javascript
require('dotenv').config();
```

2. Set `baseUrl` to the environment variable
Replace the ternary operation with the `AUTH0_BASE_URL` environment variable.

<div class="filename">index.js</div>

```javascript
// Auth0
const config = {
  ...
  baseURL: process.env.AUTH0_BASE_URL,
  ...
};
```

3. Restart the server
Test that the new configuration works by restarting the server and walking through the authentication steps. Remember to start the HTTPS proxy in a separate terminal window. Expect the features to work as before.

<div class="filename">command line</div>

```
$ npm run start
$ npm run https-proxy
```

### 3. Migrate Auth0 configuration
Using the same process as outlined, we will migrate more Auth0 configuration to the `.env` file. The criteria used to determine which properties should be managed as environment variables are whether a) the property is configurable within the Auth0 dashboard, b) the property is likely to change if a different Auth0 application is used as a backend, and c) if the data should be kept secure.

* Configurable within Auth0
  * `baseURL`
  * `routes.callback`
* Different per Auth0 application
  * `clientID`
  * `issuerBaseURL`
* Should be kept secure
  * `secret`

1. Add the specified data to `.env`

<div class="filename">.env</div>

```
AUTH0_BASE_URL="https://localhost:3001"
AUTH0_CALLBACK_ROUTE="/auth0/callback"
AUTH0_CLIENT_ID="BdsyUqLCLcMDv21lT9VzCRuo8fP2xvZl"
AUTH0_ISSUER_BASE_URL="https://dev-r6lb7q89.us.auth0.com"
AUTH0_SECRET="a long, randomly-generated string stored in env"
```

2. Use environment variables to configure Auth0
Replace the hard-coded strings used to configure the Auth0 middleware with `process.env` variables.

<div class="filename">index.js</div>

```javascript
// Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  routes: {
    callback: process.env.AUTH0_CALLBACK_ROUTE
  }
};
```

### 4. Generate a `secret` string
The Auth0 configuration object's `secret` key is used to encrypt the user's session cookie. This value should be a "long, random string." Technically, the value provided by Auth0's Quick Start satisfies this constraint. To generate a more random string, Auth0 recommends the OpenSSL command line utility.

<div class="filename">macOS/*nix command line</div>

```
$ openssl rand -hex 32
```

<div class="filename">Windows command line</div>

```
> & 'C:\Program Files\Git\usr\bin\openssl.exe' rand -hex 32
```

If none of the above options work, an online random string generator will do.

3. Replace the environment variable with the output from the command.
<div class="filename">.env</div>

```
AUTH0_SECRET="ce0b8df696236657682ca78c233b174b1d7581761467270256d778baf1fb9cd5"
```

### 5. Restart the server
Changes to the `.env` file do not trigger the `nodemon` filesystem watcher to restart the Express server. Stop and restart the server process for the application to reflect changes to the `.env` file.

<div class="filename">command line</div>

```
$ npm run start
```

The authentication flow should perform as usual.

### 6. Add a Route
Add to the chronicle of `my-app` by adding a webpage that renders dynamic content based on environment variables.

1. Create a `GET` route
Define a route on the Express app that renders a template, `env-vars.liquid`, with local variables.

<div class="filename">index.js</div>

```javascript
app.get('/env-vars', function (request, response) {
  const isProduction = process.env.NODE_ENV == 'production';
  const auth0BaseUrl = process.env.AUTH0_BASE_URL;
  response.render('env-vars', { isProduction, auth0BaseUrl })
});
```

2. Create the view template
Display the `isProduction` and `auth0BaseUrl` local variables within a simple template.

<div class="filename">app/views/env-vars.liquid</div>

```html
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<div>
  <h1>Environment Variables</h1>

  <p>
    This webpage has been
    {% if isProduction %}
      <b> served from the production environment.</b>
    {% else %}
      <b> served from a non-production environment.</b>
    {% endif %}
  </p>

  <p>
    The Auth0 base URL is
    {% if auth0BaseUrl %}
      <b>{{ auth0BaseUrl }}</b>
    {% else %}
      <b> not defined.</b>
    {% endif %}
  </p>
</div>
{% endblock %}
```

3. Add this new page to the site navigation in `index.liquid`.

<div class="filename">app/views/index.liquid</div>

```html
<li><a href="/env-vars">env-vars</a></li>
```

With your development server started, you can now navigate to `/env-vars` from the home page and visualize some of the application's environment variables.

[env-vars-webpage.png image]

This simplistic page is for demonstration purposes; the primary takeaway should be the new abilities to set application configuration on a per-environment basis.

### 6. Distribute Environment Variables
Environment variables should be kept out of version control. If you used the `.gitignore` provided by this walkthough, `.env` is already included to be ignored.

Despite keeping the sensitive information out of the version control, developers will need a way to share a list of what environment variables are required to configure the application. The standard solution to this is to distribute a `.env.dist` file with source control which contains the environment variable names, but not the sensitive values.

The `.env.dist` file should be kept up to date as more environment variables are added to the application. This file can be used to onboard new developers to the project, as well it records a list of what environment variables need to be set for the application to run properly in any new environment.

1. Ensure `.env` is an ignored file in `.gitignore`.

2. Create a `.env.dist` file
Create the new file mirroring `.env`, but with the sensitive values removed. Discernment dictates the only value that raises security flags is `AUTH0_SECRET`, so its value will be redacted.

<div class="filename">.env.dist</div>

```
AUTH0_BASE_URL="https://localhost:3001"
AUTH0_CALLBACK_ROUTE="/auth0/callback"
AUTH0_CLIENT_ID="BdsyUqLCLcMDv21lT9VzCRuo8fP2xvZl"
AUTH0_ISSUER_BASE_URL="https://dev-r6lb7q89.us.auth0.com"
AUTH0_SECRET=
```

### 7. Git commit all changes
Environment variables configuration is now complete, and the application is working locally. Time to `git commit` the changes in preparation for deployment to Heroku.

Use the command `git status` before running `git add` to ensure `.env` is not saved to version control. `.env.dist` should be listed as an "untracked file".

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Use Auth0 environment variables'
```

### Resources
Dotenv: [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

OpenSSL on Windows: [https://stackoverflow.com/a/68253950/18752242](https://stackoverflow.com/a/68253950/18752242)

Random String Generator: [https://www.random.org/strings/](https://www.random.org/strings/)

---

## Environment Variables in Production
A cursory glance at the code changes in the last section reveals that we have removed references to `https://<your-app>.herokuapp.com`, but have yet to replace this value. When `require('dotenv').config()` is invoked, *no values will be appended to* `process.env` *since there is no* `.env` *file in the filesystem pushed to Heroku.*

Different deployment strategies have different requirements for how environment variables are set. Deployment onto a remote Linux machine may require accessing the server via SSH and manualy creating a `.env` file in the remote environment. Containerized deployment often uses platform-specific configuation files -- such as `docker-compose.yml` for organizing the environment.

Heroku's platform-as-a-service solves deployed environment variables in simple terms. Each Heroku application comes with a Settings page for configuring variables within Heroku's web UI. As well, the `heroku` CLI utility provides a one-line command for setting environment variables remotely.

### Heroku Configuration Variables: Graphic Interface
Heroku calls environment variables "Config Vars," and these can be found within an application's Settings page.

[heroku application settings.png]

Click "Reveal Config Vars" button to show all variables and reveal input fields to edit them. If there are no Config Vars, a descriptive message will be shown. In both cases, a developer can add a new configuration variable directly in this interface by entering a new `KEY` and `VALUE`, and clicking "Add".

[heroku empty config vars.png]

Feel free to use the graphic interface to set environment variables. The `my-app` walkthrough details using Heroku's CLI to accomplish this task.

### Heroku Config Vars: Command-Line Interface
The Heroku CLI allows developers to manage Heroku apps directly from the terminal. An app's config vars are accessible via the subcommand `config`. Issuing the command `heroku config --help` displays options for the subcommand.

<div class="filename">command line</div>

```
$ heroku config --help
display the config vars for an app

USAGE
  $ heroku config

OPTIONS
  -a, --app=app        (required) app to run command against
  -j, --json           output config vars in json format
  -r, --remote=remote  git remote of app to use
  -s, --shell          output config vars in shell format

COMMANDS
  config:edit   interactively edit config vars
  config:get    display a single config value for an app
  config:set    set one or more config vars
  config:unset  unset one or more config vars
```

### 1. Set a Config Var
Issue the command `heroku config:set` to set the `NODE_ENV` configuration variable to `production`.

**Note:** Remember what Heroku calls "config vars" are more provided to the running application as environment variables.

<div class="filename">command line</div>

```
$ heroku config:set NODE_ENV=production
```

Check that the variable is set by issuing the command `heroku config` with no options.

### 2. Set Auth0 Configuration
Use the sme process to set a config var for each of the Auth0 environment variables. The one variable which must be different from local configuration is `AUTH0_BASE_URL`. The example commands cover two methods of setting the variables: one at a time and many at once.

<div class="filename">command line</div>

```
$ heroku config:set AUTH0_BASE_URL=https://<your-app>.herokuapp.com
$ heroku config:set AUTH0_CALLBACK_ROUTE=/auth0/callback
$ heroku config:set AUTH0_CLIENT_ID=<your-client-id> AUTH0_ISSUER_BASE_URL=<your-issuer-url> AUTH0_SECRET=<your-secret>
```

Check that the variables are set by issuing the command `heroku config` with no options.

### 3. Deploy to Heroku
Now that the Heroku is aware of the environment variables the Node.js application requires, it is safe to deploy to Heroku without causing an application crash.

<div class="filename">command line</div>

```
$ git push heroku master
$ heroku open
```

After the deployment process, run `heroku open` to open the Heroku app. Test that all changes are successful by traversing the authentication flow. Navigate to the `/env-vars` route to see the programmed display messages.

### Resources
Heroku config CLI: [https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars)

---

## Databases



---

## 1. Install PostgreSQL on Windows
There is a PostgreSQL installer distributed by Enterprise DB (EDB), an enterprise-level Postgres solution. Download the Windows installer from EDB, and follow the steps. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

Keep note of what is set as the installation directory. The default location is a `C:\Program Files\PostgreSQL\[##]` directory, where `[##]` is the numerical version number of the installation. For example, the installation directory for version 14 is `C:\Program Files\PostgreSQL\14\`.

Keep note of the password set for the default user as well.

### 2. Configure binary paths
The PostgreSQL installation comes with a library of binary executables. These executables, such as `psql`, `pg_dump`, and `createdb`, live within the `/bin` directory of the installation folder, and are how a computer user or different program can interact with the database server. The binary path will be the installation directory from Step 1 suffixed with `\bin\`.

For example, the default binary path for version 14 is `C:\Program Files\PostgreSQL\14\bin`.

**Note:** Within any software package or application, binary files and executables are conventionally placed within a directory named `\bin\`. PostgreSQL follows this convention.

#### Add the binary path to `$PATH`
To be able to interact with the database servers, we will need to be able to run the binary exectuables from the terminal. For this, add the binary path to the system's `$PATH` variable

1. Search Windows for the Edit System Environment Variables dialog by pressing Windows key and typing "environment variables". Select the result, and a System Properties dialog should appear.

[env-vars-windows.png]

2. Click "Environment Variables..." at the bottom of the dialog.
3. The Environment Variables window is split top and bottom as "User variables" and "System variables". Within "System variables," double-click the row for the variable name "Path".

[3_env-vars.png]

4. Within the Edit environment varibale window that appearch, click the New button, and paste the binary path for PostgreSQL.
5. Click OK on each of the windows opened for this process.
6. The PostgreSQL executables have been added to the `$PATH`. To test this, start a new terminal instance and `psql` to see the output of the command.


#### Add the binary path to pgAdmin
The EDB Installation wizard installs the pgAdmin program, a graphical interface for PostgreSQL. This is can be an alternative interface to access database servers, databases, tables, and other
* Login to pgAdmin as the default user, `postgres`, using the password set within the installation wizard.
* Open Preferences dialog, and add the binary path to the version of Postgres you have installed. The location for this is found at File > Preferences > Paths > Binary Paths > PostgreSQL Binary Path > [YOUR_VERSION].

[pgadmin_binary_paths.png]

### 3. Start the Database

1. Start a database server
The `pg_ctl` command is used to manage Postgres database servers. Start and stop a database server by specifying the data directory, and supplying the `start` or `stop` subcommand, respectively. The data directory was set in the installation wizard. It defaults to `[POSTGRESQL_INSTALLATION_DIRECTORY]\data\`.

<div class="filename">command line</div>

```
> pg_ctl restart -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl stop -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl start -D C:\Program Files\PostgreSQL\14\data\
```

### 4. Create a non-default user
The `createuser` command is used to create PostgreSQL users. Note that this is a separate list of users than the Windows login users. For example, it is common to create a separate user per software application with database access.

<div class="filename">command line</div>

```
> createuser --superuser --pwprompt --username=postgres $Env:Username
```

This command:
* creates a user
* with superuser privileges
* prompts for the user's password after creation
* connects to the database server as the `postgres` user
* sets the user's name to `$Env:Username`, and environment variable within Windows Terminal

### 5. Create a non-default database
The `createdb` command is used to create PostgreSQL databases. The database server serves a "database cluster." A database cluster collection of databases that is managed by a single instance of a running database server. In file system terms, it is a single directory in which all data will be stored (i.e. Postgres' `/data` directory.)

The PostgreSQL installer created a default database named `postgres`. It is convention for each software program to have its own, uniquely-named database. For practice and utility with the `psql` command in upcoming sections, create a new database named after your Windows user.

<div class="filename">command line</div>

```
> createdb $Env:Username --username=$Env:Username
```

This command:
* creates a database
* named after the logged in user
* using the PostgreSQL user named after the logged in user

### 6. Test the Installation
If all has gone well, you have the PostgreSQL command-line tools, a running database server, and a user and database within that server. Test all of these by issuing the `psql` command from the command line. This command defaults to connecting with a username of the currently logged in user, and connecting to a database with the same name as the logged in user. This simple command will test all three aspects of installation.

<div class="filename">command line</div>

```
> psql
```

### References
Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com/hubfs/Whitepaper PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)

How to start PostgreSQL on Windows: [https://stackoverflow.com/questions/36629963/how-can-i-start-postgresql-on-windows](https://stackoverflow.com/questions/36629963/how-can-i-start-postgresql-on-windows)

---

## Install PostgreSQL on Mac with Homebrew

Homebrew is a popular package manager for MacOS. A package manager provides the ability to quickly install packages, their dependency packages, and keep the packages up to date. "Packages" are software libraries and executables generally runnable from a command-line interface.

1. Install Homebrew
While we will use Homebrew to install PostgreSQL and its dependencies, we first need to install the Homebrew package itself. If you do not already have Homebrew installed, run the following from a MacOS commandline:
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install PostgreSQL
```bash
$ brew update
$ brew install postgresql
$ postgres --v
```

3. Create a database cluster
A database storage area on disk must be initialized before. A database cluster is a collection of databases that is managed by a single instance of a running database server. In file system terms, it is a single directory in which all data will be stored. There is no default location for this to be stored; we will set the location to be `/usr/local/var/postgres`:
```bash
$ initdb /usr/local/var/postgres
```

You may see the error message: `initdb: directory "/usr/local/var/postgres" exists but is not empty`. It means the folder you are attempting to create already exists. You are safe to move on to the next step.

4. Start the database server
Use the command [`pg_ctl`](https://www.postgresql.org/docs/current/app-pg-ctl.html) to control PostgreSQL database servers. The parameter to the `-D` flag indicates the data directory. Use the data directory created in the previous step via `initdb`.
```bash
$ pg_ctl -D /usr/local/var/postgres start
```
This will log the initialization processes, output `server started`, and return function of the CLI to the user. This command started the database process in the background. To stop the database process, run
```bash
$ pg_ctl -D /usr/local/var/postgres stop
```

5. Create a database
Within the database cluster, the `initdb` command created a database named `postgres`. Make an additional database named by your MacOS username with the following command:
```bash
$ createdb $USER
```

### References
Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com/hubfs/Whitepaper PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)

---

## Using `psql`
The command `psql` allows the developer to enter into a PostgreSQL command line environment for executing SQL and other tasks involving the data in the database. Despite, the examples in this section using the `$` bash shell prompt, these commands work on Windows as well as Unix-based systems.

To enter into the postgres shell, use the command `psql` and indicate the database. If `psql` is used with no arguments, a database of the current user's name is assumed.
```
$ psql postgres
```

In this mode, the command line is prefixed by `[DATABASE NAME]=#`. To see this in action, type `exit` to exit the process for the `postgres` database, and enter into a session with the database named by your username by using `psql` with no arguments.
```
postgres=# exit

$ psql # Run this command with no arguments

# List databases
popdemtech=# \l

# List users
popdemtech=# \du
```

See the Reference of this section for more utilities available within the `psql` environment.

7. Get database connection info
As part of the NodeJS walkthrough, we will be creating application databases, tables, and queries within the NodeJS application using a JavaScript library specfically for interfacing with the PostgreSQL server.

Like a web server, the PostgreSQL server is accessed via TCP -- that is to say, the web application opens a connection to the database server, requests for data, and receives a response. To successfully connect to the data server, and retrieve data, the web application needs to have record of:
* The database server host location
* The specific database's name
* The user attempting access, and
* The user's password

The host for local development is `localhost`. The database name, user name, and password are known by the developer.

To see connection information, enter the `psql` interface and use the `\conninfo` command. It will output the database, user, and port of the active `psql` session.
```
$ psql databasename
databasename=# \conninfo
You are connected to database "databasename" as user "popdemtech" via socket in "/tmp" at port "5432".
```

A separate database is recommended per web application, and, although user and password can be shared between applications, there are benefits to using unique users and passwords per application as well. This can be called the "Principle of Least Privilege," and revolves around database security.

Most high-level languages (e.g. JavaScript) come with wrapper libraries that handle Postgres database creation. It will likely be necessary to create the `user` and `password` using `psql` or similar utilities.

See the References for further on PostgreSQL user management and security.

### References

PSQL utilities: [https://www.postgresguide.com/utilities/psql/](https://www.postgresguide.com/utilities/psql/)

---

## Setting up PostgreSQL in an NodeJS Application
PostgreSQL is a separate server than the NodeJS web server. It provides a TCP interface to access and modify data in the database. The NodeJS application must be configured to connect to a PostgreSQL database server.

Once the connection with PostgreSQL is configured, we will introduce a JavaScript library, Sequalize, to provide a developer-friendly interface for the data models and queries.

### 1. Install Sequelize and Postgres Libraries
Use the package manager to add the sequeilze and postgres client libraries.
```
$ npm install --save sequelize sequelize-cli pg pg-hstore 
```
`sequelize` and `sequelize-cli` are the developer interface, and contain the functions and classes we will be using primarily. `pg` and `pg-hstore` are lower-level client drivers between Node and Postgres. These libraries are required for runtime in production, so use the `--save` flag to add them as dependencies in `package.json`.

### 2. Initialize Sequelize
1. Create a file in the root of the project named `.sequelizerc` with the following contents:
```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'sequelize.js'),
  'models-path': path.resolve('app', 'models'),
  'migrations-path': path.resolve('db', 'migrations'),
  'seeders-path': path.resolve('db', 'seeds'),
};
```

2. Run the `sequelize-cli init` command for the library to add the required boilerplate.
```
$ npx sequelize-cli init
```

Based on the configuration within `.sequelizerc`, the command creates following folders:
* ./config/sequelize.js -- the Sequelize config file which tells CLI how to connect with database
* ./app/models -- the directory for the data models for your project
* ./db/migrations -- the directory for the database migration files
* ./db/seeds -- the directory for the database seed files

3. Configure database credentials
For the Node.js application to connect to the Postgres server, it must be configured with the a) server's address, b) user name, and c) user password. The file `./config/sequelize.js`, contains the database connection configuration for three environments -- `development`, `test`, and `production`. set the username, password, database, and dialect.

Change the username and password for the `development` connection to credentials of your Postgres user. Change the database to the name of the database your application should use. Sequelize will create the database if one by the name specified does not already exist. Change the dialect to `postgres`. 

The `test` and `production` configurations will need to be corrected before running database transactions in those environment.
```
module.exports = {
  "development": {
    "username": "root",        // Change this
    "password": null,          // Change this
    "database": "my-service",  // Change this
    "host": "127.0.0.1",
    "dialect": "postgres"      // Change this
  },
  ...
}
```

As shown in the code example, export the configuration object using `module.experts = ` at the beginning of the file.

4. Create the database
Create the application's database.
```
$ npx sequelize db:create
```

### Resources
`sequlize-cli` documentation: [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

What is an ORM [https://stackoverflow.com/a/1279678/18752242](https://stackoverflow.com/a/1279678/18752242)

---

## Using Sequelize in a Node.js Application
Sequelize is an ORM -- an Object Relational Mapping library. The benefit of an ORM is that it abstracts SQL query dialect into application language. It also converts the response of any query into application level data types such as arrays or custom objects. Sequelize and many other ORM libraries call these custom objects "models." 

A database table is a collection of objects with specified data attributes. Viewed as a table, there is a row for each specific object and columns for attributes an object can have. A ficticious "posts" that contains a collection of resources with the attributes of title, content, and created_at.

```
postgres=# select * from posts;
id | title               | content                         | publishDate 
---+---------------------+---------------------------------+------------------------
1  | My First Post       | Hello World!                    |  2022-04-03 12:00:00-06
2  | How to JavaScript   | Objects and functions.          |  2022-04-04 12:00:00-06
3  | SOLID Breakfast     | The principles of SOLID design. |  2022-04-05 12:00:00-06
(3 rows)
```

In an ORM, this structure is made accessible in the programming language, such as JavaScript's class objects. These models are an abstraction that represents a table in the database.

We can use `sequelize-cli` to generate both the database tables and JavaScript classes. 

### 1. Generate a `posts` migration and JS classes using the `model:generate` command.
```
$ npx sequelize model:generate --name Post --attributes title:string,content:text,publishDate:date
```
This creates two files
* app/models/post.js
* db/migrations/[timestamp]-create-post.js

### 2. Run the migration.
Migration files are used to keep track of changes made to a database. Migrations are used to track creating tables, adding and removing columns to existing tables, and other operations. Migration files record how to transition the database to a new state, and how to rollback the changes to get back to the older state.

Database migration files are like a version control system for the application database, and provide replayable changes that keep the variety of development databases, test databases, and production databases in sync.

Looking at the migration file generated by `model:generate`, we can see that Sequelize added two attributes `createdAt` and `updatedAt`. This is convention, and the values will be set and kept up to date by the Sequelize engine.

Run the migration command to create the `posts` table in the database.
```
$ npx sequelize db:migrate
```

This command executes the following steps:
* Ensures a table called SequelizeMeta is in database. This table is used to record which migrations have run on the database.
* Runs any migration files which haven't run yet. This is possible by checking SequelizeMeta table.

In this case, the `create-post` migration file will be executed against the database resulting in a new `posts` table being created.

### 3. Seed the database
To "seed" the database is to programmatically insert values into the database -- no user interaction required. This is useful for transferring a known data set into the database or populating tables with dummy data for development.

1. Track development seeds within database.
Unlike migrations, database seeding events are not stored anywhere by default. This means every time the `db:seed:all` command is run, the database will be re-seeded with previously run seeds. To change from the default behavior, add the configuration `"seederStorage": "sequelize"` to the development object of `config/sequelize.js`.

This will save to the database which seeds have been run, allowing for use of the developer friendly `db:seed:all`.
```
module.exports = {
  "development": {
    ...,
    "seederStorage": "sequelize"
  },
  ...
}
```

2. Generate a new seed file
Use the `seed:generate` command provided by `sequelize-cli` to generate a seed file for the Post model.
```
$ npx sequelize seed:generate --name first-posts
```

This command creates a file, `db/seeds/[timestamp]-first-posts.js`. Like a migration, the seed file implements an `up/down` interface. The `up` command specifies what actions should be performed to seed the database. The `down` function should specify how to undo the actions.

3. Define a few post objects in an array:
```javascript
const posts = [{
  title: 'Hello World',
  content: 'This is the first post!',
  publishDate: new Date('2022-01-01'),
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Lorem Ipsum',
  content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of Latin literature from 45 BC.
  `,
  publishDate: new Date('2022-01-02'),
  createdAt: new Date(),
  updatedAt: new Date()
}];
```

4. Define the `up` and `down` methods
In the `up` method, use the provided `queryInterface` class to bulk insert the posts into the database.
```javascript
async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Posts', posts, {});
},
```

In the `down` method, perform the reverse action of the `up` method by deleting the posts. To use Sequelize's `Op` (operator) library, import it at the top of the file.
```javascript
const { Op } = require("sequelize");

const posts = [...];

module.exports = {
  ...

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Posts', {
      title: {
        [Op.in]: posts.map((post) => post.title)
      }
     }, {});
  }
}
```

This `bulkDelete` query generates the following SQL:
```
DELETE FROM "Posts" WHERE posts.title IN ["Hello World", "Lorem Ipsum"];
```

3. Seed the database
```
$ npx sequelize-cli db:seed:all
```
This command inserts the records into the database.

### 4. Display database records
The purpose of a database is to keep data organized. The purpose of keeping the data around is for human end-users to view and manipulate. To get the data viewable by the user, we will provide a webpage that lists the data. As part of handling the webpage request, we will query the database for the records, and supply the records as template variables.

1. Create the route.
Create a route `/posts` in `index.js`.
```javascript
app.get('/posts', (request, response) => {
  response.render('posts', {
    posts: []
  });
});
```

2. Create the template
Create a new file, `app/views/posts.liquid` with the following code:
```html
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<div>
  <h1>Posts</h1>

  {% for post in posts %}
    <h2>{{ post.title }}</h2>
    <p><i>{{ post['publishDate'] }}</i></p>
    <p>{{ post['content'] }}</p>
  {% else %}
    <p><i>There are no posts to display.</i></p>
  {% endfor %}
</div>
{% endblock %}
```

Navigate to `localhost:3000/posts`. Because the `posts` template variable is hard-coded to be an empty array, you should see a page that says "There are no posts to display."

3. Query the database for posts
Sequelize as an ORM provides JavaScript classes as abstraction over the SQL query language. The `Post` class found in `/app/models/post.js` is such a class. We will import the class into `index.js` and use the `.findAll()` method to populate the `posts` template variable.
```javascript
const { Post } = require('./app/models');

app.get('/posts', async function(request, response) {
  response.render('posts', {
    posts: await Post.findAll()
  });
});
```

With the addition of the asynchronous method `Post.findAll()`, we must also label the route handling function as `async`. Notice the addtion of the keyword `async` before the function defintion.

Place the require statement at near the top of the file with the other `require` statements. Place the route near the other routes definitions.

Refreshing the `/posts` web page now shows the two posts seeded in the database.

4. Add a link to Posts on the homepage.
Show off the database! Add a navigation link to the `app/views/index.liquid`.
```
<li><a href="/posts">Posts</a></li>
```

### Resources

Sequelize model basics: [https://sequelize.org/docs/v6/core-concepts/model-basics](https://sequelize.org/docs/v6/core-concepts/model-basics)

Sequelize Seeds: [https://sequelize.org/docs/v6/other-topics/migrations](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)

Sequelize Query Interface: [https://sequelize.org/docs/v6/other-topics/query-interface/](https://sequelize.org/docs/v6/other-topics/query-interface/)

Sequelize `QueryInterface` API : [https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface)

---

## Database in the Deployed Environment
Each environment -- development, test, production, etc -- will likely use a different PostgreSQL database server. This means the Node.js application will need to be configured with a database URL and user credentials at a per environment specification. Sequelize's `config` file provides the location to specify these differences.

The platform we will be using to host the PostgreSQL server is Heroku Postgres, an add-on provided by Heroku. There is a free tier with paid plans available to increase data capacity and concurrency as the application storage and/or traffic grows. Heroku Postgres configures the server URL and user credentials, and provides these values via an environment variable, `DATABASE_URL`.

### 1. Add the Heroku Postgres add-on
1. From the command-line interface, use the `heroku addons:create` command to add the Heoku Postgres add-on, hobby-dev tier.
```
$ heroku addons:create heroku-postgresql:hobby-dev
```

2. Use the `DATABASE_URL` environment variable in production
Within `./config/sequelize.js` **production** environment, set the key `use_environment_variable` and `ssl.rejectUnauthorized`. Remove the unneeded piecewise credentials; `DATABASE_URL` contains user and database location information.
```
"production": {
  "use_env_variable": "DATABASE_URL",
  "dialect": "postgres",
  "dialectOptions": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
```

3. Ensure the NODE_ENV environment variable is set on Heroku server.
```
$ heroku config:set NODE_ENV=production
```

### 2. Run the application
1. Commit and push the new changes to Heroku
```
$ git add .
$ git commit -m 'Use Heroku Postgres'
$ git push heroku HEAD
```

2. Run the database migration on Heroku
Use the `heroku run` command to execute a command in Heroku's server environment.
```
$ heroku run npx sequelize db:migrate --env production
```

3. Seed the database
```
$ heroku run npx sequelize db:seed:all
```

4. View the app
Issue the command `heroku open` to open the deployed application. Navigate to the `/posts` route to see the seeded posts.
```
$ heroku open
```

That's a deployed database! This simple tool is the backbone of the internet. Now that we have a database live on the interconnected web, we are able to provide our users with experiences on our web apps that can be customized on a per user basis.

We will be looking at saving user generated information in upcoming sections.

### Resources

Heroku Postgres: [https://devcenter.heroku.com/articles/heroku-postgresql](https://devcenter.heroku.com/articles/heroku-postgresql)

Sequelize Heroku Postgres Settings: [https://github.com/sequelize/sequelize/issues/956](https://github.com/sequelize/sequelize/issues/956#issuecomment-778149933)

Deploy Sequelize to Heroku: [https://anjelicaa.medium.com](https://anjelicaa.medium.com/deploying-a-node-js-postgres-sequelize-app-to-heroku-da3dc9de07cd)

---

## Capturing User Information
The strength of a database comes into play when the developer uses it to capture user interaction within the web application.

### Click Tracker Application
This feature will allow any user to click a button and counter will increment. This counter increments over time as users click the button. If you think about it, users from anywhere on the globe can log into this application, and click this button. Pretty cool.

This feature will require:
* a button
* text displaying how many times the button has been clicked

### 1. Decide the data model
This feature will require that we persist the total number of times a button has been clicked in a database. To accomplish this, we will create a database table, `Clicks`.
```
Clicks
-----------+-------------+
user       | VARCHAR
createdAt  | DATE
updatedAt  | DATE
```

To find how many times the button has been clicked, a SQL `COUNT(*)` command can be used. This data model has the additional benefit of saving user information with the click event. This will be aided by the authentication system, and allows for a follow-up feature of displaying how many times a particular user has clicked the button.

Generate a model and migration using Sequelize's `model:generate` command, and migrate the database with `db:migrate`.
```
$ npx sequelize model:generate --name Click --attributes user:string
$ npx sequelize db:migrate
```

### 2. Create the web page route
Within `index.js`, create a route, `/click-tracker`. This route should render a page `click-tracker.liquid`.

The number of times the button has been clicked in total will be saved in a database, and fetched at the initial user request. The liquid-HTML template will be rendered with this number. Hard-code the value to 10 for now.

1. Import the `Click` class from Sequelize's model directory.
```javascript
const { Post, Click } = require('./app/models');
```

2. Create the route.
The route handler must be labeled async to be able to use the asynchronous `await Click.count()`. Send the result of `Click.count()` to the view as the template variable `timesClicked`.
```javascript
app.get('/click-tracker', async function (request, response) {
  response.render('click-tracker', {
    timesClicked: await Click.count()
  });
});
```

3. Create the webpage.
```html
{% layout 'layouts/default-html.liquid' %}
{% block content %}
<h1>Click Tracker</h1>
<button id="click-me">Click Me!</button>
<p>This button has been clicked <span id="times-clicked">{{ timesClicked }}</span> times.</p>
{% endblock %}
```

You should now be able to start the server, navigate to `https://localhost:3000/click-tracker`, and see the desired initial page.

### 3. Handle user interaction
At this point, nothing happens if a user clicks the on-screen button. Let's change this by adding a JavaScript click event listener on the button. Add a `<script>` tag within the `content` block.
```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    console.log('Button clicked!');
  });
</script>
```

### 4. Make API request on click
For the moment, the click handling function only prints out `'Button clicked!'`. The desired functionality is for the button click to initiate a request to the webserver. The webserver will receive the request and add a `Click` database record.

From the front-end, we will use the Fetch API to make and handle the network request. The Fetch API provides a JavaScript interface for fetching resources and interacting with the HTTP pipeline. Within a browser (e.g. Chrome), a global  `fetch()` method provides an easy-to-use way to fetch resources asynchronously across the network.

The `fetch()` method returns a Promise. A JavaScript Pro

Replace the `console.log` within the click handler with a `fetch` call.
```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    fetch('/api/clicks', { method: 'POST' })
    .then((response) => {
      response.ok ? console.log('Click Added') : console.log('Error Occured');
    });
  });
</script>
```
The `response.ok` is a utility property on the `Response` object returned by `fetch`. A response with an HTTP status code 200-299 has and `ok` value of `true`.

### 5. Create the API route
In line with RESTful standards, we will make a route that accepts a `POST` request to `/clicks` to create a click resource. The the `POST` request is successful, we will return to the user the new total number of clicks in the database.

1. Create the POST `/clicks` route
```javascript
app.post('/api/clicks', async function(request, response) {
  const user = request.oidc.user ? request.oidc.user.email : null;
  await Click.create({ user: user });
  response.json({ timesClicked: await Click.count() });
});
```

### 6. Handle an error using Express middleware
Due to validations and user input errors, creating database records is a process that is expectedly error prone. Click Tracker deals with a relatively small model with no truly custom user input, yet it is good practice to handle where known errors may arise and deliver useful information to the front-end application and user.

The Express way to handle errors is to use its middleware framework. We have already used Express' middleware in implementing the `auth()` functionality. The middleware framework is a pipeline of functions that have access to the `request` and `response` objects. A given middleware can execute any code and make changes to the `request` and `response` objects. When it is done with its computation, it must end the request/response cycle or call the `next` middleware function in the pipeline.

In this way, every route that is defined -- e.g. `GET /hello-world` -- is part of the middleware pipeline. The routes created thus far end the request/response cycle by not calling a `next` middleware. In fact, because `next` has not been needed, I have left this variable out of the route handler definitions. An Express route handler has the following signature:
```javascript
const routeHandler = function(request, response, next) { ... };
app.get('/path', routeHandler);
```

A middleware handler has the similar signature:
```javascript
const middleware = function(request, response, next) { ... };
app.use(middlewareHandler);
```

Error handling middleware has a slightly differing signature; the first parameter is a JavaScript error object.
```javascript
const errorHandlingMiddleware = function(error, request, response, next) { ... };
app.use(errorHandlingMiddleware);
```
The application knows to use the error handling middleware if `next` is invoked with an error object.

1. Create the error handling middleware.
As will all middleware, Express will invoke the functions in the order they are applied to the application with `app.use()`, top to bottom. As such, `app.use` this middleware below the route definitions within `index.js`.
```javascript
app.use(function (error, request, response, next) {
  if (!error.apiError) {
    return next(error, request, response, next);
  }
  response.status(error.statusCode);
  response.json({ message: error.message });
});

```
This code checks for the existance of the a property `apiError` on the `error` parameter. If it is not present, the function passes the error to the next error handling middleware. If the property is present, the status of the response is set to the statusCode of the error, and a JSON response is returned with the error's message.

An important aspect of this code is that it returns a JSON response. Express' default error handler returns an HTML response. For `pd-service`, we will standardize this behavior and return JSON in case of error.

2. Invoke the error handler in case of application error.
With the error handler is in place, the route handler must be changed to pass any errors to the error handling middleware. The third parameter, `next`, should be added to the handler's function definition. It has always been passed in at runtime, but because it was unnecessary, it hasn't been added to the code until now.

`Click.create` will throw an error if the create is unsuccessful. Wrap this function call in a `try/catch` block. If an error is caught, set the properties on it the custom error handling middleware is expecting -- `apiError` and `statusCode` -- and invoke the `next` middleware the error.

```javascript
app.post('/api/clicks', async function(request, response, next) {
  const user = request.oidc.user ? request.oidc.user.email : null;
  try {
    await Click.create({ user: user });
    response.json({ timesClicked: await Click.count() });
  } catch (e) {
    e.apiError = true;
    e.statusCode = 422;
    next(e);
  }
});
```

With the last line -- `next(e)` -- the request/response cycle is moved to the error handling middleware pipeline.

### 7. Handle the API response
The sequence of events currently programmed is the following:
* User clicks the button
* A `fetch` request is made to the `/clicks` route
* The route processes the request and returns a JSON response

A response handler must be written within the front-end JavaScript to process the response.

The `fetch` call resolves to a `Response` interface that represents the response to a request. The `json()` method on this interface returns a promise of the result of parsing the response body into JSON. We'll want to access the `timesClicked` property we set on the response body.

```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    fetch('/api/clicks', { method: 'POST' })
    .then((response) => {
      if (!response.ok) return;
      response.json()
      .then((data) => {
        document.getElementById('times-clicked').innerHTML = data.timesClicked;
      });
    });
  });
</script>
```
The script makes use of a preset `<span id="times-clicked">`, and replaces the value that present there with the more recent count of clicks.

You should now be able to click the button multiple times and see the number on screen increment by one each time. If you refresh the page, the number will remain at the last seen value.

### 8. Handle the API error response
It is good practice to inform the user of an application error. It's wise to consider whther the user can be helped by the error. For example, it's prudent to show the user if the error is due to an input validation error; the user can change their input and correct the problem. If the error is due to an obscure error the user cannot correct, such as invalid database credentials failing authentication, it is more appropriate to show the user a generic error or none at all.

The case of the Click Tracker application coming into an error state is more of the latter. The plan is to place an error message within the HTML. It will be hidden by default, but when an error response is received, it will be displayed. Whenever a new request is initalized -- when the user re-clicks the button -- the error message will be re-hidden while the new `fetch` request is sent and allowed to return successfully or not.

1. Add the HTML/CSS for error handling.
For this, we will need to add the error message element, and set it to be hidden by default. Add the new element after the `click-me` button. Add the style tags within the `content` block,the `head` block, or an external CSS file with `<link>` tag.
```html
<span id="error" class="hidden">Oops, something happened.</span>

<style>
  .hidden {
    display: none;
  }

  #error {
    color: red;
  }
</style>
```

2. Add error handling JavaScript
When an error response is encountered, remove the `hidden` class on the `#error` element to remove the `display: none` attribute. In the case of resubmitting the button click, hide the element again by re-adding the `hidden` class.
```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    document.getElementById('error').classList.add('hidden');

    fetch('/api/clicks', { method: 'POST' })
    .then((response) => {
      if (!response.ok) {
        document.getElementById('error').classList.remove('hidden');
        return;
      };

      response.json()
      .then((data) => {
        document.getElementById('times-clicked').innerHTML = data.timesClicked;
      });
    });
  });
</script>
```

To test the error handling, you can force the API to return an error response.
```javascript
app.post('/api/clicks', async function(request, response, next) {
  // const user = request.oidc.user ? request.oidc.user.email : null;
  // try {
  //   await Click.create({ user: user });
  //   response.json({ timesClicked: await Click.count() });
  // } catch (e) {
  //   e.apiError = true;
  //   e.statusCode = 422;
  //   next(e);
  // }

  const e = new Error();
  e.apiError = true;
  e.statusCode = 500;
  next(e);
});

```

Be sure to revert this intermediate step for the application to function as planned long-term.

### 9. Add a homepage link
Add the Click Tracker app to the list of pages on the homepage.
```html
<li><a href="/click-tracker">Click Tracker</a></li>
```

### 10. Commit and deploy
1. Commit the repository
Git commit the new changes and deploy to Heroku to see the results in a doeployed environment.
```
$ git add .
$ git commit -m 'Add Click Tracker'
$ git push heroku HEAD
```

2. Migrate the production database
There is now a new table the application expects to be in the database. A database migration must be run on the Heroku Postgres instance to create this table.
```
$ heroku run sequelize db:migrate
```

3. Run the Click Tracker Application
```
$ heroku open
```

### Resources

What is Web 2.0?: [https://www.znetlive.com/blog/web-2-0/](https://www.znetlive.com/blog/web-2-0/)

Using the Fetch API: [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Express Error Handling: [http://expressjs.com/en/guide/error-handling.html](http://expressjs.com/en/guide/error-handling.html)

JavaScript Promises: [https://nodejs.dev/learn/understanding-javascript-promises](https://nodejs.dev/learn/understanding-javascript-promises#chaining-promises)

---

