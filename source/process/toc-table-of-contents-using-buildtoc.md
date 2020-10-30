---
title: TOC Formatting
---
The TOC (Table of Contents) resides in the OEBPS directory of an EPUB, and allows users to glance over the parts, chapters, and other features of that particular title. 

The general markup of the TOC can be found [here](https://style.bhdirect-ebooks.org/code/navigation.html#Table-of-Contents).

## buildtoc

The **buildtoc** script creates and EPUB-spec-compliant `<nav epub:type="toc">` from the headings of .xhtml files in OEBPS/text. The script has various command-line flags which alter specifics of what it builds. Please see the [buildtoc Readme](https://github.com/bhdirect-ebooks/buildtoc/blob/master/README.md#buildtoc) or run `toolkit buildtoc` in the terminal for instructions.

## TOC Labels

Keep in mind that in Liberty titles, TOC entries should have labeled parts, chapters, etc.

**Correctly Labeled Chapters/Appendices:**

![null](/assets/images/uploads/screen-shot-2018-09-13-at-10.12.30-am.png)

**Lacking Appropriate Chapter Labels:**

![null](/assets/images/uploads/screen-shot-2018-09-13-at-10.16.35-am.png)
