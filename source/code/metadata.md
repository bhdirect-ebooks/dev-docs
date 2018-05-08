---
title: EPUB Metadata
---

## General Book Metadata
The `<metadata>` element is the required first child of `<body>` in the Package Document (content.opf).

The required elements are `<dc:identifier>`, `<dc:title>`, and `<dc:language>`, along with `<meta property="dcterms:modified">`.

<aside class="caution">For our EPUBs, make sure to include at a minimum all recommended metadata elements shown here.</aside>

```xml
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:identifier id="isbn">urn:isbn:<!-- EPUB ISBN here --></dc:identifier>
  <meta property="dcterms:modified">2017-01-04T18:38:55Z</meta>
  <dc:title>The Full, Expanded Title</dc:title>
  <dc:creator>First Last</dc:creator>
  <dc:language>en</dc:language>
  <dc:source>urn:isbn:<!-- print/source ISBN here --></dc:source>
</metadata>
```

## Subtitle and Edition Metadata

When the work has a subtitle and/or an edition, make sure to include it in the `<dc:title>` element.

```xml
<dc:title>The Essence of the New Testament: A Survey, 2nd Edition</dc:title>
```

## Set/Series Metadata

Likewise, when the work is part of a set or series, make sure to include the set title in the `<dc:title>` element.

```xml
<dc:title>The Lord of the Rings: The Fellowship of the Ring</dc:title>
```

## Journal Metadata

<aside class="notice">See a [journal metadata](https://gitlab.com/snippets/26999) snippet on GitLab.</aside>

For journals, `<meta property="dcterms:bibliographicCitation">` must be included as a child of the `<metadata>` element.

<aside class="caution">The `content` attribute value is one, unbroken string, but it is broken below for readability.</aside>

```xml
<meta property="dcterms:bibliographicCitation" scheme="kev.ctx"
content="&ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal
&rft.jtitle=Full+Journal+Title
&rft.stitle=ABBR
&rft.volume=[\d]+
&rft.issue=[\d]+
&rft.date=YYYY
&rft.chron=Month-Month" />
```