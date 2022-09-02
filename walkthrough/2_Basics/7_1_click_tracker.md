# The Click Tracker

We will be adding a feature that allows any user to click a button and increment a counter. A label will display the total number of times the button has been clicked in *of all time.* After a user clicks the button, the label should update with the most up-to-date number of total clicks.

In the last section, we covered the first two steps of feature development -- gathering user requirements and determining software requirements. Now it's time to program the application.

Let's get these button clicks tracked!

## The Data Model
This feature will require that we persist the total number of times a button has been clicked in a database. To accomplish this, we will create a database table, `Clicks`.
```
Clicks
-----------+-------------+
user       | VARCHAR
createdAt  | DATE
updatedAt  | DATE
```

To find how many times the button has been clicked, a SQL `COUNT(*)` command can be used. This data model has the additional benefit of saving user information with the click event. This allows for a follow-up feature of displaying how many times a particular user has clicked the button.

Generate a model and migration using Sequelize's `model:generate` command, and migrate the database with `db:migrate`.

<div class="filename">command line</div>

```
$ npx sequelize model:generate --name Click --attributes user:string
$ npx sequelize db:migrate
```

## The Webpage and Route
Because every button click is saved in a database, at the time of user request, the total number of clicks can be fetched. The view template renders this number as a label, so it must be passed the information as a variable. Hard-code the value to `10` for now.

### 1. Require the model

Import the `Click` class from the model directory. Use the existing `require('./app/models')` statement, adding `Click` to the imported classes.

<div class="filename">index.js</div>

```javascript
const { Post, Click } = require('./app/models');
```

### 2. Create the route
Within `index.js`, create a route, `/click-tracker`. This route should render the page `click-tracker.liquid`. We'll create this file in the next step.

Sequelize models come with the helper method `.count()` which executes a `SUM` SQL query on the indicated table. The route handler must be labeled `async` to use the asynchronous `await Click.count()` method. Send the result of `Click.count()` to the view as the template variable `totalClicks`.

<div class="filename">index.js</div>

```javascript
app.get('/click-tracker', async function (request, response) {
  response.render('click-tracker', {
    totalClicks: await Click.count()
  });
});
```

### 3. Create the webpage
A view template named `click-tracker.liquid` must be created. Follow the pattern of using the `default-html` layout, and providing a `content` block.

<div class="filename">views/click-tracker.liquid</div>

```html
{% layout 'layouts/default-html.liquid' %}
{% block content %}
    <h1>Click Tracker</h1>
    <button id="click-me">Click Me!</button>
    <p>This button has been clicked <span id="times-clicked">{{ totalClicks }}</span> times.</p>
{% endblock %}
```

You can now start the server, navigate to `http://localhost:3000/click-tracker`, and see the desired initial page.

## Handling User Interaction

### 1. Capture the click event
At this point, nothing happens if a user clicks the on-screen button. Let's change this by adding a JavaScript click event listener on the button. Add a `<script>` tag within the `content` block.

<div class="filename">views/click-tracker.liquid</div>

```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    console.log('Button clicked!');
  });
</script>
```

### 2. Make an API request on click
For the moment, the click handling function only prints out `'Button clicked!'`. The desired functionality on click is to initiate a request to the webserver. The webserver will then receive the request and add a `Click` record to the database.

From the front-end, we will use the Fetch API to make and handle the network request. The Fetch API provides a JavaScript interface for fetching resources and interacting with the HTTP pipeline. Within a browser (e.g. Google Chrome), the  `fetch()` method provides an easy-to-use way to fetch resources asynchronously across the network.

The `fetch()` method accepts a web route to request (i.e. "fetch") and returns a `Promise`. The `Promise` object represents the eventual completion of an asynchronous operation, such as a network request. The data returned from a `Promise` is accessed via its `.then()` method. There are many more features to the `Promise` interface; see the resources of this section for guide to `Promise`s. For now, we will only be using `.then()`.

Replace the `console.log` statement within the click handler with a `fetch` call.

<div class="filename">views/click-tracker.liquid</div>

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

Clicking the button now will result in a `Not Found` error returned from the server. Notice the first parameter to the `fetch` call -- `/api/clicks`. This route is not yet defined within `smartsite`'s server. We must create this route.


### 3. Create the API route
API is short for Application Programming Interface. As a convention in `smartsite`, we will call web routes that are used by the front-end code "API routes" and place these routes within the `/api` namespace. These routes will respond with data objects rather than web pages. The front-end code will know how to extract the data it needs from the response object.

In line with REST API standards, we will make a route that accepts a `POST` request to `/clicks` to create a click resource. When the `POST` request is successful, we will return to the user the new total number of clicks in the database.

We'll transmit the data as JSON, JavaScript Object Notation. On the server-side, this is accomplished by using Express' `response.json()` method.

