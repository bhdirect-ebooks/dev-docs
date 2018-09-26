---
title: New Computer Setup
---
<hr />

<hr /><hr />

## 1. Command Line Tools

Follow the instructions on this page to install Mac Command Line Tools/Xcode: <http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/>

<div>&nbsp;</div>

<hr />

## 2. Install Homebrew

Run the following command in the terminal, and check [here for any problems installing](https://brew.sh/) (There is a chance that you'll need to restart your machine after installing the command line tools in the previous step):

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

<div>&nbsp;</div>

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

## 4. Install JDK

Install the MacOS version JDK from Oracle at: <https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

<div>&nbsp;</div>

<hr />

## 5. Install Node & npm Tools

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

\>> Install latest version of <b>toolkit</b>, our team's comprehensive package container.

From any directory, run:

```
sudo npm i -g @bhdirect/toolkit
```

<div>&nbsp;</div>

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

<div>&nbsp;</div>

<hr />

## 7. Remote Connectivity to Github

Run this to have your computer generate a new SSH key (substituting your email address without quotation marks):

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

Next, run this command to display your ssh key. You'll copy and paste this in Github under Settings > SSH Keys.

```
cat ~/.ssh/id_rsa.pub or cat ~/.ssh/id_dsa.pub
```

<div>&nbsp;</div>

<hr />

![null](/assets/images/uploads/screen-shot-2018-09-26-at-11.19.00-am.png)

<hr />

![null](/assets/images/uploads/screen-shot-2018-09-26-at-11.19.17-am.png)

<hr />

<div width="50">

![null](/assets/images/uploads/screen-shot-2018-09-26-at-11.19.33-am.png)

</div>

<hr />

## 8. Other Apps For Development

* BBEDit
* ePub Zip/Unzip
* EPUB-Checker
* Harvest
* A Better Finder Rename
* Slack
* VMWare Fusion
* Adobe Photoshop, InDesign, and Reader
* PageStaker

<hr />

<div>&nbsp;</div>

<hr />
