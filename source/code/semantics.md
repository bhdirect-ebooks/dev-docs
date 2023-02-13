---
title: EPUB Structural Semantics
---

As mentioned in [EPUB Style Rules](epub_style.html), all projects must use EPUB 3 Structural Semantics Vocabulary wherever possible.

A good understanding of this vocabulary is essential to a well-formed EPUB, and some sections will be required in every project.

In general, use the structural vocabulary along with the HTML `<section>` tag.

## Document Partitions

Every EPUB we develop will have multiple `frontmatter` partitions, and most will also have `backmatter`.

```html
<body epub:type="frontmatter">
  <!-- Preliminary material to the main content of a publication -->
</body>

<body epub:type="backmatter">
  <!-- Ancillary material occurring after the main content of a publication. -->
</body>
```

## Document Divisions

The most common division we use is the `chapter`, and another relevant division, although it occurs much less frequently, is the `part`. For our EPUBs, parts should always be hierarchically one level above the chapter level and always at the same level throughout the entire book. They should not be used below the chapter level or as sub-part sections.

Chapter content should be placed in one file per chapter. Part content, whether it's only a title or made up of many large sections, should also be placed in its own file, with one file per part. Use both where applicable in body matter files.

Include the `bodymatter` EPUB type with the `<body>` tag for all chapter and part documents.

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
</body>
```

## Document Sections

Most of the document sections you will encounter from day to day are referenced here. Follow the structure outlines, but also make sure to consult [Document sections and components](https://idpf.github.io/epub-vocabs/structure/#h_sections) section of the EPUB vocabulary for the full list of document section types and use them where applicable.

**Each frontmatter or backmatter section should be in its own XHTML document.**

Any preliminary sections that appear _before the first chapter_ should be nested in the body of a `frontmatter` document.

Any ancillary sections that appear _after the final chapter_ should be nested in a `backmatter` document.

Some document sections may also occur within chapters. When this is the case, simply nest a `<section>` within the `chapter` section, with the appropriate `epub:type`.

For footnotes within chapters (rather than in the backmatter), use a `<footer>` tag instead.

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
<section epub:type="glossary"></section>

<!-- Sections occurring within chapters -->
<section epub:type="epigraph"></section>
<section epub:type="introduction"></section>
<!-- Normal chapter content -->
<section epub:type="conclusion"></section>
<footer epub:type="footnotes"></footer>

<!-- Sections occurring after the final chapter -->
<section epub:type="conclusion"></section>
<section epub:type="epilogue"></section>
<section epub:type="afterword"></section>
<section epub:type="appendix"></section>
<section epub:type="colophon"></section>
<section epub:type="glossary"></section>
<section epub:type="footnotes"></section>
```
