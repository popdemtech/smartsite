# Authentication in the Deployed Environment
To get authentication accessible to an internet audience, we will have to get the feature live in a deployed environment. After some minor changes to the Auth0 configuration and application code, the application will be ready for deployment to Heroku.

The application, both within the code and within the Auth0 interface, is currently configured to use `localhost` addresses for callbacks and redirects, yet the base URL in the deployed state will be different -- `<your_app_slug>.herokuapp.com` if you are following this walkthrough.

We will be using the same Auth0 application for local development and in the deployed environment. This has use cases for learning and spinning up a quick prototype. A more robust solution would be to use separate Auth0 application instances for the development and production environments. This would separate test data from live data, and allow for testing and tweaking of configuration changes without impacting users of the live site until the changes are perfected for production. We'll leave creating a separate, production-only Auth0 application to the learner's initiative!

## Authentication Using the Same Auth0 Application
Within the Auth0 interface, the application will need to be configured to listen for traffic coming from both the development server *and* the live deployment server. Notably, these servers have different root URLs. 

### 1. Modify the Auth0 configuration

Add `https://<your-app>.herokuapp.com` alongside the `https://localhost` entries.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/auth0-callback-and-logout.png?raw=true" alt="auth0 callback and logout URL inputs with comma separated urls" style="width:66%;" />
</div>

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
The conditional added in step 2 evaluates to true if the `NODE_ENV` environment variable is set to `'production'`. We cover environment variables in detail in a coming section, but note that if the environment variable is *not set* or is *set to a different value*, the conditional will evaluate to `false`, and the `localhost:3001` URL will be used. We will force the environment variable to be set to `'production'` when Heroku starts the server process.

<div class="filename">Procfile</div>

```
web: NODE_ENV=production node index.js
```

### 4. Deploy the application to Heroku.
`git add` and `commit` all changes, then push the Git repository to Heroku.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add auth for Heroku'
$ git push heroku master
```

When the deploy is finished and if all is configured properly, the application will be available at its deployed URL with the authentication feature. Use the `heroku open` utility to open the app in a web browser, and walk through the authentication flow of signing up, signing in, and signing out!

<div class="filename">command line</div>

```
$ heroku open
```

### Resources
Environment Variables in Node.js: [https://www.twilio.com/blog](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)
