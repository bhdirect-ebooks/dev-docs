# General Content

## Abbreviations

```html
<abbr title="Septuagint">LXX</abbr>
```

Abbreviations should follow the HTML specification.

## Asides

```html
<aside>
  <p epub:type="bridgehead">Greek Highlight</p>
  <p><span class="bold">Blessed. Greek</span> <span lang="grc" xml:lang="grc">μακάριος</span> (<span lang="grc-Latn" xml:lang="grc-Latn">makarios</span>). This term occurs thirty times in the Gospels, all but two on the lips of Jesus (<a data-cross-ref='{"scripture":"Luke.1.45"}'>Luke 1:45</a>; <a data-cross-ref='{"scripture":"Luke.11.27"}'>11:27</a>). The OT Hebrew term <span lang="hbo-Latn" xml:lang="hbo-Latn">ashrey</span> stands behind the NT usage of <span lang="grc-Latn" xml:lang="grc-Latn">makarios</span>. Both terms are normally translated "blessed" or "happy." <span lang="grc-Latn" xml:lang="grc-Latn">Makarios</span> has two main nuances in the NT. It predominately refers to God's blessing upon his people, and secondarily to God's people blessing him. In the latter sense, <span lang="grc-Latn" xml:lang="grc-Latn">makarios</span> is basically synonymous with praise. When a person is blessed by God, he is approved by God. The opposite of <span lang="grc-Latn" xml:lang="grc-Latn">makarios</span> is "woe" (<span lang="grc-Latn" xml:lang="grc-Latn">ouai</span>), the status of one who is not approved by God and is thus the object of impending judgment (<a data-cross-ref='{"scripture":"Matt.23.13-Matt.23.32"}'>Matt 23:13–32</a>; <a data-cross-ref='{"scripture":"Luke.6.24-Luke.6.36"}'>Luke 6:24–36</a>). In spite of being a tax collector (<a data-cross-ref='{"scripture":"Matt.9.9"}'>Matt 9:9</a>), Matthew himself became a recipient of ultimate blessing from God of both salvation and direct mentorship from Jesus himself and thus remained sensitive to his obligation to bless the Lord for having received true life-change from God. Having himself once put the acquisition of money before the cultivation of spirituality, Matthew often highlights the benefit of receiving the blessing of God above pursuing earthy possessions and following faulty human perspectives (<a data-cross-ref='{"scripture":"Matt.5.21-Matt.5.48"}'>Matt 5:21–48</a>; <a data-cross-ref='{"scripture":"Matt.6.19-Matt.6.21"}'>6:19–21</a>; <a data-cross-ref='{"scripture":"Matt.9.12-Matt.9.13"}'>9:12–13</a>; <a data-cross-ref='{"scripture":"Matt.16.26"}'>16:26</a>).</p>
</aside>
```

Any special sections that are separate from the main content of a chapter should be tagged as asides using the HTML <code>&#60;aside&#62;</code> element.

If the aside includes a heading, use <code>&#60;p epub:type="bridgehead"&#62;&#60;/p&#62;</code>.

## Headings

Heading tags reflect a hierarchy and should therefore be used for semantic (not stylistic) purposes. The highest level heading in any section should be tagged using <code>&#60;h1&#62;</code>. The next lower level heading tag would be <code>&#60;h2&#62;</code>, then <code>&#60;h3&#62;</code>, etc.

