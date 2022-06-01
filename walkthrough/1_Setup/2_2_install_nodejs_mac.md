## Install Node.js on MacOS

To develop a Node.js application on MacOS, the Node binaries must be installed. This guide walks through installing Homebrew, Node.js, and Node Version Manager (nvm).

### 1. Create a user with admin access.
Chances are you are already a user with admin access. If you are aware that you are not a user with admin access, follow [these steps](https://osxdaily.com/2017/07/17/how-create-new-admin-account-mac/) (osxdaily.com) to create such a user. You will need a user *with* admin access to create this new user, so contact an admin if necessary.

### 2. Install Homebrew
Homebrew is a package manager for MacOS. An OS package manager is used for downloading programs and libraries. Homebrew is used for installing and managing versions of CLI tools and other packages.

<div class="filename">command line</div>

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew -v
```

### 3. Remove existing node versions
In case there is already a Node installation on the Mac, remove it. We will be using nvm to manage Node versions, and a pre-existing installation will hijack any invocations of the `node` executable.

<div class="filename">command line</div>

```
$ brew uninstall --force node
```

### 4. Install NVM
Node Version Manager allows the developer to install and manage different versions of Node both a global and project-by-project basis.

<div class="filename">command line</div>

```
$ brew update
$ brew install nvm
```

### 5. Follow the instructions output by the nvm installer
<div class="filename">command line output</div>

```
You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.zshrc or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
/usr/local/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

Type `nvm help` for further information.
```

Practically, issue the following command:

<div class="filename">command line</div>

```
$ mkdir ~/.nvm
```

Copy the indicated output and paste it into `.zshrc`, and use the command `source` to load the new configuration into the active terminal.

<div class="filename">command line</div>

```
$ nano ~/.zshrc
$ source ~/.zshrc
```

### 6. Install the latest long-term support version of Node.js.
<div class="filename">command line</div>

```
$ nvm install --lts
$ nvm current
```

`nvm current` displays the currently active node version. It should be the version that was installed with `nvm install --lts`.

### 7. Check the installations
You should now have nvm and Node.js installed. Check the installation. Here are the commands with example output.

<div class="filename">command line</div>

```
$ nvm -v
0.39.1
$ node -v
v16.14.2
```

Now that Node is installed, we'll get to building out `smartsite`. Keep the following in mind: Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, developer libraries (things that can be `npm install`ed), and more. The Node.js ecosystem is ripe for software creation.

## Resources

Similar walkthrough: https://tecadmin.net/install-nvm-macos-with-homebrew/