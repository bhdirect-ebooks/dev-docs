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

### A. Identify and [markup content](markup.html) types and styles

* Cover, title page, and [copyright page](../code/structural_types.html#Copyright-Page)
* [Headings](../code/structural_types.html#Headings) (hierarchical)
* [Lists and outlines](../css_lib/lists.html)
* [Block & pull quotes](../css_lib/quotes.html)
* [Poetry](../css_lib/poetry.html)
* [Tables](../code/general_types.html#Tables)
* [Languages & transliterations](../css_lib/languages.html)
* [Non-decorative images](../code/media_types.html#Images)
* [Remove external hyperlinks](../code/general_types.html#Hyperlinks)
* Cleanup all non-mywsb.css [classes](../code/css_style.html#Styling-Content) (replace or remove)

### B. Create well-formed EPUB documents

* [Package document (content.opf)](package_doc.html)
* [Navigation document (toc.xhtml)](nav_doc.html)

### Checkpoint!

<aside class="caution">Pass EpubCheck and stylecheck before moving forward!</aside>

<div>&nbsp;</div>

<hr>

## III. Enhance

### A. Every project

* [Page breaks](page_break.html)
* [Scripture references](scripture.html)

### B. Most projects

* [Footnotes](footnotes.html)
* [Indexes](indexes.html)

### C. Some projects

* [Abbreviations](abbr.html)
* [Videos](videos.html)
* [Glossary](glossary.html)

### D. Particular projects

* Commentaries
  * [Scripture context](../code/data_types.html#Scripture-Context)
* [Dictionaries](../code/dictionaries.html)
  * Dictionary article markup
  * Dictionary metadata
  * Search Key Map
* Journals
  * [Journal article markup](../code/data_types.html#Journal-Articles)
  * [Journal metadata](../code/metadata.html#Journal-Metadata)
* Bible studies
  * [LESSONmaker markup](../code/data_types.html#LESSONmaker-Content)
* Workbook-type works
  * Workbook enhancement in CP
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

MyWSB & Desktop (all projects)

* Build/dist process
* Review in myWSB

Desktop only

* epub2cross
* Review in WORDsearch
