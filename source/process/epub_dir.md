---
title: EPUB Directories and Files
---
It's just file naming, right?

## Examine the Source Documents

An important step in developing an epub is to **carefully examine the source document's features**... how is the content structured? The data/information is what's most important in what we develop, while stylistic features of the source(s) are given much lower priority. 

* How can I best deliver this original content so that the content is even more accessible to the end user, in a clean professional format?
* What are the main features of this book, and what processes will I need to develop them?
* Is this title part of a set, and will this need to maintain some stylistic consistency related to other volumes? 
* Are there unique features/considerations that lay outside of the usual development process?

## Tools/Scripts for Working with Source Documents

### InDesign Files

_If_ a title's sources are within InDesign files and don't have any sort of page divisions, you can eliminate the tedious task of later manually entering page numbers by using the process outlined in the video below. 

\*\*\*Beware!\*\*\* This process must be done before any other development is done on the source files.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2X63u0LA2n8" frameborder="0" allowfullscreen></iframe>

<hr />
### handle-ocr
The handle-ocr script helps bridge the gap between the work of the OCR team and our development process. Files from OCR are usually exported in a .docx format, and handle-ocr will convert these .docx files into html markup. 

The script operates on a file/directory, so usually it's best to create a folder within your projects `src` directory, and insert the .docx files there. 

Then, from the command line, `cd` into the folder containing the .docx file(s), and run `handle-ocr`. You should find a new html file within that same folder, and is available to be copied and prepped for the **split-files** script.

<hr />
### split-files

[split-files (node)](https://github.com/bhdirect-ebooks/split-files)
How to use:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ArEiGm9T_2g" frameborder="0" allowfullscreen></iframe>

**Use one of the following comments at the beginning of each section break:**

* `<!-- front [section] -->`
* `<!-- toc -->`
* `<!-- part -->`
* `<!-- chapter -->`
* `<!-- notes -->` - _use only for notes in a chapter (for a notes document in backmatter, use `<!-- back footnotes -->`)_
* `<!-- back [section] -->`
* `<!-- trim -->` - _use to remove content_
* `<!-- ^continue^ -->` - _use to include the content with the previous section after a `<!-- trim -->` or `<!-- notes -->` section_

**Dictionaries & Encyclopedias**

* Use `<!-- entry -->` for each entry

**Bibles**

* Use `<!-- [OSIS] -->` for each chapter of the Bible (using just the [book abbreviation](https://docs.google.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit#gid=0))
  For instance:

```html
<!-- Gen -->
<h1>Chapter 1</h1>
<p>... text of Genesis 1 ...</p>

<!-- Gen -->
<h1>Chapter 2</h1>
<p>... text of Genesis 2 ...</p>
```

**Front and back section types:**
_(If a section type is not found below, use a brief descriptive name. For definitions of any type below, see [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/))_

**For use with "front":**
abbr _(use for abbreviation lists)_
copyright-page
cover
dedication
epigraph
foreword
introduction
preamble
preface
prologue
titlepage

**For use with "back":**
afterword
appendix
conclusion
epilogue
footnotes
index

**For use with "front" or "back":**
acknowledgments
bibliography
colophon
contributors
errata
glossary
imprimatur
imprint
other-credits
revision-history

## Recommended Code

[Constructing an EPUB](../code/construction.html)
