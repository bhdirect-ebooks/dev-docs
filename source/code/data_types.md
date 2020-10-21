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

See [OSIS Bible Book Abbreviations](https://docs.google.com/spreadsheets/d/1wfT-28QC64y40YilNuVFEyZqNx5U15ldKxvBtto88dU/edit?usp=sharing).

A b.c.v (book.chapter.verse) reference is made up of the OSIS book abbreviation, the chapter number, and the verse number, period delimited as shown. For the sake of brevity, we will refer to these types of notations as OSIS.

```plain
Gen.1.1-Gen.1.2
```

The above snippet is an example OSIS for Genesis 1:1-2.

Verses in single chapter books should always be referenced using 1 as the chapter number (e.g., `Jude.1.3`)

_Make sure to keep track of what each data attribute requires as its OSIS (whether b.c.v, b.c., or b)._

<hr />

## Scripture References

Scripture references use the full b.c.v notation, and just as with the Scripture context attribute, a reference to more than one verse must be b.c.v-b.c.v.

_**All Scripture references in each volume must be tagged, non-orphaned and orphaned references alike.**_

```html
<a data-ref="Rom.3.23">Romans 3:23</a>
...
<a data-ref="Acts.1.1-Acts.2.47">Acts 1—2</a>
...
<a data-ref="Jer.33.3">33:3</a>
...
<a data-ref="Gen.1.1-Gen.1.2">verses 1 and 2</a>
```

<aside class="notice">There is no need to add Scripture reference tags to Old Testament Apocrypha, New Testament Apocrypha, or Pseudepigrapha references.</aside>

## Workbook Questions and Answers

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

## Strong's Numbers

Strong's number references receive a `data-strongs` attribute and a value string starting with `H` for Hebrew or `G` for Greek and the number.

```html
<span data-strongs="G2424">Jesus</span> <span data-strongs="G5547">Christ</span>
```

Multiple Strong's numbers can exist in the value, and should be separated by commas

```html
<span data-strongs="H2416,H5315">everything that has the breath of life</span>
```

## GK Numbers

Goodrick-Kohlenberger number references are similar to Strong's numbers, except they receive a `data-gk` attribute.

```html
<span data-gk="G4036">Therefore</span> <span data-gk="G4005,G1569">whoever</span>
```

Both Strong's and GK number data attributes can be used on the same element, and the order of the attributes doesn't matter.

```html
<span data-strongs="H7225" data-gk="H8040">beginning</span>
...
<span data-gk="H976,H1068" data-strongs="H914,H996">separated</span>
```

## Words of Jesus

In Bibles (and **only** in Bibles), the words of Jesus may be tagged with the `data-speaker` attribute. This was built for potential extensibility to all biblical speech acts, but for now, the only value should be `"Jesus"`.

```html
<span data-speaker="Jesus">"Have you understood all these things?"</span>
```

<aside class="warning">Words of Jesus span elements cannot be used to cover more than a single verse. Start a new `<span data-speaker="Jesus">` for <b>every</b> verse.</aside>

## Script-Specific Data Attributes

<aside class="caution">The following sections on *Parsing Context* and *Do Not Parse* are specifically for use with the `toolkit` script `percival`. They don't have any purpose beyond that, and can be removed after `percival` has been run.
</aside>

### Parsing Context

Parsing data attributes inform `percival` of the general portion of scripture being discussed. Frequently, authors will not use complete book-chapter-verse references, and though percival does a pretty decent job figuring out context on its own, adding parsing tags can help it make fewer mistakes and produce fewer no-context Scripture tags.

Scripture parsing context is identified by the `data-parsing` attribute, and its value is an OSIS _of type b or b.c only_.

A `<span>` tag may be used in places where an `<hr>` is not appropriate.

```html
<hr data-parsing="Gen.1" />
<!-- OR -->
<span data-parsing="Gen.1"></span>
```

<aside class="warning">There is a bug in `percival` where parsing tags with only a 'book' value which begin with a number, such as '1Chr' or '2Cor' will not work. For any 'book' value with begins with a number, a 'chapter' must also be given, e.g. '1Sam.1'</aside>

### Do Not Parse

To indicate that a specific portion of text should not be parsed as Scripture, use `data-parsing` along with an empty value. Remember to use with a `<span>` element, rather than `<hr>`.

```html
<span data-parsing=""></span>123:4<span data-parsing="Gen"></span>
```

<aside class="warning">Important: After using an empty parsing attribute in this way, always restore context with a normal parsing context tag, as shown above.</aside>

<hr />