<div class="filename">index.js</div>

```javascript
app.post('/api/clicks', async function(request, response) {
  const user = request.oidc.user ? request.oidc.user.email : null;
  await Click.create({ user: user });
  response.json({ totalClicks: await Click.count() });
});
```

### 4. Handle the API response
The sequence of events currently programmed is the following:
* User clicks the button
* A `fetch` request is made to the `/clicks` route
* The route processes the request and returns a JSON response

A response handler must be written within the front-end JavaScript to process the response.

The `fetch` call resolves to a `Response` interface that represents the response to a request. The `json()` method on this interface returns a Promise of the result of parsing the response body into JSON. We want to access the `totalClicks` property on the response body.

<div class="filename">views/click-tracker.liquid</div>

```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    fetch('/api/clicks', { method: 'POST' })
    .then((response) => {
      if (!response.ok) return;
      
      response.json()
      .then((data) => {
        document.getElementById('times-clicked').innerHTML = data.totalClicks;
      });
    });
  });
</script>
```

The script makes use of the `<span id="times-clicked">` element, and replaces its value with the `totalClicks` returned from the server.

You should now be able to click the button multiple times and see the number on screen increment by one each time. If you refresh the page, the number will remain at the last seen value.

## Handling Errors

It is good practice to inform the user of an application error. It's wise to consider whether the user can be helped by the error. For example, it's prudent to show the user the exact error message if the error is due to an input validation error. If so, the user can change their input and correct the problem. If, on the other hand, the error is due to an obscure error the user cannot correct, such as invalid database credentials failing authentication, it is more appropriate to show the user a generic error or none at all.

Since there are no validations on the `Click` object nor any "correctable" reason for this route to fail, this feature coming into an error state fits into the latter distinction.

The plan is to place a hidden error message within the HTML. When an error response is received, we will unhide the message. Whenever a new request is initalized -- when the user re-clicks the button -- the error message will be re-hidden while the new `fetch` request is sent and allowed to return successfully or not.

### 1. Add the HTML/CSS
An error message element should be added and set to be hidden by default. Add the new element after the `click-me` button. Add the style tags within the `content` block.

<div class="filename">views/click-tracker.liquid</div>

```html
<span id="error" class="hidden">Oops, something happened.</span>

<style>
  #error { color: red; }
  .hidden { display: none; }
</style>
```

### 2. Add error handling JavaScript
When an error response is returned from the API, remove the `hidden` class on the `#error` element to remove the `display: none` attribute. When re-clicking the button, hide the element again by re-adding the `hidden` class.

<div class="filename">views/click-tracker.liquid</div>

```html
<script>
  const button = document.getElementById('click-me');
  button.addEventListener('click', function(event) {
    const errorElement = document.getElementById('error');
    errorElement.classList.add('hidden');

    fetch('/api/clicks', { method: 'POST' })
    .then((response) => {
      if (!response.ok) {
        errorElement.classList.remove('hidden');
        return;
      };

      response.json()
      .then((data) => {
        document.getElementById('times-clicked').innerHTML = data.totalClicks;
      });
    });
  });
</script>
```

### 3. Test the error message

To test the error handling, you can force the response to have a non-200 status code.

<div class="filename">index.js</div>

```javascript
app.post('/api/clicks', async function(request, response) {
  const user = request.oidc.user ? request.oidc.user.email : null;
  await Click.create({ user: user });
  
  response.status(400); // add this temporarily
  
  response.json({ totalClicks: await Click.count() });
});
```

Be sure to revert this intermediate step.

## Wrap Up the Feature

### 1. Link to the Click Tracker
Add the Click Tracker webpage to the directory of pages within the navigation.

<div class="filename">views/index.liquid</div>

```html
<li><a href="/click-tracker">Click Tracker</a></li>
```

### 2. Commit and Deploy
Git commit the new changes and deploy to Heroku to see the results in a deployed environment.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add Click Tracker'
$ git push heroku HEAD
```

### 3. Migrate the production database
There is now a new table the application expects to be in the database. A database migration must be run on the Heroku Postgres instance to create this table.

<div class="filename">command line</div>

```
$ heroku run sequelize db:migrate
```

### 4. Run the deployed application

<div class="filename">command line</div>

```
$ heroku open
```

Navigate to `/click-tracker` directly or via the homepage link, and verify the incrementing Click Tracker.

As an experiment, you can open this page in a second browser window and click the button a bit. Next, return to the original browser and click the button. When the click number refreshes, the label will increase by more than the single click. The number is indeed the aggregate of all clicks between both sessions!

### Resources

Using the Fetch API: [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

JavaScript Promises: [https://nodejs.dev/learn/understanding-javascript-promises](https://nodejs.dev/learn/understanding-javascript-promises#chaining-promises)