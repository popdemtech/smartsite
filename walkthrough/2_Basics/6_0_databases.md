# Databases

End-users of an application are more engaged if the web application is dynamic. This dynamism can be accomplished with presentational logic alone, yet an improvement to reliably saving data between user sessions is a server-side database.

As an example, imagine a feature that allows the user to log in and create an invoice. A user can log in and create a document with this Invoice Creator. The usefulness of the Invoice Creator application can be increased for the user if, the next time they log in, they see a list of previously created documents. A further increase in feature set -- such as the ability to edit previously saved documents -- is an increase of usability.

Persistent data storage using a database will be the solution implemented in `smartsite`. This data stays in the application's database when the user is logged in or not, and can be retrieved by the user interacting with the web page or by a developer running analytics on the data.

## Deciding on Database Software
Data storage can be handled in many ways. At the most basic, pen and paper or Google Sheets suffice. Different technical solutions may require different paradigms of database solutions -- such as relational, graph or time-series.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/data-store-architecture.png?raw=true" alt="architecture diagram with two paradigms of data store" style="width:66%;" />
<p style="font-size:.8em;" class="image-caption">An example software architecture using two data storage paradigms</p>
</div>

The question to answer when deciding on a products database technology is, as usual: What is the use case?

* What types of data will go in the database?
* Are there clear domain models or is there simply a need to set and retrieve singular datum?
* Is this data clearly represented by relationships between the domain models (e.g. books and authors)?
* Will the data need to be queried for time-series (e.g. a graph display temperature sensor measurements)?
* Do the objects of a given domain model always have the sames attributes or can different objects have different attribute structures?
* Who is the end user of the queries for the database -- end-users of the product or business analytics tools like Tableau?

Finally, consider overarching questions that relate to development and maintance of the database:
* What is the budget for the database?
* What is the time-budget for implementing a database? A developer will have more speed with technology with which they are already familiar.
* What is the experience of maintainers with the technology?
* Is there a solution offered on the technology platform already in production (e.g. Heroku, AWS)?

From questions such as these, parse out the top three considerations that are important to the decision.

For `smartsite`, three requirements stick out:

* Heroku add-ons: `smartsite` already deployed on Heroku. A single-click, Heroku add-on will be ideal.
* Free tier: `smartsite` is an open-source walkthrough that offers introductory Node.js guidance for developers of all budgets. The ideal solution will be free to start and scalable for developers who wish to continue further with the application.
* SQL: SQL is **the** industry standard language of relational databases. It's likely a builder of `smartsite` is already familiar with its syntax, and, if not, there are decades worth of resources to extend one's knowledge of it.

## The Decision

`smartsite` will use PostgreSQL as its persistent database. Postgres is a open-source and battle-tested SQL based database server and library. There is a Heroku add-on, Heroku Postgres, that will be used for the production database. Locally, developers will need to install the Postgres database.