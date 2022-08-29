# Environment Variables
Web applications run in different environments. `smartsite` has a development environment and a production environment. The development environment runs as you, the developer, are making changes to the codebase. The production environment is Heroku. Two other common environments that are not implemented in `smartsite` are testing and staging environments. As we encountered in the last section, a web application will likely need unique configuration per environment.

An environment variable, conventionally written in `ALL_CAPS` snakecase, is set at the *operating system* or *process* level, i.e. external to the JavaScript application. Node.js stores the system's environment variables in the `process.env` global variable. Within a script executed using `node`, `process.env` captures any declared environment variables available in the terminal process that invokes the script.

After setting the variables within the operating system environment, using these variables within the app is as simple as accessing `process.env`.

## Current Implementation
Different environments require different configuration variables. **Environment variables** are named data objects that describe the environment in which the application script is being invoked. Specific to `smartsite`, the application needs to be aware of its environment to determine the `baseUrl` for the Auth0 middleware.

<div class="filename">index.js</div>

```javascript
const config = {
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://<your-app>.herokuapp.com' : 'https://localhost:3001',
  ...
};
```

In this code, `smartsite` uses an inline ternary operator to determine a selection between two data. A critique of this solution is that it a) does not scale to multiple environments well, and b) will not work for data that should be kept private such as authentication credentials.

## Scalability and Security
To get a good grasp on the issues of scalability and security, let's look at the example of adding new application configuration that will need to be different per environment — database credentials. A database connection requires the Node.js application to be configured with a username, password, and database server URL to authenticate with the database server. These values will be different between environments.

<div class="informational">
As a look ahead, the foundations covered here will be implemented in the <b>Database</b> section.
</div>

### Scalability
Because `smartsite` currently only runs in two environments, checking if an environment variable is one of the possible values can be accomplished succinctly, but consider if there were more than two environments. When a third environment is added, the application will need to be configured to check for one of three values.

<div class="filename">pseudocode</div>

```javascript
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

This is barely more readable. Developers must now contend with minimum 9-line `switch` statements for each database configuration variable. If this pattern continues into future development, each new database, third-party integration or *<reason>* to use an environment variable will come with the same burden of clutter.

A solution for scalability is to keep configuration variables stored in a data structure keyed by environment name. With the structure, the appropriate configuration can be selected based on the `NODE_ENV` environment variable.

<div class="filename">pseudocode</div>

```javascript
// index.js
const environments = {
  "development": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "smartsite",
    "dbHost": "localhost:5432"
  },
  "production": {
    "dbUser": "smartsite",
    "dbPassword": "myappXYZ123",
    "dbName": "smartsite",
    "dbHost": 'heroku-postgres://smartsite',
  },
  "test": {
    "dbUser": "popdemtech",
    "dbPassword": "popdemtech123",
    "dbName": "smartsite-test",
    "dbHost": "localhost:5432"
  }
};

const config = environments[process.env.NODE_ENV] || environments['development'];
```

By collecting variables into environment specific objects, using environment variables within application scripts is as simple as accessing the appropriate property on the environment specific `config` object. BeUsing this object accessor pattern, the need for `switch` statements and ternary operators is removed.

<div class="filename">pseudocode</div>

```javascript
// this logic based approach
const dbHost = process.env.NODE_ENV == 'production' ? 'production.database' : process.env.NODE_ENV == 'test' ? 'test.database' : 'development.database';

// turns into accessing values on an object
const config = environments[process.env.NODE_ENV];
const dbHost = config.dbHost;
```

This solves scalability in the following ways:

1. As new **environments** -- such as a test environment -- are added, modify the app by creating a new top level object keyed as the environment's name, and setting `NODE_ENV` to the proper value at server initialization.

2. As new **environment variables** are added, modify the app by adding the new variable to each environment's object. The new value will be accessible in the JavaScript as `config.<property>`.


### Security
The need for security arises when a web application needs access to data that should not be checked into source code. This is clearly illustrated in the example database credentials within the `environments` object:

<div class="filename">pseudocode</div>

```javascript
const environments = {
  "production": {
    "dbUser": "smartsite",
    "dbPassword": "myappXYZ123",
    "dbName": "smartsite",
    "dbHost": 'heroku-postgres://smartsite',
  }
};
```

If this code with exposed credentials is checked into the source repository using `git commit`, a nefarious internet abuser could access the authentication keys, impersonate the application, and gain full access to the database. While there are many safeguards in place to encrypt transmissions carrying the source code, e.g. HTTPS, it is wise to assume there will be events in application lifecycle during which filesystem code will be available in plaintext.

**Do not save private keys and passwords to source code.** More than a best practice, this is standard operating procedure for organizational and user security.

Ideally, the written code receives all credentials and secure information from `process.env`. A more secure implementation of the database configuration is shown.

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

While the secure variable now will be defined external to the application and therefore not available in plaintext, an open question remains: *"Where will environment variables be defined?"*

For local development, a file that's been added to `.gitignore` suffices for keeping values secure. Heroku, the deployed environment, provides both a CLI and graphic interface for entering custom environment variables securely. We will look at both implementations in the coming sections.

## Review
Environment variables provide a standard interface for developers to specify configuration on a per-environment basis. By extracting environment-dependent configuration into a structured object, we simplify the application code. The code is simplified by a reduction of logic and a compacting of locations where environment data can be found.

Environment variables are also used to keep secure data out of application logic. By defining and providing variables *external* to the application, these values are not accessible to unethical hackers who may get access to source code.

### Resources
Environment variables: [https://en.wikipedia.org/wiki/Environment_variable](https://en.wikipedia.org/wiki/Environment_variable)

Working with Environment Variables in Node.js: [https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

The Twelve Factor App (Config): [https://12factor.net/config](https://12factor.net/config)
