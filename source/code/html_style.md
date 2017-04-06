title: On Style Guides
---

This coding style guide defines formatting and style rules for the HTML and CSS files contained within EPUBs. It aims at promoting effective collaboration and consistent code quality and acts as the official style guide to follow as you markup, code, and transform content for distribution.

This quote from [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide), an opinionated CSS style guide, summarizes well the benefits of a style guide for teams:

<blockquote>
  A good styleguide, when well followed, will<ul><li>set the standard for code quality across a codebase;</li><li>promote consistency across codebases;</li><li>give developers a feeling of familiarity across codebases;</li><li>increase productivity.</li></ul>Styleguides should be learned, understood, and implemented at all times on a project which is governed by one, and any deviation must be fully justified.<br>
</blockquote>

## General Formatting Rules

> Recommended code appears in this column

<aside class="notice">Style guide Adapted from <a target="_blank" href="https://google.github.io/styleguide/htmlcssguide.xml">Google HTML/CSS Style Guide</a></aside>

### Indentation

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

```css
.example {
  color: #00f;
}
```

Indent using 2 spaces. Don't mix tabs and spaces for indentation.

![BBEdit logo](images/bbedit-logo.png) In BBEdit, set tab properties at Preferences --> Editor Defaults

* Make sure "Auto-expand tabs" is checked.
* Set "Tab width" to 2.

### Capitalization

```html
<img src="google.png" alt="Google" />
```

```css
.example {
  color: #e5e5e5;
}
```

Use only lowercase.

This applies to XML and HTML element names, attributes, attribute values, CSS selectors, properties, and property values (with the exception of strings and case-sensitive XML element nodes).

<aside class="warning">
  Not Recommended: <code class="lang-html">&#60;A HREF="/"&#62;Home&#60;/A&#62;</code> <code class="lang-css">color: #E5E5E5;</code>
</aside>

### Trailing Whitespace

```html
<p>Yes, please.</p>
```

Remove trailing white spaces.

![BBEdit logo](images/bbedit-logo.png) In BBEdit, you can have trailing whitespace removed automatically when you save.

* In Preferences --> Text Files, make sure "Strip trailing whitespace" is checked.

<aside class="warning">
  Not Recommended: <code>&#60;p&#62;What?&#60;/p&#62;_</code>
</aside>

## General Meta Rules

### Encoding

```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
```

Use UTF-8 (no BOM).

For XHTML, XML, and OPF, specify the encoding within the XML declaration.

![BBEdit logo](images/bbedit-logo.png) Make sure BBEdit uses UTF-8 as character encoding for each document, without a byte order mark.

## HTML Style Rules

### Document Type

```html
<!DOCTYPE html>
```

Use XHTML5.

XHTML5 (XML-serialized HTML5) is recommended for all content documents in the EPUB container.

### Namespace

```html
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
```

For XHTML documents your EPUBs, the root element <code>html</code> must contain an <code>xmlns</code> attribute for both the XHTML and EPUB namespaces.

### XHTML Validity

```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
  <head>
    <title>Test</title>
  </head>
```

Use valid XHTML in the context of EPUB3 specifications.

![BBEdit logo](images/bbedit-logo.png) The quickest way to assess the validity of your XHTML code is to preview in a browser. In BBEdit, preview the current document in a browser by navigating to:

* Markup --> Preview in --> (Google Chrome or Safari)

#### Necessary in XHTML:

