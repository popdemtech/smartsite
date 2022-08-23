# Environment Variables in Production
A cursory glance at the code changes in the last section reveals that we have removed references to `https://<your-app>.herokuapp.com`, but have yet to replace this value. When `require('dotenv').config()` is invoked, *no values will be appended to* `process.env` *since there is no* `.env` *file in the filesystem pushed to Heroku.*

Different deployment strategies have different requirements for how environment variables are set. Deployment onto a remote Linux machine may require accessing the server via SSH and manualy creating a `.env` file in the remote environment. Containerized deployment often uses platform-specific configuation files -- such as `docker-compose.yml` for organizing the environment.

Heroku's platform-as-a-service solves deployed environment variables quite elegantly. Each Heroku application comes with a Settings page within Heroku's web UI for configuring variables. As well, the `heroku` CLI utility provides a one-line command for setting environment variables remotely.

## Heroku Configuration Variables: Graphic Interface
Heroku uses the term **"Config Vars"**, short for "configuation variables," to refer to **environment variables**. Config vars can be found within an application's Settings page.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/heroku-settings-page.png?raw=true" alt="screenshot of a heroku application's settings page" style="width:66%;" />
</div>

Click "Reveal Config Vars" button to show all variables and reveal input fields to edit them. If there are no Config Vars, a descriptive message will be shown. In both cases, a developer can add a new configuration variable directly in this interface by entering a new `KEY`/`VALUE` pair and clicking "Add".

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/config-vars-empty.png?raw=true" alt="empty list of heroku application config vars" style="width:66%;" />
<p style="font-size:.8em;" class="image-caption">Empty list of Config vars</p>
</div>

Feel free to use the graphic interface to set environment variables. The `smartsite` walkthrough details using Heroku's CLI to accomplish this task.

## Heroku Config Vars: Command-Line Interface
The Heroku CLI allows developers to manage Heroku apps directly from the terminal. An application's config vars are accessible via the subcommand `config`. Issuing the command `heroku config --help` displays options for the subcommand.

<div class="filename">command line</div>

```
$ heroku config --help
display the config vars for an app

USAGE
  $ heroku config

OPTIONS
  -a, --app=app        (required) app to run command against
  -j, --json           output config vars in json format
  -r, --remote=remote  git remote of app to use
  -s, --shell          output config vars in shell format

COMMANDS
  config:edit   interactively edit config vars
  config:get    display a single config value for an app
  config:set    set one or more config vars
  config:unset  unset one or more config vars
```

### 1. Set a config var
Issue the command `heroku config:set` to set the `NODE_ENV` configuration variable to `production`. Next, check that the variable is set by issuing the command `heroku config` with no options.

**Note:** Remember what Heroku calls "config vars" are more provided to the running application as **environment variables.**

<div class="filename">command line</div>

```
$ heroku config:set NODE_ENV=production
$ heroku config
```

### 2. Set the Auth0 configuration
Use the sme process to set a config var for each of the Auth0 environment variables. The one variable which must be different from local configuration is `AUTH0_BASE_URL`. The example commands cover two methods of setting the variables: one at a time and many at once.

<div class="filename">command line</div>

```
$ heroku config:set AUTH0_BASE_URL=https://<your-app>.herokuapp.com
$ heroku config:set AUTH0_CALLBACK_ROUTE=/auth0/callback
$ heroku config:set AUTH0_CLIENT_ID=<your-client-id> AUTH0_ISSUER_BASE_URL=<your-issuer-url> AUTH0_SECRET=<your-secret>
```

Check that the variables are set by issuing the command `heroku config` with no options.

### 3. Deploy to Heroku
Now that the Heroku is aware of the environment variables the Node.js application requires, it is safe to deploy to Heroku without causing an application crash.

<div class="filename">command line</div>

```
$ git push heroku master
$ heroku open
```

After the deployment process, run `heroku open` to open the Heroku app. Test that all changes are successful by traversing the authentication flow. Navigate to the `/env-vars` route to see the programmed display messages.

### Resources
Heroku config CLI: [https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars)