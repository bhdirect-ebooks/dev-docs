---
title: Structural Types
---
## Cover Page

The cover section should be the only content in the first frontmatter document.

As outlined in [File Naming Conventions](construction.html#File-Naming-Conventions), the cover image must be a JPEG, and must be a minimum of 1333x2000 in size.

```html
<body epub:type="frontmatter">
  <section epub:type="cover">
    <img src="../images/cover.jpg" alt="cover" />
  </section>
</body>
```

## Title Page

The title page section should be in the second frontmatter document, and it should normally be a PNG of the source title page. However, it can be HTML.

```html
<body epub:type="frontmatter">
  <section epub:type="titlepage">
    <img src="../images/titlepage.png" alt="title page" />
  </section>
</body>
```

## Copyright Page

The copyright page should be the third frontmatter document.

On the copyright page, use a handful of special classes to indicate types of data:

* `.permissions` - use with every paragraph that contains permissions/rights information
* `.year` - use with `<span>` to tag the copyright year (or string of years)
* `.copyright` - use with the paragraph or span that contains the whole copyright string; **must start with `©` `&#xA9;` or `&#169;`**
* `.pub-place` - use with `<span>` or `<p>` to indicate the publisher's location

Note the use of those classes below:

```html
<body epub:type="frontmatter">
  <section epub:type="copyright-page">
    <p>Copyright <span class="copyright">© <span class="year">1996</span> John Knox Press</span></p>
    <p>Copyright page content in &#60;p&#62; tags.</p>
    <p>etc.</p>
    <p class="pub-place">Louisville, Kentucky</p> <!-- Only city & state should be included in the tags -->
    <p class="permissions">All rights reserved.</p>
    <p class="permissions">Unless otherwise noted, Scripture is taken from the NIV, etc.</p>
    <p>etc.</p>
  </section>
</body>
```

## Headings

Heading tags reflect a hierarchy and should therefore be used for semantic (not stylistic) purposes. _Only the chapter title, part title, or frontmatter/backmatter section title should be tagged using `<h1>`._ The next lower level heading tag would be `<h2>`, then `<h3>`, etc.

_**It is important to understand the concept of the HTML document outline**_ [See the spec](http://w3c.github.io/html/sections.html#outline). Always think of headings in terms of the document outline.

Since headings create an outline, heading tags should not be used for subheadings ([See the spec](http://w3c.github.io/html/sections.html#headings-and-sections)).

For any headings that should not be included in the document outline (usually in `aside` elements), use `<p epub:type="bridgehead"></p>`. Also acceptable: `<p>` with `.h1sub`, `.h2sub`, or `.h3sub`.

### Chapter Titles, Labels, and Numbers

As mentioned above, chapter titles should always be tagged as `<h1>` elements.

When a chapter has a label of some kind (e.g., "Chapter 1", "1", "A" "IV", etc.) <strong>and</strong> also has a title, there is a special class to use. Follow the recommended code examples, using the `.label` class.

**Do the same for any Section or Part title.**

```html
<!-- Chapter titled simply "Chapter 1" -->
<h1>Chapter 1</h1> <!-- Don't use .label when the label *is* the title -->

<!-- Chapter titled "Chapter 1: How We Got the New Testament" -->
<h1><span class="label">Chapter 1</span>How We Got the New Testament</h1>

<!-- Part titled "1. What Is Theology?" -->
<h1><span class="label">1</span>What Is Theology?</h1>

<!-- Section titled "Section 1: Introduction to the Study of the Bible -->
<h1><span class="label">Section 1</span>Introduction to the Study of the Bible</h1>
```

### Parts

Whenever a book has a part structure (hierarchical groupings of related chapters), at least one special class (`.top-level`) should be used with _any `<h1>` element in front, back, or body that does not belong in a part_.

#### `.top-level` Example

<aside class="notice">Let's imagine we have a book with the following structure. <strong>The bolded sections should have the \`.top-level\` class on their `<h1>` elements.</strong><ul style="list-style-type:none"><li><strong>Preface</strong></li><li><strong>Introduction</strong></li><li>Part 1<ul style="list-style-type:none"><li>Chapter 1</li><li>Chapter 2</li></ul></li><li><strong>Interlude</strong></li><li>Part 2<ul style="list-style-type:none"><li>Chapter 3</li><li>Chapter 4</li></ul></li><li><strong>Conclusion</strong></li><li><strong>Index</strong></li></ul><p>More specifically, the \`<section epub:type="">\` and `<h1>` conventions would be like so:</p><table><tr><th>Book Section</th><th>Section Epub Type</th><th>h1</th></tr><tr><td>Preface</td><td>\`preface\`</td><td>`<h1 class="top-level">Preface</h1>`</td></tr><tr><td>Introduction</td><td>\`introduction\`</td><td>`<h1 class="top-level">Introduction</h1>`</td></tr><tr><td>Part 1</td><td>\`part\`</td><td>`<h1>Part 1</h1>`</td></tr><tr><td>Chapter 1</td><td>\`chapter\`</td><td>`<h1>Chapter 1</h1>`</td></tr><tr><td>Chapter 2</td><td>\`chapter\`</td><td>`<h1>Chapter 2</h1>`</td></tr><tr><td>Interlude</td><td>\`chapter\`</td><td>`<h1 class="top-level">Interlude</h1>`</td></tr><tr><td>Part 2</td><td>\`part\`</td><td>`<h1>Part 2</h1>`</td></tr><tr><td>Chapter 3</td><td>\`chapter\`</td><td>`<h1>Chapter 3</h1>`</td></tr><tr><td>Chapter 4</td><td>\`chapter\`</td><td>`<h1>Chapter 4</h1>`</td></tr><tr><td>Conclusion</td><td>\`conclusion\`</td><td>`<h1 class="top-level">Conclusion</h1>`</td></tr><tr><td>Index</td><td>\`index\`</td><td>`<h1 class="top-level">Index</h1>`</td></tr></table></aside>

#### Sub-Parts

When there are parts that consist of sub-parts, the special classes `.part-1`, `.part-2`, `.part-3`, `.part-4`, `.part-5`, and `.part-6` exist to help you represent the book's structural hierarchy.

_**Note that the numbers 1-6 here indicate hierarchy level, not sequential order!**_ ([Just like h1-6 tags.](http://w3c.github.io/html/sections.html#outline))

##### Sub-Parts Example

<aside class="notice">Let's imagine we have a book with the following structure.<ul style="list-style-type:none"><li>Preface</li><li>Introduction</li><li>Part A<ul style="list-style-type:none"><li>Part A-1<ul style="list-style-type:none"><li>Chapter 1</li><li>Chapter 2</li></ul></li><li>Part A-2<ul style="list-style-type:none"><li>Chapter 3</li></ul></li></ul></li><li>Interlude</li><li>Part B<ul style="list-style-type:none"><li>Chapter 4</li><li>Chapter 5</li></ul></li><li>Conclusion</li><li>Index</li></ul><p>In this case, the \`<section epub:type="">\` and `<h1>` conventions would be like so:</p><table><tr><th>Book Section</th><th>Section Epub Type</th><th>h1</th></tr><tr><td>Preface</td><td>\`preface\`</td><td>`<h1 class="top-level">Preface</h1>`</td></tr><tr><td>Introduction</td><td>\`introduction\`</td><td>`<h1 class="top-level">Introduction</h1>`</td></tr><tr><td>Part A</td><td>\`part\`</td><td>`<h1 class="part-1">Part A</h1>`</td></tr><tr><td>Part A-1</td><td>\`part\`</td><td>`<h1 class="part-2">Part A-1</h1>`</td></tr><tr><td>Chapter 1</td><td>\`chapter\`</td><td>`<h1>Chapter 1</h1>`</td></tr><tr><td>Chapter 2</td><td>\`chapter\`</td><td>`<h1>Chapter 2</h1>`</td></tr><tr><td>Part A-2</td><td>\`part\`</td><td>`<h1 class="part-2">Part A-2</h1>`</td></tr><tr><td>Chapter 3</td><td>\`chapter\`</td><td>`<h1>Chapter 3</h1>`</td></tr><tr><td>Interlude</td><td>\`chapter\`</td><td>`<h1 class="top-level">Interlude</h1>`</td></tr><tr><td>Part B</td><td>\`part\`</td><td>`<h1 class="part-1">Part B</h1>`</td></tr><tr><td>Chapter 4</td><td>\`chapter\`</td><td>`<h1>Chapter 4</h1>`</td></tr><tr><td>Chapter 5</td><td>\`chapter\`</td><td>`<h1>Chapter 5</h1>`</td></tr><tr><td>Conclusion</td><td>\`conclusion\`</td><td>`<h1 class="top-level">Conclusion</h1>`</td></tr><tr><td>Index</td><td>\`index\`</td><td>`<h1 class="top-level">Index</h1>`</td></tr></table></aside>

## Page Breaks

Pages should be marked with an `<span>` element and the EPUB `pagebreak` type, like the example here (where <em>X</em> is the page identifier).

```html
<span epub:type="pagebreak" id="pageX" title="X"></span>
```

EPUB "pagebreak" tags are inserted before the all text of the corresponding source page, and for our team, they must follow these guidelines:

* not in `h1-6` but above
* not breaking Scripture references
* not as direct children of `<ol>`, `<ul>`, `<dl>`, or `<table>` (HTML syntax rules)

```html
<!-- Above headings -->
<span epub:type="pagebreak" id="page808" title="808"></span>
<h1>My Heading</h1>
```

## Notes

Each note indicator in the document, whether for a footnote or endnote, should be marked with `<sup class="fn">` with a unique backlink `id` and `<a epub:type="noteref" href=...>` as shown in the code example. The corresponding note content should be placed in an `epub:type="footnotes"` section, either in a `<footer>` in each chapter file or in a `backmatter` file.

File names must always be included in the `href` attributes of both the footnote link and backlink, even for `<footer>`-based footnotes.

The note content syntax, after the `</sup>` is a non-breaking space (`#160;`) followed by the note wrapped with `<span class="note"></span>`.

**All note text must be included in `<span class="note"></span>` with no exceptions.** For long, multiple-paragraph footnotes, do not use `<p>`. Instead, add line breaks using `<br />`

```html
<!-- Note indicator markup -->
<sup class="fn" id="note-backlink-1"><a epub:type="noteref" href="[filename].xhtml#note-1">[1]</a></sup>

<!-- Note content markup -->
<div id="note-1" epub:type="footnote">
  <p><sup><a href="[filename].xhtml#note-backlink-1">1</a></sup>&#160;<span class="note">Note text is placed here.<br />Paragraphs are separated with 'br' tags.</span></p>
</div>
<!-- One <div> for each note. -->
```

## Indexes

See the [Indexes](indexes.html) section.

## Bibliographies

Each bibliography in the work should be tagged with `<section>` and the appropriate EPUB `bibliography` type. <em>If a bibliography appears after the final chapter, it should be placed in a</em> `backmatter` <em>document</em>.

Each entry in a bibliography should be tagged with `<p epub:type="biblioentry" class="hang">`.

```html
<!-- Separate file, in <body> -->
<section epub:type="bibliography">
  <h1>Bibliography</h1>
  <p epub:type="biblioentry" class="hang">Entry text.</p>
  <!-- One <p epub:type="biblioentry" class="hang"> for every entry -->
</section>

<!-- With chapter, inside the chapter <section>-->
<section epub:type="bibliography">
  <!-- the heading here is not always <h2> -->
  <!-- it should instead follow the document outline -->
  <h2>Bibliography</h2>
  <p epub:type="biblioentry" class="hang">Entry text.</p>
  <!-- One <p epub:type="biblioentry" class="hang"> for every entry -->
</section>
```

## Abbreviations and Glossaries

Glossaries and abbreviation sections should receive the `glossary` EPUB type.

Glossary terms must be nested in a `<dl>` element and tagged according to the recommendations here.

```html
<section epub:type="glossary">
  <!-- <dl> must be a child of <section epub:type="glossary"> -->
  <dl>
    <!-- The <dt> tag receives "glossterm" -->
    <dt epub:type="glossterm">
      <!-- The term or abbreviation itself must be tagged with <dfn> -->
      <dfn>The term</dfn>
    </dt>
    <!-- The definition/full term is tagged with <dd> and "glossdef" -->
    <dd epub:type="glossdef">The definition</dd>
    <!-- etc., for each term -->
  </dl>
</section>
```

### Sub-sections

Since the only allowable children of `<dl>` are `<dt>` and `<dd>`, headings and page numbers should be children of the `glossary` section.

This means that any pagebreaks and headings must be outside of the `<dl>` element. Simply use separate `<dl>` elements as shown in the example.

```html
<!-- Separate sections and page break examples -->
<section epub:type="glossary">
  <span epub:type="pagebreak" id="pagexv" title="xv"></span>
  <h1>Abbreviations</h1>
  <h2>Periodicals, Reference Works, and Serials</h2>
  <dl class="abbr-list">
    <dt epub:type="glossterm">
      <dfn>AB</dfn>
    </dt>
    <dd epub:type="glossdef">Anchor Bible</dd>
    <!-- etc. -->
  </dl>

  <span epub:type="pagebreak" id="pagexvi" title="xvi"></span>
  <h2>Ancient Works</h2>
  <h3>Pseudepigraphical Books</h3>
  <dl class="abbr-list">
    <dt epub:type="glossterm">
      <dfn><span class="italic">Apoc. Abr.</span></dfn>
    </dt>
    <dd epub:type="glossdef"><span class="italic">Apocalypse of Abraham</span></dd>
    <!-- etc. -->
  </dl>
</section>
```

### Abbreviation Lists

Abbreviation lists should appear wherever they appear in the content, and the only additional requirement beyond the standard EPUB and HTML markup is that the `<dl>` element receive `class="abbr-list"`. This simply applies different styling to abbreviation lists than to actual glossaries.

```html
<section epub:type="glossary">
  <h1>Abbreviations</h1>
  <dl class="abbr-list">
```

### Abbreviation Terms

Abbreviation terms must also be tagged throughout the content. See [Abbreviations](general_types.html#Abbreviations).

### Actual Glossaries

Actual glossaries (not abbreviation sections) should also appear wherever they appear in the content, and they must each have a unique `<id>` on the `<dt>` element, like `<dt id="glossterm-1" epub:type="glossterm">`.

Corresponding terms in the content documents are to be linked to the glossary according to the recommended code in the documentation below.

### Glossary Links

Glossary terms appearing in the work are to be linked to the glossary document using `<a>` with `epub:type="noteref`.

```html
<a epub:type="noteref" href="[filename]_glossary.xhtml#glossterm-376">Old Testament</a>
```
