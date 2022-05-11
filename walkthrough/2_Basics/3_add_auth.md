## Add Authentication with Auth0

### Authentication
User authentication allows developers of a web application to craft individualized experiences. In practice, this means allowing access to priveleged material such as creating database records and visiting . This ability to deliver dynamic content individualized per visitor session is the general differentiator between a web*site* and a web *application*.

The ability to register a user account with the app, and sign in and out on request is the basis of user authentication. Identity and Access Management systems is a discipline in its own right. It is a foundational component to the interactive internet. Consider the example of a social media platform.

Once a user logs in, the application can display content based on user preferences and saved data. Consider the FaceBook profile page. Every user of FaceBook can navigate to `facebook.com/profile`, and be presented with a profile page. Despite receiving the same webpage template, the page is customized to display the feed and information of the currently logged in user

Further, if a user *is not* a logged in user of FaceBook, the page does not display and instead redirects to registration form. The ability to gate features is an additional benefit of adding an authentication component to a web application.

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