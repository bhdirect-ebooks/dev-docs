---
title: Dictionaries & Encyclopedias
---
This spec is only a subset of the official [EPUB Dictionaries and Glossaries 1.0](http://idpf.org/epub/dict/) Recommended Specification. Portions of the spefification above and beyond what is outlined here *may* be used, but features are not required. This spec focuses on the minimum necessary in our EPUBs. 

<hr />

## Dictionary File Naming

For our team, follow the normal file naming conventions for any dictionary/encyclopedia front matter and back matter.

For the main content, however, there are two options:
1. use `part` for each of the source language alphabet characters* and `entry` for each <abbr title="The organizational unit of EPUB Dictionary content, consisting of at least one headword and further information on it">entry</abbr>.
2. use `part` for each of the source language alphabet characters*, and include all entries in that part file

<small>* or other grouping used by the work itself</small> 
 
Option 1 is best used when the average length of entries is long.
Option 2 should be considered when the average length of entries is short.

### Option 1 Example:

* Op1Dict02_body001_part01.xhtml    `A`
* Op1Dict02_body002_entry001.xhtml  `aardvark`
* Op1Dict02_body003_entry002.xhtml  `abacus`
* Op1Dict02_body004_entry003.xhtml  `abandon`
* etc.

With front matter and back matter included, it would look something like:

* Op1Dict01_front01_cover.xhtml
* Op1Dict01_front02_titlepage.xhtml
* Op1Dict01_front03_copyright-page.xhtml
* etc.
* Op1Dict02_body001_part01.xhtml
* Op1Dict02_body002_entry001.xhtml
* Op1Dict02_body003_entry002.xhtml
* Op1Dict02_body004_entry003.xhtml
* etc.
* Op1Dict03_back01_appendix.xhtml
* Op1Dict03_back02_appendix.xhtml
* etc.

### Option 2 Example:

* Op2Dict02_body001_part01.xhtml    `A`
* Op2Dict02_body002_part02.xhtml    `B`
* etc.

With front matter and back matter included, it would look something like:

* Op2Dict01_front01_cover.xhtml
* Op2Dict01_front02_titlepage.xhtml
* Op2Dict01_front03_copyright-page.xhtml
* etc.
* Op2Dict02_body001_part01.xhtml
* Op2Dict02_body002_part02.xhtml
* etc.
* Op2Dict03_back01_appendix.xhtml
* Op2Dict03_back02_appendix.xhtml
* etc.

<hr />

## Dictionary Metadata

Dictionary publications require special metadata in the EPUB package file, in our case `content.opf`. The particulars depend on the type. The [full specification is available via IDPF/W3C](http://www.idpf.org/epub/dict/epub-dict.html#sec-2.5) for reference.

Our minimum requirement is a `dc:type` of `dictionary` and `meta` elements indicating the subtype and language(s).
- identify the publication as a dictionary: `<dc:type>dictionary</dc:type>`
- identify the type of dictionary: `<meta property="dictionary-type">[subtype]</meta>`. The following subtypes are available for use:
    * `monolingual` — dictionary with <abbr title="A word or phrase defined, translated, or otherwise treated in an entry">headword</abbr>s and <abbr title="The organizational unit of EPUB Dictionary content, consisting of at least one headword and further information on it">entry</abbr> content in a single language
    * `bilingual` — dictionary with headwords in source language, other entry content in target language
    * `multilingual` — dictionary with headwords in source language, other entry content in two or more target languages
    * `thesaurus` — synonym dictionary or thesaurus
    * `encyclopedia` — encyclopedia
    * `spelling` — special-purpose spelling dictionary
    * `pronouncing` — special-purpose dictionary of pronunciations
    * `etymological` — special-purpose dictionary of etymologies (word origins)
- identify the language(s) using [ISO 639-1 or 639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) language codes:
  - source language — language of the headwords: `<meta property="source-language">[ISO 639]</meta>`
  - target language(s) — language of the translation(s)/definition(s): `<meta property="target-language">[ISO 639]</meta>`

### Monolingual Dictionary

Monolingual subtypes are the default subtype when the dictionary `dc:type` is used and no subtype is specified. However, for consistent coding practices, we will include the `monolingual` subtype `<meta>` element for any monolingual dictionaries/encyclopedias that do not fall into the other subtype categories.

Even for monolingual dictionaries, `source-language` and `target-language` `<meta>` elements are required, they'll just have the same value as each other

```html
<dc:language>en</dc:language>
<!-- other metadata -->
<dc:type>dictionary</dc:type>
<meta property="dictionary-type">monolingual</meta>
<meta property="source-language">en</meta>
<meta property="target-language">en</meta>
```
Notice the `<dc:language>` element, which is a standard non-dictionary EPUB metadata requirement, but is still included in addition to the source and target dictionary-specific `<meta>` elements


### Bilingual Dictionary

A bilingual dictionary contains headwords in one language (e.g. Greek) and translations/definitions in another (e.g. English)

This example metadata is for a _unidirectional_ Greek-English dictionary.

The `source-language` is `grc` because the headwords are Greek terms, and the `target-language` is `en` because definitions/translations are given in English. (The ISO 639-2 code of `eng` could also be used.)

```html
<dc:language>en</dc:language>
<dc:language>grc</dc:language>
<!-- other metadata -->
<dc:type>dictionary</dc:type>
<meta property="dictionary-type">bilingual</meta>
<meta property="source-language">grc</meta>
<meta property="target-language">en</meta>
```

Notice the difference in order between the `<dc:language>` and  `<meta>` language elements. Since the `<dc:language>` elements refer to the EPUB in general, and are not dictionary specific, the publication's primary language comes first.

Imagine the example Greek-English dictionary contains Greek headwords and some additional Greek within the body, but most of the content is written in English.

When it comes to the dictionary specific language `<meta>` elements, however, `source-language` comes first, and refers to the language of the dictionary headwords, followed by `target-language` which identifies the language of the translations/definitions

<aside class="caution">
  <p>It is also possible to create a <em>bidirectional</em> bilingual dictionary, such as Greek-English/English-Greek. In such a case, the Greek-English and English-Greek sections would be separated into different <b>collection</b>s within the package file, as shown in the <a href="http://www.idpf.org/epub/dict/epub-dict.html#sec-2.5.4.4">EPUB Dictionary Specifications</a> from IDPF/W3C</p>
  <p>Many of our automated scripts within <code>toolkit</code>, such as <code>manifest-and-spine</code>, <code>stylecheck</code>, <code>create-skmap</code>, and <code>epub2cross</code> do not yet support the use of <b>collection</b>s within EPUBs. If you believe this is necessary for your project, please talk to a tools developer.</p> 
</aside>

### Multilingual Dictionary

Imagine a Hebrew-English dictionary, where headwords were also translated into another language, (e.g. Greek) even if just for clarification or equivalent term information. This dictionary would receive the `multilingual` subtype.

The example shows how the metadata would look in such a book. For a multilingual subtype, there is one `source-language` and two or more `target-language`s.

```html
<dc:language>en</dc:language>
<dc:language>heb</dc:language>
<dc:language>grc</dc:language>
<!-- other metadata -->
<dc:type>dictionary</dc:type>
<meta property="dictionary-type">multilingual</meta>
<meta property="source-language">heb</meta>
<meta property="target-language">en</meta>
<meta property="target-language">grc</meta>
```

### Other Dictionary Types

For other dictionary subtypes, simply use the appropriate subtype name in the `meta property="dictionary-type` element, along with the appropriate language elements

```html
<dc:language>en</dc:language>
<!-- other metadata -->
<dc:type>dictionary</dc:type>
<meta property="dictionary-type">encyclopedia</meta>
<meta property="source-language">en</meta>
<meta property="target-language">en</meta>
```

<hr />

## Dictionary Content

### Entries

An entry is the organizational unit of EPUB Dictionary content, consisting of at least one headword and further information on it. An entry in an EPUB Dictionary is independently distributable, meaning it can be rendered to users outside of its EPUB Dictionary Publication context.

Semantic markup of the entry and its structure is detailed below. Refer to [Content Documents - Dictionaries](http://www.idpf.org/epub/dict/epub-dict.html#sec-2.2) from IDPF/W3C for full specifications.

#### Body, Article, and Headings

##### Option 1: each entry is in it's own file

Part files will be treated normally:
```html
<body epub:type="part">
  <h1>A</h1>
</body>
```

Entry file `<body>` tags should receive an `epub:type` of `dictionary`.

The entry content should be contained within an `<article>` element with an `epub:type` of `dictentry` and an `id` unique to the entry. The <abbr title="A word or phrase defined, translated, or otherwise treated in an entry">headword</abbr>(s) should be contained in `<dfn>`(s). See more on [Headwords](#Headwords) below

If you'd like to use **buildtoc** to create the Table of Contents, An `<h1>` with the `.nd` class should be added as the first child of the `<article>`. This heading will not be displayed in the rendered file, (due to CSS styling of `display: none;` in **mywsb.css**) but the text of the heading will be shown in the Table of Contents.
```html
<body epub:type="dictionary">
  <article epub:type="dictentry" id="aardvark">
    <h1 class="nd">aardvark</h1>
    <dfn>aardvark</dfn>
    <!-- entry content -->
  </article>
</body>
```

<aside class="caution">
  <p>No classes other than <code>.nd</code> should be used on the article headings, with the exception of <code>.top-level</code>, if necessary for proper hierarchy</p>
</aside>

##### Option 2: all entries are contained within a part file

In this case, the part file's `<body>` tag should receive the `epub:type="dictionary"`.

Each entry is still contained within an `<article epub:type="dictentry">` with the added requirement that the `<article>` have a unique `id` attribute.

If you're using entry headings, they should be an `<h2>` with the `.nd` class, rather than an `<h1>`.
```html
<body epub:type="dictionary">
  <h1>A</h1>
  <article epub:type="dictentry" id="aardvark">
    <h2 class="nd">aardvark</h2>
    <dfn>aardvark</dfn>
    <!-- entry content -->
  </article>
  <article epub:type="dictentry" id="abacus">
    <h2 class="nd">abacus</h2>
    <dfn>abacus</dfn>
    <!--- entry content -->
  </article>
  <!-- additional entries -->
</body>

```

#### Headwords
Per the official spec on [Headwords](http://idpf.org/epub/dict/#sec-2.2.3), There must be one or more <abbr title="A word or phrase defined, translated, or otherwise treated in an entry">headword</abbr> in each entry. Each headword is placed in its own `<dfn>`

```html
<body epub:type="dictionary">
  <article epub:type="dictentry" id="color">
    <h1 class="nd">color</h1>
    <dfn>color</dfn> <span class="i">or chiefly British</span> <dfn>colour</dfn>
    <!-- translations/definitions/content for "color" -->
  </article>
</body>
```

The contents of the `<dfn>` are not always the same as the headword's canonical form, and may include other typographic and/or HTML elements. In such cases, a `title` attribute should be added to the `<dfn>` to specify the canonical form.

```html
<body epub:type="dictionary">
  <article epub:type="dictentry" id="color">
    <h1 class="nd">color</h1>
    <dfn title="color">col·or<sup>1</sup></dfn>
    <dfn title="colour">col·our</dfn>, <em>(British)</em>
    <!-- translations/definitions/content for "color" -->
  </article>
</body>
```

<hr />

## Search Key Map

The EPUB must include a [Search Key Map Document](http://www.idpf.org/epub/dict/#sec-2.4) in the OEBPS folder, named `skmap.xml`.

The **toolkit** script [create-skmap](https://github.com/bhdirect-ebooks/create-skmap) will greatly aid you in creating this document. **Create-skmap** correctly handles single and multiple entries per file, one or more headword per entry, and the presence or absence of `title` attributes.

Add the following line to the `content.opf` `<manifest>` under the `<!-- Navigation -->` section.

```xml
  <item id="skmap" href="skmap.xml" media-type="application/vnd.epub.search-key-map+xml" properties="search-key-map dictionary" />
```

<aside class="caution">If uploading the EPUB directly to Content Platform without running it though the <em>build</em> process (specifically <em>convert-epub</em>,) the <code>properties="search-key-map dictionary"</code> attribute must be removed from the <code>&lt;item&gt;</code> as it will cause an error in the ingestion process on CP. However, the EPUB will then fail to pass epubcheck. &#129335;&#127997;&#8205;&#9794;&#65039;</aside>

A Search Key Map must include this markup for every entry:

```xml
<!-- href should point to the xhtml file containing the entry, and the id of the article element with the epub:type="dictentry" for that entry -->
<search-key-group href="text/DictJesus202_body002_entry001.xhtml#abiding">
<!-- match value should be the canonical form of the headword -->
  <match value="Abiding" />
  <!-- more match elements if the entry has multiple headwords (<dfn>s) -->
</search-key-group>
```

Take a look at a [completed Search Key Map on GitHub](https://github.com/bhdirect-ebooks/ConDictTheoTerms/blob/master/dev/epub/9781535982245/OEBPS/skmap.xml).
