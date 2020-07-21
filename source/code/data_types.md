---
title: Data Types
---
In order to develop standards-based EPUBs while also retaining data types for use in our applications, we use a set of unique data attributes.

Data attributes are an HTML5 approach to storing unique data for applications. The data attributes described in this chapter act as hooks for our conversion scripts that transform finished EPUBs for ingestion and upload to our content servers.

<hr />

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

_<hr />_

## Context Markup

A context type is one which indicates a context boundary for our applications. The current context subtypes are Scripture, Parsing, and Date. To indicate one of these types of context boundary, use the following markup.

### Scripture Context

Scripture context is identified by the `data-context` attribute, followed by the reference as the value.

The reference should be the OSIS abbreviation (explained below). A single verse reference must be in the form of b.c.v, while _a reference to more than one verse must be b.c.v-b.c.v_

Use `data-context` with the HTML element `<hr>`, whose semantic meaning indicates a change in context.

Scripture context tags should always be placed before the corresponding content, but always following an `<h1>`.

Additionally, scripture context tags must be preceeded by a line break.

```html
<!-- after an h1 -->
<h1>Genesis 1</h1>
<hr data-context="Gen.1.1" />

<!-- before all other types of content -->
<hr data-context="Matt.25.1-Matt.25.5" />
<h3>“There’s Always Time” (<a data-ref="Matt.25.1-Matt.25.5">Matthew 25:1-5</a>)</h3>
<!-- OR -->
<hr data-context="1Sam.1.1" />
<p><span class="b"><a data-ref="1Sam.1.1">1:1</a></span> Possibly ten years earlier...</p>
```

### Parsing Context

Scripture parsing context is identified by the `data-parsing` attribute, and its value is an OSIS _of type b or b.c only_.

A `<span>` tag may be used in places where an `<hr>` is not appropriate.

```html
<hr data-parsing="Gen.1" />
<!-- OR -->
<span data-parsing="Gen.1"></span>
```

### Do Not Parse

To indicate that a specific portion of text should not be parsed as Scripture, use `data-parsing` along with an empty value. Remember to use with a `<span>` element, rather than `<hr>`.

```html
<span data-parsing=""></span>123:4<span data-parsing="Gen"></span>
```

<aside class="warning">Important: After using an empty parsing attribute in this way, always restore context with a normal parsing context tag, as shown above.</aside>

### Date Context

Date context for books that are date-aligned, like some devotionals, is identified by `data-datetime`, and its value is an HTML datetime value.

For most books, month and day values are sufficient:

```html
<!-- Just the month and day -->
<hr data-datetime="mm-dd" />
```

If the devotional has morning and evening entries, AM and PM can be specified in the date attribute:

```html
<!-- Date with AM or PM -->
<hr data-datetime="mm-ddT00:00" /> <!-- for AM -->
<hr data-datetime="mm-ddT12:00" /> <!-- for PM -->
```

Within a book, date attributes must be in ascending order, though dates can be skipped. They should not be duplicated.

Occasionally, we will need to add year data to the date attributes. This will be necessary when:

- The devotional is in a set with other devotionals, and together they span more than one year. For example, a couple 1-year devotionals in a set.
- The book does not have dates in ascending order. For example, it follows a year _other_ than the calendar year, such that there are date entries before Jan. 1.

Start with the current year and work forward.

```html
<!-- Date with year data -->
<hr data-datetime="yyyy-mm-dd" />

<!-- Can also be used with AM or PM -->
<hr data-datetime="yyyy-mm-ddT00:00" /> <!-- for AM -->
<hr data-datetime="yyyy-mm-ddT12:00" /> <!-- for PM -->
```

<hr />

## Reference Markup

A reference type is one that identifies a link to another resource in the web or desktop applications. Scripture references and Strong's number references are reference types.

Reference types are indicated with a data attribute along with the HTML element `<a>`.

### Scripture References

Scripture references use the full b.c.v notation, and just as with the Scripture context attribute, a reference to more than one verse must be b.c.v-b.c.v.

_**All Scripture references in each volume must be tagged, non-orphaned and orphaned references alike.**_

