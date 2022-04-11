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
1. Auth0 account
2. Configure in Auth0 Dashboard
3. Add code to NodeJS application
4. Configure for deploy

### Resources
Auth0: https://auth0.com/docs/
Auth0 Express: https://auth0.com/docs/quickstart/webapp/express

---

## Deciding on Database Software
Databases are used for persisting data long-term, and I'll be approaching
this term in such a general sense. Data storage can be handled in many ways.
At the most basic, pen and paper or Google Sheets suffice.
Different technical solutions may require different paradigms of database solutions -- such as relational, graph or time-series.

[image of relational and influxdb architecture]

The question to answer when deciding on a products database technology is, as usual:

What is it for?

* What types of data will go in the database?
* Are there clear domain models or is there simply a need to set and retrieve singular datum?
* Is this data clearly represented by relationships between the domain models (e.g. books and authors)?
* Will the data need to be queried for time-series (e.g. a graph display temperature sensor measurements)
* Do the objects of a given domain model always have the sames attributes or can different objects have different attribute structures?
* Who is the end user of the queries for the database -- end-users of the product or business analytics tools like Tableau?

Finally, consider overarching questions that relate to development and maintance of the database?
* What is the budget for the database?
* What is the time-budget for implementing a database? A developer will have more speed with technology they are already familiar with.
* What is the experience of maintainers with the technology?
* Is there a solution offered on the technology platform already in production (e.g. AWS, DigitalOcean)?

From questions such as these, parse out the top three considerations that are important to the decision.

For the production of `pd-service`, I landed on three requirements and will continue the walkthrough implementing the solution:

* Heroku add-ons: pd-service already deployed on heroku. single click heroku addon
* Free tier: pd offers walkthroughs for all developers
* SQL: Industry-standard, speed of development

---

SQLite is free open-source solution to use filesystem as database. All major software languages come with a library for handling SQLite. For the upside or not needing to set up database hosting, SQLite falls short in that it uses the same filesystem as application files to store data. Moreover, as the records in the database grow in size, on disk storage is depleted.

The SQLite paradigm is akin to storing user uploaded files in the application filesystem. Both are valid solutions, but more appropriate if the developer has control over what data and files are being uploaded. The time spent setting up a dedicated server for data storage is time saved from future headaches with the persistance qualities of SQLite.

Heroku addons:

Free tier: no mongo https://elements.heroku.com/addons/ormongo
heroku postgres: https://elements.heroku.com/addons/heroku-postgresql, free, row limit 10000, then $9
stackhero mysql 19$ https://elements.heroku.com/addons/ah-mysql-stackhero
cleardb, jaws db: free for 5MB, $10 for 1gb

The other database paradigm I investigated was document storage with MongoDB. This is a classic soution for a NodeJS application, and is the "M" in MERN stack. unfortunately, Heroku does not offer a MongoDB add-on with a free tier. 

A relational database is a fine choice for representing the domain models of pd-service. As well, SQL (the query language for a relational database) is an industry standard every tech worker needs to be familiar with.

---

### Adding Heroku Postgress to NodeJS App