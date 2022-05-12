## Using `psql`
The command `psql` allows the developer to enter into a PostgreSQL command line environment for executing SQL and other tasks involving the data in the database. Despite, the examples in this section using the `$` bash shell prompt, these commands work on Windows as well as Unix-based systems.

To enter into the postgres shell, use the command `psql` and indicate the database. If `psql` is used with no arguments, a database of the current user's name is assumed.

<div class="filename">command line</div>

```
$ psql postgres
```

In this mode, the command line is prefixed by `[DATABASE NAME]=#`. To see this in action, type `exit` to exit the process for the `postgres` database, and enter into a session with the database named by your username by using `psql` with no arguments.

<div class="filename">command line</div>

```
postgres=# exit

$ psql # Run this command with no arguments

# List databases
popdemtech=# \l

# List users
popdemtech=# \du
```

See the Reference of this section for more utilities available within the `psql` environment.

7. Get database connection info
As part of the NodeJS walkthrough, we will be creating application databases, tables, and queries within the NodeJS application using a JavaScript library specfically for interfacing with the PostgreSQL server.

Like a web server, the PostgreSQL server is accessed via TCP -- that is to say, the web application opens a connection to the database server, requests for data, and receives a response. To successfully connect to the data server, and retrieve data, the web application needs to have record of:
* The database server host location
* The specific database's name
* The user attempting access, and
* The user's password

The host for local development is `localhost`. The database name, user name, and password are known by the developer.

To see connection information, enter the `psql` interface and use the `\conninfo` command. It will output the database, user, and port of the active `psql` session.

<div class="filename">command line</div>

```
$ psql databasename
databasename=# \conninfo
You are connected to database "databasename" as user "popdemtech" via socket in "/tmp" at port "5432".
```

A separate database is recommended per web application, and, although user and password can be shared between applications, there are benefits to using unique users and passwords per application as well. This can be called the "Principle of Least Privilege," and revolves around database security.

Most high-level languages (e.g. JavaScript) come with wrapper libraries that handle Postgres database creation. It will likely be necessary to create the `user` and `password` using `psql` or similar utilities.

See the References for further on PostgreSQL user management and security.

### References

PSQL utilities: [https://www.postgresguide.com/utilities/psql/](https://www.postgresguide.com/utilities/psql/)