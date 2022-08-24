# Using `psql`

The command `psql` allows the developer to enter into a Postgres command line environment for executing SQL and other datanase tasks. Despite the examples in this section using the `$` to convey a Unix shell-like prompt, these commands work on Windows as well as Unix-based systems.

## The `psql` environment

To enter into the Postgres shell, use the command `psql` and indicate the database. If `psql` is used with no arguments, a database of the current user's name is assumed.

<div class="filename">command line</div>

```bash
$ psql postgres
```

In this mode, the command line is prefixed by `[DATABASE NAME]=#`. To see this in action, type `exit` to exit the process linked to the `postgres` database, and enter into a session with the database named by your username by using `psql` with no arguments.

<div class="filename">command line</div>

```
postgres=# exit
$ psql
popdemtech=#
```

## `psql` utilities

In the `psql` interface, you can use commands such as `\l` to list all available databases and `\du` to get a list of users with credentials to access the database server.

```
# List databases
popdemtech=# \l

# List users
popdemtech=# \du
```

See the **Resources** section for more utilities available within the `psql` environment.

## Database connection information
As part of the Node.js walkthrough, we will be creating application databases, tables, and queries within the Node.js application using a library specfically for interfacing with the PostgreSQL server.

Like a web server, the PostgreSQL server is accessed via TCP. The web application must open a connection to the database server, request for data, and receive a response. To successfully connect to the data server and retrieve data, the web application needs to have record of:

* The database server host location
* The specific database's name
* The user attempting access, and
* The user's password

To see connection information, enter the `psql` interface and use the `\conninfo` command. It will output the database, user, and port of the active `psql` session. The host for local development is `localhost`.

<div class="filename">command line</div>

```
$ psql databasename
databasename=# \conninfo
You are connected to database "databasename" as user "popdemtech" via socket in "/tmp" at port "5432".
```

# Tips
To save your future self a headache, use a unique database for each application you develop locally. Most high-level languages such as JavaScript provide a framework, library, or utility for creating a unique database for an application.

For security purposes, there are benefits to using a unique user and password per application. This is an aspect of the "Principle of Least Privilege" and is good practice. If you choose to create a unique user and password per application, you will likely need to use the `psql` environment covered in this section.

Creating a database, user, and password can all be handled by `psql`. See the **Resources** section for further on PostgreSQL user management and security.

### References

PSQL utilities: [https://www.postgresguide.com/utilities/psql](https://www.postgresguide.com/utilities/psql/)