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

When add customization to users table, 

#### The robust way: Use separate authentication servers for development and production.
A more robust solution uses different Auth0 applications for the local and deployed environments. This will allow for custom NodeJS application data management between the two environments, and will avoid potential database collisions.

To facilitate this, we will introduce environment variables. Environment variables are key-value pairs that are will (likely) be different between environments the application run. These values are provided to the application.

We have already seen the use of an environment variable in `NODE_ENV`. This value is set before the node process is initialized (`NODE_ENV=production node index.js`), and is different between environment