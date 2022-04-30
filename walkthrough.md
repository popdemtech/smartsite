## Install Node.js on Windows

This walkthrough will cover building a web server application using Node.js. While JavaScript was initially developed for and still maintains its scripting dominance in a browser environment, Node.js is a JS runtime for use outside of a browser.

Windows users see [Installing Node.js on Windows].

MacOS users, check out [Installing Node.js on MacOS] for installation instructions.

Linux users, search a trusted search engine with the phrase "install node js linux" to find what you need.

### 1. Navigate to nodejs.org

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_0.png" style="width:50%;min-width:320px;" />
</p>

Navigate to [nodejs.org](https://nodejs.org) and select the version of node you want to download. Even number versions have Long-Term Support (LTS).

Long-term support "typically guarantees that critical bugs will be fixed for a total of 30 months." Production applications should use LTS versions. Use a more recent odd number version to test out latest features.

Read more about node's release schedule in the Resources.

<div class="spacer"></div>

### 2. Setup Wizard

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_1.png" style="width:50%;min-width:320px;" />
</p>

Once the installer finishes downloading, open the downloaded file to open the installation wizard.

<div class="spacer"></div>

### 3. Accept Terms

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_2.png" style="width:50%;min-width:320px;" />
</p>

Accept the terms of the License Agreement if you agree.

<div class="spacer"></div>

### 4. Select the Installation Directory

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_3.png" style="width:50%;min-width:320px;" />
</p>

The default location, `C:\Program Files\nodejs\`, is fine. If you install in a non-default location, ensure the directory is located within your command-line's `$PATH` variable.

<div class="spacer"></div>

### 5. Customize Features

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_4.png" style="width:50%;min-width:320px;" />
</p>

Click next unless you are certain you want something different. I have never customized this step.

<div class="spacer"></div>

### 6. Install Tools for Native Modules

You will need a few software tools to be installed in addition to NodeJS in order to compile certain JavaScript/C++ npm modules. NPM modules are 3rd party libraries that can be used to extend the functionality of your application.

If you decide not to install the tools, they can be installed later.

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_5.png" style="width:50%;min-width:320px;" />
</p>

I checked the box because I know I want the tools.

<div class="spacer"></div>

### 7. Install

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_6.png" style="width:50%;min-width:320px;" />
</p>

Install.

<div class="spacer"></div>

### 8. Watch the Progress Bar

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_7.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/installing_node_js.gif" style="width:50%;min-width:320px;" />
</p>

Or not. The installation took me \~3 minutes total.

<div class="spacer"></div>

### 9. Allow Node.js to make changes to the device

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_8.png" style="width:50%;min-width:320px;" />
</p>

<div class="spacer"></div>

### 10. After installation, Install Native Module Tools

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_9.png" style="width:50%;min-width:320px;" />
</p>

If you selected "Automatically install the necessary tools" in **Step 6**, after the node's install is finished, a window will appear with some information about the libraries that are about to be installed. Continue through the prompts.

<div class="spacer"></div>

### 11. Finish Tools' Install in Powershell 

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_10.png" style="width:50%;min-width:320px;" />
</p>

The process will open a Powershell window with Administrator rights, and finish the installation in Powershell. Allow Powershell to make changes to the device.

<div class="spacer"></div>

### 12. Wait for and Debug Tools Install

The install process takes longer than the NodeJS install. The installer recommends closing *all* programs other than the installer during the install process.

I did not do that, and did not find the performance of my PC affected during install. However, the install did fail the first time...

<div class="spacer"></div>

### 12a. Repair Native Modules Install

The install failed for me near the end, but luckily the fix is easy.

The fix that worked for me was this: Reactivate the NodeJS installer download, and select the 'Repair' option. See Repair Node Installation in the Resources for details. See the resource as well if you have an installation failure not fixed by this solution:

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

<div class="spacer"></div>

### 13. Check Installation

You should now have Node and NPM install. If you installed the native modules, you will have those as well. From Windows Terminal (or similar), run the following commands and check the output:

```
> node -v
v16.13.2

> npm -v
v8.2.1
```

`node -v` checks the version of node, `npm -v` checks the version of npm, node package manager.

If you installed native modules, run the following to check the version of the installed libraries:

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

In particular, check for the existance of visualstudio-installer, visualstudio2019-workload-vctools, and visualstudio2019buildtools libraries.

<div class="spacer"></div>

### Resources

Node JS Release Schedule and Information - [nodejs.org/en/about/releases](https://nodejs.org/en/about/releases/)

Manage PATH System Variable on Windows - [docs.oracle.com](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

Install Tools for Native Modules - [github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)

Repair Node Installation - [stackoverflow.com/a/68912225](https://stackoverflow.com/a/68912225)

---

## Installing Node.js on MacOS

Node.js is an open source development platform for executing JavaScript code server-side. While JavaScript runs natively in a browser (i.e. client-side), Node.js provides developers the platform with which to build applications for a controlled environment that runs on a host computer, separate from the JavaScript that is delivered to the client's browser. In this way, a Node.js application is comparable to PHP, Java, and Ruby, and other application environments that handle web-traffic requests, but are not delivered to the client.

To develop a Node.js application on MacOS, the Node binaries must be installed.

<!--more-->

### 1. Create a user with admin access.
Chances are you are already a user with admin access. If you are aware that you are not a user with admin access, follow [these steps](https://osxdaily.com/2017/07/17/how-create-new-admin-account-mac/) (osxdaily.com) to create such a user. You will need a user *with* admin access to create this new user.

<div class="spacer"></div>

### 2. Install Homebrew
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew -v
```

<div class="spacer"></div>

### 3. Remove existing node versions
```
$ brew uninstall --force node
```

<div class="spacer"></div>

### 4. Install NVM
```
$ brew update
$ brew install nvm
```

<div class="spacer"></div>

### 5. Follow the instructions output by the nvm installer
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

Practically, issue the following commands
```
$ mkdir ~/.nvm
$ nano ~/.zshrc
```

Copy and paste the script from the output within `.zshrc`, and use the command `source` to load the new configuration into the active terminal.

```
$ source ~/.zshrc
```

<div class="spacer"></div>

### 6. Install the latest long-term support version of Node.js.
```
$ nvm install --lts
$ nvm current
```

`nvm current` displays the currently active node version. It should be the version that was installed with `nvm install --lts`.

<div class="spacer"></div>

### 7. Check the installations
You should now have nvm and Node.js installed. Check the installation. Here are the commands with example output.
```
$ nvm -v
0.39.1
$ node -v
v16.14.2
```

Now that Node is installed, get to building out your application. Check out the sample web-server [provided by the Node.js team](https://nodejs.org/en/docs/guides/getting-started-guide/). But listen! Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, and developer libraries (things that can be `npm install`ed).

<div class="spacer"></div>

## Resources

Similar walkthrough: https://tecadmin.net/install-nvm-macos-with-homebrew/

---

## Initialize the repository
Time to create the first files of the web application. 

### Initialize
The `npm init` command will start a setup wizard for the Node application. Ensure the terminal's current working directory is the application directory, and run `npm init`.
```bash
$ cd path/to/my-app
$ npm init
```

For `entry point:`, use `index.js`; it is the default option, and required for parity with the walkthroughs. The default options for the rest of the selections is fine. Feel free to investigate each, and customize the values as desired. Selection made here can be changed.

Example `npm init`:
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

The `my-app` directory should now have a `package.json` file. `package.json` is used for configuration of Node.js applications, and will be revisited throughout the development process.

### Start the application
An application is a software script that is executed on a computer. To "start" this application, just like every application, application code must be written and a command that starts the application must be defined. For this, first create a file, `index.js`, which will define the code that will be the application.

1. Create `index.js`
In the root of the project, create a file titled `index.js`. Any valid JavaScript can go in this file -- a `console.log` statement is shown in the example.
```javascript
// index.js

console.log('Welcome to My App!');
```

2. Create the start script
A Node.js application's `package.json` is the place to define commonly used commands such as `start` and `test`. A top-level property `"scripts"` is used to map developer-selected command names to executable scripts. `package.json` already contains a `test` script.

Add a script called `start` that executes the `node` executable with `index.js`, and save the file.
```js
// package.json

{
  ...,
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```

A script defined in `"scripts"` can be invoked from the command line with `npm run [name]`.

3. Run start script
```
$ npm run start
```

You should see the output `Welcome to My App!` in the console. Just like that we have a simple yet functional Node.js application.

---

## Git
Git is the industry-leading version control management tool. It provides character by change tracking and syncing of changes between local and shared environment. Git commands and algorithms warrant a deep dive of their own. This walkthrough provides the simplest possible `git` workflow for a solo developer.

A useful advantage are the branching and merge strategies provided by Git which allow for multiple developers to work within the same codebase while keeping in sync with other developers' changes. For a solo developer, these strategies are useful in organizing product development and capturing each incremental change in a visualizable format.

Git is also used by Heroku, the platform we will be using for the deployed environment. Heroku will receive the incrementally changed repository, and deploy only the code which has been committed. Due to the nature of capturing and recording each incremental save to the repository, Git also features the ability to "revert" changes and "rollback" environments. Both of these essentially mean return the codebase to a previous state.

### 3. Create .gitignore file
A `.gitignore` file is used to define which files and folders should not be saved to version control. Common elements not saved to version control are in-project dependency folders, such as `node_modules`, files containing sensitive information (such as private keys), and certain files used only by the developer's local operating system, such as Apple's `.DS_Store` file.

Create a file named `.gitignore` in the root directory with the following:
```
# .gitignore

/node_modules
npm-debug.log
.DS_Store
/*.env
```

### 4. Save changes with `git`
As changes are made during local development, Git is only keeping track of the changes locally. To have Git to save the files to the version control, run `git add` to add the desired changes to the index. Items added to the index can be saved to version controlled repository with `git commit`.
```
$ git add .
$ git commit -m 'Initialize my app'
```

The `.` symbol is shorthand for "the current working directory." Calling `git add` with this parameter signals to Git to save all changes in the current directory. The command can also be run with a list file and directory names as parameters -- e.g. `git add index.js package.json`.

Git enforces that every commit have a commit message desribing why the commit was made. Use the `-m` flag with `git commit` to add a commit message in one command. If the `-m` flag is not used, the terminal will open the default text editor for the developer to enter the commit message.

---

## Create the web server
Node libraries can and frequently are built for a programmatic interface. As it stands, `my-app` is a functioning Node.js application, but it doesn't do much. Our interest is building an application that serves web traffic. That means users can navigate to the application on the internet and browse useful onsite content.

For this, the application will need a web server library. There are many such libraries in the Node.js ecosystem from which to choose. The ideal library for our purposes provides a developer friendly abstraction over the gritty details of TCP and HTTP communication protocols. A large network of developers also using the library is a strong bonus as well.

### Express

Express is a web framework that checks all of the boxes.. Express provides an abstraction over low-level HTTP handling by using sensible defaults for HTTP configuration, while still allowing for low-level configuation as the needs of the application are discovered. For the developer, Express provides a straight-forward, route declaration approach for serving web requests.

Express has been a mainstay library for since the early days of Node.js, and beginner to advanced online resources can be found with ease.

### 1. Install Express

1. Use `npm` to install Express
Within `my-app`'s root directory, run the following:
```
$ npm install express
```

This command adds Express as a dependency to the application, and installs the library into the `node_modules` folder. Since Express is the first external library added to the application, the `node_modules` folder will be created in the root directory.

### 2. Create the Express server
With Express now installed, 

### 3. Setting up filesystem watcher for development

1. Install nodemon
Because nodemon is a library that is used to initialize a process from the local operating system, it's not considered an application dependency. You can install it globally, but consider including nodemon as a development dependency so any future developers download the library with `npm install`. Since the `npm start` script uses nodemon, it is a required for development.
```bash
$ npm install -g nodemon
# and/or
$ npm install --save-dev nodemon
```

2. Use nodemon
Change the start script within `package.json` to use `nodemon` instead of `node` to start the server process.
```javascript
// package.json
{
	...,
	"scripts": {
		"start": "npx nodemon .",
		...
	},
	...
}
```

Modify the start script for your use case.

### Resources

Express: [expressjs.com](https://expressjs.com)

---

## Deploying to Heroku

Creating a web app from the pd-node-heroku boilerplate means it is easy to deploy to Heroku. You will need a free [Heroku](https://heroku.com) account and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

### 1. `heroku create`
Run the heroku create command. Use the optional `[appName]` parameter to create a user friendly slug.
```bash
$ heroku create [appName]
```
Replace `[appName]` with your choice of app name. The output of the command will list the remote URL where the app will be accessed once deployed.
```bash
$ heroku create pd-service
Creating ⬢ pd-service... done
https://pd-service.herokuapp.com/ | https://git.heroku.com/pd-service.git
````

### 2. Ensure all desired changes to the repository are commited.
The most recent git commit is what will go live on Heroku.
```
$ git status
$ git add .
$ git commit -m 'Create commit'
```

### 3. Push to Heroku
The `heroku create` command added a remote git repository on Heroku's servers. See this new remote by running the command `$ git remote -v`. Push the code to this remote.
```
$ git push heroku [branchName]
```

You can watch the build logs output in the terminal. When the deploy succeeds or not is displayed in the terminal as well.

### 4. Access the application.
The deployed application can be accessed by navigating in the browser to the URL output by Step 1. You can also open the deployed appllication with the command `heroku open`.
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

## Add Authentication with Auth0
1. Sign up for Auth0 and follow the NodeJS walkthrough
* Sign up for Auth0. They provide a free tier.
* Navigate to the Applications Dashboard
* "Create Application". Set name. Select "Regular Web Application".
* Use the Quick Start for NodeJS application and "Integrate now"
* Set the "Allowed Callback URL"
  * More about the callback URL is covered in the "Caddy reverse proxy" section.
  * For local development, set this value to `https://localhost:3001/callback`.
* Set "Allowed Logout URLs"
  * Set this value to `https://localhost:3001`
*  Install the `express-openid-connect` authentication middleware.
```
npm install express-openid-connect --save
```

* Copy the configuration code provided by the Quick Start wizard.

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

This snippet requires the `auth` middleware from `express-openid-connect`, and configures this auth client with variables provided by Auth0.

```
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
```

This snippet includes an example route using the `isAuthenticated` helper provided by the `auth` middleware. `pd-service` already has a `/` route, so if you intend to keep the example route, rename it.

3. Set up Caddy reverse proxy
Notice that the `baseURL` Auth0 is aware of is `https://localhost:3001`. This is different in two ways from the currently written Express server in `index.js`: 1. It is served over `https` protocol. 2. It's port address is 3001.

In this step, we'll set up a webserver to traffic (proxy) https web traffic at port 3001 to the Express server running at port 3000. When the proxy server is running, the application available at both `http://localhost:3000` and `https://localhost:3001`.

Note: This solution is for local development. A different Auth0 "Application" with different credentials will be created for the production environment. This is walked through in the "Auth0 on Production" section.

Install the `@leafac/caddy` npm library as a dev dependency.
```
npm i -D @leafac/caddy
```

Add a script, `dev-proxy`, to `package.json`:
```
"scripts": {
  ...,
  "dev-proxy": "npx @leafac/caddy reverse-proxy --from localhost:3001 --to localhost:3000"
}
```

The caddy library defaults to interpreting the `--from` parameter as `https` and the `to` parameter as `http` -- exactly what's needed in this case.

We can now run `npm run dev-proxy` and the proxy server will initialize and forward traffic https traffic at port 3001 to port 3000. You will have to open seperate terminal windows to run `npm run start` and `npm run dev-proxy` concurrently. Alternatively, look into an npm library like [`npm-run-all`](https://www.npmjs.com/package/npm-run-all) for a tool to run both commands from one terminal window.

4. Test locally
Within `index.js`, alter `/` route to pass the `isAuthenticated()` boolean to the front end.
```javascript
app.get('/', function(request, response) {
  response.render('index', {
    loggedIn: request.oidc.isAuthenticated()
  });
});
```

Alter `index.liquid` to show a Logout or Login button depending on whether there is a currently logged in user. Within the list of links:
```html
<li>
  {% if loggedIn %}
  <a href="/logout">Logout</a>
  {% else %}
  <a href="/login">Login</a>
  {% endif %}
</li>
``` 

Run the Express and Caddy servers (`npm run start` and `npm run dev-proxy` respectively). Open a browser to `localhost:3000`, and navigate through the authentication flow: Login -> Authenticate with Auth0 -> Redirect back to `/` -> Logout.

### Authentication in Deployed Environment
To get authentication accessible to an internet audience, we will have to get this new feature live in a deployed environment. We'll push these changes to Heroku with minor changes.

The application, both within the code and within the Auth0 interface, is currently configured to use `localhost` addresses for callbacks and redirects. The URL in the deployed state will be different -- `[SOMETHING].herokuapp.com` if you are following this walkthrough. The value for the callbacks will use the same domain a user navigates to in the browser.

The first approach to look at is using the same Auth0 application for local development and in the deployed environment. There are use cases for this method, but it is not the most robust solution.

#### The Easy Way: Use the Same Auth0 Application

1. In the Auth0 application settings, add `https://[YOUR_APP].herokuapp.com` alongside the `https://localhost` entries.
The "Allowed Callback URLs" and "Allowed Logout URLs" fields accept comma-separated values. Be sure to use `https` as you type these. Heroku serves web traffic over `https`. Save changes.

2. Modify the Auth0 configuration within `index.js` to conditionally use the deployed URL for `baseURL`.
Theis conditional added in step 2 evaluates to true if the `NODE_ENV` environment variable is set to `'production'`. If the env variable is not set or is set to a different value, the conditional will evaluate to false.
```javascript
// Auth0
const config = {
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://[YOUR_APP].herokuapp.com' : 'https://localhost:3001',
  ...
};
```

3. Alter the Procfile to use the environment variable `NODE_ENV`.
Remember `Procfile` contains the process that starts the web server. A common method of providing environment variables to a process is to define them immediately before the process command. Define `NODE_ENV` at the start of the `web` process
```
web: NODE_ENV=production npm run start
```

4. Deploy the application to Heroku.
`git add` and `commit` all changes.
```
$ git add .
$ git commit -m 'Add authentication'
$ git push heroku master
```

### Resources
Auth0: https://auth0.com/docs/
Auth0 Express: https://auth0.com/docs/quickstart/webapp/express
HTTPS in Development: https://auth0.com/docs/libraries/secure-local-development
Run Node Commands Simultaneously: https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93

---

## Install PostgreSQL on Windows
There is a PostgreSQL installer distributed by Enterprise DB (EDB), an enterprise-level Postgres solution. Download the Windows installer from EDB, and follow the steps. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

Keep note of what is set as the installation directory. The default location is a `C:\Program Files\PostgreSQL\[##]` directory, where `[##]` is the numerical version number of the installation. For example, the installation directory for version 14 is `C:\Program Files\PostgreSQL\14\`.

Keep note of the password set for the default user as well.

### Configure binary paths
The PostgreSQL installation comes with a library of binary executables. These executables, such as `psql`, `pg_dump`, and `createdb`, live within the `/bin` directory of the installation folder, and are how a computer user or different program can interact with the database server. The binary path of my version 14 Postgres installation is `C:\Program Files\PostgreSQL\14\bin\`. Yours will be in the installation directory specified in the wizard suffixed with `\bin\`.

**Note:** Within any software package or application, binary files and executables are conventionally placed within a directory named `\bin\`. 

#### Add the binary path to `$PATH`
To be able to interact with the database servers, we will need to be able to run the exectuables from the command-line. For this, add the binary path to the system's $PATH variable

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

### Start the Database

1. Start a database server
The `pg_ctl` command is used to manage Postgres database servers. Start and stop a database server by specifying the data directory, and supplying the `start` or `stop` subcommand, respectively. The data directory was set in the installation wizard. It defaults to `[POSTGRESQL_INSTALLATION_DIRECTORY]\data\`
```
> pg_ctl restart -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl stop -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl start -D C:\Program Files\PostgreSQL\14\data\
```

### Create a non-default user
The `createuser` command is used to create PostgreSQL users. Note that this is a separate list of users than the Windows login users. For example, it is common to create a separate user per software application with database access.
```
> createuser --superuser --pwprompt --username=postgres $Env:Username
```

This command:
* creates a user
* with superuser privileges
* prompts for the user's password after creation
* connects to the database server as the `postgres` user
* sets the user's name to `$Env:Username`, and environment variable within Windows Terminal

### Create a non-default database
The `createdb` command is used to create PostgreSQL databases. The database server serves a "database cluster." A database cluster collection of databases that is managed by a single instance of a running database server. In file system terms, it is a single directory in which all data will be stored (i.e. Postgres' `/data` directory.)

The PostgreSQL installer created a default database named `postgres`. It is convention for each software program to have its own, uniquely-named database. For practice and utility with the `psql` command in upcoming sections, create a new database named after your Windows user.
```
> createdb $Env:Username --username=$Env:Username
```

This command:
* creates a database
* named after the logged in user
* using the PostgreSQL user named after the logged in user

### Test the Installation
If all has gone well, you have the PostgreSQL command-line tools, a running database server, and a user and database within that server. Test all of these by issuing the `psql` command from the command line. This command defaults to connecting with a username of the currently logged in user, and connecting to a database with the same name as the logged in user. This simple command will test all three aspects of installation.
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

