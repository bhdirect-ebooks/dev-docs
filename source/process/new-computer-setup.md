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

ZSH should actually already be in your OS system, but run this Brew command to make sure it's install:

```
brew install zsh
```

Next, to install OhMyZSH, run:

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

<hr />

## 4. Install Node

### Install Node

Download from <https://nodejs.org/en/download/> (and don't use Brew or nvm to install).

### Create npm Account/ Login on Command Line
