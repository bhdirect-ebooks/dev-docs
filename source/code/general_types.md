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

Tables should be tagged semantically. This means cells that contain table headings should be `<th>`, rather than `<td>`, elements. If using **mywsb.css**, be aware that table headings are already styled.

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
