# Cross Data Attributes

> [LINK: CROSS Data Attribute Cheat Sheet](https://docs.google.com/a/lifeway.com/document/d/17J8gSOOoAW6D9FtaQSoyXSwWz_aiHDuZFf5i8WHJysY/edit?usp=sharing)

CROSS markup for WORD<em>search</em> falls outside of standard HTML and therefore does not work in EPUBs. In order to develop standards-based EPUBs while also retaining CROSS data types for conversion to Content Platform EPUBs and the WS desktop application, we defined a set of unique data attributes.

Data attributes are an HTML5 approach to unique types which act as hooks for various frameworks and applications. The data attributes described in this chapter act as hooks for both CP ingestion expectations (convertToCP transformation) and CROSS markup (epub2cross transformation).

```html
<element data-cross-x='{"subtype":"data"}'>
```

Each data attribute follows the same pattern. The data attribute is <code>data-cross-x</code>, where 'x' is the type, and the value is a simple JSON object quoted as a string, as seen here.

Some types are grouped together as values of a single data attribute due to their functional similarity. Context types, reference types, and tour types are grouped in this way.

## Context Markup

A context type is one which indicates a context boundary for the desktop application. The current context subtypes are Scripture, Parsing, and Date. To indicate one of these types of context boundary, use the following markup.

Use <code>data-cross-context</code> only with the HTML element <code>&#60;hr /&#62;</code>, whose semantic meaning indicates a change in context. The only exception to this rule is [Do Not Parse](#do-not-parse), which belongs with the <code>&#60;span&#62;</code> tag.

## Scripture Context

```html
<hr data-cross-context='{"scripture":"Gen.1.1"}' />
```

Scripture context is identified by the <code>"scripture"</code> key, followed by the reference as the value.

The reference should be the OSIS abbreviation (explained below). A single verse reference must be in the form of b.c.v, while *a reference to more than one verse must be b.c.v-b.c.v.*

## Scripture Value Syntax

```html
<hr data-cross-context='{"scripture":"Gen.1.1-Gen.1.2"}' />
```

All Scripture references that are values for Cross data attributes must be formatted according to OSIS book abbreviations and reference notation. OSIS is an entire specification for marking up Bibles in XML, but we are borrowing the spec only for Scripture references to use within our data attributes.

See [OSIS Bible Book Abbreviations](https://docs.google.com/a/lifeway.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit?usp=sharing).

A b.c.v (book.chapter.verse) reference is made up of the OSIS book abbreviation, the chapter number, and the verse number, period delimited as shown. For the sake of brevity, we will refer to these types of notations as the OSIS.

Verses in single chapter books should always be referenced using 1 as the chapter number (e.g., <code>Jude.1.3</code>)

*Make sure to keep track of what each data attribute requires as its OSIS (whether b.c.v, b.c., or b).*

## Scripture Parsing Context

```html
<hr data-cross-context='{"parsing":"Gen.1"}' />
```

Scripture parsing context is identified by the <code>"parsing"</code> key, and its value is an OSIS *of type b or b.c only*.

### Do Not Parse

```html
<span data-cross-context='{"parsing":""}'>123:4</span>
```

To indicate that a specific portion of text should not be parsed as Scripture, use the <code>"parsing"</code> key along with an empty value. Remember to use with a <code>&#60;span&#62;</code> element, rather than <code>&#60;hr&#62;</code>.

### Parsing Hint

Parsing hints are deprecated. *Use [Scripture References](#scripture-references) or [Parsing Context](#parsing-context), as appropriate.*

## Date Context

```html
<!-- Just the date -->
<hr data-cross-context='{"datetime":"yyyy-mm-dd"}' />

<!-- Date with AM or PM -->
<hr data-cross-context='{"datetime":"yyyy-mm-ddT00:00"}' /> <!-- for AM -->
<hr data-cross-context='{"datetime":"yyyy-mm-ddT12:00"}' /> <!-- for PM -->
```

Date context for books that are date-aligned, like some devotionals, is identified by <code>"datetime"</code> key, and its value is an HTML datetime value.

## Reference Markup

A reference type is one that identifies a link to another resource in MyWSB or the WS desktop application. Scripture references, Strong's number references, and WORD<em>search</em> Library links are all reference types.

Reference types are indicated with <code>"data-cross-ref"</code> along with the HTML element <code>&#60;a&#62;</code>.

## Scripture References

```html
<a data-cross-ref='{"scripture":"Gen.1.1-Gen.1.2"}'>verses 1 and 2</a>
```

Scripture references use the full b.c.v notation, and just like the Scripture context attribute, a reference to more than one verse must be b.c.v-b.c.v.

***All Scripture references in each volume must be tagged, even non-orphaned references.***

## Strong's References

```html
<a data-cross-ref='{"strongs":"G2424"}'>Jesus</a> <a data-cross-ref='{"strongs":"G5547"}'>Christ</a>
```

Strong's number references also receive the <code>data-cross-ref</code> attribute, a key of <code>"strongs"</code> and a value string starting with <code>H</code> for Hebrew or <code>G</code> for Greek and the number.

## WS Library References

```html
<a data-cross-ref='{"pub":"0","book":"1","bookmark":"name"}'>text</a>
```

Although linking to Josephus' <em>Works</em> is deprecated, it is still possible to tag a reference to another book in the WORD<em>search</em> Library, using the <code>data-cross-ref</code> attribute.

The value is an object with three key-value pairs: the WS publisher number, the WS book number, and the HTML bookmark name.

## Markup for Other Types

Unique attributes exist for other data types, like tours, journal article authors, words of Jesus, and LESSON<em>maker</em> questions.

## Image Tour Types

```html
<figure class="full-width" data-cross-tour='{"illustration":"The Trinity"}' id="illus-1">
  <img alt="" src="../images/trinity.jpg" />
  <figcaption>The Trinity</figcaption>
</figure>

<figure class="float-right" data-cross-tour='{"map":"Jerusalem in the Time of Christ"}' id="map-24">
  <img alt="" src="../images/jerusalem.jpg" />
  <figcaption>Jerusalem in the Time of Christ</figcaption>
</figure>
```

For images use <code>&#60;figure&#62;</code> and one of four types.

Image types:
<ul>
  <li>map</li>
  <li>photo</li>
  <li>illustration (including all drawings and diagrams)</li>
  <li>chart</li>
</ul>

There are three placement options for figures: left, right, and full-width centered.
Use the provided classes <code>float-left</code>, <code>float-right</code>, and <code>full-width</code> on the <code>&#60;figure&#62;</code> element.

The image title/caption is required in both the <code>data-cross-tour</code> attribute and <code>&#60;figcaption&#62;</code>.
Since an alt value would be redundant in this case, leave it blank. (Refer to [Multimedia Fallback](#multimedia-fallback) in the Style Guide for the guideline on this.)

Make sure each figure has a unique <code>id</code> in order to link from the [Navigation Document](#loa-loi-lot-lov).

## Video Tour Type

```html
<div data-cross-tour='{"video":"What is Theology?"}' id="video-3">
  <video poster="../images/everyday-theology-003.svg" controls="controls" preload="none">
    <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.mp4" type="video/mp4" />
    <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.webm" type="video/webm" />
  </video>
</div>
```

Videos are wrapped with a <code>&#60;div&#62;</code> element with the <code>data-cross-tour</code> attribute. The attribute value is a JSON object with <code>video</code> as the key and the video title as the value.

Every part of the example code is required. Each video must have a corresponding SVG as the <code>poster</code>, and there must be two transcoded source files located in the epub-remote-resources s3 bucket, an MP4 and a WEBM file as a fallback.

As with figures, make sure each video has a unique <code>id</code> in order to link from the Navigation Document.

For important information on videos in Glossaries, see [Glossary Videos](#glossary-videos).

## Table Tour Type

```html
<div data-cross-tour='{"table":"Example of Problem and Solution in NT Letters"}' id="table-2">
  <table class="bdr">
    <tr>
      <th></th>
      <th>Galatians</th>
      <th>1 Corinthians</th>
    </tr>
    <tr>
      <th>Problem</th>
      <td>Struggled with legalism</td>
      <td>Basking in freedom</td>
    </tr>
    <tr>
      <th>Solution</th>
      <td>Emphasized freedom in Christ</td>
      <td>Emphasized obedience</td>
    </tr>
  </table>
</div>
```

Like videos, tables are wrapped with a <code>&#60;div&#62;</code> element with the <code>data-cross-tour</code> attribute and a unique <code>id</code>.

Every part of the example code is required. Even if the table does not have a title in the source, the data attribute must include short, descriptive title that is written in title case.

**See also [Tables](#tables) for general <code>&#60;table&#62;</code> guidelines.**

## Audio Tour Type

```html
<audio id="" data-cross-tour='{"audio":"title"}'>...</audio>
```

There is also an audio type that gets marked-up in the same way as videos and other tour types, should that ever be needed.

## Journal Articles

```html
<article title="Article Title" data-cross-article-author='{"first":"Thom","last":"Rainer","suffix":""}'>
  <h1>Article Title</h1>
  <!-- Article content -->
</article>
```

Use standard HTML for articles, along with the <code>data-cross-article-author</code> attribute.

## Canonical Words of Jesus

```html
<span data-cross-speech-act='{"speaker":"Jesus"}'>"Have you understood all these things?"</span>
```

In Bibles, the words of Jesus must be tagged with the <code>data-cross-speech-act</code> attribute. This is built for potential extensibility to all biblical speech acts, but for now, the only value should be <code>'{"speaker":"Jesus"}'</code>.

## LESSON<em>maker</em> Content

```html
<ul>
  <li>This is not a question.</li>
  <li data-cross-lm-question='{"type":"general","number":"2"}'>What was your favorite movie growing up?</li>
  <li data-cross-lm-question='{"type":"panic","number":"3"}'>In Acts 10:34-48, what was the core content of the message Peter preached? What exactly did he say about Jesus?</li>
</ul>
```

LESSON<em>maker</em> question <code>&#60;li&#62;</code> elements receive the <code>data-cross-lm-question</code> attribute. Each question is either a <code>general</code> or <code>panic</code> type, and each receives its <code>number</code> value.