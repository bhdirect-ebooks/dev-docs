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

### Overview of the EPUB File Structure

<iframe width="560" height="315" src="https://www.youtube.com/embed/g9G8gcmJuIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

<br />

<br />
<hr />

## Tools/Scripts for Working with Source Documents

<hr />

### InDesign Files (Exporting & Using PageStaker to Insert Page Numbers)

Should your source files be in InDesign, you can view the video below on exporting from InDesign. At times you may have a choice between InDesign and other files; one consideration is knowing that page numbers can often be easily added to InDesign files if not already present.

_If_ a title's sources are within InDesign files and don't have any sort of page divisions, you can eliminate the tedious task of later manually entering page numbers by using the process outlined in the video below. 

\*\*\*Beware!\*\*\* This process must be done before any other development is done on the source files.

<iframe width="560" height="315" src="https://www.youtube.com/embed/i3zzMRSPAUg" frameborder="0" allowfullscreen></iframe>

<hr />

Sometimes, we will receive multiple InDesign files from a publisher for a single title. When this happens, it can be helpful to combine the InDesign files into a single file before exporting. Here is a breakdown of the steps to combine multiple InDesign files, followed by a video tutorial. 

1. Open all files you want to combine in InDesign.
2. Make sure the first file you’d like to move is what you have selected.
3. Go to Layout > Pages > Move Pages
4. Select “All pages” in the “Move Pages” dropdown menu.
5. Select which document you want to append those pages to in the “Move to” dropdown menu. (By default, those pages will be added after the last page of the document you choose.)
6. Click OK.
7. Repeat steps 2-6 until you have combined all of the files.
8. Once you are finished, you can run pagestaker and export the combined file.

<iframe width="560" height="315" src="https://youtu.be/44w0TDlfjRI" frameborder="0" allowfullscreen></iframe>


### handle-ocr

The **handle-ocr** script helps bridge the gap between the work of the OCR team and our development process. Files from OCR are usually exported in a .docx format, and **handle-ocr** will convert these .docx files into html markup. 

The script operates on a folder/directory, so usually it's best to create a folder within your project's `src` directory, and insert the .docx files there. 

Then, from the command line, `cd` into the folder containing the .docx file(s), and run `handle-ocr`. You should find a new html file within that same folder, and is available to be copied and prepped for **split-files** scripting.

<hr />

### pretty

The **pretty** script doesn't dramatically alter the file structure or content, but very efficiently cleans up spacing in file markup to make it, well, pretty. It is a part of the node toolkit, and can be run on a whole set or just one volume. To use, run

```
pretty
```

in the command line directory of the set or volume you want to make pretty.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cv9wkDk-4As" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

<hr />

### split-files

The **split-files ** script is a powerful one that will, based on markup you enter in the source xml/html/xhtml file(s), split the content into a file structure that aligns with our team's styleguide. It's often worthwhile to double/triple check markup before running this script and continuing with development (it can be time-consuming to fix structural errors). This is also a step where content can mysteriously disappear with mistakes.

\*Developer tip: If using numbers in file names to correctly order files for this process, it's important to use leading zeroes (the machines will think that '10' comes right after '1'). Instead, use '01, 02, 03, etc' when adding numbers to a file's name prior to splitting.

[split-files (node)](https://github.com/bhdirect-ebooks/split-files)
How to use:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_JV5I-MCLeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
