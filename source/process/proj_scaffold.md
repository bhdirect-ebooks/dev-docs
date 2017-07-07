title: Project Scaffolding
---

Scaffoldin'? Aw yeeeah.

## Project Directory

Become familiar with the project directory structure:

![Screen shot of our project directory structure.](../assets/images/project-dir.png)

The video below briefly describes each part of the structure. The video describes a prior iteration of the project directory. Changes since the video:
* The `e2c` folder has been moved out of the `dev` folder and is now a hidden folder (`.e2c`) in the root project directory.
* Two new folders have been added:
  * `dist/scene7` now holds the cover images for Scene7 (and `dist/content_platform` has only EPUBs)
  * `dist/ws_marketing` now holds the WORDsearch cover images and sample html files for the WS website


<iframe width="560" height="315" src="https://www.youtube.com/embed/lT9YCsChMSM" frameborder="0" allowfullscreen></iframe>

## Related Tools/Scripts

[start-project (node)](https://github.com/bhdirect-ebooks/start-project)

* Install globally with npm and use with every project (`sudo npm install -g @bhdirect/start-project`).
* Usage info:
  * Clone your project repo.
  * Create the `src` directory and add the source files to it.
  * Then, `cd` into the project folder and enter `start-project`. The script will prompt you for some info and return some important project information.
