## Install PostgreSQL on Mac with Homebrew

Homebrew is a popular package manager for MacOS. A package manager provides the ability to quickly install packages, their dependency packages, and keep the packages up to date. "Packages" are software libraries and executables generally runnable from a command-line interface.

1. Install Homebrew
While we will use Homebrew to install PostgreSQL and its dependencies, we first need to install the Homebrew package itself. If you do not already have Homebrew installed, run the following from a MacOS terminal:

<div class="filename">command line</div>

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install PostgreSQL

<div class="filename">command line</div>

```bash
$ brew update
$ brew install postgresql
$ postgres --v
```

3. Create a database cluster
A database storage area on disk must be initialized before. A database cluster is a collection of databases that is managed by a single instance of a running database server. In file system terms, it is a single directory in which all data will be stored. There is no default location for this to be stored; we will set the location to be `/usr/local/var/postgres`:

<div class="filename">command line</div>

```bash
$ initdb /usr/local/var/postgres
```

You may see the error message: `initdb: directory "/usr/local/var/postgres" exists but is not empty`. It means the folder you are attempting to create already exists. You are safe to move on to the next step.

4. Start the database server
Use the command [`pg_ctl`](https://www.postgresql.org/docs/current/app-pg-ctl.html) to control PostgreSQL database servers. The parameter to the `-D` flag indicates the data directory. Use the data directory created in the previous step via `initdb`.

<div class="filename">command line</div>

```bash
$ pg_ctl -D /usr/local/var/postgres start
```
This will log the initialization processes, output `server started`, and return function of the CLI to the user. This command started the database process in the background. To stop the database process, run

<div class="filename">command line</div>

```bash
$ pg_ctl -D /usr/local/var/postgres stop
```

5. Create a database
Within the database cluster, the `initdb` command created a database named `postgres`. Make an additional database named by your MacOS username with the following command:

<div class="filename">command line</div>

```bash
$ createdb $USER
```

### References
Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com/hubfs/Whitepaper PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)