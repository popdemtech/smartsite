# Git `smartsite`
Git the only developer tool required before beginning this walkthrough. It's required for you to run the first command, `git clone`, and sync the starting directory to your local computer.

## What is Git?

Imagine every time you made a change to a project, you had to make a brand new directory, copy your existing work into it, make changes in this totally new directory, then _somehow_ totally replace the old work with the new work both locally and in production when the changes are finished. In the early days of the internet, this was solved with creative use of file transport protocol (FTP). The Git program both solves the tedious workflow and improves on full-file, FTP syncing.

Git is a version control management system that maintains what the software looked like in the past and what it looks like now. It keeps track of each incremental change to the codebase which allows for efficient filesystem syncing between local and remote environments by only applying the changeset at the time of sync.

A collection of files that is being tracked by Git is called a repository. The files on hard disk are called the Working Directory.

A repository is a virtual collection, the working directory is the filesystem a developer is modifying. As changes in the working directory are accepted to be code complete, they are added via command to the Git repository. The repository can then be synced between local environments and remote environments.

The Git development workflow also provides the ability to split-off (or "branch") new development work from a pre-established "master" branch. This allows the developer to build new features on top of the currently sanctified codebase, only adding the a new changeset. Once the new changes are approved, finalizing the changes into the existing project takes one command. If the new changes end up not being desirable, they can be reverted, discarded and/or saved for a later date.

In essence, Git takes snapshots of application files over time and allows developers to manage each snapshot independent of one another. There may be a revision on the developer's local computer, a different revision being visited by live traffic in production, and an entirely different revision up for development team review on a shared repository management system like Github.

### 1. Install Git

To get Git, use the [official installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


You're done with Git installation when you can run `git --version` and be presented with your installed Git gersion.

<div class="filename">command line</div>

```
$ git --version
```

### 2. Clone `smartsite`
The `git clone` command downloads a git repository from the internet to a local working directory. Within the terminal, navigate to the directory you'd like to save `smartsite` and run `git clone`.

<div class="filename">command line</div>

```
$ cd path/to/parent_directory
$ git clone https://github.com/popdemtech/smartsite.git
$ cd smartsite
```

This series of commands downloads `smartsite` and places the terminal in the `smartsite` directory.

The starting `smartsite` directory is just this walkthrough. Following the steps provided, you will build out a Node.js web server, and the nearly empty directory will blossom into an internet application of whatever you wish it to be.

We just gotta create the application now. Let's get to it.

### Resources
A Simple Guide to Git: [http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/)