Heading tags are also not to be used with subheadings ([See the spec](http://w3c.github.io/html/sections.html#headings-and-sections)). Handle any stylistic differences using CSS.

For any headings that should not be included in the document outline (usually in <code>aside</code> elements), use <code>&#60;p epub:type="bridgehead"&#62;&#60;/p&#62;</code>.

### Chapter Titles, Labels, and Numbers

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

Chapter titles should always be tagged as <code>&#60;h1&#62;</code> elements.

When a chapter has a label (e.g., "Chapter 1") or just a number expressing order (e.g., "1") <strong>and</strong> also has a title, there are special classes to use. Follow the recommended code examples, using the classes <code>.label</code> or <code>.ordinal</code>.

Do the same for any Section or Part title.

## HTML Semantics

As instructed in the style guide, always use the most semantically-appropriate HTML tags as you markup content. Lists should be ordered or unordered HTML lists. Outlines should be ordered lists with the appropriate classes. Block quotes and poetry should always be tagged as such, and so on.

## Hyperlinks

The only hyperlinks in the EPUB should be those that point to bookmarks within the EPUB itself. For any external URLs in the content, leave the URL as text only. Tagging with <code>&#60;a&#62;</code> is not recommended. This allows reading systems to decide whether or not to include hyperlinks to external content.

## Images

Images that do not serve a figural purpose in the content should be included according to XHTML specifications. **Purely decorative glyphs and line images should be excluded from the EPUBs we develop.**

See [Image Tour Types](#image-tour-types) for additional guidelines on non-decorative images.

## Languages and Transliterations

```html
<!-- Greek Transliteration -->
<span xml:lang="grc-Latn" lang="grc-Latn">En archē</span>

<!-- Hebrew Transliteration -->
<span xml:lang="hbo-Latn" lang="hbo-Latn">br'shyt</span>


<!-- Greek -->
<span xml:lang="grc" lang="grc">Ιεσουσ</span>

<!-- Hebrew -->
<span xml:lang="hbo" lang="hbo">‏יְשׁוּעָ</span>
```

Languages and transliterations should follow XML and HTML conventions.

This means we use <code>xml:lang</code> and <code>lang</code> attributes to indicate languages and transliterations. Language subtags are standardized and governed. See the [Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) for current standard codes. Lower case, two- and three-character codes indicate languages, while capitalized four-character codes indicate written scripts and get appended to the language code.

Common languages are already included in mywsb.css. <strong>Use mywsb.css to lookup language tags first, then consult the registry if necessary.</strong> If you need to tag a language not referenced in mywsb.css, find the appropriate code and add it as a selector it in bookstyles.css using the same declaration block from mywsb.css.

The best practice when choosing the language subtag is to use the shortest and most recent code available to indicate a language and/or script. Append <code class="lang-html inline" style="white-space: nowrap">-Latn</code> to languages that are transliterated into English (Latin script).

Always use Unicode characters for any language or transliteration.

## Scripture Quotes

```html
<blockquote class="scriptext">
  <p>For those He foreknew He also predestined to be conformed to the image of His Son, so that He would be the firstborn among many brothers. And those He predestined, He also called; and those He called, He also justified; and those He justified, He also glorified. (Rom 8:29–30)</p>
</blockquote>
```

Scripture quotes should be tagged as <code>blockquote</code> elements with the <code>scriptext</code> class.

## Poetry

```html
<!-- Poetry example from the ESV, Genesis 2:23-24 -->

<p>Then the man said,</p>
<p class="poem1 br-before">"This at last is bone of my bones</p>
<p class="poem2">and flesh of my flesh;</p>
<p class="poem1">she shall be called Woman,</p>
<p class="poem2">because she was taken out of Man."</p>
```

Tag poetry with <code>poem</code> classes, making sure to follow the indentation conventions of the source material.

Rendered version of the example code:

![Poetry example - rendered version.](images/poetry-example.png)

## Quotation Marks

Typographic (curly) quotes and straight quotes are equally acceptable in book text. Simply leave the quotes as received from the source.

## Tables

```html
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
```

Tables should be tagged semantically. This means cells that contain table headings should be <code>&#60;th&#62;</code>, rather than <code>&#60;td&#62;</code>, elements. When using <code>&#60;th&#62;</code>, avoid adding unnecessary classes like <code>.bold</code>, since table headings are already styled in mywsb.css.

Also, for tables that contain more than one row of headings, wrap the rows with <code>&#60;thead&#62;&#60;/thead&#62;</code> and the remainder of the table with <code>&#60;tbody&#62;&#60;/tbody&#62;</code>. This is recommended for accessibility reasons.

See also [Table Tour Type](#table-tour-type).

## Videos

See [Video Tour Type](#video-tour-type) and [Glossary Videos](#glossary-videos) for all video guidelines.