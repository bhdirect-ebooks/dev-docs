---
title: General Content Types
---
## Abbreviations

Abbreviations should follow the HTML specification. See [Abbreviations and Glossaries](https://style.bhdirect-ebooks.org/code/structural_types.html#Abbreviations-and-Glossaries).

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

<hr />

## Hyperlinks

Our current practice is to add links to URLs. The link must contain:

* the `target` attribute with a value of `_blank`
* the `rel` attribute with a value of `noopener`



_Example:_

```
<a href="https://www.wordsearchbible.com/" target="_blank" rel="noopener">www.wordsearchbible.com</a>
```

<br />

<hr />

## Languages and Transliterations

We prefer using Unicode characters for foreign languages or transliterations, but in some circumstances, character entities are necessary to get things to render properly.

For Greek and Hebrew, the **mywsb.css** classes `.lang-grc` and `.lang-hbo` will set the fonts to Gentium Plus and Ezra SIL, respectively.

```html
<!-- Greek -->
<span class="lang-grc">Ιεσουσ</span>

<!-- Hebrew -->
<span class="lang-hbo">‏יְשׁוּעָ</span>
```

Sometimes a combination of Hebrew and non-Hebrew characters has trouble rendering properly because Hebrew reads right-to-left. In these cases, it can be useful to use the `dir` attribute.
Surrounding the entire phrase in an element with `dir="ltr"` and each series of Hebrew characters with an element having `dir="rtl"` can help.
```html
<!-- doesn't always render correctly -->
<p>1 <span class="lang-hbo" dir="rtl">(ה)חד</span></p>

<!-- renders correctly -->
<p dir="ltr">1 (<span class="lang-hbo" dir="rtl">ה</span>)<span class="lang-hbo" dir="rtl">חד</span></p>
```

Also in **mywsb.css**, the classes `.lang` and `.translit` will both set the font to Gentium Plus italic, and is useful for setting these words apart in the flow of text.
```
<!-- Other languages -->
<span class="lang">exegético</span>

<!-- Transliterations -->
<span class="translit">br'shyt</span>
```

<br />

<hr />

## Scripture Quotes

Scripture quotes should be tagged as `blockquote` elements, and may use the **mywsb.css** class `.scriptext`

```html
<blockquote class="scriptext">
  <p>For those He foreknew He also predestined to be conformed to the image of His Son, so that He would be the firstborn among many brothers. And those He predestined, He also called; and those He called, He also justified; and those He justified, He also glorified. (Rom 8:29–30)</p>
</blockquote>
```

<br />

<hr />

## Poetry

For poetry, **mywsb.css** has a series of `poetry` classes, (`poem1-10` or `poetry`) giving increasing levels of indentation. Be sure to follow the indentation conventions of the source material. Nested `<div class="poetry">` tags create indented blocks.

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

<!-- OR -->
<p>And the man said:</p>
<p class="br-before poem1">This one, at last, is bone of my bone</p>
<p class="poem2">and flesh of my flesh;</p>
<p class="poem1">this one will be called “woman,”</p>
<p class="poem2">for she was taken from man.</p>
<p class="br-before poem1">This is why a man leaves his ...</p>

```

Rendered version of the example code:

![Poetry example - rendered version.](../assets/images/poetry-example.png)

If the poetry was written by someone other than the author, it also needs to be wrapped in a `blockquote` tag.

<br />

<hr />

## Chiasm

A chiasm is a literary device that uses a repeating A-B-C ... C′-B′-A′ pattern for clarification and/or emphasis. 

For a chiastic structure indentations, you may use the `poetry` classes above.

```html
<p class="poem1">A "No servant can serve two masters;</p>
<p class="poem2">B for either he will hate the one,</p>
<p class="poem3">C and love the other,</p>
<p class="poem3">C' or else he will hold to one,</p>
<p class="poem2">B' and despise the other.</p>
<p class="poem1">A' You cannot serve God and mammon."</p>
```

<br />

<hr />

## Quotation Marks

Typographic (curly) quotes and straight quotes are equally acceptable in book text. Simply leave the quotes as received from the source.

<br />

<hr />

## Quotes: Block, Pull, Etc.

[CSS Library: Quotes](https://style.bhdirect-ebooks.org/css_lib/quotes.html)

<br />

<hr />

## Tables
All tables should have the `epub:type="table"` applied to the table tag.
```html
<table epub:type="table"></table>
```
Style name for the table should be:
```bash
table | number of columns | col, example: <table epub:type="table" class="style">
```
All tables should have an `id`, this `id` is what should be included in the _toc.xhtml_ `epub:type="lot"`. If a table doesn’t have a name applied by the content it should be named: `chapter | increment`.
```html
<table epub:type="table" id="table.1.2" class="style"></table>
```
`<p>` tags should not be present in tables. If the style used for the `<p>` tag is needed, it should be applied to the `<td>` tag.

### Two Column Table
#### HTML for Two Column Table
```html
<table epub:type="table" id="table.1.1" class="table2col">
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Joel</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jesse</td>
    <td>Doe</td>
  </tr>
</table>
```

#### CSS for Two Column Table
```css
table.table2col {
  width: 98%;
  margin: 1em 1%;
  border-collapse: collapse;
  border: 1px solid #c1c3d1;
}
.table2col tr {
  border-bottom: 1px solid #c1c3d1;
  color: #666b85;
}
.table2col tr:nth-child(odd) td {
  background-color: #ebebeb;
}
.table2col tr th {
  font-family: 'Gotham Light', serif;
  color: #d5dde5;
  background-color: #1b1e24;
  font-size: 1em;
  padding: 0.5em;
  text-align: center;
  vertical-align: middle;
  border-top: none;
}
.table2col td {
  font-family: 'Adobe Garamond Pro', serif;
  padding: 10px;
  background: #ffffff;
  text-align: left;
  vertical-align: middle;
  font-size: 1em;
  border-right: 1px solid #c1c3d1;
  letter-spacing: 0.01em;
  width: 50%;
}
```

### Three Column Table
#### HTML for Three Column Table
```html
<table epub:type="table" id="table.1.2" class="table3col">
  <tr>
    <th>Foo</th>
    <th>Bar</th>
    <th>Cho</th>
  </tr>
  <tr>
    <td>Bacon ipsum dolor amet shankle</td>
    <td>Bacon ipsum dolor amet shankle</td>
    <td>Bacon ipsum dolor amet shankle</td>
  </tr>
  <tr>
    <td>Brisket meatball</td>
    <td>Brisket meatball</td>
    <td>Brisket meatball</td>
  </tr>
  <tr>
    <td>Cupim shoulder short ribs</td>
    <td>Cupim shoulder short ribs</td>
    <td>Cupim shoulder short ribs</td>
  </tr>
</table>
```

#### CSS for Three Column Table
```css
table.table3col {
  width: 96%;
  margin: 1em 2%;
  border-collapse: collapse;
  border: none;
  border: 1px solid #ebebeb;
}
.table3col tr th {
  font-family: 'Adobe Garamond Pro', serif;
  background-color: #2980b9;
  color: #ffffff;
  padding: 0.5em;
  letter-spacing: 0.04em;
}
.table3col tr {
  background-color: #ffffff;
}
.table3col td {
  font-family: 'Gotham Book';
  font-size: 0.75em;
  padding: 0.5em;
  width: 25%;
  border-right: 1px solid #ebebeb;
}
```

### Four Column Table
#### HTML for Four Column Table
```html
<table epub:type="table" id="table.1.3" class="table4col">
  <tr>
    <th>Product</th>
    <th>Unit Price</th>
    <th>Quantity</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Adjustable Desk</td>
    <td>$800</td>
    <td>10</td>
    <td>arrived</td>
  </tr>
  <tr>
    <td>Leather iPhone wallet</td>
    <td>$45</td>
    <td>15</td>
    <td>foo</td>
  </tr>
  <tr>
    <td>27" Apple Thunderbolt displays</td>
    <td>$1000</td>
    <td>2</td>
    <td>bar</td>
  </tr>
  <tr>
    <td>Bose studio headphones</td>
    <td>$60</td>
    <td>4</td>
    <td>delivered</td>
  </tr>
</table>
```

#### CSS for Four Column Table
```css
table.table4col {
  width: 98%;
  margin: 1em 1%;
  border-collapse: collapse;
  border: none;
}
.table4col tr th {
  font-family: 'Gotham Light', serif;
  background-color: #27ae60;
  color: #ffffff;
  padding: 0.5em;
}
.table4col tr {
  background-color: #ffffff;
}
.table4col tr:nth-child(odd) td {
  background-color: #ebebeb;
}
.table4col td {
  font-family: 'Gotham Book';
  font-size: 0.75em;
  padding: 0.5em;
  width: 25%;
}
```

### Custom Table
#### HTML for Custom Table
```html
<table epub:type="table" id="table.1.4" class="table1mod">
  <tr>
    <th colspan="4">Shankle leberkas salami pork loin filet mignon.</th>
  </tr>
  <tr>
    <td rowspan="2">Cupim shoulder short ribs, biltong beef ribs jerky picanha venison.</td>
    <td>Brisket</td>
    <td>Bacon</td>
    <td>Pork</td>
  </tr>
  <tr>
    <td>$45</td>
    <td>15</td>
    <td><span class="italic">foo</span></td>
  </tr>
  <tr>
    <td>27" Apple Thunderbolt displays</td>
    <td class="bad">$1000</td>
    <td>2</td>
    <td>bar</td>
  </tr>
  <tr>
    <td><span class="small_cap">Bose studio headphones</span></td>
    <td>$60</td>
    <td>4</td>
    <td class="good">delivered</td>
  </tr>
</table>
```

#### CSS for Custom Table
```css
table.table1mod {
  width: 98%;
  margin: 1em 1%;
  border-collapse: collapse;
  border: none;
}
.table1mod tr th {
  font-family: 'Gotham Black';
  background-color: #cfcfcf;
  color: #ffffff;
  padding: 0.5em;
  letter-spacing: 0.05em;
  text-shadow: #838383 1px 1px 1px;
}
.table1mod tr {
  background-color: #ffffff;
}
.table1mod tr:nth-child(odd) td {
  background-color: #ebebeb;
}
.table1mod td {
  font-family: 'Gotham Book';
  font-size: 0.75em;
  padding: 0.5em;
  width: 25%;
}
td.good {
  color: #468847 !important;
  background-color: #dff0d8 !important;
  font-weight: bold;
}
td.bad {
  color: #a94442 !important;
  background-color: #f2dede !important;
  font-weight: bold;
}
```
If a table style is generic throughout the content then the width on the `<td>` can be removed and a generic name can be applied. If an table is heavily detailed and larger than 4 columns it can be included as an image but should be referenced in the `lot` and not the `loi`.
