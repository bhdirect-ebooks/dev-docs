---
title: 'TOC (Table of Contents): Using Buildtoc'
---
The TOC (Table of Contents) resides in the OEBPS directory of an EPUB, it allows users to glance over the parts, chapters, and other features of that title. For the developer, the **buildtoc**  script removes much toil from creating the TOC file, creating links to the various part/chapter file chapters in the /text directory of the OEBPS folder.

The general markup of the TOC can be found [here](https://style.bhdirect-ebooks.org/code/navigation.html#Table-of-Contents):

## buildtoc

The **buildtoc** script is contained within the @bhdirect/toolkit  node bundle, and specific instructions for using it can be found here: <https://www.npmjs.com/package/@bhdirect/buildtoc> (you will need to be logged in to you npmjs.org account that has been linked to the @bhdirect team repo).

Keep in mind that a TOC's elements **need to have labeled parts: **
