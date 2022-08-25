# Deploying to Heroku

## Prerequisites
Heroku manages application deployments with Git. A Git application repository is Prerequisite 0, and necessary for Heroku deployment. `smartsite`'s Git repository was initialized in a previous section, but keep this requirement in mind for any future new build.

### 1. Create a Heroku account
To get started with Heroku, you will need a Heroku account. If you do not yet have a Heroku account, navigate to [heroku.com](https://heroku.com) and create one.

### 2. Install the Heroku CLI
Heroku provides a command-line interface so that creating, configuring, and maintaining Heroku applications and add-ons is as easy as a terminal command. These functions ultimately could be done via Heroku's web interface, yet the Heroku terminal commands are much more concise approach to accomplishing these tasks. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (https://devcenter.heroku.com/articles/heroku-cli).

## Modify the app for Heroku deployment

### 1. Create a Procfile
Heroku looks for a file named `Procfile` to define the command to start the web server. Create an empty file named `Procfile` in the root directory. Within `Procfile` define a `web` command which sets the `NODE_ENV` environment variable then invokes `node index.js`.

<div class="filename">Procfile</div>

```
web: node index.js
```

### 2. Use Heroku's `PORT` value
Heroku's server management system assigns the IP port address on which `smartsite` will be receiving traffic. It exposes it as the environment variable `PORT`. We look more into environment variables in a later section. For now, modify the `PORT` constant in `index.js`.

```javascript
const PORT = process.env.PORT || 3000;
```

In this code, PORT is assigned the value of its self-named environment variable if it exists. If the variable is not defined, PORT defaults to a value of 3000.

## Create a Heroku application

### 1. `heroku create`
Run the `heroku create` command. Use the optional `<appName>` parameter to create a user friendly slug.

<div class="filename">command line</div>

```bash
$ heroku create <appName>
```

Replace `<appName>` with your choice of app name. The selection of `appName` affects the application's public URLs. For example, `heroku create mysmartsite` will be accessible from the URL `mysmartsite.herokuapp.com`. The output of the command will list the remote application's URL.

<div class="filename">command line</div>

```bash
$ heroku create smartsite
Creating ⬢ smartsite... done
https://smartsite.herokuapp.com/ | https://git.heroku.com/smartsite.git
```

Heroku subdomains must be unique. If the `appName` selected is already in use, you will need to re-run the command with a new name. If no `appName` is provided, creates the app with a random slug. For example `heroku create` with no name specified will create the URL with a subdomain like `sleepy-meadow-81798.herokuapp.com`.

### 2. `git commit`
The most recent git commit is what will go live on Heroku. If there are local changes to the working directory that are not committed, they will not be made live on Heroku. Keep this in mind, and use it when appropriate. For now, we will save all local changes to the local git repository and sync the changes to Heroku.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Create commit'
```

### 3. Push to Heroku
The `heroku create` command added a remote git repository on Heroku's servers. See this new remote by running the command `$ git remote -v`. Push the code to this remote.

<div class="filename">command line</div>

```bash
$ git push heroku [branchName]
```

You can watch the build logs output in the terminal. Whether the deployment is successful or not is displayed in the terminal at the end of the logs.

### 4. Access the application
The deployed application can be accessed by navigating in the browser to the URL output by Step 1. You can also open the deployed application with the command `heroku open`.

<div class="filename">command line</div>

```bash
$ heroku open
```

### Resources
The Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

The Heroku Procfile: [https://popdemtech.com](https://popdemtech.com/2022/08/23/heroku-procfile.html)