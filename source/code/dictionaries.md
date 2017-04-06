# <span class="changes">Dictionaries</span>

## Dictionary File Conventions

For our team, follow the file naming conventions for any dictionary front matter and back matter. However, for the main dictionary content, do not use "chapter" in the file names. Instead, use the source language alphabet characters that correspond with the dictionary terms in each content document.

As an example, an English dictionary would use the following names:

* ExampleDict02_A.xhtml
* ExampleDict02_B.xhtml
* ExampleDict02_C.xhtml
* ExampleDict02_D.xhtml
* etc.

With front matter and backmatter included, it would look something like:

* ExampleDict01_frontmatter01_cover.xhtml
* ExampleDict01_frontmatter02_titlepage.xhtml
* ExampleDict01_frontmatter03_copyright-page.xhtml
* etc.
* ExampleDict02_A.xhtml
* ExampleDict02_B.xhtml
* ExampleDict02_C.xhtml
* ExampleDict02_D.xhtml
* etc.
* ExampleDict03_backmatter01_appendix.xhtml
* ExampleDict03_backmatter02_appendix.xhtml
* etc.

## Dictionary Metadata

Dictionaries require special metadata in the EPUB opf. The particulars depend on the type of dictionary. The [full dictionary specification is available via idpf](http://www.idpf.org/epub/dict/epub-dict.html) for reference.

The minimum requirement is a <code>dc:type</code> of <code>dictionary</code> and a <code>meta</code> element indicating the subtype.

The following subtypes are available for use:

* <code>monolingual</code> -- dictionary with headwords and entry content in a single language
* <code>bilingual</code> -- dictionary with headwords in source language, other entry content in target language
* <code>multilingual</code> -- dictionary with headwords in source language, other entry content in two or more target languages
* <code>thesaurus</code> -- synonym dictionary or thesaurus
* <code>encyclopedia</code> -- encyclopedia
* <code>spelling</code> -- special-purpose spelling dictionary
* <code>pronouncing</code> -- special-purpose dictionary of pronunciations
* <code>etymological</code> -- special-purpose dictionary of etymologies (word origins)

### Monolingual Dictionary

```html
<dc:language>en</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">monolingual</meta>
<meta property="source-language">en</meta>
<meta property="target-language">en</meta>
```

Monolingual dictionaries are the default subtype when the dictionary <code>dc:type</code> is used. However, for consistent coding practices, we will use the <code>monolingual</code> subtype for any monolingual dictionaries that do not fall into the other subtype categories.

### Bilingual Dictionary

```html
<dc:language>en</dc:language>
<dc:language>grc</dc:language>
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">bilingual</meta>
<meta property="source-language">grc</meta>
<meta property="target-language">en</meta>
```

An example of metadata for a unidirectional bilingual dictionary is given in the recommended code (in this case a Greek-English dictionary).

The metadata contains a <code>dc:language</code> tag for each language, along with the dictionary <code>dc:type</code> and <code>bilingual</code> subtype. In addition, the source and target languages are identified with <code>meta</code> tags and the appropriate <code>property</code> for each.

In the Greek-English dictionary example, the <code>source-language</code> is <code>grc</code> because the entries are Greek terms, and the <code>target-language</code> is <code>en</code> because definitions/translations are given in English.

### Multilingual Dictionary

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

Continuing with the bilingual Greek-English dictionary example, if terms were also translated into another language, even if just for clarification or equivalent term information, the work is then a <code>multilingual</code> subtype.

The multilingual example now shows how the metadata would look such a dictionary. For a multilingual dictionary, there is one <code>source-language</code> and multiple <code>target-language</code>s.

### Other Dictionary Types

```html
<dc:type id="dict-type">dictionary</dc:type>
<meta property="dcterms:type" refines="#dict-type">encyclopedia</meta>
```

For other dictionary subtypes, simply use the appropriate subtype code in the <code>meta property="dcterms:type" refines</code> tag.

## Dictionary Content

```html
<body epub:type="dictionary">
  <!-- a collection of dictionary entries -->
</body>
```

Dictionaries in EPUBs must follow a prescribed pattern using a set of dictionary <code>epub:type</code>s.

Each index in the work should be nested in an <code>dictionary</code> type <code>body</code>, in documents corresponding to the source language's alphabet or other grouping used by the work itself.

### Dictionary Entries

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

Each dictionary entry is nested in an <code>article</code> element with <code>epub:type="dictentry"</code>.

The term itself is placed in <code>&lt;dfn&gt;&lt;/dfn&gt;</code>

### Additional Dictionary Guidelines Forthcoming