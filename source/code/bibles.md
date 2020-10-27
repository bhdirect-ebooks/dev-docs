---
title: Bibles
---

## Bible File Naming

Follow different text file naming conventions for Bibles.

For the main Bible content, do not use "chapter" in the file names. Instead, use the book [OSIS](https://docs.google.com/a/lifeway.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit?usp=sharing) and double- or triple-digit chapter number corresponding to the Bible chapter. _There must be one text file for every Bible chapter._

For example, the name of the file containing the Genesis 1 in the New International Version would be named:

* NIV02_body0001_Gen01.xhtml

For the book of Psalms, use three digits in the file name for chapter numbers. For example, Psalm 22 in the Christian Standard Bible would be named:

* CSB02_body0649_Ps022.xhtml

With front matter and back matter included, it would look something like:

* CSB01\_front01\_cover.xhtml
* CSB01\_front02\_titlepage.xhtml
* CSB01\_front03\_copyright-page.xhtml
* etc.
* CSB02_body0001_Gen01.xhtml
* CSB02_body0002_Gen02.xhtml
* CSB02_body0003_Gen03.xhtml
* etc.
* CSB02_body1081_Rev22.xhtml
* CSB03\_back01\_appendix.xhtml
* CSB03\_back02\_appendix.xhtml
* etc.

## Bible Data Attributes

There are a few data attributes specific to Bibles which are required for Content Platform indexing.

<aside class="caution">The examples here show attribute values in our "development" book.chapter.verse (B.C.V) format, but Content Platform will need the values to be in "Scripture Fragement Identifier" (SFI) format. SFIs are similar to the EPUB <a href="http://idpf.org/epub/linking/cfi/epub-cfi.html">"Canonical Fragment Identifier" (CFI)</a> format. The <b>toolkit</b> script <b>convert-epub</b> will convert B.C.V values to SFI. If you're not planning to use <b>convert-epub</b>, you will need to use SFI values. The document <a href="https://docs.google.com/document/d/1pArlqjQIDvZkPX49alvX9KdU0Wq6qVXaznErP6mi_K0/edit?usp=sharing">HTML Markup for Enhancing EPUB Content</a> provides guidance on the format.</aside>

<aside class="note"><b>Convert-epub</b> is used in <code>npm run build</code>, <code>npm run publish</code>, <code>build-partial</code>, and <code>npm run publishpart</code></aside>

### Chapter Data Attributes

Each chapter requires a `data-scripture-chapter` attribute on the containing element (usually a `<section>`) with the value of the book and chapter:

```html
<body epub:type="bodymatter">
  <section epub:type="chapter" data-scripture-chapter="Gen.1">
    <h1 class="bookname">Genesis</h1>
    <p class="h1">1</p>

    <h2>The Creation</h2>
    <!-- chapter content -->
  </section>
</body>  
```

### Verse Data Attributes

Every verse requires a `data-scripture-verse` attribute on an element which contains the entire verse. The value must indicate the book, chapter, and verse.

Sometimes a single verse is contained within one paragraph, in which case, the data attribute can be put on the paragraph itself:

```html
<p data-scripture-verse="Gen.1.1"><span class="versenum">1</span> In the beginning God created the heavens and the earth.</p>
```

Other times, when there are multiple verses in a paragraph, a `<span>` with the data attribute can be used to surround each verse:

```html
<p><span data-scripture-verse="Gen.1.2"><span class="versenum">2</span> Now the earth was formless and empty, darkness covered the surface of the watery depths, and the Spirit of God was hovering over the surface of the waters.</span> <span data-scripture-verse="Gen.1.3"><span class="versenum">3</span> Then God said, “Let there be light,” and there was light.</span> <span data-scripture-verse="Gen.1.4"><span class="versenum">4</span> God saw that the light was good, and God separated the light from the darkness.</span> <span data-scripture-verse="Gen.1.5"><span class="versenum">5</span> God called the light “day,” and the darkness he called “night.” There was an evening, and there was a morning: one day.</span></p>
```

Another scenario sees a verse spanning multiple paragraphs. I those cases, a `<div>` can be added with the data attribute to surround all elements of the verse:

```html
<div data-scripture-verse="Ps.1.1">
  <p class="poem1"><span class="versenum">1</span>How happy is the one who does not</p>
  <p class="poem2">walk in the advice of the wicked</p>
  <p class="poem1">or stand in the pathway with sinners</p>
  <p class="poem2">or sit in the company of mockers!</p>
</div>
```

Where things get a little trickier is when a verse begins or ends part-way through a paragraph, or both. In such cases, it may be necessary to change the CSS `display` styling of certain elements to preserve proper rendering, while still having each verse contained within its own element.

```html
```
