# Install PostgreSQL on Windows
Enterprise DB (EDB), an enterprise-level Postgres solution, distributes the PostgreSQL installer we will use for `smartsite`. Download the Windows installer from EDB, and follow the steps.

## Install PostgreSQL

<div class="informational">
The installer is found at [https://www.enterprisedb.com/downloads/postgres-postgresql-downloads.](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
</div>

Download the installer, and activate the executable to begin the installation wizard.

As you continue through, keep note of the following configurable fields:

* The installation directory
* The password for the default user

The default installation directory is a `C:\Program Files\PostgreSQL\[##]`, where `[##]` is the numerical version number of the installation. The installation directory for version 14 is `C:\Program Files\PostgreSQL\14\`.

## Manage the binaries

The PostgreSQL installation comes with a library of binary executables. These executables, such as `psql`, `pg_dump`, and `createdb`, live within the `/bin` directory of the installation folder, and are how a computer user or different program can interact with the database server. The binary path will be the installation directory from Step 1 suffixed with `\bin\`.

For example, the default binary path for version 14 is `C:\Program Files\PostgreSQL\14\bin`.

<div class="informational">
<b>Note:</b> Within any software package or application, binary files and executables are conventionally placed within a directory named <code>\bin\</code>. PostgreSQL follows this convention.
</div>

To be able to interact with the database servers, we will need to be able to run these binary exectuables from the terminal. For this, we must add the binaries to the system's `$PATH` variable. Copy the exact binary path to the computer's clipboard; it is needed at a later step.

### 1. Edit system environment variables

Search Windows for the **Edit System Environment Variables** dialog by pressing Windows key and typing "environment variables". Select the result, and a System Properties dialog should appear.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/windows_env_vars.png?raw=true" alt="windows system properties environment variables" style="width:66%;" />
</div>

2. Click "Environment Variables..." at the bottom of the dialog.
3. The Environment Variables window is split top and bottom as "User variables" and "System variables". Within "System variables," double-click the row for the variable name "Path".

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/env-vars-system-path.png?raw=true" alt="windows environment variables system path variable highlighted" style="width:66%;" />
</div>

4. Within the Edit environment varibale window that appears, click the New button, and paste the binary path for PostgreSQL.
5. Click OK on each of the windows opened for this process.
6. The PostgreSQL executables have been added to the `$PATH`. To test this, start a new terminal instance and `psql` to see the output of the command.


### 2. Add the binary path to pgAdmin
The EDB Installation wizard installs the pgAdmin program, a graphical interface for PostgreSQL. Much like the `psql` command, this interface is used to access database servers, databases, tables, and other database resources. The difference is that pgAdmin has a graphical rather than text based interface.

1. Open the pgAdmin application.
2. Login to pgAdmin as the default user, `postgres`. The password of the default user was set in the database installation step.
3. Open Preferences dialog, and add the binary path to the version of Postgres you have installed. The location for this is found at File > Preferences > Paths > Binary Paths > PostgreSQL Binary Path > [YOUR_VERSION].

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/postgres_binary_paths.png?raw=true" alt="set postgres binary paths in pgAdmin" style="width:66%;" />
</div>

### 3. Start the Database

1. Start a database server
The `pg_ctl` command is used to manage Postgres database servers. Start and stop a database server by specifying the data directory and supplying the `start` or `stop` subcommand, respectively. The data directory was set in the installation wizard. It defaults to `<postgresql_installation_directory>\data\`. Be sure to substitute your computer's Postgres installation directory in the examples commands below if necessary.

<div class="filename">command line</div>

```
> pg_ctl restart -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl stop -D C:\Program Files\PostgreSQL\14\data\
> pg_ctl start -D C:\Program Files\PostgreSQL\14\data\
```

### 4. Create a non-default user
The `createuser` command is used to create PostgreSQL users. Note that this is a separate list of users than the Windows login users. For example, it is common to create a user and password combination for individual software applications that access the database programmatically.

<div class="filename">command line</div>

```
> createuser --superuser --pwprompt --username=postgres $Env:Username
```

This command:
* creates a user
* with superuser privileges
* prompts for the user's password after creation
* connects to the database server as the `postgres` user
* sets the new user's name to `$Env:Username`, an environment variable within Windows Terminal

### 5. Create a non-default database
The `createdb` command is used to create PostgreSQL databases. The database server serves a "database cluster." A database cluster collection of databases that is managed by a single instance of a running database server. In file system terms, it is a single directory in which all data will be stored (i.e. Postgres' `/data` directory.)

Within the database cluster, the PostgreSQL installer created a default database named `postgres`. It is convention for each software program to have its own, uniquely-named database. For practice and utility with the `psql` command in upcoming sections, create a new database named after your Windows user.

<div class="filename">command line</div>

```
> createdb $Env:Username --username=$Env:Username
```

This command:
* creates a database
* names it the logged in user's name, `$Env:Username`
* authenticating as the PostgreSQL user named after the logged in user

### 6. Test the Installation
If all has gone well, you have the PostgreSQL command-line tools, a running database server, and a user and database within that server. Test all of these by issuing the `psql` command from the command line. This command defaults to connecting with a username of the currently logged in user, and connecting to a database with the same name as the logged in user. This simple command will test all three aspects of installation.

<div class="filename">command line</div>

```
> psql
```

Issue the `exit` command to close `psql`.

### Resources
Managing Postgres users and privileges: [https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782](https://kb.objectrocket.com/postgresql/how-to-list-users-in-postgresql-782)

PostgreSQL Security Best Practices: [https://resources.2ndquadrant.com/hubfs/Whitepaper PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf](https://resources.2ndquadrant.com/hubfs/Whitepaper%20PDFs/PostgreSQL_Security_Best_Practices_Whitepaper.pdf)

How to start PostgreSQL on Windows: [https://stackoverflow.com/questions/36629963/how-can-i-start-postgresql-on-windows](https://stackoverflow.com/questions/36629963/how-can-i-start-postgresql-on-windows)