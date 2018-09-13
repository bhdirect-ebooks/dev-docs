---
title: 'TOC (Table of Contents): Using buildtoc'
---
The TOC (Table of Contents) resides in the OEBPS directory of an EPUB, and allows users to glance over the parts, chapters, and other features of that particular title. 

The general markup of the TOC can be found [here](https://style.bhdirect-ebooks.org/code/navigation.html#Table-of-Contents):

## buildtoc

For the developer, the **buildtoc**  script removes much toil from creating the TOC file, creating links to the various part/chapter file chapters in the /text directory of the OEBPS folder.

The **buildtoc** script is contained within the @bhdirect/toolkit  node bundle, and specific instructions for using it can be found here: <https://www.npmjs.com/package/@bhdirect/buildtoc> (you will need to be logged in to you npmjs.org account that has been linked to the @bhdirect team repo).

Example of running **buildtoc** in the command line (in the EPUB directory) with a 'flag':

```
buildtoc -1
```

## TOC Labels

Keep in mind that a TOC's elements **need to have labeled parts: **

**Correctly Labeled Chapters/Appendices:**

![](/assets/images/uploads/screen-shot-2018-09-13-at-10.12.30-am.png)

**Lacking Appropriate Chapter Labels:**

![](/assets/images/uploads/screen-shot-2018-09-13-at-10.16.35-am.png)
