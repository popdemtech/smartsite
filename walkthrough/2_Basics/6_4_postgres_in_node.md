# Setting up PostgreSQL in an NodeJS Application
The PostgreSQL database server is a separate server than the Node.js web server. It provides a TCP interface to access and modify data in the database. The Node.js application must be configured to connect to a PostgreSQL database server.

Once the connection with Postgres is configured, we will introduce an ORM into the Node.js application. Object-relational mapping (ORM) is a technique that helps programmers work with data by implementing language-level models and functions that represent the underlying database tables and data. This will allow us to interact with the Postgres database within the Node.js environment.

## 1. Install Sequelize and Postgres Libraries
Use node package manager to add the Sequeilze and Postgres client libraries.

<div class="filename">command line</div>

```
$ npm install sequelize sequelize-cli pg pg-hstore 
```

`pg` and `pg-hstore` are client drivers between Node and Postgres. `sequelize` and `sequelize-cli` provide a developer interface for the database, and contain the functions and classes we will be using primarily. 

## 2. Setup Sequelize
Part of the power of Sequelize is its ability to generate large swaths of code using command line "generators." A command like `sequelize model:generate` will *generate* the application files necessary to support the new model. To generate these files, Sequalize will need to know where in the application directory to place the files. For this purpose, `sequelize` requires a configuration file named `.sequelizerc` placed in the root directory.

### 1. Configure Sequelize
Create a file in the root of the project named `.sequelizerc` with the following contents:

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

### 2. Initialize Sequelize
Run the `sequelize init` command. This command creates the file and folders necessary for Sequelize development.

<div class="filename">command line</div>

```bash
$ npx sequelize-cli init
```

Based on the configuration within `.sequelizerc`, the command creates following folders:

* `config/sequelize.js` -- the database configuration file used by Sequelize
* `models` -- the directory for data models
* `db/migrations` -- the directory for database migration files
* `db/seeds` -- the directory for the database seed files

### 3. Configure database credentials
For the Node.js application to connect to the Postgres server, it must be configured with the following:

1. The database server's address
2. The name of the database
3. The authenticating user's name
4. The authenticating user's password

The file `config/sequelize.js` contains the database connection configuration for three environments -- `development`, `test`, and `production`.

Change the username and password for the `development` connection to credentials of your Postgres user. Change the database to the name of the database your application should use. Sequelize will create the database if one by the name specified does not already exist. Change the dialect to `postgres`. 

<div class="filename">config/sequelize.js</div>

```
module.exports = {
  "development": {
    "username": "root",        // Change this
    "password": null,          // Change this
    "database": "smartsite",   // Change this
    "host": "127.0.0.1",
    "dialect": "postgres"      // Change this
  },
  ...
}
```

As shown in the code example, modify the file to export the configuration object using `module.exports = ` at the beginning of the file.

<div class="informational">
<b>Note:</b> The <code>test</code> and <code>production</code> configurations will need to be corrected before running database transactions in those environments.
</div>

## 3. Create the database
Create the application's database using `sequelize`.

<div class="filename">command line</div>

```
$ npx sequelize db:create
```
## 4. Git commit

Adding the Sequlize ORM was a significant unit of development. We will cover using the library as part of the user request lifecycle in the next section. For now, commit the changes.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Add Sequelize'
```

### Resources
`sequlize-cli` documentation: [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

What is an ORM?: [https://stackoverflow.com](https://stackoverflow.com/a/1279678/18752242)