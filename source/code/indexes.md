---
title: Indexes
---

Indexes in EPUBs must follow a prescribed pattern using a set of index types.

Each index in the work should be nested in an `index` type section within its own `backmatter` document.

```html
<body epub:type="backmatter">
  <section epub:type="index">
    <h1>Author Index</h1>
    <!-- … -->
  </section>
</body>

<!-- Separate XHTML document -->
<body epub:type="backmatter">
  <section epub:type="index">
    <h1>Subject Index</h1>
    <!-- … -->
  </section>
</body>
```

## Index Groups

An index that has groupings of some kind (usually alphabetical) should be tagged accordingly. *If there are no discernible groupings, the entire index should be wrapped in an `index-group` section.*

```html
<section epub:type="index">
  <h1>Index</h1>
  <section epub:type="index-group">
    <h2>A</h2><!-- Group headings are not necessary if not found in the work itself. -->
    <!-- list of index terms -->
  </section>
</section>
```

## Index Terms

Index terms are tagged as `<span>` with `epub:type="index-term"` and nested in an unordered list (`<ul>`), using an `<li>` tag.

```html
<ul>
  <li id="(unique id)">
    <span epub:type="index-term">Aaron</span>,
    <!-- … -->
  </li>
  <!-- <li id=""> and <span epub:type="index-term"> for each term -->
</ul>
```

## Page Numbers

Lists of page numbers associated with index terms must be tagged with `<a>` and nested in a `<span>` with `epub:type="index-locator-list"`.

```html
<span epub:type="index-term">Aaron</span>,
<span epub:type="index-locator-list">
  <a href="ShortName02_chapter01.xhtml#page10">10</a>,
  <a href="ShortName02_chapter08.xhtml#page142">142</a>,
  <a href="ShortName02_chapter11.xhtml#page195">195</a>,
  <!-- etc. -->
</span>
```

## Cross References

Each cross-referenced term is tagged with `<a>`, with attributes `epub:type="index-term"` and `href="#xyz"`, where "xyz" is the `id` given to the other term. The parent tag depends on whether the term is _preferred_ or _related_.

```html
<!-- Preferred references -->
<li>
  <span epub:type="index-term">Antioch of Pisidia</span>.
  <span epub:type="index-xref-preferred">
    <span class="italic">See</span> <a epub:type="index-term" href="#(unique id)">Pisidian Antioch</a>.
  </span>
</li>

<!-- Related references -->
<li id="(unique id)">
  <span epub:type="index-term">Cephas</span>,
  <span epub:type="index-locator-list">
    <a href="WWShortName02_chapter70.xhtml#page1321">1321-22</a>.
  </span>
  <span epub:type="index-xref-related">
    <span class="italic">See also</span> <a epub:type="index-term" href="#(unique id)">Simon Peter</a>.
  </span>
</li>
```

### Preferred (See)

Typically identified with "See," preferred cross references are usually listed in place of a page number list. In EPUB indexes, they are tagged with a `<span>` with `epub:type="index-xref-preferred"`.

### Related (See Also)

Typically identified with "See also," related cross references usually appear along with a list of page numbers. Similar to preferred cross references, they are tagged with a `<span>` with `epub:type="index-xref-related"`.

## Sub-listed Index Terms

Sub-listed terms should be listed in another `<ul>` nested in the main term's `<li>`.

```html
<li id="(unique id)">
  <span epub:type="index-term">ark (of the covenant)</span>,
  <span epub:type="index-locator-list">
    <a href="ShortName02_chapter01.xhtml#page5">5</a>,
    <!-- etc. -->
  </span>
  <ul>
    <li>
      <span epub:type="index-term">in battle</span>,
      <span epub:type="index-locator-list">
        <a href="ShortName02_chapter08.xhtml#page144">144</a>,
        <a href="ShortName02_chapter13.xhtml#page221">221</a>;
      </span>
    </li>
    <!-- etc. -->
  </ul>
</li>
```

## Putting It All Together

Follow the link to see the full snippet: [Index](https://gitlab.com/snippets/27009).
