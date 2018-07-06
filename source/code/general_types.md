title: General Content Types
---

## Abbreviations

Abbreviations should follow the HTML specification.

```html
<abbr title="Abbreviation Definition">ABBRD</abbr>
```

## Asides

Any brief sections that are separated from the main flow of a chapter should be tagged as asides using the HTML `<aside>` element. ([Pull quotes](https://en.wikipedia.org/wiki/Pull_quote) are an exception to this rule for our EPUBs. [For pull quotes, see the CSS Library](https://style.bhdirect-ebooks.org/css_lib/quotes.html))

When in doubt about using `<aside>`, [consult the spec](https://www.w3.org/TR/html5/sections.html#the-aside-element).

Use `<p epub:type="bridgehead"></p>` for any headings in an `<aside>` section.

```html
<aside>
  <p epub:type="bridgehead">Greek Highlight</p>
  <p><span class="bold">Blessed. Greek</span> <span class="lang-grc">μακάριος</span> (<span class="translit">makarios</span>). This term occurs ...</p>
</aside>
```

## HTML Semantics

As instructed in [HTML semantics](html_style.html#Semantics), always use the most semantically-appropriate HTML tags as you markup content. Lists should be ordered or unordered HTML lists. Outlines should be ordered lists with the appropriate classes. Block quotes and poetry should always be tagged as such, and so on.

## Hyperlinks

The only hyperlinks in the EPUB should be those that point to bookmarks within the EPUB itself. For any external URLs in the content, leave the URL as text only. `<a href="" target="_blank"></a>`

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

## Quotes: Block, Pull, Etc.

[CSS Library: Quotes](https://style.bhdirect-ebooks.org/css_lib/quotes.html)

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