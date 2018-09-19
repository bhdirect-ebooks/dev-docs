---
title: Dictionaries & Encyclopedias
---
<hr />

## Dictionary File Naming

For our team, follow the normal file naming conventions for any dictionary/encyclopedia front matter and back matter. However, for the main content, do not use "chapter" in the file names. Instead, use `part` for each of the source language alphabet characters and `entry` for each term.

As an example:

* ExampleDict02_body001_part01.xhtml
* ExampleDict02_body002_entry001.xhtml
* ExampleDict02_body003_entry002.xhtml
* ExampleDict02_body004_entry003.xhtml
* etc.

With front matter and back matter included, it would look something like:

* ExampleDict01_front01_cover.xhtml
* ExampleDict01_front02_titlepage.xhtml
* ExampleDict01_front03_copyright-page.xhtml
* etc.
* ExampleDict02_body001_part01.xhtml
* ExampleDict02_body002_entry001.xhtml
* ExampleDict02_body003_entry002.xhtml
* ExampleDict02_body004_entry003.xhtml
* etc.
* ExampleDict03_back01_appendix.xhtml
* ExampleDict03_back02_appendix.xhtml
* etc.

<hr />

## Dictionary/Encyclopedia Metadata

These books require special metadata in the EPUB opf. The particulars depend on the type. The [full specification is available via idpf](http://www.idpf.org/epub/dict/epub-dict.html) for reference.

The minimum requirement is a `dc:type` of `dictionary` and a `meta` element indicating the subtype.

The following subtypes are available for use:

* `monolingual` -- dictionary with headwords and entry content in a single language
* `bilingual` -- dictionary with headwords in source language, other entry content in target language
* `multilingual` -- dictionary with headwords in source language, other entry content in two or more target languages
* `thesaurus` -- synonym dictionary or thesaurus
* `encyclopedia` -- encyclopedia
* `spelling` -- special-purpose spelling dictionary
* `pronouncing` -- special-purpose dictionary of pronunciations
* `etymological` -- special-purpose dictionary of etymologies (word origins)

### Monolingual Dictionary/Encyclopedia

Monolingual subtypes are the default subtype when the dictionary `dc:type` is used. However, for consistent coding practices, we will use the `monolingual` subtype for any monolingual dictionaries/encyclopedias that do not fall into the other subtype categories.

```html
<dc:language>en</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">monolingual</meta>
<meta property="source-language">en</meta>
<meta property="target-language">en</meta>
```

### Bilingual Dictionary/Encyclopedia

An example of metadata for a unidirectional bilingual subtype is given in the recommended code (in this case a Greek-English dictionary).

The metadata contains a `dc:language` tag for each language, along with the dictionary `dc:type` and `bilingual` subtype. In addition, the source and target languages are identified with `meta` tags and the appropriate `property` for each.

In the Greek-English dictionary example, the `source-language` is `grc` because the entries are Greek terms, and the `target-language` is `en` because definitions/translations are given in English.

```html
<dc:language>en</dc:language>
<dc:language>grc</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">bilingual</meta>
<meta property="source-language">grc</meta>
<meta property="target-language">en</meta>
```

### Multilingual Dictionary/Encyclopedia

Continuing with the bilingual Greek-English example, if terms were also translated into another language, even if just for clarification or equivalent term information, the work is then a `multilingual` subtype.

The multilingual example now shows how the metadata would look in such a book. For a multilingual subtype, there is one `source-language` and multiple `target-language`s.

```html
<dc:language>en</dc:language>
<dc:language>grc</dc:language>
<dc:language>hbo</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">multilingual</meta>
<meta property="source-language">grc</meta>
<meta property="target-language">en</meta>
<meta property="target-language">hbo</meta>
```

### Other Dictionary/Encyclopedia Types

For other dictionary subtypes, simply use the appropriate subtype code in the `meta property="dcterms:type" refines` tag.

```html
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">encyclopedia</meta>
```

<hr />

## Dictionary/Encyclopedia Content

Dictionaries/Encyclopedias in EPUBs must follow a prescribed pattern using a set of dictionary `epub:type`s.

Each index in the work should be nested in an `dictionary` type `body`, in documents corresponding to the source language's alphabet or other grouping used by the work itself.

```html
<body epub:type="dictionary">
  <!-- a collection of entries -->
</body>
```



### Entries

Each dictionary/encyclopedia entry is nested in an `article` element with `epub:type="dictentry"`.

The term itself is placed in `<dfn></dfn>`;

```html
<body epub:type="dictionary">
  <article epub:type="dictentry">
    <h1 class="nd">apple</h1>
    <dfn>apple</dfn>
    <!-- translations/definitions/content for "apple" -->
  </article>
</body>
```

<hr />

## Search Key Map

Make sure the EPUB includes a [Search Key Map](http://www.idpf.org/epub/dict/#sec-2.4) in the OEBPS folder, named `skmap.xml`.

Add the following line to the `content.opf` `<manifest>` under the `<!-- Navigation -->` section.

```xml
  <item id="skmap" href="skmap.xml" media-type="application/vnd.epub.search-key-map+xml" properties="search-key-map dictionary" />
```

A Search Key Map must include this markup for every entry:

```xml
<!-- href should point to the entry xhtml file -->
<search-key-group href="text/DictJesus202_body002_entry001.xhtml">
<!-- match value should be the term itself -->
  <match value="Abiding" />
</search-key-group>
```

Take a look at a [completed Search Key Map on GitHub](https://github.com/bhdirect-ebooks/JonEncyclopedia/blob/master/dev/epub/9781535942102/OEBPS/skmap.xml).
