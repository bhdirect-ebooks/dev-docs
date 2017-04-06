# Structural Components

## Cover Page

```html
<body epub:type="frontmatter">
  <section epub:type="cover">
    <img src="../images/cover.jpg" alt="cover image" />
  </section>
</body>
```

The cover section should now be the only content in the first frontmatter document.

## Title Page

```html
<body epub:type="frontmatter">
  <section epub:type="titlepage">
    <img src="../images/titlepage.png" alt="title page" />
  </section>
</body>
```

The title page section should now be the second frontmatter document.

## Copyright Page

```html
<body epub:type="frontmatter">
  <section epub:type="copyright-page">
    <p>Copyright page content in &#60;p&#62; tags.</p>
    <p>etc.</p>
  </section>
</body>
```

The copyright page should be the third frontmatter document.

## Page Breaks

```html
<span epub:type="pagebreak" id="pageX" title="X" />

<!-- Above headings -->
<span epub:type="pagebreak" id="page808" title="808" />
<h1>My Heading</h1>
```

Pages should be marked with an <code>&#60;span&#62;</code> element and the EPUB <code>pagebreak</code> type, like the example here (where <em>X</em> is the page identifier).

Similar to CROSS "espagenumber" tags, EPUB "pagebreak" tags are inserted at the beginning of the page. <em>However, EPUB pagebreaks should be inserted before the all text of the page, even headings.</em>

## Notes

```html
<!-- In-content markup -->
<sup class="fn" id="note-backlink-1"><a epub:type="noteref" href="ShortName04_notes.xhtml#note-1">[1]</a></sup>

<!-- Notes document markup -->
<body epub:type="footnotes">
  <div id="note-1" epub:type="footnote">
    <p><sup><a href="ShortName02_chapter01.xhtml#note-backlink-1">1</a></sup>&#160;<span class="note">Note text is placed here.</span></p>
  </div>
  <!-- One <div> for each note. -->
</body>
```

Each note indicator in the document, whether for a footnote or endnote, should be marked with <code>&#60;sup class="fn"&#62;</code> with a unique backlink <code>id</code> and <code>&lt;a epub:type="noteref" href=...&gt;</code> as shown in the code example. The corresponding note text should be placed in the footnotes list located in the '04_notes' document and marked accordingly.

In the notes document, the new note syntax, after the <code>&lt;/sup&gt;</code> is a non-breaking space (<code>&#38;#160;</code>) followed by the note wrapped with <code>&lt;span class="note"&gt;&lt;/span&gt;</code>.

## Indexes
See the [Index Components](#index-components) section.

## Bibliographies

```html
<section epub:type="bibliography">
  <h1>Bibliography</h1>
  <p epub:type="biblioentry" class="hang">Entry text.</p>
  <!-- One <p epub:type="biblioentry" class="hang"> for every entry -->
</section>
```

Each bibliography in the work should be tagged with <code>&#60;section&#62;</code> and the appropriate EPUB <code>bibliography</code> type. <em>If a bibliography appears after the final chapter, it should be placed in a</em> <code>backmatter</code> <em>document</em>.

Each entry in a bibliography should be tagged with <code>&#60;p epub:type="biblioentry" class="hang"&#62;</code>.

## Abbreviations and Glossaries

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

Glossaries and abbreviation sections should receive the <code>glossary</code> EPUB type.

Glossary terms must be nested in a <code>&#60;dl&#62;</code> element and tagged according to the recommendations here.

### Sub-sections

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

Since the only allowable children of <code>&#60;dl&#62;</code> are <code>&#60;dt&#62;</code> and <code>&#60;dd&#62;</code>, headings and page numbers should be children of the <code>glossary</code> section.

This means that any pagebreaks and headings must be outside of the <code>&#60;dl&#62;</code> element. Simply use separate <code>&#60;dl&#62;</code> elements as shown in the example.

## Abbreviation Lists

```html
<section epub:type="glossary">
  <h1>Abbreviations</h1>
  <dl class="abbr-list">
```

Abbreviation lists should appear wherever they appear in the content, and the only additional requirement beyond the standard EPUB and HTML markup is that the <code>&#60;dl&#62;</code> element receive <code>class="abbr-list"</code>. This simply applies different styling to abbreviation lists than to actual glossaries.

### Abbreviation Terms

Abbreviation terms must also be tagged throughout the content. See [Abbreviations](#abbreviations).

## Actual Glossaries

> See a completed [05_glossary.xhtml](https://gitlab.com/bhdirect-ebooks/9781433651090/blob/master/OEBPS/text/EverydayTheology05_glossary.xhtml) on GitLab.

Actual glossaries (not abbreviation sections) should appear in the 05_glossary document, and they must each have a unique <code>&#60;id&#62;</code> on the <code>&#60;dt&#62;</code> element, like <code>&#60;dt id="glossterm-1" epub:type="glossterm"&#62;</code>.

Corresponding terms in the content documents are to be linked to the glossary according to the recommended code in this documentation. See [Glossary Links](#glossary-links) below.

### Glossary Links

```html
<a epub:type="noteref" href="ShortName05_glossary.xhtml#glossterm-376">Old Testament</a>
```

Glossary terms appearing in the work are to be linked to the glossary document using <code class="inline">&#60;a&#62;</code> with <code class="inline">epub:type="noteref</code>.

## Glossary Videos

```html
<dd epub:type="glossdef">
  <a class="video-glyph" href="../videos/everyday-theology-123.xhtml"></a>
  <p>A view of the millennium that...</p>
</dd>
```

> See an example [individual video XHTML doc](https://gitlab.com/bhdirect-ebooks/9781433651090/blob/master/OEBPS/videos/everyday-theology-043.xhtml) on GitLab.

Some browsers ignore the preload instructions for videos. So, although we explicitly set <code>preload="none"</code>, the browsers in question still preload all videos. Since a glossary may contain hundreds of videos, the time to render can be detrimental to the user's experience. It simply takes too long. To alleviate this issue, all glossary video markup must be placed in individual XHTML documents (one per video) in a video folder with links from the glossary.

To ensure a consistent user experience, the video links should be included according to the recommended code. The <code>&#60;a&#62;</code> tag should be included as the first child of the <code>&#60;dd&#62;</code> element, above the definition content. The <code>&#60;a&#62;</code> receives <code>class="video-glyph"</code> and an <code>href</code> equal to the location of the corresponding video XHTML doc.

For code consistency, the XHTML file name should be the same as the MP4 and WEBM file names (which, in turn, should be the same as the SVG file name).

## Dictionaries

Dictionaries have a unique specification of their own in EPUBs. Additional information is forthcoming.