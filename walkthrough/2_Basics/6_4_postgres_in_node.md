## Setting up PostgreSQL in an NodeJS Application
PostgreSQL is a separate server than the NodeJS web server. It provides a TCP interface to access and modify data in the database. The NodeJS application must be configured to connect to a PostgreSQL database server.

Once the connection with PostgreSQL is configured, we will introduce a JavaScript library, Sequalize, to provide a developer-friendly interface for the data models and queries.

### 1. Install Sequelize and Postgres Libraries
Use the package manager to add the sequeilze and postgres client libraries.

<div class="filename">command line</div>

```
$ npm install --save sequelize sequelize-cli pg pg-hstore 
```

`sequelize` and `sequelize-cli` are the developer interface, and contain the functions and classes we will be using primarily. `pg` and `pg-hstore` are lower-level client drivers between Node and Postgres. These libraries are required for runtime in production, so use the `--save` flag to add them as dependencies in `package.json`.

### 2. Initialize Sequelize
1. Create a file in the root of the project named `.sequelizerc` with the following contents:

<div class="filename">.sequelizerc</div>

```javascript
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'sequelize.js'),
  'models-path': path.resolve('models'),
  'migrations-path': path.resolve('db', 'migrations'),
  'seeders-path': path.resolve('db', 'seeds'),
};
```

2. Run the `sequelize-cli init` command for the library to add the required boilerplate.

<div class="filename">command line</div>

```
$ npx sequelize-cli init
```

Based on the configuration within `.sequelizerc`, the command creates following folders:
* config/sequelize.js -- the Sequelize config file which tells CLI how to connect with database
* models -- the directory for the data models for your project
* db/migrations -- the directory for the database migration files
* db/seeds -- the directory for the database seed files

### 3. Configure database credentials
For the Node.js application to connect to the Postgres server, it must be configured with the a) server's address, b) user name, and c) user password. The file `./config/sequelize.js`, contains the database connection configuration for three environments -- `development`, `test`, and `production`. set the username, password, database, and dialect.

Change the username and password for the `development` connection to credentials of your Postgres user. Change the database to the name of the database your application should use. Sequelize will create the database if one by the name specified does not already exist. Change the dialect to `postgres`. 

The `test` and `production` configurations will need to be corrected before running database transactions in those environment.

<div class="filename">config/sequelize.js</div>

```
module.exports = {
  "development": {
    "username": "root",        // Change this
    "password": null,          // Change this
    "database": "my-service",  // Change this
    "host": "127.0.0.1",
    "dialect": "postgres"      // Change this
  },
  ...
}
```

As shown in the code example, export the configuration object using `module.exports = ` at the beginning of the file.

### 4. Create the database
Create the application's database.

<div class="filename">command line</div>

```
$ npx sequelize db:create
```

### Resources
`sequlize-cli` documentation: [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

What is an ORM?: [https://stackoverflow.com/a/1279678/18752242](https://stackoverflow.com/a/1279678/18752242)