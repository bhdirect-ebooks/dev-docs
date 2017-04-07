title: EPUB Metadata
---

## General Book Metadata
The `<metadata>` element is the required first child of `<body>` in the Package Document (content.opf).

The required elements are `<dc:identifier>`, `<dc:title>`, and `<dc:language>`, along with `<meta property="dcterms:modified">`.

<aside class="notice">For our EPUBs, make sure to include at a minimum all recommended metadata elements shown here.</aside>

```xml
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
  <meta name="cover" content="cover.jpg" />
  <meta property="ibooks:specified-fonts">true</meta>
  <dc:identifier id="isbn">urn:isbn:<!-- EPUB ISBN here --></dc:identifier>
  <meta property="dcterms:modified">2017-01-04T18:38:55Z</meta>

  <!-- Titles -->
  <dc:title id="the-title">The Book Title</dc:title>
  <!-- Additional <dc:title> elements are often required for accessibility -->

  <!-- Creators -->
  <dc:creator id="creator-1">First Last</dc:creator>
  <meta refines="#creator-1" property="file-as">Last, First</meta>
  <meta refines="#creator-1" property="role" scheme="marc:relators">aut</meta>
  <!-- Use additional <dc:creator> elements for each author and editor -->

  <!-- Publication -->
  <dc:date>2017</dc:date><!-- year in which you are developing the ePub -->
  <dc:publisher>Publisher Name</dc:publisher>
  <meta property="marc:relators:pup"><!-- publisher place (city and state) --></meta>
  <meta property="dcterms:dateCopyrighted">2015</meta><!-- copyright year of the publication -->
  <meta property="dcterms:rightsHolder"><!-- copyright holder(s) --></meta>
  <dc:rights><!-- all rights/permissions from copyright page --></dc:rights>
  <dc:language>en</dc:language>
  <dc:source>urn:isbn:<!-- print/source ISBN here --></dc:source>
</metadata>
```

## Subtitle and Edition Metadata

When the work has a subtitle and/or an edition, multiple `<dc:title>` elements must be used and refined with <code>title-type</code>.

Any time an EPUB requires multiple `<dc:title>` elements:

* each title type must appear in the appropriate order, and
* the "expanded" title type must always be included as the top element.

```xml
<dc:title id="full-title">The Essence of the New Testament: A Survey, 2nd Edition</dc:title>
<meta refines="#full-title" property="title-type">expanded</meta>

<dc:title id="the-title">The Essence of the New Testament</dc:title>
<meta refines="#the-title" property="title-type">main</meta>

<dc:title id="the-subtitle">A Survey</dc:title>
<meta refines="#the-subtitle" property="title-type">subtitle</meta>

<dc:title id="the-edition">2nd Edition</dc:title>
<meta refines="#the-edition" property="title-type">edition</meta>
```

## Set/Series Metadata

Sets, or series, also require multiple `<dc:title>` elements along with <code>refines</code> attributes.

Additionally, the <code>group-position</code> property determines this volume's position in the set.

<aside class="warning">As with subtitles and editions, including additional `<dc:title>` elements necessitates the use of the "expanded" title type at the top.</aside>

```xml
<dc:title id="full-title">The Lord of the Rings: The Fellowship of the Ring</dc:title>
<meta refines="#full-title" property="title-type">expanded</meta>

<dc:title id="the-title">The Fellowship of the Ring</dc:title>
<meta refines="#the-title" property="title-type">main</meta>

<dc:title id="set-title">The Lord of the Rings</dc:title>
<meta refines="#set-title" property="title-type">collection</meta>
<meta refines="#set-title" property="group-position">1</meta>
<!-- The "1" above indicates that this is the first in a series -->
```

## Journal Metadata

<aside class="tip">See a [journal metadata](https://gitlab.com/snippets/26999) snippet on GitLab.</aside>

For journals, `<meta property="dcterms:bibliographicCitation">` must be included as a child of the `<metadata>` element.

<aside class="warning">The `content` attribute value is one, unbroken string, but it is broken below for readability.</aside>

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