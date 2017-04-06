# Structural Semantics

As mentioned in the Style Guide, all projects must use EPUB 3 Structural Semantics Vocabulary wherever possible.

A good understanding of this vocabulary is essential to a well-formed EPUB, and some sections will be required in every project.

In general, use the structural vocabulary along with the HTML <code>&#60;section&#62;</code> tag.

## Document Partitions

```html
<body epub:type="frontmatter">
  <!-- Preliminary material to the main content of a publication -->
</body>

<body epub:type="backmatter">
  <!-- Ancillary material occurring after the main content of a publication. -->
</body>
```

Every EPUB we develop will have multiple <code>frontmatter</code> partitions, and most will also have <code>backmatter</code>.

## Document Divisions

```html
<!-- Division by chapter -->
<body epub:type="bodymatter">
  <section epub:type="chapter">
    <h1>Chapter 1</h1>
  </section>
</body>

<!-- Division by part -->
<body epub:type="bodymatter">
  <section epub:type="part">
    <h1>The First Testament</h1>
    <p>The First Testament (commonly known as the Old Testament) is a collection of books that make up the first three-quarters of the Bible. Our designation of the Bible's two main parts as "First" and "New" follows the example of the book of Hebrews…</p>
  </section>

  <section epub:type="chapter">
    <h1>Genesis</h1>
  </section>
</body>
```

The most common division we use is the <code>chapter</code>, and another relevant division, although it occurs much less frequently, is the <code>part</code>. Use both where applicable in chapter files.

Because our documents are split into multiple chapter files, nesting <code>chapter</code> sections inside <code>part</code> sections does not make sense. Therefore, nest only part-specific headings and subsequent introductory text inside the <code>part</code> section alone.

Include the <code>bodymatter</code> EPUB type with the <code>&#60;body&#62;</code> tag for all chapter documents.

## Document Sections

```html
<!-- Sections occurring before the first chapter -->
<section epub:type="cover"></section>
<section epub:type="titlepage"></section>
<section epub:type="copyright-page"></section>
<section epub:type="contributors">
<section epub:type="foreword"></section>
<section epub:type="preface"></section>
<section epub:type="prologue"></section>
<section epub:type="introduction"></section>

<!-- Sections occurring within chapters -->
<section epub:type="epigraph"></section>
<section epub:type="introduction"></section>
<!-- Normal chapter content -->
<section epub:type="conclusion"></section>

<!-- Sections occurring after the final chapter -->
<section epub:type="conclusion"></section>
<section epub:type="epilogue"></section>
<section epub:type="afterword"></section>
<section epub:type="appendix"></section>
<section epub:type="colophon"></section>
```

Most of the document sections you will encounter from day to day are referenced here. Follow the structure outlines, but also make sure to consult [Document sections and components](https://idpf.github.io/epub-vocabs/structure/#h_sections) section of the EPUB vocabulary for the full list of document section types and use them where applicable.

Any preliminary sections that appear before the first chapter should be nested in the body of a <code>frontmatter</code> document.

Any ancillary sections that appear after the final chapter should be nested in a <code>backmatter</code> document. ***This does not include notes or glossaries, which are located in separate XHTML files.***

Each frontmatter or backmatter section should now be in its own XHTML document.

Some document sections may also occur within chapters. When this is the case, simply nest a <code>&#60;section&#62;</code> within the <code>chapter</code> section, with the appropriate <code>epub:type</code>.