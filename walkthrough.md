## Setting up filesystem watcher for development

### 1. Install nodemon
Because nodemon is a library that is used to initialize a process from the local operating system, it's not considered an application dependency. You can install it globally, but consider including nodemon as a development dependency so any future developers download the library with `npm install`. Since the `npm start` script uses nodemon, it is a required for development.
```bash
$ npm install -g nodemon
# and/or
$ npm install --save-dev nodemon
```

### 2. Use nodemon
Change the start script within `package.json` to use `nodemon` instead of `node` to start the server process.
```javascript
// package.json
{
	...,
	"scripts": {
		"start": "npx nodemon .",
		...
	},
	...
}
```

Modify the start script for your use case.

## Deploying to Heroku

Creating a web app from the pd-node-heroku boilerplate means it is easy to deploy to Heroku. You will need a free [Heroku](https://heroku.com) account and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

### 1. `heroku create`
Run the heroku create command. Use the optional `[appName]` parameter to create a user friendly slug.
```bash
$ heroku create [appName]
```
Replace `[appName]` with your choice of app name. The output of the command will list the remote URL where the app will be accessed once deployed.
```bash
$ heroku create pd-service
Creating ⬢ pd-service... done
https://pd-service.herokuapp.com/ | https://git.heroku.com/pd-service.git
````

### 2. Ensure all desired changes to the repository are commited.
The most recent git commit is what will go live on Heroku.
```
$ git status
$ git add .
$ git commit -m 'Create commit'
```

### 3. Push to Heroku
The `heroku create` command added a remote git repository on Heroku's servers. See this new remote by running the command `$ git remote -v`. Push the code to this remote.
```
$ git push heroku [branchName]
```

You can watch the build logs output in the terminal. When the deploy succeeds or not is displayed in the terminal as well.

### 4. Access the application.
The deployed application can be accessed by navigating in the browser to the URL output by Step 1. You can also open the deployed appllication with the command `heroku open`.
```bash
$ heroku open
```

## Deciding on Database Software
Databases are used for persisting data long-term, and I'll be approaching
this term in such a general sense. Data storage can be handled in many ways.
At the most basic, pen and paper or Google Sheets suffice.
Different technical solutions may require different paradigms of database solutions -- such as relational, graph or time-series.

[image of relational and influxdb architecture]

The question to answer when deciding on a products database technology is, as usual:

What is it for?

* What types of data will go in the database?
* Are there clear domain models or is there simply a need to set and retrieve singular datum?
* Is this data clearly represented by relationships between the domain models (e.g. books and authors)?
* Will the data need to be queried for time-series (e.g. a graph display temperature sensor measurements)
* Do the objects of a given domain model always have the sames attributes or can different objects have different attribute structures?
* Who is the end user of the queries for the database -- end-users of the product or business analytics tools like Tableau?

Finally, consider overarching questions that relate to development and maintance of the database?
* What is the budget for the database?
* What is the time-budget for implementing a database? A developer will have more speed with technology they are already familiar with.
* What is the experience of maintainers with the technology?
* Is there a solution offered on the technology platform already in production (e.g. AWS, DigitalOcean)?

From questions such as these, parse out the top three considerations that are important to the decision.

For the production of `pd-service`, I landed on three requirements and will continue the walkthrough implementing the solution:

* Heroku add-ons: pd-service already deployed on heroku. single click heroku addon
* Free tier: pd offers walkthroughs for all developers
* SQL: Industry-standard, speed of development

---

SQLite is free open-source solution to use filesystem as database. All major software languages come with a library for handling SQLite. For the upside or not needing to set up database hosting, SQLite falls short in that it uses the same filesystem as application files to store data. Moreover, as the records in the database grow in size, on disk storage is depleted.

The SQLite paradigm is akin to storing user uploaded files in the application filesystem. Both are valid solutions, but more appropriate if the developer has control over what data and files are being uploaded. The time spent setting up a dedicated server for data storage is time saved from future headaches with the persistance qualities of SQLite.

Heroku addons:

Free tier: no mongo https://elements.heroku.com/addons/ormongo
heroku postgres: https://elements.heroku.com/addons/heroku-postgresql, free, row limit 10000, then $9
stackhero mysql 19$ https://elements.heroku.com/addons/ah-mysql-stackhero
cleardb, jaws db: free for 5MB, $10 for 1gb

The other database paradigm I investigated was document storage with MongoDB. This is a classic soution for a NodeJS application, and is the "M" in MERN stack. unfortunately, Heroku does not offer a MongoDB add-on with a free tier. 

A relational database is a fine choice for representing the domain models of pd-service. As well, SQL (the query language for a relational database) is an industry standard every tech worker needs to be familiar with.

---

### Adding Heroku Postgress to NodeJS App