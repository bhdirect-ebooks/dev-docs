title: Dictionaries
---

## Dictionary File Naming

For our team, follow the normal file naming conventions for any dictionary front matter and back matter. However, for the main dictionary content, do not use "chapter" in the file names. Instead, use the source language alphabet characters that correspond with the dictionary terms in each content document.

As an example, an English dictionary would use the following names:

* ExampleDict02_A.xhtml
* ExampleDict02_B.xhtml
* ExampleDict02_C.xhtml
* ExampleDict02_D.xhtml
* etc.

With front matter and backmatter included, it would look something like:

* ExampleDict01\_frontmatter01\_cover.xhtml
* ExampleDict01\_frontmatter02\_titlepage.xhtml
* ExampleDict01\_frontmatter03\_copyright-page.xhtml
* etc.
* ExampleDict02_A.xhtml
* ExampleDict02_B.xhtml
* ExampleDict02_C.xhtml
* ExampleDict02_D.xhtml
* etc.
* ExampleDict03\_backmatter01\_appendix.xhtml
* ExampleDict03\_backmatter02\_appendix.xhtml
* etc.

## Dictionary Metadata

Dictionaries require special metadata in the EPUB opf. The particulars depend on the type of dictionary. The [full dictionary specification is available via idpf](http://www.idpf.org/epub/dict/epub-dict.html) for reference.

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

### Monolingual Dictionary

Monolingual dictionaries are the default subtype when the dictionary `dc:type` is used. However, for consistent coding practices, we will use the `monolingual` subtype for any monolingual dictionaries that do not fall into the other subtype categories.

```html
<dc:language>en</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">monolingual</meta>
<meta property="source-language">en</meta>
<meta property="target-language">en</meta>
```

### Bilingual Dictionary

An example of metadata for a unidirectional bilingual dictionary is given in the recommended code (in this case a Greek-English dictionary).

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

### Multilingual Dictionary

Continuing with the bilingual Greek-English dictionary example, if terms were also translated into another language, even if just for clarification or equivalent term information, the work is then a `multilingual` subtype.

The multilingual example now shows how the metadata would look such a dictionary. For a multilingual dictionary, there is one `source-language` and multiple `target-language`s.

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

### Other Dictionary Types

For other dictionary subtypes, simply use the appropriate subtype code in the `meta property="dcterms:type" refines` tag.

```html
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">encyclopedia</meta>
```

## Dictionary Content

Dictionaries in EPUBs must follow a prescribed pattern using a set of dictionary `epub:type`s.

Each index in the work should be nested in an `dictionary` type `body`, in documents corresponding to the source language's alphabet or other grouping used by the work itself.

```html
<body epub:type="dictionary">
  <!-- a collection of dictionary entries -->
</body>
```

### Dictionary Entries

Each dictionary entry is nested in an `article` element with `epub:type="dictentry"`.

The term itself is placed in `<dfn></dfn>;`

```html
<body epub:type="dictionary">
 <article epub:type="dictentry">
   <dfn>ἀγαθός</dfn>
     <!-- translations/definitions for "ἀγαθός" -->
 </article>
 <article epub:type="dictentry">
   <dfn>ὠφέλεια</dfn>
     <!-- translations/definitions for "ὠφέλεια" -->
 </article>
</body>
```

### Additional Dictionary Guidelines Forthcoming