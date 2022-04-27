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

---

## Saving Data

End-users of an application are more engaged if the web application is dynamic. As seen in the Invoice Creator project, this can be accomplished with front-end JavaScript alone. An improvement on the level of engagement the web app can provide is if data state can be saved and retrieved across user sessions.

As an example, imagine a user logs in and creates a document with the Invoice Creator. The usefulness of the Invoice Creator app can be increased for the user if, the next time they log in, they see a list of previously created documents. A further increase in feature set -- such as the ability to edit previously saved documents -- is an increase of usability.

A solution to saving and retrieving user data is to save this data in a persisted storage database such as PostgreSQL. This data stays in the application's database when the user is logged in or not, and can be retrieved by the user interacting with the web page or by a developer running analytics on the data.

The general flow of saving data to a database is to
1. Decide on the data model
2. Provide a front-end interface for the user to enter data
3. Accept the user data with a route defined within the webserver
4. Save the user data to Postgres from the webserver
5. Return a response to the user of whether the data save was successful or not

---

### Non-user interaction reasons to save to a database
Consider a database that tracks every visit to a page to a database. This database would record IP, time of day, and what cookies the user has for each visit as well as any other desired meta data. In this case, the a database record is saved as soon as the user requests for a webpage, before the user's webpage even renders.

It is accurate to say that a user requesting the page *is* user interaction. Remember that the full user request cycle is rife for capturing information, and can be used to enhance features.

---


#### The robust way: Use separate authentication servers for development and production.
A more robust solution uses different Auth0 applications for the local and deployed environments. This will allow for custom NodeJS application data management between the two environments, and will avoid potential database collisions.

To facilitate this, we will introduce environment variables. Environment variables are key-value pairs that are will (likely) be different between environments the application run. These values are provided to the application.

We have already seen the use of an environment variable in `NODE_ENV`. This value is set before the node process is initialized (`NODE_ENV=production node index.js`), and is different between environment