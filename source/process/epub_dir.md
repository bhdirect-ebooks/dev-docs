title: EPUB Directories and Files
---

It's just file naming, right?

## Related Tools/Scripts

TODO: handle-ocr

[split-files (node)](https://github.com/bhdirect-ebooks/split-files)
How to use:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ArEiGm9T_2g" frameborder="0" allowfullscreen></iframe>

**Use one of the following comments at the beginning of each section break:**
  * `<!-- front [section] -->`
  * `<!-- toc -->`
  * `<!-- part -->`
  * `<!-- chapter -->`
  * `<!-- notes -->` - *use only for notes in a chapter (for a notes document in backmatter, use `<!-- back footnotes -->`)*
  * `<!-- back [section] -->`
  * `<!-- trim -->` - *use to remove content*
  * `<!-- ^continue^ -->` - *use to include the content with the previous section after a `<!-- trim -->` or `<!-- notes -->` section*

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
*(If a section type is not found below, use a brief descriptive name. For definitions of any type below, see [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/))*

**For use with "front":**
abbr *(use for abbreviation lists)*
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
