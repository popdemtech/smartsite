## Setting up filesystem watcher for development

### 1. Install nodemon
Because nodemon is a library that is used to initialize a process from the local operating system, it's not considered an application dependency. You can install it globally, but consider including nodemon as a development dependency so any future developers download the library with `npm install`. Since the `npm start` script uses nodemon, it is a required for development.
```bash
$ npm install -g nodemon
# and/or
$ npm install --save-dev nodemon
```

### 2. Use nodemon
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
* Copy the configuration code provided by Auth0.
  * The NodeJS Quick Start wizard provides a snippet.
```
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

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
```

This snippet requires the `auth` middleware from `express-openid-connect`, and configures this auth client with variables provided by Auth0.

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

### Resources
Auth0: https://auth0.com/docs/
Auth0 Express: https://auth0.com/docs/quickstart/webapp/express
HTTPS in Development: https://auth0.com/docs/libraries/secure-local-development
Run Node Commands Simultaneously: https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93

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

6. Connect to the database
The command `psql` allows the developer to enter into a PostgreSQL command line environment for executing SQL and other tasks involving the data in the database.

To enter into the postgres shell, use the command `psql` and indicate the database. If `psql` is used with no arguments, a database of the current user's name is assumed.
```
$ psql postgres
```

In this mode, the command line is prefixed by `[DATABASE NAME]=#`. Use `exit` to exit the process for the `postgres` database, and enter into a session with the database named by your username.
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

---

## References

PSQL utilities: [https://www.postgresguide.com/utilities/psql/](https://www.postgresguide.com/utilities/psql/)

Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com/hubfs/Whitepaper PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)
