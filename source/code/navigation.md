---
title: Navigation Document
---
## toc.xhtml
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

### Table of Contents
Each EPUB we develop must have a TOC in the navigation document.
General guidelines for the TOC:
* The EPUB TOC should reflect the printed TOC, but...
* should only include text between the `<li></li>` tags (no classes, etc.),
* should not be deeply nested (3 levels max),
* should always include part, chapter, or section label (i.e. Print edition has "Chapter 1" in toc, EPUB should have "Chapter 1: Monday Blues"),
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
<aside class="notice">When building the Table of Contents the [_toc.xhtml_ template](https://github.com/epubknowledge/scripts/blob/main/toc-ncx/bbedit-toc-ncx-templates/toc.xhtml) should be used.</aside>

#### Nesting Table of Contents
Table of Contents entries that have children should be nested.
```html
<nav epub:type="toc" id="toc">
  <h1>Table of Contents</h1>
  <ol id="tocList">
    <li>
      <a href="text/SC02_chapter01.xhtml#page1">A linked heading</a>
      <ol>
        <li><a href="text/SC02_chapter01.xhtml#page21">Sub section</a></li>
      </ol>
    </li>
    <li>
      An unlinked heading
      <ol>
        <li><a href="text/SC02_chapter02.xhtml#page41">Sub section</a></li>
      </ol>
    </li>
  </ol>
</nav>
```
<aside class="notice">If a table of contents entry does not have a pagebreak immediately before the header, an `id` attribute should be added to the header for the toc to link to.</aside>

```html
In DS01_chapter01.xhtml:
	<h3 id="thirdLevel">Third-level header</h3>
	
In toc.xhtml:
	<li><a href="text/DS02_chapter01.xhtml#thirdLevel">Third-level header</a></li>
```

### toc.xhtml Landmarks
`epub:type="landmarks"` is required by Amazon (fixed layout is an exception). The first entry in the TOC List should be the first entry to the `landmarks`.
```html
<nav epub:type="toc" id="toc">
  <h1>Table of Contents</h1>
  <ol id="tocList">
    <li><a href="text/SC01_frontmatter05.xhtml#pageix">Acknowledgments</a></li>
    <li><a href="text/SC02_chapter01.xhtml#page1">Chapter 1</a></li>
    ...
    <li><a href="text/SC02_chapter06.xhtml#page99">Appendix</a></li>
  </ol>
</nav>
<nav epub:type="landmarks" class="hide">
  <h1>Guide</h1>
  <ol>
    <li><a href="text/SC01_frontmatter05.xhtml#pageix" epub:type="bodymatter">Acknowledgments</a></li>
    <li><a epub:type="toc" href="toc.xhtml">Table of Contents</a></li>
    <!--must be in here to display in kindle which only picks up
        toc under epub:type="landmarks">. Be sure to include nav.css to hide <ol> numbering. -->
  </ol>
</nav>
```

### toc.xhtml Page List
If a print version of the title exists, [pagebreaks](/code/structural_types.html#Page-Breaks) should be added in the content and added to the Page Number list.
This list must follow the order of `pagebreak` tags as they occur in the document and the order of content documents in the `<spine>`.
```html
<nav epub:type="page-list">
  <h1>Page Numbers</h1>
  <ol>
    <li><a href="xyz.xhtml#page1">1</a></li>
    <!-- etc. -->
  </ol>
</nav>
```

### toc.xhtml List of Images
`epub:type="loi"` is required if you have images that are educational or add value to the content (fixed layout is an exception).
Do not add the title page or ornaments in this list.
```html
<nav epub:type="loi" class="hide">
  <h1>List of Images</h1>
  <ol>
    <li><a href="text/CG02_chapter05.xhtml#img234">Somewhere over the moon</a></li>
  </ol>
</nav>
```
<aside class="notice">If an `alt` tag is generic for the image then a description should be added in the list.</aside>

### toc.xhtml List of Tables
`epub:type="lot"` is required if you have tables.
```html
<nav epub:type="lot" class="hide">
  <h1>List of Tables</h1>
  <ol></ol>
</nav>
```
<aside class="notice">If a table is an image it should be included in the `lot` and not the `loi`.</aside>