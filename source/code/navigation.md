---
title: Navigation Document
---

All navigational aids are located within the `<body>` of the navigation document (toc.xhtml for our EPUB projects).

Each one is an ordered list (`<ol>`) of hyperlinks (`<li><a></a></li>`) nested in a `<nav>` element.

```html
<nav>
  <h1>Nav Title</h1>
  <ol>
    <li><a></a></li>
  </ol>
</nav>
```

## Table of Contents

Each EPUB we develop must have a TOC in the navigation document.

General guidelines for the TOC:

* The EPUB TOC should reflect the printed TOC, but...
* should only include text between the `<li></li>` tags (no classes, etc.),
* should not be deeply nested (2 or 3 levels max),
* should always include part, chapter, or section label,
* should not include elements that appear prior to the TOC in its linear order.

```html
<nav epub:type="toc">
  <h1>Table of Contents</h1>
  <ol>
    <!-- <li> elements with <a>, linking to each location -->
    <!-- with additional nested lists as the TOC requires. -->
  </ol>
</nav>
```
## Page List

The final navigational aid we must include in every EPUB is a list of links to all pages. This list must follow the order of `pagebreak` types as they occur in the document and the order of content documents in the `<spine>`.

```html
<nav epub:type="page-list">
  <h1>Page Numbers</h1>
  <ol>
    <li><a href="xyz.xhtml#page1">1</a></li>
    <!-- etc. -->
  </ol>
</nav>
```