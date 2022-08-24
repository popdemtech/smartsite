# Install PostgreSQL on Mac

To create a database on a MacOS machine, we need to install and initialize the PostgreSQL software. To install PostgreSQL on Mac, we will use the popular Homebrew package manager. Starting the local database is a simple process from there.

## Install PostgreSQL

### 1. Homebrew

We covered Homebrew installation in the **Setup** instructions. If you are aware you don't have it installed, install it with the following command:

<div class="filename">command line</div>

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2. Install PostgreSQL

Using Homebrew, install `postgresql`. The final command in this series verifies installation by outputting the installed version.

<div class="filename">command line</div>

```bash
$ brew update
$ brew install postgresql
$ postgres --version
```

## Create a Database

### 1. Create a database cluster
A database cluster is the data storage area that is managed by a database server. In file system terms, it is a single directory in which all data will be saved. There is no default location for a cluster, and it *must* be set. We will set the location to be `/usr/local/var/postgres`:

<div class="filename">command line</div>

```bash
$ initdb /usr/local/var/postgres
```

You may see the error message: `initdb: directory "/usr/local/var/postgres" exists but is not empty`. This means the folder you are attempting to create already exists. You are safe to move on to the next step.

### 2. Start the database server
The command `pg_ctl` is used to control PostgreSQL database servers. `pg_ctl start` starts a database server. We must also pass the `-D` flag to specify to which data directory the server process should save the data. Use the cluster initialized in the previous step as the data directory.

<div class="filename">command line</div>

```bash
$ pg_ctl start -D /usr/local/var/postgres
```

This command starts the database server as a background process and returns function of the terminal interface to the user.

While you should leave the Postgres server running during development of `smartsite`, if you'd like to stop the database server, use the similar `pg_ctl stop` command, and restart it with `pg_ctl start` when desired. Remember to pass the `-D` option.

<div class="filename">command line</div>

```bash
$ pg_ctl stop -D /usr/local/var/postgres
```

### 3. Create a database
In your local environment, you will want a database named after your MacOS user and likely a separate database for each application you develop within locally. For `smartsite`, we will use a Node.js utility to create the application specific database. For now, create a database named after your MacOS user with the PostgreSQL utility command `createdb`.

<div class="filename">command line</div>

```bash
$ createdb $USER
```

### References
The `pg_ctl` command - [https://www.postgresql.org/docs](https://www.postgresql.org/docs/current/app-pg-ctl.html)

Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)