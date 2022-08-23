# Add Authentication with Auth0
`smartsite` will utilize the Auth0 service for authentication. Auth0 is a drop-in IAM solution to add authentication and authorization services to an application. Notably, it comes with single-sign on which will allow users of `smartsite` to sign up with the social provider of their choice (e.g. Google.) In addition to the fundamental authentication flow featured in the previous section, Auth0 offers further authentication features such as multi-factor authentication, custom landing pages, and multi-domain applications.

## 1. Sign up for Auth0
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

## 2. Add Auth0 to `smartsite`
Now that Auth0 is configured to accept requests, we must now add code within `smartsite` that makes calls to Auth0's application interface (API). While using raw HTTP calls to accomplish this is possible, `smartsite` will utilize Auth0 provided API wrapping library, `express-openid-connect`. This package abstracts the HTTP routing and configuration to JavaScript functions and classes with developer-friendly interfaces.

### 1. Install the `express-openid-connect` authentication middleware

<div class="filename">command line</div>

```
$ npm install express-openid-connect
```

### 2. Copy the configuration code provided by Auth0's Quick Start wizard

The Express OpenID library provides a router that defines authentication routes -- `/login`, `/logout`, and `/callback` -- for the application. Under the hood, the package is using the familiar syntax for defining a route for an Express app.

Instead of the end using developer having to define this logic or handling functions, `express-openid-connect` exposes a configuration object interface. The developer simply initializes the router with application specific configuration, and all authentication routing is forwarded to Auth0 as necessary.

Better yet, Auth0 provides the configuration object and JavaScript snippet within their Quick Start interface. The snippet goes in `index.js`. First, it requires the `auth` routing middleware from `express-openid-connect`. Then it configures the `auth` router with variables provided by Auth0, and the final step is to set the Express `app` to `use` the configured middleware.

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

### 3. Use Auth0
The snippet provides an example route that utilizes the `isAuthenticated` helper method provided by the `auth` middleware. `smartsite` already has a `/` route, so if you intend to keep the example route, rename its path to avoid pathname conflicts. The following snippet creates a route `/auth-check` which uses the helper method.

<div class="filename">index.js</div>

```javascript
// req.oidc is provided from the auth router
// isAuthenticated is a method on the req.oidc object
app.get('/auth-check', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
```

## 3. Set up an HTTPS proxy
Notice that the `baseURL` Auth0 is aware of is `https://localhost:3001`. Auth0 requires authentication traffic be delivered via the HTTP**Secure** protocol. HTTPS is an extension to the HTTP protocol, but includes layers of security via encryption and certificate checking to ensure the identity of web servers.

The Auth0 configuration is different in two ways from the Express server in `index.js`:

<ol>
  <li>It is served over the <code>HTTPS</code> protocol.</li>
  <li>Its port address is 3001.</li>
</ol>

In this step, we'll set up a webserver to proxy HTTPS web traffic at port 3001 to the Express server listening at port 3000. When the proxy server is running, the application available at both `http://localhost:3000` and `https://localhost:3001`.

<div class="informational">
Note: This solution is for local development. The proxy server will not need to be run in production because Heroku defaults to serving all web traffic over HTTPS.
</div>

Install the `@leafac/caddy` npm library as a dev dependency.

<div class="filename">command line</div>

```
$ npm i --save-dev @leafac/caddy
```

## 4. Create a start script for the proxy server

Create a script named `https-proxy` in `package.json` which starts the proxy server:

<div class="filename">package.json</div>

```javascript
"scripts": {
  ...,
  "https-proxy": "npx @leafac/caddy reverse-proxy --from localhost:3001 --to localhost:3000"
}
```

The caddy library defaults to interpreting the `--from` parameter as `https` and the `to` parameter as `http` -- exactly what is needed in this case.

We can now run `npm run https-proxy` and the proxy server will initialize and forward traffic HTTPS traffic at port 3001 to port 3000. Open seperate terminal windows to run `npm run start` and `npm run https-proxy` concurrently.

## 5. Test locally

### 1. Alter the root route to check authentication

Within `index.js`, alter `/` route to pass the result of `isAuthenticated()` to the front end as the template variable `loggedIn`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.render('index', {
    loggedIn: request.oidc.isAuthenticated()
  });
});
```

### 2. Use the `loggedIn` in the view template
Alter `index.liquid` to show a Logout or Login button depending on whether there is a currently logged in user. Within the list of links:

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

### 3. Test the authentication flow

To see the full changes, first run the Express and Caddy servers (`npm run start` and `npm run dev-proxy` respectively.) Next, open a browser to `localhost:3001`, and navigate through the authentication flow.

<ol>
  <li>Click Login</li>
  <li>Authenticate with Auth0</li>
  <li>Be redirected back to the base URL, <pre>localhost:3001</pre>.</li>
  <li>Click Logout</li>
</ol>

## 6. Git commit the changes
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
