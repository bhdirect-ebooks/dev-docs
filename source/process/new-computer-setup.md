---
title: New Computer Setup
---
<hr />

<hr /><hr />

## 1. Command Line Tools (& Git if needed)

<hr />

### Command Line Tools & Xcode

Follow the instructions on this page to install Mac Command Line Tools/Xcode: [https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)

<div>&nbsp;</div>

<hr />

### Git

Git should have installed with Xcode, but to confirm that it's there you can run this:

```
git --version
```

If Git isn't on your machine, you should be prompted to download and install it.

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

## 4. Install Java

<i>Java Runtime Environment</i>

Install the MacOS build of Java SE Runtime Environment 10 from Oracle at: <https://www.oracle.com/technetwork/java/javase/downloads/jre10-downloads-4417026.html>

Installation is easiest if you choose the MacOS file that has a `.dmg` extension.

You may need to restart your machine after installation.

Run the following to confirm Java is installed:
```
java -version
```
You may need to restart your machine after installation.

<div>&nbsp;</div>

<hr />

## 5. Install Node & npm Tools

<hr />

### \>> Install NodeJS

Download the latest LTS version from <https://nodejs.org/en/download/>
(please don't use Homebrew or nvm to install NodeJS).

Run the following to confirm it's installed:

```
node -v
```

Next, run this to confirm npm is installed:

```
npm -v
```

<div>&nbsp;</div>

<hr />

### \>> Create npm Account/ Login on Command Line

If you haven't already done so, go to <https://www.npmjs.com/> and create a user account. Our team lead will need to add you to the bhdirect npm organization and give you access to our private packages.

Then you can log in to npm on the command line:

```
npm login
```

\>> Install latest version of <b>toolkit</b>, our team's comprehensive package container.

From any directory, run:

```
sudo npm i -g @bhdirect/toolkit
```

<div>&nbsp;</div>

<hr />

## 6. Install Git LFS (Large File Service)

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

## 8. Install Other Apps for Development

* [A Better Finder Rename](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#A-Better-Finder-Rename)
* [Adobe Suite](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#Adobe-InDesign-Photoshop-amp-Reader)
* [BBEdit](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#BBEdit)
* [EPUB-Checker](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#EPUB-Checker)
* [ePUB Zip/UnZip](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#ePub-Zip-Unzip-2-0-1)
* [Harvest](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#Harvest)
* [PageStaker](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#PageStaker-for-use-with-InDesign)
* [Slack](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#Slack)
* [VSCode (Visual Studio Code)](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#VSCode)

<hr />

<div>&nbsp;</div>

<hr />
