title: HTML Style Rules
---

## Document Type

Use XHTML5.

XHTML5 (XML-serialized HTML5) is recommended for all content documents in the EPUB container.

```html
<!DOCTYPE html>
```

## Namespace

For XHTML documents your EPUBs, the root element `html` must contain an `xmlns` attribute for both the XHTML and EPUB namespaces.

```html
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
```

## XHTML Validity

Use valid XHTML in the context of EPUB3 specifications.

```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
  <head>
    <title>Test</title>
  </head>
```

<aside class="tip">The quickest way to assess the validity of your XHTML code is to preview in a browser. In BBEdit, preview the current document in a browser by navigating to:<ul><li>Markup --> Preview in --> (Google Chrome or Safari)</li></ul></aside>

### Necessary in XHTML

* Use type attributes for style sheets and scripts. (e.g., <code class="rec">&#60;link href="../css/wordsearch.css" rel="stylesheet" type="text/css" /&#62;</code>).
* Properly nest elements: <code class="rec">&#60;p&#62;&#60;span class="bold"&#62;...&#60;/span&#62;&#60;/p&#62;</code>, not <code class="not">&#60;p&#62;&#60;span class="bold"&#62;...&#60;/p&#62;&#60;/span&#62;</code>.
* Close void elements: <code class="rec">&#60;br /&#62;</code>, not <code class="not">&#60;br&#62;</code>.
* Use end tags: <code class="rec">&#60;p&#62;Text&#60;/p&#62;</code>, not <code class="not">&#60;p&#62;Text</code>.

## Semantics

Use HTML according to its purpose, and always prefer semantic elements over those that are semantically ambiguous.

### Ambiguous elements

`<div>`<br>`<span>`<br>`<section>` (although `section` defines a section in a document, this is still too ambiguous to use in our projects without semantic inflection)

<aside class="caution">Make sure every ambiguous element has at least one attribute that allows for some kind of semantic inflection or data (`epub:type`, `class`, or `data-x`).</aside>

### Semantic elements

Contents of semantic elements are defined in the specification, promote usability by humans and machines, and are vital for accessibility. Semantic elements may be familiar, like `<p>` for paragraphs and `<table>` for tables, or may be less familiar, like elements defined more recently in HTML5:

#### Pertinent HTML5 Examples

<table><tr><th>Element</th><th>Notes on Meaning</th></tr><tr><td>`<article>`</td><td>Defines an article</td></tr><tr><td>`<aside>`</td><td>Defines content aside from the main document content</td></tr><tr><td>`<figure>`</td><td>`<figure>` specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.</td></tr><tr><td>`<figcaption>`</td><td>`<figcaption>` defines a caption for a `<figure>` element.</td></tr></table>

### Semantic Evolution

The meanings have been adjusted for some older elements since HTML 4.01. It is important to familiarize yourself with current use of elements and their intended meanings.

<table><tr><th>Element</th><th>Notes on Use</th></tr><tr><td>`<a>`</td><td><p>In HTML 4.01, the `<a>` element could be either a hyperlink or an anchor. In HTML5, `<a>` always denotes a hyperlink, and the <code class="not">name</code> attribute is not supported.</p><p>Use the <code class="rec">id</code> attribute rather than <code class="not">name</code> for internal linking.</p></td></tr><tr><td>`<hr>`</td><td><p>Once defined as a horizontal rule, the `<hr>` element is now defined in semantic terms, rather than presentational terms.</p><p>In HTML5, the `<hr>` element communicates a thematic break (or context).</p></td></tr><tr><td>`<b>`</td><td><p>According to the HTML5 specification, the <code class="not">&#60;b&#62;</code> element should be used as a last resort when no other element is more appropriate.</p><p>We no longer use the <code class="not">&#60;b&#62;</code> element.</p></td></tr><tr><td>`<i>`</td><td><p>In HTML 4.01, the <code class="not">&#60;i&#62;</code> tag was used to render text in italics. However, this is not necessarily the case with HTML5. Now, <code class="not">&#60;i&#62;</code> defines a part of text in an alternate voice or mood, but its use has fallen out of favor.</p><p>We no longer use the <code class="not">&#60;i&#62;</code> element.</p></td></tr></table>

<aside class="notice">Our default stylesheet includes classes for bold and italic formatting.</aside>

### HTML Element Reference

For a good summary reference on HTML elements and their meanings, see w3schools.com's [HTML Element Reference](http://www.w3schools.com/tags/default.asp).

See also: [W3C HTML 5 Semantic Elements](https://w3c.github.io/html/dom.html#elements-semantics)

## Multimedia Fallback

For multimedia, such as images and videos, make sure to offer alternative access. For images that means use of meaningful alternative text (`alt`) and for video and audio, transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without <code class="lang-none">@alt</code>, and other users may have no way of understanding what video or audio contents are about either.

<aside class="caution">(For images whose `alt` attributes would introduce redundancy, and for images whose purpose is purely decorative, use no alternative text, as in `<img alt="">`.)</aside>

```html
<!-- Recommended -->
<img src="pub_logo.png" alt="Publisher XYZ's logo." />

<!-- Not Recommended -->
<img src="pub_logo.png" />
```

## Separation of Concerns

Strictly keep structure (markup) and presentation (styling) apart. That is, make sure documents contain only HTML, and make sure the HTML is solely serving structural purposes. Keep everything presentational in style sheets.

## Entity References

Use entity references where necessary. Use numeric entities only.

* Use <code class="rec">&#38;#169;</code>, not <code class="not">&#38;copy;</code>
* Use <code class="rec">&#38;#38;</code>, not <code class="not">&#38;amp;</code>
* Use <code class="rec">&#38;#160;</code>, not <code class="not">&#38;nbsp;</code>
* Use <code class="rec">&#38;#8212;</code>, not <code class="not">&#38;mdash;</code>
* etc.

<aside class="tip">In BBEdit, you can easily add a numeric character reference by using the Entity palette window.<ul><li>Window --> Palettes --> Entities (under HTML Markup Tools).</li></ul></aside>

See also: [Character entity references in HTML](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML) on Wikipedia.