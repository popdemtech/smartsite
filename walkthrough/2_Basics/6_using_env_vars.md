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