The 18 books of the Old Testament Apocrypha, as listed in the [OSIS Bible Book Abbreviations](https://docs.google.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit#gid=0) spreadsheet, also receive Scripture reference tags. We do not add scripture reference tags to New Testament Apocrypha or Pseudepigrapha.

```html
<a data-ref="Gen.1.1-Gen.1.2">verses 1 and 2</a>
```

### Strong's References

Strong's number references receive a `data-strongs` attribute and a value string starting with `H` for Hebrew or `G` for Greek and the number.

```html
<span data-strongs="G2424">Jesus</span> <span data-strongs="G5547">Christ</span>
```

Multiple Strong's numbers can exist in the value, and should be separated by commas

```html
<span data-strongs="H2416,H5315">everything that has the breath of life</span>
```

### GK Numbers

Goodrick-Kohlenberger numbers are similar to Strong's numbers, except they receive a `data-gk` attribute.

```html
<span data-gk="G4036">Therefore</span> <span data-gk="G4005,G1569">whoever</span>
```

Both Strong's and GK number data attributes can be used on the same element, and the order of the attributes doesn't matter.

```html
<span data-strongs="H7225" data-gk="H8040">beginning</span>
...
<span data-gk="H976,H1068" data-strongs="H914,H996">separated</span>
```

<hr />

## Markup for Other Data

Unique attributes exist for other data types, like article authors in journals, words of Jesus in Bibles, and LESSON<em>maker</em> questions in Bible studies.

### Journal Articles

Journals are works that are in the Periodicals category. In journals, use standard HTML for articles, along with the `data-author-first` and `data-author-last` attributes for article author data.

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

<aside class="warning">Words of Jesus span elements cannot be used to cover more than a single verse. Start a new `<span data-speaker="Jesus">` for <b>every</b> verse.</aside>

<hr />

### LESSON<em>maker</em> Content

LESSON<em>maker</em> markup is a Wordsearch desktop feature <em>**intended for responsive devotionals or study guides**</em> that specifically focus on passages or books of Scripture.

#### Lesson Topics

The main heading of a lesson should be marked with the `data-topics` attribute, where the value is a pipe-delimited list of topics covered in the lesson.

This will most often be the `<h1>`, but could be another heading.



```html
<h1 data-topics="Jesus Christ|Jesus|Christ|Arrival|Messiah|King">Week 2: The Arrival of Jesus the Messiah</h1>
<p class="h1sub">Matthew 1-2</p>
```

<aside class="tip">For now, we do not have any tooling to assist in determining topics covered in a lesson.

For many lessons, gleaning the topics from the text of the main heading and an introductory sentence/paragraph is sufficient.

If the study has a topical index, it can be used to help discover topics covered in a lesson.
</aside>

#### Main (Panic) Lesson Content and Questions

LESSON<em>maker</em> has a special "Panic!" feature which will copy specifically-marked portions of the lesson along with related materials selected from the users' library to the word processing window. See [Dev Process > LESSON<em>maker</em>](/process/special_types.html#LESSONmaker-Content) for more info on how this feature works.

In order for questions to be included when the "Panic!" button is pressed, the element should be marked with the `data-panic=""` attribute. 
When considering what questions to mark as "panic", **choose content which relates directly to the central Scripture verse(s) or passage(s) covered in the lesson, and focuses on textual analysis or themes within that passage** (rather than feelings or experiential connections of the reader).

```html
<h2>Section VIII. Questions</h2>
<ol class="digit">
  <li data-panic="">Name three general lessons taught in the book about suffering.</li>
  <li data-panic="">What two general statements about man does Job make? 14:1.</li>
  <li>Read Chapter 38 and write out your impressions of it in concise statements, using fifty words.</li>
</ol>
```

Ensure the `data-panic=""` attribute is on the element directly containing the text, not a higher-level element:

```html
<!-- Wrong! -->
<ol data-panic="" class="digit">
  <li>On the third day, what does God say, or <span class="i">command</span> (1:9)?</li>
  <li>What does God command in Genesis 1:14?</li>
</ol>

<!-- Right! -->
<ol class="digit">
  <li data-panic="">On the third day, what does God say, or <span class="i">command</span> (1:9)?</li>
  <li data-panic="">What does God command in Genesis 1:14?</li>
</ol>

```

<aside class="caution">While the `data-panic=""` attribute will work on any element, it is intended for questions tagged as list items (<code>&lt;li&gt;</code>)
</aside>

<aside class="notice">If no content in the lesson is marked with `data-panic=""` the entire lesson will be copied over when the "Panic!" feature is used.

If the lesson does not have any tagged Scripture references, the "Panic!" button will be disabled, whether or not the lesson contains content marked as 'panic'.
</aside>

#### Avoid Nested Lists

Because of a quirk in the platform, nested lists should be avoided in LESSON<em>maker</em> content, especially for questions. Use paragraphs (with indentation classes if necessary) to accomplish a similar visual effect.

```html
<!-- Wrong! -->
<ol class="digit">
  <li>After the flood had destroyed every living thing on earth, except for Noah's family, the world would be repopulated by Noah's sons.
    <ol class="lower-alpha">
      <li data-panic="">Which of Noah's sons would beget a man named Terah? (See <a data-ref="Gen.11.10">chapter 11:10</a>)
      <li data-panic="">Who was born to Terah? (See <a data-ref="Gen.11.27">verse 27</a>)
      <li>Why is this genealogy of Shem listed in <a data-ref="Gen.11.1-Gen.11.32">Genesis chapter 11</a> significant?</li>
    </ol>
  </li>
</ol>

<!-- Right! -->
<p>1. After the flood had destroyed every living thing on earth, except for Noah's family, the world would be repopulated by Noah's sons.</p>
<ol class="lower-alpha">
  <li data-panic="">Which of Noah's sons would beget a man named Terah? (See <a data-ref="Gen.11.10">chapter 11:10</a>)
  <li data-panic="">Who was born to Terah? (See <a data-ref="Gen.11.27">verse 27</a>)
  <li>Why is this genealogy of Shem listed in <a data-ref="Gen.11.1-Gen.11.32">Genesis chapter 11</a> significant?</li>
</ol>
```

### Workbook Questions and Answers

Workbook enhancements are a Content Platform (Wordsearch web app) feature, used for marking question text and answer locations wherever it is desirable to give the user a text box in which to record their answer to a question or exercise. See [Dev Process > Workbook Enhancements](/process/special_types.html#Workbook-Enhancements-In-Content-Platform) for more info on this feature.

The element containing the question text should receive the `data-wb-question` attribute where the value is an identifier unique to that question. (Each `data-wb-question` value must be unique within the EPUB)

```html
<p class="ind1" data-wb-question="chap14-1">1.  How does Luke describe Athens and its people (17:16, 21)?</p>
<p class="ind1" data-wb-question="chap14-2">2.  What did the cultured men think of Paul, and why (17:18, 32)?</p>

<!-- OR -->

<p>Abraham believed two things about God that convinced him God could keep His promise (4:17)</p>
<ol class="lower-alpha">
  <li data-wb-question="chap06-9">In what ways does God give "life to the dead" (4:17)? </li>
  <li data-wb-question="chap06-10"> How does God call "things that are not as though they were" (4:17)?</li>
</ol>
```

Workbook and LESSON<em>maker</em> markup can be used on the same element:

```html
  <li data-wb-question="chap27-3" data-panic="">What did Daniel and his friends ask of God in the midst of a desperate situation? (2:17-18)</li>
```

Normally, the app will insert the answer UI directly after the question element. But, you can optionally use the `data-wb-answer` attribute to specify where the answer UI should be placed. The reading application will replace the indicated element with the answer UI and ultimately the answer text.

The `data-wb-answer` value must match the value of the question to which it corresponds

```html
<p class="br-before" data-wb-question="chap04-22"><span class="b">1.</span> Which of the following did the risen Jesus say in Matthew’s gospel?</p>
<ol class="lower-alpha">
  <li>‘All authority is given to the holy books you shall write about me.’</li>
  <li>‘All authority is given to Peter and his successors.’</li>
  <li>‘All authority in heaven and on earth has been given to me.’</li>
  <li>‘All authority belongs to the politicians who sound the most like me.’</li>
</ol>
<p data-wb-answer="chap04-22"></p>

<!-- OR -->

<p class="br-before" data-wb-question="chap34-314"><span class="b">8.</span> Do you AGREE or DISAGREE with this statement:</p>
<blockquote>
  <p>John’s pastoral purpose is as much to exhort his hearers to endurance as to assure them of God’s ultimate victory over their adversaries. He therefore provides a God’s-eye view of the plight of the Asian churches and explains how Jesus’ people are destined to reign with him in the new creation. Along the way there are exhortations and prophecies, warnings and judgments, triumphs mixed with tears, old adversaries and a new world. For all the (to us) vagueness of John’s vision, and the vagaries of his language, the book of Revelation gives its audience the confidence and hope that the Lamb has triumphed, and will yet triumph, over the evils of the world.</p>
</blockquote>
<p class="ind1">Why?</p>
<p data-wb-answer="chap34-314">[Your Response Here]</p>
```

<aside class="tip">We have established a shorthand-plus-script workflow to make adding workbook markup easier, see [expand-ws.js](https://github.com/bhdirect-ebooks/single-scripts/tree/master/expand-wb) for information.
</aside>

### Links to CROSS Books

Two different syntaxes work for creating links to other CROSS books:

```
<a data-link='{"pub":"0","book":"19768","bookmark":"page3"}'>
```

<ul>
  <li>"pub" is the CROSS ID number before the <code>-</code> (0 for Wordsearch)</li>
  <li>"book" is the CROSS ID portion after the <code>-</code></li>
  <li>"bookmark" is the <code>id</code> attribute of the tag at the position to link to (will be converted to a <code>name</code> attribute by **epub2cross**)</li>
</ul>

```
<a data-link='{"book":"0-19768","page":"page3"}'>
```

<ul>
  <li>"book" is the CROSS ID (only works with <code>0-</code> IDs)</li>
  <li>"page" is the <code>id</code> attribute of the tag at the position to link to (will be converted to <code>name</code> attribute by **epub2cross**).
    <ul>
      <li>"page", doesn't technically have to be a page id. any <code>id</code> will work.</li>
    </ul>
  </li>
</ul>