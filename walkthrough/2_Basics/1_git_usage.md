## Git Usage
Git is the industry-leading version control management tool. It provides character by character change tracking and syncing of changes between local and shared environment. Git commands and algorithms warrant a deep dive of their own. This walkthrough provides the simplest possible `git` workflow for a solo developer.

A useful advantage are the branching and merge strategies provided by Git which allow for multiple developers to work within the same codebase while keeping in sync with other developers' changes. For a solo developer, these strategies are useful in organizing product development and capturing each incremental change in a visualizable format.

Git is also required for Heroku, the deployed environment used in this walkthough. This will keep the files we develop locally in sync with the public server's filesystem.

### 1. Create .gitignore file
A `.gitignore` file is used to define which files and folders should not be saved to version control. Common elements not saved to version control are in-project dependency folders, such as `node_modules`, files containing sensitive information (such as private keys), and certain files used only by the developer's local operating system, such as Apple's `.DS_Store` file.

Create a file named `.gitignore` in the root directory with the following:

<div class="filename">.gitignore</div>

```
/node_modules
npm-debug.log
.DS_Store
/*.env
```

### 2. Save changes with `git`
As changes are made in local development, Git keeps track of them, but does not automatically save the changes to version control. Saving to version control is a two step process. First the changes must be "staged". This is essentially a holding area for changes that the developer can review before finalizing the changes. The second step is to finalize, or "commit", the changes.

The command to stage changes is `git add`. The command to finalize the changes into version control is `git commit`.

1. `git add`
Git's `add` command takes a list of files and directories that should be staged as a parameter.

<div class="filename">command line</div>

```
$ git add .
```

The `.` symbol is shorthand for "the current working directory." Calling `git add` with this parameter signals to Git to save all changes in the current directory. The command can also be run with a list file and directory names as parameters -- e.g. `git add index.js package.json`.

2. `git commit`
Git enforces that every commit have a commit message describing why the commit was made. A repository's commit messages should be a human-readable log of the changes over time. Use the `-m` flag with `git commit` to add a commit message inline. If the `-m` flag is not used, the terminal will open the default text editor for the developer to enter the commit message.

<div class="filename">command line</div>

```
$ git commit -m 'Initialize my app'
```

Git provides an immense catalog of functionality for repository management. As a developer's needs grow more complex, an expanded Git repetoire is a must. I recommend is this [Simple Guide to Git](http://rogerdudler.github.io/git-guide/)(http://rogerdudler.github.io/git-guide/) for next steps in building Git proficiency.