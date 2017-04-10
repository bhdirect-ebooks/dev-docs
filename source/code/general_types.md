title: General Content Types
---

## Abbreviations

Abbreviations should follow the HTML specification.

```html
<abbr title="Septuagint">LXX</abbr>
```

## Asides

Any special sections that are separate from the main content of a chapter should be tagged as asides using the HTML `<aside>` element.

If the aside includes a heading, use `<p epub:type="bridgehead"></p>`.

```html
<aside>
  <p epub:type="bridgehead">Greek Highlight</p>
  <p><span class="bold">Blessed. Greek</span> <span class="lang-grc">μακάριος</span> (<span class="translit">makarios</span>). This term occurs ...</p>
</aside>
```

## Headings

Heading tags reflect a hierarchy and should therefore be used for semantic (not stylistic) purposes. The highest level heading in any section should be tagged using `<h1>`. The next lower level heading tag would be `<h2>`, then `<h3>`, etc.

Heading tags are also not to be used for subheadings ([See the spec](http://w3c.github.io/html/sections.html#headings-and-sections)). Handle any stylistic differences using CSS. _Our default stylesheet contains subheading classes._

For any headings that should not be included in the document outline (usually in `aside` elements), use `<p epub:type="bridgehead"></p>`.

### Chapter Titles, Labels, and Numbers

Chapter titles should always be tagged as `<h1>` elements.

When a chapter has a label (e.g., "Chapter 1") or just a number expressing order (e.g., "1") <strong>and</strong> also has a title, there are special classes to use. Follow the recommended code examples, using the classes `.label` or `.ordinal`.

Do the same for any Section or Part title.

```html
<!-- Chapter titled simply "Chapter 1" -->
<h1>Chapter 1</h1>

<!-- Chapter titled "Chapter 1: How We Got the New Testament" -->
<h1><span class="label">Chapter 1</span>How We Got the New Testament</h1>

<!-- Chapter titled "1. What Is Theology?" -->
<h1><span class="ordinal">1</span>What Is Theology?</h1>

<!-- Section titled "Section 1: Introduction to the Study of the Bible -->
<h1><span class="label">Section 1</span>Introduction to the Study of the Bible</h1>
```

## HTML Semantics

As instructed in [HTML semantics](html_style.html#Semantics), always use the most semantically-appropriate HTML tags as you markup content. Lists should be ordered or unordered HTML lists. Outlines should be ordered lists with the appropriate classes. Block quotes and poetry should always be tagged as such, and so on.

## Hyperlinks

The only hyperlinks in the EPUB should be those that point to bookmarks within the EPUB itself. For any external URLs in the content, leave the URL as text only. Tagging with `<a>` is not recommended. This allows reading systems to decide whether or not to include hyperlinks to external content.

## Languages and Transliterations

Always use Unicode characters for any language or transliteration, along with one of the following four classes.

```html
<!-- Greek -->
<span class="lang-grc">Ιεσουσ</span>

<!-- Hebrew -->
<span class="lang-hbo">‏יְשׁוּעָ</span>

<!-- Other languages -->
<span class="lang">exegético</span>

<!-- Transliterations -->
<span class="translit">br'shyt</span>
```

## Scripture Quotes

Scripture quotes should be tagged as `blockquote` elements with the `scriptext` class.

```html
<blockquote class="scriptext">
  <p>For those He foreknew He also predestined to be conformed to the image of His Son, so that He would be the firstborn among many brothers. And those He predestined, He also called; and those He called, He also justified; and those He justified, He also glorified. (Rom 8:29–30)</p>
</blockquote>
```

## Poetry

Tag poetry with `poetry` classes, making sure to follow the indentation conventions of the source material. Nested `<div class="poetry">` tags create indented blocks.

```html
<!-- Poetry example from the CSB, Genesis 2:23-24 -->
<p>And the man said:</p>
<div class="poetry">
  <p>This one, at last, is bone of my bone</p>
  <div class="poetry">
    <p>and flesh of my flesh;</p>
  </div>
  <p>this one will be called “woman,”</p>
  <div class="poetry">
    <p>for she was taken from man.</p>
  </div>
</div>
<p>This is why a man leaves his ...</p>
```
Rendered version of the example code:

![Poetry example - rendered version.](../assets/images/poetry-example.png)

## Quotation Marks

Typographic (curly) quotes and straight quotes are equally acceptable in book text. Simply leave the quotes as received from the source.

## Tables

Tables should be tagged semantically. This means cells that contain table headings should be `<th>`, rather than `<td>`, elements. When using `<th>`, avoid adding unnecessary classes like `.bold`, since table headings are already styled in mywsb.css.

Also, for tables that contain more than one row of headings, wrap the rows with `<thead></thead>` and the remainder of the table with `<tbody></tbody>`. This is recommended for accessibility.

```html
<div class="table">
  <table class="bdr">
    <thead>
      <tr class="offset">
        <th colspan="5">Miracles of Jesus</th>
      </tr>
      <tr>
        <th>Miracle</th>
        <th colspan="4">Bible Passage</th>
      </tr>
    </thead>
    <tbody>
      <!-- ... -->
    </tbody>
  </table>
</div>
```