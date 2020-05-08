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
   * README.md
3. Next run `start-project`:
   * creates **/dev/epub/** folder containing skeleton EPUBs for each volume listed in the metadata.xlsb file
   * creates package.json
   * creates projectdb.json
   * updates README.md
   * creates hidden files
     * .editorconfig
     * .gitattributes
     * .gitignore
4. Next create a `src` folder inside the project folder
   * copy any source files from Trello or elsewhere to here
   * i.e. cover images, EPUBs, .docx files, inDesign files, PDFs etc.
5. Each folder inside **dev/epub/**:
   * contains EPUB file structure
   * create EPUBs here following the [Dev Process](https://style.bhdirect-ebooks.org/process/)
6. After EPUB passes the [Review Process](https://style.bhdirect-ebooks.org/process/review.html) it is time to [build](https://style.bhdirect-ebooks.org/process/convert.html#The-Basic-Upload-Process) the project
   * running `npm run build` creates a **cross** folder under **dev/** containing CROSS book source and compiler files and folders for each volume
   * a **dist** folder is created under **dev/**. The **dist** folder includes:
     * `content_platform` folder with CP EPUBs
     * `cross_compiled` folder
       * created when running `npm run moveit`, containing compiled CROSS book folders and files
     * `scene7` folder
       * contains cover images that need to be uploaded to **Alfresco > Shared Files > Covers Database**
     * `ws_marketing` folder
       * contains covers for Wordsearch
       * contains sample html files

The video below briefly describes each part of the structure:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RDhEy5iD6i8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Related Tools/Scripts

[start-project (node)](https://github.com/bhdirect-ebooks/start-project)

* Install globally with npm and use with every project (`npm i -g @bhdirect/toolkit`).
* Usage info:
  * Clone your project repo.
  * `cd` into the project folder and enter `start-project` The script will prompt you for some info and return some important project information.
  * Create the **src** directory and add the source files to it.
