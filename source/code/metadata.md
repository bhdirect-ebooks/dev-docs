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
  <dc:language>en</dc:language>
  <dc:creator id="creator1">First Last</dc:creator>
  <meta refines="#creator1" property="role" scheme="marc:relators">aut</meta>
  <dc:source>urn:isbn:<!-- print/source ISBN here --></dc:source>
</metadata>
```

The toolkit script **create-opf** may add other elements or more details, depending on the nature of the book.

## Title Metadata

When the work has a subtitle and/or an edition, make sure to include it in the first `<dc:title>` element.

```xml
<dc:title>The Essence of the New Testament: A Survey, 2nd Edition</dc:title>
```

Likewise, when the work is part of a set or series, make sure to include the set title in the first `<dc:title>` element as well.

```xml
<dc:title>The Lord of the Rings: The Fellowship of the Ring</dc:title>
```

// TODO add more about title stuff

## Creator Metadata

When a work has multiple creators/contributors, they should be included along with their roles.

There are two classes of creators, "primary" creators, who are associated with the whole work, and "secondary" creators, who have contributed an introduction, chapter, article, or similar small portion of the work.

### Primary Creators

Primary creators should be included using additional `<dc:creator>` and `<meta>` role elements. Each `<dc:creator>` should have a unique id.

```xml
<dc:creator id="creator1">David Benner</dc:creator>
<meta refines="#creator1" property="role" scheme="marc:relators">aut</meta>
<dc:creator id="creator2">Peter Hill</dc:creator>
<meta refines="#creator2" property="role" scheme="marc:relators">aut</meta>
```
<aside class="notice">
In general, all primary creators will be included in the dev ePub's **crossrc.json** and **content.opf** files when the project is started.

If you feel a primary creator has been left out, see [Requesting a Metadata Update](https://style.bhdirect-ebooks.org/process/metadata-update.html)
</aside>

### Secondary Creators



Secondary creators can be associated with either a single file, or a portion of a file.

To list a secondary creator associated with an entire file, use a `<meta>` tag with a `property="dc:creator"` attribute, and a `refines` attribute with a value pointing to the id of that file in the `<manifest>`.

```xml
  <!-- creator of and entire file -->
  <meta id="creator2" refines="#BStoryingLife02_body03_chapter03" property="dc:creator">J.O. Terry</meta>
  <meta refines="#creator2" property="role" scheme="marc:relators">aut</meta>
...
</metadata>
<manifest>
...
  <item id="BStoryingLife02_body03_chapter03" href="text/BStoryingLife02_body03_chapter03.xhtml" media-type="application/xhtml+xml" />
```

For a secondary creators associated with only part of a file, use the same markup, but the `refines` attribute value should point to the path of the file, realtive to **content.opf**, and the id within the file where the portion begins.

```xml
  <!-- creators of portions of a file -->
  <meta id="creator9" refines="text/FoundersJ3402_body07_chapter07.xhtml#ctb-loc-1" property="dc:creator">Sam Tullock</meta>
  <meta refines="#creator9" property="role" scheme="marc:relators">aut</meta>
  <meta id="creator10" refines="text/FoundersJ3402_body07_chapter07.xhtml#ctb-loc-2" property="dc:creator">Philip R. Taylor</meta>
  <meta refines="#creator10" property="role" scheme="marc:relators">aut</meta>
```

Complicated? Yes. Thankfully, we have some processes to make this easier

#### The `data-author` attribute and **create-opf**.

#### When to use `data-author`

## Journal Metadata

For journals (books in the **Periodicals** category,) a span tag containing certain metadata must be added to the copyright-page.xhtml file.

```html
<span class="periodical-meta" data-volume="1" data-issue="45" data-month="April-June" data-year="2001"></span>
```

- `data-volume` should be a numerical value of at least one digit. If it is not clear what volume the journal belongs to, use `1`
- `data-issue` should be a numerical value of at least one digit, and represent the number of the issue within the volume
- `data-month` should be the capitalized, full-length name of the month or range of months the issue covers. 
  - Ranges should be the first and last month in the range, separated by hyphen (dash)
  - Issues covering quarters or seasons should have those translated to months for this attribute
- `data-year` should be a numberical value of four digits, representing the year the issue falls within. If the issue spans years, use the earliest.

### Why?

CROSS books in the **Periodicals** category require a special `<meta>` tag in the `<head>` identifying the work as a journal, and giving volume, issue, month, and year data. Here is an example:

```xml
<meta name="esjournal" volume="1" issue="1" month="January" year="2000" />
```

The toolkit script **epub2cross** will create this `<meta>` tag from a `<meta property="dcterms:bibliographicCitation">` element in the `<metadata>` section of the ePub's **content.opf** file.

This "bibliographic citation" tag is itself created by the toolkit script **create-opf** from the `<span class="periodical-meta"...></span>` element specified above, and data included in the ePub's **crossrc.json** file.

Here is an example of the "bibliographic citation" element in **content.opf**

<aside class="caution">The text should be one, unbroken string, but it is broken below for readability.</aside>

```xml
<meta property="dcterms:bibliographicCitation">
&amp;ctx_ver=Z39.88-2004
&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal
&amp;rft.jtitle=Full+Journal+Title
&amp;rft.stitle=ShortName
&amp;rft.volume=[\d]+
&amp;rft.issue=[\d]+
&amp;rft.date=YYYY
&amp;rft.chron=Month-Month
</meta>
```

<aside class="notice">See a [bibliographic citation](https://gist.github.com/flintsteel7/3fd71706290ac6fc4949e09b2e7b4da4) example on GitHub.</aside>
