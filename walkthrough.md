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