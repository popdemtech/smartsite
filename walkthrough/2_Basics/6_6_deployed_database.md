## Database in the Deployed Environment
Each environment -- development, test, production, etc -- will likely use a different PostgreSQL database server. This means the Node.js application will need to be configured with a database URL and user credentials at a per environment specification. Sequelize's `config` file provides the location to specify these differences.

The platform we will be using to host the PostgreSQL server is Heroku Postgres, an add-on provided by Heroku. There is a free tier with paid plans available to increase data capacity and concurrency as the application storage and/or traffic grows. Heroku Postgres configures the server URL and user credentials, and provides these values via an environment variable, `DATABASE_URL`.

### 1. Add the Heroku Postgres add-on
1. From the command-line interface, use the `heroku addons:create` command to add the Heoku Postgres add-on, hobby-dev tier.

<div class="filename">command line</div>

```
$ heroku addons:create heroku-postgresql:hobby-dev
```

2. Use the `DATABASE_URL` environment variable in production
Within the `config/sequelize.js` **production** object, set the keys `use_environment_variable` and `ssl.rejectUnauthorized`. Remove the unneeded piecewise credentials; `DATABASE_URL` contains user and database location information. The following code snippet includes the full `production` object.

<div class="filename">config/sequelize.js</div>

```
"production": {
  "use_env_variable": "DATABASE_URL",
  "dialect": "postgres",
  "dialectOptions": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
```

3. Ensure the NODE_ENV environment variable is set on Heroku server.

<div class="filename">command line</div>

```
$ heroku config:set NODE_ENV=production
```

### 2. Run the application
1. Commit and push the new changes to Heroku

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Use Heroku Postgres'
$ git push heroku HEAD
```

2. Run the database migration on Heroku
Use the `heroku run` command to execute the Sequelize CLI commands in Heroku's server environment.

<div class="filename">command line</div>

```
$ heroku run npx sequelize db:migrate --env production
```

3. Seed the database

<div class="filename">command line</div>

```
$ heroku run npx sequelize db:seed:all
```

4. View the app
Issue the command `heroku open` to open the deployed application. Navigate to the `/posts` route to see the seeded posts.

<div class="filename">command line</div>

```
$ heroku open
```

That's a deployed database! This simple tool is the backbone of the internet. Now that we have a database live on the interconnected web, we are able to provide our users with experiences on our web apps that can be customized on a per user basis.

We will be looking at saving user generated information in upcoming sections.

### Resources

Heroku Postgres: [https://devcenter.heroku.com/articles/heroku-postgresql](https://devcenter.heroku.com/articles/heroku-postgresql)

Sequelize Heroku Postgres Settings: [https://github.com/sequelize/sequelize/issues/956](https://github.com/sequelize/sequelize/issues/956#issuecomment-778149933)

Deploy Sequelize to Heroku: [https://anjelicaa.medium.com](https://anjelicaa.medium.com/deploying-a-node-js-postgres-sequelize-app-to-heroku-da3dc9de07cd)
