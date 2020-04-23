---
title: Project Scaffolding
---
Scaffoldin'? Aw yeeeah.

## Project Directory

Become familiar with the project directory structure:

![Screen shot of our project directory structure.](../assets/images/project-dir.png)

1. Each project is a folder with the project short name
2. After cloning a project from GitHub the project folder contains:
   * metadata.xlsb
   * READ.me
3. Next run `start-project`:
   * creates package.json
   * creates projectdb.json
   * updates READ.me
   * creates hidden files
     * .git
     * .editorconfig
     * .gitignore
4. Next create a `src` folder inside the project folder
   * copy any source files from Trello here
   * i.e. cover images, epubs, .docx files, inDesign files, PDFs etc.
5. Inside the **dev > epub > ISBN** folder:
   * contains epub file structure
   * create epubs here following the \[Dev Process](https://style.bhdirect-ebooks.org/process/)
6. After epub passes the \[Review Process](https://style.bhdirect-ebooks.org/process/review.html) it is time to \[build](https://style.bhdirect-ebooks.org/process/convert.html#The-Basic-Upload-Process) the project
   * running `npm run build` creates a `cross` folder inside the `dev` folder
   * a `dist` folder is created under the `dev` folder. The `dist` folder includes:
     * `content_platform` folder
     * `cross_compiled` folder
       * created when running `npm run moveit`
     * `scene7` folder
       * contains cover images that need to be uploaded to **Alfresco > Shared Files > Covers Database**
     * `ws_marketing` folder
       * contains covers for Wordsearch
       * contains sample html files

The video below briefly describes each part of the structure:

<iframe width="560" height="315" src="https://youtu.be/RDhEy5iD6i8" frameborder="0" allowfullscreen></iframe>

## Related Tools/Scripts

[start-project (node)](https://github.com/bhdirect-ebooks/start-project)

* Install globally with npm and use with every project (`sudo npm install -g @bhdirect/start-project`).
* Usage info:
  * Clone your project repo.
  * `cd` into the project folder and enter `start-project` The script will prompt you for some info and return some important project information.
  * Create the **src** directory and add the source files to it.
