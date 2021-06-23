---
title: EPUB Metadata
---

## General Book Metadata
The `<metadata>` element is the required first child of `<body>` in the Package Document (content.opf).

The required elements are `<dc:identifier>`, `<dc:title>`, and `<dc:language>`, along with `<meta property="dcterms:modified">`.

All tags located in the metadata section (`<metadata></metadata>`) should be populated with [firebrand-fetch](https://github.com/EPUBknowledge/firebrand-fetch). If you create the OPF file with the script and a tag is empty do not remove the tag, check to see if that metadata exists in Firebrand and if it is missing contact the metadata curator associated with the title and ask it to be updated. If a metadata error exists and needs to be added to Firebrand we are not edit it that is something the curator should do.

A good practice to see if any metadata could be added is to always reference the Cover.jpg. If any metadata is found ask the metadata curator to add the missing metadata to the title. The more metadata we provide for the title the better chances customers can find and will know more about it.

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

## Subtitle Metadata

When the title is pulled from the API it will inject the title and subtitle within the `<dc:title>` tag if a subtitle exists.
If the subtitle exists, separated by a colon, the subtitle should be placed in a refinement tag.

```xml
<dc:title id="theTitle">The Title</dc:title>
<meta refines="#theTitle" property="title-type">The Subtitle</meta><!-- subtitle -->
```

## Set/Series Metadata

Likewise, when the work is part of a set or series, make sure to include the set title and volume in a refinement tag.

```xml
<dc:title id="theTitle">Halting the Hateful Hand of Mister Malevolent</dc:title>
<meta refines="theTitle" property="title-type">An Adventure in Mercy</meta><!-- subtitle -->
<meta refines="theTitle" property="title-type">Bibleman</meta><!-- series title -->
<meta refines="theTitle" property="title-type">1</meta><!-- volume -->
```

## Creator Metadata
Sometimes the '&' symbol could've been entered in Firebrand if the title has multiple creators.
Each creator should be in their own `<dc:creator>` tag.

```xml
<dc:creator>Pamela Kennedy</dc:creator>
<dc:creator>B&#38;H Kids Editorial Staff</dc:creator>
```

## Subject Metadata
Double check the `<dc:subject>` tags to verify that only one subject is used per tag.
If the subject structure is incorrect Alfresco will not allow the upload and you will be returned an error after the prompt reaches 100%.

If more than one subject exists, each subject should be moved into its own tag.

```xml
<dc:subject>Religion</dc:subject>
<dc:subject>Biblical Commentary</dc:subject>
<dc:subject>New Testament</dc:subject>
<dc:subject>General</dc:subject>
```

## Description Metadata
### Entities
When the metadata is pulled from the API it may contain named entities.
If a named entity exists it should be replaced with it's numerical value.
See the [Entity References style guide](/code/html_style.html#Entity-References) for more info.

### Code
If a coded list exists in the description it should be replaced with a bulleted line.

## Relation
Each related title should be listed in `<dc:relation>` tags.
This includes print (hard and soft back) versions as well as other titles in the series.

```xml
<dc:relation>
  Title="Foo bar: soft cover"
  Relation="978xxxxxxxxxx"
  format="print"
</dc:relation>

<dc:relation>
  Title="Foo bar: hardcover"
  Relation="978xxxxxxxxxx"
  format="print"
</dc:relation>

<dc:relation>
  Title="Foo bar 2"
  Relation="978xxxxxxxxxx"
  format="digital"
</dc:relation>
```

## Language Metadata
By default the API assumes the language is English, and will use `en-US` in the `<dc:language>` tag.
Spanish titles should be changed to `es`.

```xml
<dc:language>es</dc:language>
```

Other language codes are also acceptable using the [appropriate ISO code](https://www.w3schools.com/tags/ref_language_codes.asp).

## Coverage Metadata
By default the coverage is assumed worldwide distribution and the tag is added.

```xml
<dc:coverage>Worldwide</dc:coverage>
```
If the title is origin depicted, such as US only, the tag should be removed.

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