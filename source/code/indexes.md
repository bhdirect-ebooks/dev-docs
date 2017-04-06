# Index Components

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

Indexes in EPUBs must follow a prescribed pattern using a set of index types.

Each index in the work should be nested in an <code>index</code> type section within its own <code>backmatter</code> document.

## Index Groups

```html
<section epub:type="index">
  <h1>Index</h1>
  <section epub:type="index-group">
    <h2>A</h2><!-- Group headings are not necessary if not found in the work itself. -->
    <!-- list of index terms -->
  </section>
</section>
```

An index that has groupings of some kind (usually alphabetical) should be tagged accordingly. *If there are no discernible groupings, the entire index should be wrapped in an <code>index-group</code> section.*

## Index Terms

```html
<ul>
  <li id="(unique id)">
    <span epub:type="index-term">Aaron</span>,
    <!-- … -->
  </li>
  <!-- <li id=""> and <span epub:type="index-term"> for each term -->
</ul>
```

Index terms are tagged as <code>&#60;span&#62;</code> with <code>epub:type="index-term"</code> and nested in an unordered list (<code>&#60;ul&#62;</code>), using an <code>&#60;li&#62;</code> tag.

## Page Numbers

```html
<span epub:type="index-term">Aaron</span>,
<span epub:type="index-locator-list">
  <a href="ShortName02_chapter01.xhtml#page10">10</a>,
  <a href="ShortName02_chapter08.xhtml#page142">142</a>,
  <a href="ShortName02_chapter11.xhtml#page195">195</a>,
  <!-- etc. -->
</span>
```

Lists of page numbers associated with index terms must be tagged with <code>&#60;a&#62;</code> and nested in a <code>&#60;span&#62;</code> with <code>epub:type="index-locator-list"</code>.

## Cross References (See and See Also)

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

Each cross-referenced term is tagged with <code>&#60;a&#62;</code>, with attributes <code>epub:type="index-term"</code> and <code>href="#xyz"</code>, where "xyz" is the <code>id</code> given to the other term. The parent tag depends on whether the term is preferred or related.

### Preferred (See)

Typically identified with "See," preferred cross references are usually listed in place of a page number list. In EPUB indexes, they are tagged with a <code>&#60;span&#62;</code> with <code>epub:type="index-xref-preferred"</code>.

### Related (See Also)

Typically identified with "See also," related cross references usually appear along with a list of page numbers. Similar to preferred cross references, they are tagged with a <code>&#60;span&#62;</code> with <code>epub:type="index-xref-related"</code>.

## Sub-listed Index Terms

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

Sub-listed terms should be listed in another <code>&#60;ul&#62;</code> nested in the main term's <code>&#60;li&#62;</code>.

## Putting It All Together

> See GitLab for a fuller [Index](https://gitlab.com/snippets/27009) snippet.

Follow the link to see the full snippet.
