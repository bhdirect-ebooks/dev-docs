---
title: Dev Process Overview
---

## I. Prep

### A. Start the project

1. [Project Admin](project_admin.html)
1. [Project Scaffolding](proj_scaffold.html)

### B. Create EPUB directory

* Structure and name [EPUB Directories and Files](epub_dir.html)

<hr>

## II. Clean & Code

### A. Identify and [markup content](../code/general_types.html) types and styles

#### Non-Core
* Cover image must meet specs (JPEG, 1300x2000)
* Include source stylesheet in `OEBPS/styles/` and add to all text files **after** our default stylesheet, like:
```html
<link href="../styles/mywsb-dev.css" rel="stylesheet" type="text/css" />
<link href="../styles/template.css" rel="stylesheet" type="text/css" />
```
* Replace all source stylesheet `font-family` values with **either** `sans-serif` or `serif`
* `<h1>` (chapter titles must be `<h1>` and follow [styleguide](../code/structural_types.html#Headings); all other headings may remain as-is)
* Pass EpubCheck

#### Core
* Cover, title page, and [copyright page](../code/structural_types.html#Copyright-Page)
* [Headings](../code/structural_types.html#Headings) (hierarchical)
* [Lists and outlines](../css_lib/lists.html)
* [Block & pull quotes](../css_lib/quotes.html)
* [Poetry](../css_lib/poetry.html)
* [Tables](../code/general_types.html#Tables)
* [Languages & transliterations](../css_lib/languages.html)
* [Non-decorative images](../code/media_types.html#Images)
* Cleanup all non-mywsb.css [classes](../code/css_style.html#Styling-Content) (replace or remove)

### B. Create well-formed EPUB documents

* [Package document (content.opf)](package_doc.html)
* [Navigation document (toc.xhtml)](nav_doc.html)

### Checkpoint!

<aside class="caution">Pass EpubCheck and stylecheck before moving forward!</aside>

<div>&nbsp;</div>

<hr>

## III. Enhance

### All

* [Page breaks](../code/structural_types.html#Page-Breaks)
* [Scripture references](scripture.html)
* [Abbreviations](abbr.html)
* [Videos](videos.html)
* [Glossary](glossary.html)
* Commentaries
  * [Scripture context](../code/data_types.html#Scripture-Context)
* Workbooks/Studies
  * Workbook enhancement in CP

### Non-Core
* While footnotes do not have to follow the styleguide, they must follow these rules:
  * all `<a>` tags for indicators must have `epub:type="noteref"`
  * all footnote ids must be on traditional [block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements) (usually `<p>` or `<div>`)

### Core

* [Footnotes](footnotes.html)
* [Indexes](indexes.html)
* [Dictionaries](../code/dictionaries.html)
  * Dictionary article markup
  * Dictionary metadata
  * Search Key Map
* Journals
  * [Journal article markup](../code/data_types.html#Journal-Articles)
  * [Journal metadata](../code/metadata.html#Journal-Metadata)
* Bible studies
  * [LESSONmaker markup](../code/data_types.html#LESSONmaker-Content)
* Date-aligned works
  * [Date context](../code/data_types.html#Date-Context)

<hr>

## IV. QA & Convert

### A. Self Review

* [Review Process](review.html)

### Checkpoint!

<aside class="caution">Pass EpubCheck and stylecheck before moving forward!</aside>

<div>&nbsp;</div>

### B. Peer Review

* [Review Process](review.html)

### C. [Conversion](convert.html)
