---
title: Content.opf Standards
---

## OPF Metadata
The `<metadata>` element is the required first child of `<body>` in the Package Document (content.opf).

The required elements are `<dc:identifier>`, `<dc:title>`, and `<dc:language>`, along with `<meta property="dcterms:modified">`.

All tags located in the metadata section (`<metadata></metadata>`) should be populated with [firebrand-fetch](https://github.com/EPUBknowledge/firebrand-fetch). If you create the OPF file with the script and a tag is empty do not remove the tag, check to see if that metadata exists in Firebrand and if it is missing contact the metadata curator associated with the title and ask it to be updated. If a metadata error exists and needs to be added to Firebrand we are not edit it that is something the curator should do.

A good practice to see if any metadata could be added is to always reference the Cover.jpg. If any metadata is found ask the metadata curator to add the missing metadata to the title. The more metadata we provide for the title the better chances customers can find and will know more about it.

<aside class="caution">For our EPUBs, make sure to include at a minimum all recommended metadata elements shown here.</aside>

```xml
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:identifier id="isbn">urn:isbn:<!-- EPUB ISBN here --></dc:identifier>
  <meta property="dcterms:modified">2017-01-04T18:38:55Z</meta>
  <meta name="cover" content="Cover.jpg" />
  <dc:title>The Full, Expanded Title</dc:title>
  <dc:creator>First Last</dc:creator>
  <dc:language>en</dc:language>
  <dc:source>urn:isbn:<!-- print/source ISBN here --></dc:source>
</metadata>
```

<aside class="notice">

For fixed-layout EPUBs there are more [required tags](/code/opf_format.html#Fixed-Layout-Metadata).
    
</aside>

### Cover Metadata
The cover image should be included in the `<metadata>`,
```
<meta name="cover" content="Cover.jpg" />
```

### Subtitle Metadata

When the title is pulled from the API it will inject the title and subtitle within the `<dc:title>` tag if a subtitle exists.
If the subtitle exists, separated by a colon, the subtitle should be placed in a refinement tag.
```xml
<dc:title id="theTitle">The Title</dc:title>
<meta refines="#theTitle" property="title-type">The Subtitle</meta><!-- subtitle -->
```

### Set/Series Metadata

Likewise, when the work is part of a set or series, make sure to include the set title and volume in a refinement tag.
```xml
<dc:title id="theTitle">Halting the Hateful Hand of Mister Malevolent</dc:title>
<meta refines="theTitle" property="title-type">An Adventure in Mercy</meta><!-- subtitle -->
<meta refines="theTitle" property="title-type">Bibleman</meta><!-- series title -->
<meta refines="theTitle" property="title-type">1</meta><!-- volume -->
```

### Creator Metadata
Sometimes the '&' symbol could've been entered in Firebrand if the title has multiple creators.
Each creator should be in their own `<dc:creator>` tag.
```xml
<dc:creator>Pamela Kennedy</dc:creator>
<dc:creator>B&#38;H Kids Editorial Staff</dc:creator>
```

### Subject Metadata
Double check the `<dc:subject>` tags to verify that only one subject is used per tag.
If the subject structure is incorrect Alfresco will not allow the upload and you will be returned an error after the prompt reaches 100%.

If more than one subject exists, each subject should be moved into its own tag.
```xml
<dc:subject>Religion</dc:subject>
<dc:subject>Biblical Commentary</dc:subject>
<dc:subject>New Testament</dc:subject>
<dc:subject>General</dc:subject>
```

### Description Metadata
#### Entities
When the metadata is pulled from the API it may contain named entities.
If a named entity exists it should be replaced with it's numerical value.
See the [Entity References style guide](/code/html_style.html#Entity-References) for more info.

#### Code
If a coded list exists in the description it should be replaced with a bulleted line.

### Relation
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

### Language Metadata
By default the API assumes the language is English, and will use `en-US` in the `<dc:language>` tag.
Spanish titles should be changed to `es`.
```xml
<dc:language>es</dc:language>
```
Other language codes are also acceptable using the [appropriate ISO code](https://www.w3schools.com/tags/ref_language_codes.asp).

### Coverage Metadata
By default the coverage is assumed worldwide distribution and the tag is added.
```xml
<dc:coverage>Worldwide</dc:coverage>
```
If the title is origin depicted, such as US only, the tag should be removed.

### Fixed Layout Metadata
Since EPUB readers [assume reflowable content by default](https://www.w3.org/publishing/epub3/epub-packages.html#layout-usage), when building a fixed-layout title we must explicitly declare the layout in the content.opf.
```xml
<meta property="rendition:layout">pre-paginated</meta>
<meta property="rendition:spread">landscape</meta>
<meta property="rendition:orientation">landscape</meta>
<meta property="ibooks:binding">false</meta>
```

Because of transparency and magnification differences, a `.mobi` file must be created for fixed-layout titles. There are some additional metadata entries that are required for the `.mobi` file.
```xml
<meta property="rendition:layout">pre-paginated</meta>
<meta property="rendition:spread">landscape</meta>
<meta name="book-type" content="children" />
<meta name="fixed-layout" content="true" />
<meta name="RegionMagnification" content="true" />
<meta name="original-resolution" content="720x504" />
```

### Journal Metadata
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

## OPF Manifest
All contents within the OEBPS should be declared in the OPF's Manifest.
If a hidden file exists it should be removed and should not be added to the Manifest.
If any file exists and not referenced it will fail validation.

If you want to manually get a list of contents in your directories (such as the text, css or img directory) you can do this by dragging the directory in the terminal with the ls command and piping the output to a file.
```
ls path/to/folder >> text.xhtml
```

### Text XHTML Manifest
Once you have a file that contains a list of your xhtml files to include in the manifest, open the file and do the following find-replace in BBEdit:
```
Find:
^(.*?)\.xhtml  

Replace:
\t\t<item id="\1" href="text/\1\.xhtml" media-type="application/xhtml+xml" />
```
Then copy and paste the output into the `<manifest>` tag.

### Navigation Manifest
The following two navigation files should always be included in the `<manifest>` tag.
```xml
<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />
<item id="toc" href="toc.xhtml" media-type="application/xhtml+xml" properties="nav" />
```

### CSS Manifest
All CSS in the CSS directory should be included in the Manifest.
For reflowable EPUBs, there are usually two CSS files and they have consistent names.
```xml
<item id="idGeneratedStyles.css" href="css/idGeneratedStyles.css" media-type="text/css" />
<item id="epub3.css" href="css/epub3.css" media-type="text/css" />
```

For fixed-layout EPUBs, the epub3.css file is not necessary.
```xml
<item id="idGeneratedStyles.css" href="css/idGeneratedStyles.css" media-type="text/css" />
```

If you have a title with more CSS files, or they are named differently, use the [command above](#OPF-Manifest) to list the contents of the `css/` directory, then do the following find-replace.
```bash
Find:
^(.*?)\.css

Replace:
\t\t<item id="\1.css" href="css/\1.css" media-type="text/css" />
```

### Font Manifest
All fonts should be declared in the Manifest but if a PostScript exists it should be removed and replaced with either an OpenType or TrueType font. If a PostScript font is added to an ePub the text will render as squares in some applications like Apple iBooks.
<aside class="caution">Sometimes editorial submits fonts with whitespace in their names. If this exists that whitespace must be removed or replaced with a dash or underscore. Sometimes submitted fonts with whitespace are an indication that the font did not come from UTC. If this occurs the font should downloaded and used from UTC.</aside>

Use the [command above](#OPF-Manifest) to list the contents of the `fonts/` directory, then do the following find-replace actions and paste the result in the `<manifest>` tag.

#### OpenType Font Manifest
```
Find:
^(.*?)\.otf

Replace:
\t\t<item id="\1\.otf" href="font/\1\.otf" media-type="application/vnd.ms-opentype" />
```

#### TrueType Font Manifest
```
Find:
^(^.*?)\.ttf

Replace:
\t\t<item id="\1\.ttf" href="font/\1\.ttf" media-type="application/x-font-ttf" />
```

### Image Manifest
All images should be added to the Manifest.
Use the [command above](#OPF-Manifest) to list the contents of the `img/` directory, then do the following find-replace action and paste the result in the `<manifest>` tag.
```
Find:
^(.*)\.png

Replace:
\t\t<item id="\1.png" href="img/\1\.png" media-type="image\/png" \/>
```

### Cover Image Manifest
While all other images in the manifest should be PNG format, the cover image should be a JPG. 

```xml
<item id="cover" href="image/Cover.jpg" media-type="image/jpeg" properties="cover-image" />
```
Note two important attributes for the cover item:
- `id="cover"` must be lowercase `cover` so it will not clash with [Metdata's Cover declaration](#Cover-Metadata).
- `properties="cover-image"` to declare that this is the cover image in the ePub.

## OPF Spine
While the Manifest lists all the contents of the ePub the Spine renders the order of XHTML files and it's very important to note what is declared in the Spine and one reason the implemented naming convention is required during development is to assist the Spine creation.
If the XHTML naming convention was followed then in BBEdit open a new file (shortcut <kbd>&#8984;N</kbd>), copy and paste what's in the manifest for XHTML and run the following find-replace:
```
Find:
<item id="(.*)" href.*?$

Replace:
<itemref idref="\1" />
```
Paste the results in the `<spine>` tag.

<aside class="notice">By default we assume the first entry to be referenced will always be the `toc`. While this is our default standard sometimes this can be changed and that usually comes from an editorial request.</aside>

### Linear = No in OPF Spine
There is the ability to apply `linear=no` to `<itemref />` tags to exclude an XHTML file from the reading order.
```xml
<spine toc="ncx">
  <itemref idref="toc" />
  <itemref idref="DS01_frontmatter01" />
  <itemref idref="DS01_frontmatter02" />
  <itemref idref="DS02_chapter01" />
  <itemref idref="DS02_chapter02" />
  <itemref idref="DS02_chapter03" />
  <itemref idref="DS02_chapter04" linear="no" />
  <itemref idref="DS03_backmatter01" />
</spine>
```
This option isn't widely supported on devices since it was implemented around ePub 2 and most apps do not support this, like *Adobe Digital Editions*.