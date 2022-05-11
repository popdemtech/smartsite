## Environment Variables
The need for environment specific configuration is inherent in developing a web application. Environment variables are variables that describe the environment in which the application or script is being invoked. `my-app` is currently configured to run in two environments: a developer's local system and Heroku for production. As we encountered in the last section, a web application will likely be required to have different configuration for the different environments.

Specifically, the application needed to be aware of which environment it was running in to know with what `baseUrl` to configure the Auth0 middleware.

<div class="filename">index.js</div>

```javascript
const config = {
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://<your-app>.herokuapp.com' : 'https://localhost:3001',
  ...
};
```

Environment variables are the solution for the differing configuration variables, yet the implementation varies. Currently, `my-app` uses an inline ternary operator to determine a selection between two publically available datum. This solution a) does not scale, and b) will not work for datasets we would not like to be publically exposed.

To get a good grasp on the issues of scalability and security, let's look at the example of adding a new application configuration that will need to be different per environment. For illustration, we'll consider adding database credentials. A database connection requires the Node.js application to be configured with a username, password, and host URL to authenticate with the database server. These values will be different between environments.

As a look ahead, the foundations covered here will be implemented in the **Database** section.

### Scalability
Because `my-app` runs in only two environments, checking if an environment variable is one of the possible values is able to be accomplished in one line. But what if there were more than two environments? To use the example of adding database credentials, the application will need to be configured for development, production and *test* environment -- this would require a check for one of three values.

<div class="filename">pseudocode</div>

```
const dbHost = process.env.NODE_ENV == 'production' ? 'production.database' : process.env.NODE_ENV == 'test' ? 'test.database' : 'development.database';
```

This process is barely legible using ternary operators, and a `switch` statement is likely more suited:

<div class="filename">pseudocode</div>

```javascript
let dbHost;
switch(process.env.NODE_ENV) {
  case 'production':
    dbHost = 'production.database'
  case 'test':
    dbHost = 'test.database'
  default:
    dbHost = 'development.database'
}
```

This is barely more readable. Developers must now contend with minimum 9-line `switch` statements for each database configuration variable. If this pattern continues into future development, each new database, third-party integration or *<reason>* to use environment variables will come with the same burden of clutter.

A solution for scalability looks like keeping configuration variables stored in environment-specific objects. When the application boots up, select the appropriate configuration object based on `NODE_ENV`.

<div class="filename">pseudocode</div>

```javascript
// index.js
const environments = {
  "development": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "my-app",
    "dbHost": "localhost:5432"
  },
  "production": {
    "dbUser": "my-app",
    "dbPassword": "myappXYZ123",
    "dbName": "my-app",
    "dbHost": 'heroku-postgres://my-app',
  },
  "test": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "my-app-test",
    "dbHost": "localhost:5432"
  }
};

const config = environments[process.env.NODE_ENV] || environments['development'];
```

By collecting variables into environment specific objects, using environment variables within application scripts is as simple as accessing the appropriate property on the environment specific `config` object. Because checking `NODE_ENV` occurs at the point of selecting the correct `config` object, the need for `switch` statments and ternary operators is removed.

<div class="filename">pseudocode</div>

```javascript

const dbHost = process.env.NODE_ENV == 'production' ? 'production.database' : process.env.NODE_ENV == 'test' ? 'test.database' : 'development.database';

// turns into

const dbHost = config.dbHost;
```

This solves scalability in the following ways:

1. As new **environment variables** are added, the process for development is to add the variable to each environment's object, and access the variable within the JavaScript as `config.<property>`.

2. As new **environments** are added -- such as a remote test environment for a continuous integration workflow -- configuring a environment is as simple as adding a new top-level configuration object, and setting `NODE_ENV` to the proper value at server initialization.

3. There is no complex logic involved in determining the correct set of environment variables to use.

### Security
The need for security arises when a web application needs access to data that should not be checked into source code. This is clearly illustrated in the example database credentials within the `environments` object:

<div class="filename">pseudocode</div>

```javascript
const environments = {
  "production": {
    "dbUser": "my-app",
    "dbPassword": "myappXYZ123",
    "dbName": "my-app",
    "dbHost": 'heroku-postgres://my-app',
  }
};
```

If this code is checked into the source repository using `git commit`, a nefarious internet abuser would be able to impersonate the application, and gain full access to the database. While there are many safeguards in place to encrypt transmissions carrying the source code, e.g. HTTPS, there are many areas of the deployment pipeline where application code is readable in plaintext.

**Do not save private keys and passwords to source code.** More than a best practice, this is standard operating procedure for organizational and user security.

We have been speaking of environment variables in terms of their use in a web application, but have glossed over their practical feature as it pertains to application development at large. An environment variable, conventionally written in `ALL_CAPS` snakecase, is set at the *operating system* or *process* level. This is external to the JavaScript application. The `process.env` variable within Node.js has access to these lower-level variables.

After setting the variables within the operating system environment, using these variables within the app is as simple as `process.env`.

<div class="filename">pseudocode</div>

```javascript
const environments = {
  "production": {
    "dbUser": process.env.DB_USER,
    "dbPassword": process.env.DB_PASS,
    "dbName": process.env.DB_NAME,
    "dbHost": process.env.DB_HOST,
  }
};
```

While the secure variable now will be defined external to the application, an open question remains: *"Where will environment variables be defined?"*

For local development, a file that's been added to `.gitignore` suffices. Heroku, the deployed environment, provides both a CLI and graphic interface for entering custom environment variables.

### Review
Environment variables provide a standard interface for developers to specifiy configuration on a per-environment basis. By extracting environment-dependent configuration into a structured object, we simplify the application code. The code is simplified by a reduction of logic and a compacting of locations where environment variable data can be found.

Environment variables are also used to keep secure data out of application logic. By defining and providing variables *external* to the application, these values are not accessible to unethical hackers who may get access to source code.

### Resources
Environment variable: [https://en.wikipedia.org/wiki/Environment_variable](https://en.wikipedia.org/wiki/Environment_variable)

Working with Environment Variables in Node.js: [https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

The Twelve Factor App (Config): [https://12factor.net/config](https://12factor.net/config)
