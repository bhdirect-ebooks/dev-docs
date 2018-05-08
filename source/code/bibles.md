---
title: Bibles
---

## Bible File Naming

Follow different text file naming conventions for Bibles.

For the main Bible content, do not use "chapter" in the file names. Instead, use a double-digit number representing canon order followed by the book name and double- or triple-digit chapter number. _There must be one text file for every Bible chapter._

For example, the name of the file containing the Genesis 1 in the New International Version would be named:

* niv01_Genesis01.xhtml

For the book of Psalms, use three digits in the file name for chapter numbers. For example, Psalm 22 in the Christian Standard Bible would be named:

* csb19_Psalms022.xhtml

Frontmatter should be the translation abbreviation and `00_front` followed by `_[epub:type]`.

Backmatter, similarly, should be the translation abbreviation and `67_back` followed by `_[epub:type]`, ***or whatever the last number is***. In a normal protestant translation, it will be 67. However, if the title is just the NT or OT, it will be lower; or if the title contains apocrypha, it can be higher.

With front matter and back matter included, it would look something like:

* csb00\_front01\_cover.xhtml
* csb00\_front02\_titlepage.xhtml
* csb00\_front03\_copyright-page.xhtml
* etc.
* csb01_Genesis01.xhtml
* csb01_Genesis02.xhtml
* csb01_Genesis03.xhtml
* etc.
* csb66_Revelation22.xhtml
* csb67\_back01\_appendix.xhtml
* csb67\_back02\_appendix.xhtml
* etc.

## Additional Bible Guidelines Forthcoming