* Use type attributes for style sheets and scripts. (e.g., <code>&#60;link href="../css/wordsearch.css" rel="stylesheet" type="text/css" /&#62;</code>).
* Properly nest elements: <code>&#60;p&#62;&#60;span class="bold"&#62;...&#60;/span&#62;&#60;/p&#62;</code>, not <code>&#60;p&#62;&#60;span class="bold"&#62;...&#60;/p&#62;&#60;/span&#62;</code>.
* Close void elements: <code>&#60;br /&#62;</code>, not <code>&#60;br&#62;</code>.
* Use end tags: <code>&#60;p&#62;Text&#60;/p&#62;</code>, not <code>&#60;p&#62;Text</code>.

### Semantics

Use HTML according to its purpose, and always prefer semantic elements over those that are semantically ambiguous.

#### Ambiguous elements

<code>&#60;div&#62;</code><br /><code>&#60;span&#62;</code>

#### Semantic elements

Contents of semantic elements are defined in the specification, promote usability by humans and machines, and are vital for accessibility. Semantic elements may be familiar, like <code>&#60;p&#62;</code> for paragraphs and <code>&#60;table&#62;</code> for tables, or may be less familiar, like elements defined more recently in HTML5:

##### Pertinent HTML5 Examples

<table>
  <thead>
    <tr>
      <th class="one-fourth">Element</th>
      <th>Notes on Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="one-fourth"><code>&#60;article&#62;</code></td>
      <td>Defines an article</td>
    </tr>
    <tr>
      <td class="one-fourth"><code>&#60;aside&#62;</code></td>
      <td>Defines content aside from the main document content</td>
    </tr>
    <tr>
      <td class="one-fourth"><code>&#60;figure&#62;</code></td>
      <td><code>&#60;figure&#62;</code> specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.</td>
    </tr>
    <tr>
      <td class="one-fourth"><code>&#60;figcaption&#62;</code></td>
      <td><code>&#60;figcaption&#62;</code> defines a caption for a <code>&#60;figure&#62;</code> element.</td>
    </tr>
    <tr>
      <td class="one-fourth"><code>&#60;section&#62;</code></td>
      <td>Defines a section in a document</td>
    </tr>
  </tbody>
</table>

##### Semantic Evolution

The meanings have been adjusted for some older elements since HTML 4.01. It is important to familiarize yourself with current use of elements and their intended meanings.

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Notes on Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&#60;a&#62;</code></td>
      <td>
      	<p>In HTML 4.01, the <code>&#60;a&#62;</code> element could be either a hyperlink or an anchor. In HTML5, <code>&#60;a&#62;</code> always denotes a hyperlink, and the <code>name</code> attribute is not supported.</p>
      	<p>Use the <code>id</code> attribute rather than <code>name</code> for internal linking.</p>
      </td>
    </tr>
    <tr>
      <td><code>&#60;hr&#62;</code></td>
      <td>
      	<p>Once defined as a horizontal rule, the <code>&#60;hr&#62;</code> element is now defined in semantic terms, rather than presentational terms.</p>
      	<p>In HTML5, the <code>&#60;hr&#62;</code> element communicates a thematic break (or context).</p>
      </td>
    </tr>
    <tr>
      <td><code>&#60;b&#62;</code></td>
      <td>
      	<p>According to the HTML5 specification, the <code>&#60;b&#62;</code> element should be used as a last resort when no other element is more appropriate.</p>
      	<p>We no longer use the <code>&#60;b&#62;</code> element.</p>
      </td>
    </tr>
    <tr>
      <td><code>&#60;i&#62;</code></td>
      <td>
      	<p>In HTML 4.01, the <code>&#60;i&#62;</code> tag was used to render text in italics. However, this is not necessarily the case with HTML5. Now, <code>&#60;i&#62;</code> defines a part of text in an alternate voice or mood, but its use has fallen out of favor.</p>
      	<p>We no longer use the <code>&#60;i&#62;</code> element.</p>
      </td>
    </tr>
  </tbody>
</table>

#### HTML Element Reference

For a good summary reference on HTML elements and their meanings, see w3schools.com's [HTML Element Reference](http://www.w3schools.com/tags/default.asp).

See also: [W3C HTML 5 Semantic Elements](https://w3c.github.io/html/dom.html#elements-semantics)

### Multimedia Fallback

```html
<img src="pub_logo.png" alt="Publisher XYZ's logo.">
```

For multimedia, such as images and videos, make sure to offer alternative access. For images that means use of meaningful alternative text (<code>alt</code>) and for video and audio, transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without <code class="lang-none">@alt</code>, and other users may have no way of understanding what video or audio contents are about either.

(For images whose <code>alt</code> attributes would introduce redundancy, and for images whose purpose is purely decorative, use no alternative text, as in <code>&#60;img alt=""&#62;</code>.)

<aside class="warning">
  Not Recommended: <code>&#60;img src="pub_logo.png"&#62;</code>
</aside>

### Separation of Concerns

Strictly keep structure (markup) and presentation (styling) apart. That is, make sure documents contain only HTML, and make sure the HTML is solely serving structural purposes. Keep everything presentational in style sheets.

### Entity References

Use entity references where necessary. Use numeric entities only.

* Use <code>&#38;169;</code>, not <code>&#38;copy;</code>
* Use <code>&#38;38;</code>, not <code>&#38;amp;</code>
* Use <code>&#38;160;</code>, not <code>&#38;nbsp;</code>
* Use <code>&#38;8212;</code>, not <code>&#38;mdash;</code>
* etc.

![BBEdit logo](images/bbedit-logo.png) In BBEdit, you can easily add a numeric character reference by using the Entity palette window.

* Window --> Palettes --> Entities (under HTML Markup Tools).

See also: [Character entity references in HTML](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML) on Wikipedia.

## HTML Formatting Rules

### General Formatting

```html
<blockquote>
  <p><span class="italic">Space</span>, the final frontier.</p>
</blockquote>

<table>
  <tr>
    <th>Income</th>
    <th>Taxes</th>
  </tr>
  <tr>
    <td>$ 5.00</td>
    <td>$ 4.50</td>
  </tr>
</table>
```

Use a new line for every block, list, or table element, and indent every such child element.

#### Block Elements

The rules above reference block elements as opposed to inline elements. Technically, the HTML5 specification no longer distinguishes elements by "block" or "inline" since the display property can be changed with CSS. However, browsers and reading systems have default stylesheets that generally set block and inline display properties according to past HTML specifications. Therefore, for reference on what constitutes a block element, see the MDN article, [Block-level Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).

### HTML Quotation Marks

```html
<p class="oh-yeah">...</p>

<hr data-cross-context='{"scripture":"Gen.1.1"}' />
```

When quoting attributes values, use double quotation marks. <strong>Exception</strong>: when a JSON string is used as an attribute value, use single quotes to prevent malformed code.

<aside class="warning">
  Not Recommended: <code>&#60;p class='nope'&#62;...&#60;/p&#62;</code>
</aside>

## CSS Style Rules

### Default Stylesheets

> Access the latest versions of our team's [default stylesheets](https://gitlab.com/bhdirect-ebooks/epub-container/tree/master/OEBPS/styles) on GitLab.

Use the provided "mywsb.css" and "fonts.css" stylesheets along with "bookstyles.css".

### Styling Content

> See [mywsb.css Classes](https://docs.google.com/a/lifeway.com/document/d/1TjewWPcYAQM7RWZTKeAk3F8sG0kUeVOIcbHwAz_DHUQ/edit?usp=sharing) for useable and deprecated classes.

Your goal is not to recreate the printed version of a publication. Rather, your goal is a clean, well-formed, and usable digital product. Therefore, avoid adjusting styles wherever possible.

If you must make adjustments, insert those adjustments in the "bookstyles.css" style sheet by reusing the existing selector(s) and adding your declarations there.

Do not add new classes, and ensure that any adjustments you make conform to the CSS Style Rules.

### CSS Validity

Use valid CSS. Using valid CSS is a measurable baseline quality attribute that ensures proper CSS usage and team consistency.

### Type Selectors

```css
.example {}
.another {}
.and-another {}
```

Avoid qualifying ID and class names with type selectors. Avoiding unnecessary ancestor selectors is useful for performance reasons.

It is also bad practice to use IDs as selectors in your CSS files.

<aside class="warning">
  Not Recommended: <code>ul#example {}</code> <code>div.another {}</code> <code>#and-another {}</code>
</aside>

### Attribute Selectors

```css
figure[data-cross-tour*=illustration] {}

/* For epub:type, always use both versions seen below */
p[epub\:type~=bridgehead] {}
p[epub|type~=bridgehead] {}
```

In contrast to the above section, using types with <em>attribute</em> selectors <em>is</em> good practice because unqualified attribute selectors are known to be slow.

Therefore, always qualify attribute selectors with types.

<aside class="warning">
  Not Recommended: <code>[data-cross-scripture]</code> (unqualified)
</aside>

If you need to use an epub:type attribute selector, make sure to use both versions seen in the example markup, one using the vertical pipe, "|", and one using an escaped colon, "\\:". (The vertical pipe is for XML parsing, and the escaped colon is for HTML parsing.)

### Shorthand Properties

```css
.classy-class {
  border: 1px 0 0 0;
  font: normal bold 100%/1.6 "Palatino", "Georgia", serif;
  padding: 0 1em 2em 1em;
}
```

Use shorthand properties where possible.

CSS offers a variety of shorthand properties (like <code class="inline">font</code>) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.

### 0 and Units

```css
.zeros {
  margin: 0;
  padding: 0;
}
```

Omit unit specification after "0" values.

Do not use units after 0 values unless they are required.

<aside class="warning">
  Not Recommended: <code>margin: 0em;</code> <code>padding: 0px;</code>
</aside>


### Leading 0s

```css
.small {
  font-size: 0.8em;
}
```

Include leading 0s in decimal values for readability.

<aside class="warning">
  Not Recommended: <code>font-size: .8em;</code>
</aside>

### Hexadecimal Notation

```css
.shorty {
  color: #ebc;
}
```

Use 3 character hexadecimal notation where possible.

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.

<aside class="warning">
  Not Recommended: <code>color: #eebbcc;</code>
</aside>

## CSS Formatting Rules

### Block Content Indentation

```css
html {
  background: #fff;
  color: #444;
}
```

Indent all declarations to reflect hierarchy and improve understanding.

### Declaration Order

Alphabetize declarations in each declaration block.

### Declaration Stops

```css
.test {
  display: block;
  height: 100px;
}
```

End every declaration with a semicolon for consistency and extensibility reasons.

### Property Name Stops

```css
h3 {
  font-weight: bold;
}
```

Always use a single space between property and value (but no space between property and colon) for consistency reasons.

<aside class="warning">
  Not Recommended: <code>font-weight:bold;</code>
</aside>

### Declaration Block Separation

```css
video {
  margin-top: 1em;
}
```

Always use a single space between the last selector and the opening brace that begins the declaration block.

The opening brace should be on the same line as the last selector in a given rule.

### Selector and Declaration Separation

```css
h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.2;
}
```

Always start a new line for each selector and declaration.

<aside class="warning">
  Not Recommended: <code>h1,h2,h3{font-weight:300;line-height:1.2;}</code>
</aside>

### Rule Separation

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

Always put a blank line (two line breaks) between rules.

## EPUB Style Rules

### EPUB Specification

Use EPUB 3.0.1

See: [EPUB 3 Overview, 26 June 2014 Specification](http://www.idpf.org/epub/301/spec/epub-overview-20140626.html)

### EPUB Validity

EPUBs must be validated with EpubCheck, currently version 4.

### EPUB Construction

EPUBs should be constructed according to this documentation.

### EPUB Structural Semantics

Follow EPUB 3 Structural Semantics Vocabulary wherever possible. See also the corresponding chapter in this document for team-specific requirements.

See: [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/)

### EPUB Formatting Rules

Formatting XHTML documents for EPUB will be discussed throughout the remainder this document. The examples contained in the documentation should be understood as the recommended styles under this Style Guide.

## <span class="changes">Git Commit Messages</span>

Git commit messages are important since they communicate to other team members the changes represented by each commit. A good commit history also helps you to easily identify and correct any errors you may have introduced while working on a project. To enable good communication in a consistent tone across the entire team, use the following guidelines in your commit messages:

*  Summarize changes in around 50 characters or less.
*  Use lower case only (except for proper nouns), and do not end with a period.
*  Use an imperative tone to describe what a commit does, rather than what it did.
  *  For example, use <strong>change</strong>; not changed or changes.
*  When committing changes to resolve an issue identified in Review, follow the above guidelines, then include the fix verbiage after a semicolon.
  *  Example: "remove remaining InDesign classes; fix #1"