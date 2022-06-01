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