---
title: New Computer Setup
---
<hr /><hr />

## 1. Command Line Tools

Follow the instructions on this page to install Mac Command Line Tools: <http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/>

<hr />

## 2. Install Homebrew

Run the following command in the terminal, and check [here for any problems installing](https://brew.sh/) (There is a chance that you'll need to restart your machine after installing the command line tools in the previous step):

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

<hr />

## 3. Install ZSH & OhMyZSH

ZSH should actually already be in your OS system, but run this Brew command to make sure it's installed:

```
brew install zsh
```

Next, to install OhMyZSH, run:

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

<div>&nbsp;</div>

<hr />

## 4. Install Node

### \>> Install Node

Download from <https://nodejs.org/en/download/> (and don't use Brew or nvm to install).

Run the following to confirm it's installed:

```
node -v
```

Next, run this to install npm globally:

```
npm install -g
```



<div>&nbsp;</div>

### \>> Create npm Account/ Login on Command Line

If you haven't already done so, go to npmjs.org and create a user account. Our team lead will need to give you access to our team's npm packages.

Then you can log in to npm on the command line:

```
npm login
```

Now you can make sure you have the latest version of npm by running:

```
npm install npm@latest -g
```

<hr />

<div>&nbsp;</div>

## 5. Install JDK

Install the MacOS version JDK from Oracle at: <https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

<hr />

## 6. Install LFS

Run:

```
brew install git-lfs
```

Then:

```
git lfs install
```

[Check here for LFS documentation](https://git-lfs.github.com/)