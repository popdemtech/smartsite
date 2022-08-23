# Using Environment Variables
As covered in the last section, environment variables are used to capture environment specifc configuration. We will use the conventions outlined in the previous section to handle environment variables in `smartsite`.

The Node.js community has converged on the `dotenv` as the most popular library to manage environment variables in application code. In this section, we will add `dotenv` to the application and use environment variables to manage Auth0 configuration variables.

## 1. Instantiate `dotenv`

### 1. Install `dotenv`
Dotenv will be used in all environments. Save it as an application dependency.

<div class="filename">command line</div>

```
$ npm install dotenv
```

### 2. Create `.env`
Dotenv works by reading a file named `.env` located in the root directory. Variables are defined in `.env` using the format `VARIABLE_NAME="value"`. From this declaration, the variables are read into the application and made available on the `process.env` object.

In the root directory, create a new file named `.env`. In this file, define a variable for Auth0 base URL.

<div class="filename">.env</div>

```
AUTH0_BASE_URL="https://localhost:3001"
```

This file will grow to contain more sensitive information. To keep this file out of source control, the filename `.env` should be present in the `.gitignore` file. 

## 2. Use `dotenv`
Using the dotenv library within the web application requires importing the library and calling its `config()` method. This method call attaches the variables within `.env` to `process.env`. It should be invoked as early in the application script as necessary.

### 1. Require `dotenv`

<div class="filename">index.js</div>

```javascript
require('dotenv').config();
```

### 2. Set `baseUrl` to the environment variable
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

### 3. Restart the server
Test that the new configuration works by restarting the server and walking through the authentication steps. Remember to start the HTTPS proxy in a separate terminal window. Expect the features to work as before.

<div class="filename">command line</div>

```
$ npm run start
$ npm run https-proxy
```

## 3. Refactor
In this case, refactoring means to convert previously existing code to the new and better pattern. Using the same process as outlined, we will migrate more Auth0 configuration to the `.env` file.

The criteria used to determine which properties should be managed as environment variables are whether a) the property is configurable within the Auth0 dashboard, b) the property is likely to change if a different Auth0 application is used as a backend, and c) if the data should be kept secure. Using the criteria, the following list is determined:

* Configurable within Auth0
  * `baseURL`
  * `routes.callback`
* Different per Auth0 application
  * `clientID`
  * `issuerBaseURL`
* Should be kept secure
  * `secret`

### 1. Add the specified data to `.env`

<div class="filename">.env</div>

```
AUTH0_BASE_URL="https://localhost:3001"
AUTH0_CALLBACK_ROUTE="/auth0/callback"
AUTH0_CLIENT_ID="[UNIQUE CLIENT ID]"
AUTH0_ISSUER_BASE_URL="https://[UNIQUE ID].us.auth0.com"
AUTH0_SECRET="a long, randomly-generated string stored in env"
```

### 2. Use environment variables to configure Auth0
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

### 3. Generate a `secret` string
The Auth0 configuration object's `secret` key is used to encrypt the user's session cookie. This value should be a "long, random string." Technically, the value provided by Auth0's Quick Start satisfies this constraint. To generate a more random string, Auth0 recommends the OpenSSL command line utility.

<div class="filename">macOS/*nix command line</div>

```
$ openssl rand -hex 32
```

<div class="filename">Windows command line</div>

```
> & 'C:\Program Files\Git\usr\bin\openssl.exe' rand -hex 32
```

If the above option does not work, an online random string generator will do.

### 4. Set the secret string

Replace the environment variable with the output from the command.
<div class="filename">.env</div>

```
AUTH0_SECRET="ce0b8df696236657682ca78c233b174b1d7581761467270256d778baf1fb9cd5"
```

### 5. Restart the server
Changes to the `.env` file do not trigger the filesystem watcher to restart the Express server. Stop and restart the server process for the application to reflect changes to the `.env` file.

<div class="filename">command line</div>

```
$ npm run start
```

## 4. Add a Route
Add to the chronicle of `smartsite` by adding a webpage that renders dynamic content based on environment variables.

### 1. Create a `GET` route
Define a route, `/env-vars` on the Express app. This route should render a template, `env-vars.liquid`, with two variables, `isProduction` and `auth0BaseUrl`.

<div class="filename">index.js</div>

```javascript
app.get('/env-vars', function (request, response) {
  const isProduction = process.env.NODE_ENV == 'production';
  const auth0BaseUrl = process.env.AUTH0_BASE_URL;
  response.render('env-vars', { isProduction, auth0BaseUrl })
});
```

### 2. Create the view template
Create a new file in the `views` directory named `env-vars.liquid`. Display the `isProduction` and `auth0BaseUrl` variables in this template.

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

### 3. Modify the navigation

Add this new page to the site navigation in `index.liquid`.

<div class="filename">app/views/index.liquid</div>

```html
<li><a href="/env-vars">env-vars</a></li>
```

With your development server started, you can now navigate to `/env-vars` from the home page and visualize a page rendered based on an application's environment variables.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/env-vars-page.png?raw=true" alt="web screenshot of environment variables page" style="width:66%;" />
</div>

This simplistic page is for demonstration purposes. The primary takeaway should be the new abilities to set application configuration on a per-environment basis. Secondarily, using the available variables to route and render a user request is of importance.

## 5. Distribute `.env` configuration

To reiterate an important point, environment variables should be kept out of version control. Despite keeping the sensitive information out of the version control, developers still need a way to share a list of what environment variables are required to configure the application. The standard solution to this is to distribute a `.env.dist` file with source control which contains the environment variable names, but not the sensitive values.

The `.env.dist` file should be kept up to date as more environment variables are added to the application. This file can be used to onboard new developers to the project, and as an index of environment variables used within the application.

### 1. Ensure `.env` is an ignored file in `.gitignore`.
If you used the `.gitignore` provided by this walkthough, `.env` is already included to be ignored.

### 2. Create a `.env.dist` file
Create a new file mirroring `.env`, but with the sensitive values removed. The only value in `smartsites`'s configuration that raises security flags is `AUTH0_SECRET`, so its value will be redacted.

<div class="filename">.env.dist</div>

```
AUTH0_BASE_URL="https://localhost:3001"
AUTH0_CALLBACK_ROUTE="/auth0/callback"
AUTH0_CLIENT_ID="[UNIQUE CLIENT ID]"
AUTH0_ISSUER_BASE_URL="https://[UNIQUE ID].us.auth0.com"
AUTH0_SECRET=
```

## 6. Git commit all changes
With environment variables configuration now complete and the application is working locally, it is time to `git commit` the changes in preparation for deployment to Heroku.

Use the command `git status` before running `git add` to ensure `.env` is not saved to version control. `.env.dist` *should* be incuded.

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
