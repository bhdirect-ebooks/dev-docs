---
title: 'Page Breaks, the Page List, and Using page-lister'
---
Pagebreaks, besides mimicking the physical pages of a book, are necessary for some important functionality within an EPUB (namely, for indexes, the toc, and other  internal linking). For that reason, it's important to create a page-list _**before **_developing indexes or other documents that need pagebreak data for linking.

<hr />

## page-lister

The **page-lister** script will search for all the pagebreaks in an epub that [have been formatted per our style guide](https://style.bhdirect-ebooks.org/code/structural_types.html#Page-Breaks), and create a list of links in the .toc file below the toc markup. 

Using page-lister is pretty simple. Within the epub directory on the command line, run `page-lister`, and it will either insert a page list where there wasn't one, or replace a previous page list with a new one.

Like Table of Contents, the page list is wrapped in nav tags with this markup:  

`<nav epub:type="page-list">` ... `</nav>`

![null](/assets/images/uploads/screen-shot-2018-09-13-at-10.52.05-am.png)

## Recommended Code

[Page Breaks](../code/structural_types.html#Page-Breaks)
