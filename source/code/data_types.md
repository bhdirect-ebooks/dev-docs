---
title: Data Types
---
In order to develop standards-based EPUBs while also retaining data types for use in our applications, we use a set of unique data attributes.

Data attributes are an HTML5 approach to storing unique data for applications. The data attributes described in this chapter act as hooks for our conversion scripts that transform finished EPUBs for ingestion and upload to our content servers.

## Data Attribute Syntax

Each data attribute follows the same pattern. The data attribute is `data-x`, where 'x' is the type, and the value is a simple string, as seen here.

```html
<element data-x="value">
```

### Scripture Value Syntax (OSIS)

All Scripture references that are values for Cross data attributes must be formatted according to OSIS book abbreviations and reference notation. OSIS is an entire specification for marking up Bibles in XML, but we are borrowing the spec only for Scripture references to use within our data attributes.

See [OSIS Bible Book Abbreviations](https://docs.google.com/a/lifeway.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit?usp=sharing).

A b.c.v (book.chapter.verse) reference is made up of the OSIS book abbreviation, the chapter number, and the verse number, period delimited as shown. For the sake of brevity, we will refer to these types of notations as OSIS.

```plain
Gen.1.1-Gen.1.2
```

The above snippet is an example OSIS for Genesis 1:1-2.

Verses in single chapter books should always be referenced using 1 as the chapter number (e.g., `Jude.1.3`)

_Make sure to keep track of what each data attribute requires as its OSIS (whether b.c.v, b.c., or b)._

## Context Markup

A context type is one which indicates a context boundary for our applications. The current context subtypes are Scripture, Parsing, and Date. To indicate one of these types of context boundary, use the following markup.

Context tags should always be placed at the beginning of the corresponding content (similar to page breaks), but always following an `<h1>`.

Use `data-context` with the HTML element `<hr>`, whose semantic meaning indicates a change in context, or `<span>` when `hr` is not appropriate.

### Scripture Context

Scripture context is identified by the `data-context` attribute, followed by the reference as the value.

The reference should be the OSIS abbreviation (explained below). A single verse reference must be in the form of b.c.v, while _a reference to more than one verse must be b.c.v-b.c.v_

```html
<hr data-context="Gen.1.1" />
<!-- OR -->
<span data-context="Gen.1.1"></span>
```

### Parsing Context

Scripture parsing context is identified by the `data-parsing` attribute, and its value is an OSIS _of type b or b.c only_.

```html
<hr data-parsing="Gen.1" />
<!-- OR -->
<span data-parsing="Gen.1"></span>
```

### Do Not Parse

To indicate that a specific portion of text should not be parsed as Scripture, use `data-parsing` along with an empty value. Remember to use with a `<span>` element, rather than `<hr>`.

```html
<span data-parsing="">123:4</span><span data-parsing="Gen"></span>
```

<aside class="warning">Important: After using an empty parsing attribute in this way, always restore context with a normal parsing context tag, as shown above.</aside>

### Date Context

Date context for books that are date-aligned, like some devotionals, is identified by `data-datetime`, and its value is an HTML datetime value.

```html
<!-- Just the date -->
<hr data-datetime="yyyy-mm-dd" />

<!-- Date with AM or PM -->
<hr data-datetime="yyyy-mm-ddT00:00" /> <!-- for AM -->
<hr data-datetime="yyyy-mm-ddT12:00" /> <!-- for PM -->
```

## Reference Markup

A reference type is one that identifies a link to another resource in the web or desktop applications. Scripture references and Strong's number references are reference types.

Reference types are indicated with a data attribute along with the HTML element `<a>`.

### Scripture References

Scripture references use the full b.c.v notation, and just as with the Scripture context attribute, a reference to more than one verse must be b.c.v-b.c.v.

**_All Scripture references in each volume must be tagged, non-orphaned and orphaned references alike._**

```html
<a data-ref="Gen.1.1-Gen.1.2">verses 1 and 2</a>
```

### Strong's References

Strong's number references also receive the `data-ref` attribute, a key of `"strongs"` and a value string starting with `H` for Hebrew or `G` for Greek and the number.

```html
<a data-strongs="G2424">Jesus</a> <a data-strongs="G5547">Christ</a>
```

## Markup for Other Data

Unique attributes exist for other data types, like article authors in journals, words of Jesus in Bibles, and LESSON<em>maker</em> questions in Bible studies.

### Journal Articles

In journals, use standard HTML for articles, along with the `data-author-first` and `data-author-last` attributes for article author data.

```html
<article title="Article Title" data-author-first="Thom" data-author-last="Rainer">
  <h1>Article Title</h1>
  <!-- Article content -->
</article>
```

### Scripture Verse Content

In Bibles, each verse must be denotated with `data-verse-start` and `data-verse-end` using `<span>`, which should be placed inline with the text.

```html
<p><span data-verse-start="John.11.35"></span>Jesus wept.<span data-verse-end="John.11.35"></span></p>
```

### Words of Jesus

In Bibles (and **only** in Bibles), the words of Jesus must be tagged with the `data-speaker` attribute. This is built for potential extensibility to all biblical speech acts, but for now, the only value should be `"Jesus"`.

```html
<span data-speaker="Jesus">"Have you understood all these things?"</span>
```

<aside class="warning">Words of Jesus \\`span\\` elements \\*\\*cannot be used to cover more than a single verse\\*\\*. Start a new \\`<span data-speaker="Jesus">\\` \\*\\*for every verse\\*\\*.</aside>

### LESSON<em>maker</em> Content

In Bible studies, LESSON<em>maker</em> question `<li>` elements receive `data-question` or `data-panic` attributes, and each receives its `number` value.

```html
<ul>
  <li>This is not a question.</li>
  <li data-question="2">What was your favorite movie growing up?</li>
  <li data-panic="3">In Acts 10:34-48, what was the core content of the message Peter preached? What exactly did he say about Jesus?</li>
</ul>
```
