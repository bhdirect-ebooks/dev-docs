title: Structural Types
---

## Cover Page

The cover section should be the only content in the first frontmatter document.

As outlined in [File Naming Conventions](construction.html#File-Naming-Conventions), the cover image must be a JPEG, and must be a minimum of 1333x2000 in size.

```html
<body epub:type="frontmatter">
  <section epub:type="cover">
    <img src="../images/cover.jpg" alt="cover image" />
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

```html
<body epub:type="frontmatter">
  <section epub:type="copyright-page">
    <p>Copyright page content in &#60;p&#62; tags.</p>
    <p>etc.</p>
  </section>
</body>
```

## Page Breaks

Pages should be marked with an `<span>` element and the EPUB `pagebreak` type, like the example here (where <em>X</em> is the page identifier).

EPUB "pagebreak" tags are inserted before the all text of the corresponding source page, and for our team, they must follow these guidelines:
* not in `h1-6` but above
* not breaking Scripture references
* not as direct children of `<ol>`, `<ul>`, `<dl>`, or `<table>` (HTML syntax rules)

```html
<span epub:type="pagebreak" id="pageX" title="X" />

<!-- Above headings -->
<span epub:type="pagebreak" id="page808" title="808" />
<h1>My Heading</h1>
```

## Notes

Each note indicator in the document, whether for a footnote or endnote, should be marked with `<sup class="fn">` with a unique backlink `id` and `<a epub:type="noteref" href=...>` as shown in the code example. The corresponding note content should be placed in an `epub:type="footnotes"` section, either in a `<footer>` in each chapter file or in a `backmatter` file.

File names must always be included in the `href` attributes of both the footnote link and backlink, even for `<footer>`-based footnotes.

The note content syntax, after the `</sup>` is a non-breaking space (`&#38;#160;`) followed by the note wrapped with `<span class="note"></span>`.

**All note text must be included in `<span class="note"></span>` with no exceptions.** For long, multiple-paragraph footnotes, do not use `<p>`. Instead, add line breaks using `<br />`

```html
<!-- Note indicator markup -->
<sup class="fn" id="note-backlink-1"><a epub:type="noteref" href="[filename].xhtml#note-1">[1]</a></sup>

<!-- Note content markup -->
<div id="note-1" epub:type="footnote">
  <p><sup><a href="[filename].xhtml#note-backlink-1">1</a></sup>&#160;<span class="note">Note text is placed here.</span></p>
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
  <a epub:type="pagebreak" id="pagexv" title="xv"></a>
  <h1>Abbreviations</h1>
  <h2>Periodicals, Reference Works, and Serials</h2>
  <dl class="abbr-list">
    <dt epub:type="glossterm">
      <dfn>AB</dfn>
    </dt>
    <dd epub:type="glossdef">Anchor Bible</dd>
    <!-- etc. -->
  </dl>

  <a epub:type="pagebreak" id="pagexvi" title="xvi"></a>
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