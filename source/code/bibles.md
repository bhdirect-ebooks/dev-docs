---
title: Bibles
---
## Bible File Naming
Follow different text file naming conventions for Bibles.
For the main Bible content, do not use "chapter" in the file names. Instead, use the book [OSIS](https://docs.google.com/a/lifeway.com/spreadsheets/d/1tgzQru2dVaDU-zhaSfym1UuaPh3_Aktq91iDz9L9JtY/edit?usp=sharing) and double- or triple-digit chapter number corresponding to the Bible chapter. _There must be one text file for every Bible chapter._
For example, the name of the file containing the Genesis 1 in the New International Version would be named:
* NIV02_body0001_Gen01.xhtml
For the book of Psalms, use three digits in the file name for chapter numbers. For example, Psalm 22 in the Christian Standard Bible would be named:
* CSB02_body0649_Ps022.xhtml
With front matter and back matter included, it would look something like:
* CSB01\_front01\_cover.xhtml
* CSB01\_front02\_titlepage.xhtml
* CSB01\_front03\_copyright-page.xhtml
* etc.
* CSB02_body0001_Gen01.xhtml
* CSB02_body0002_Gen02.xhtml
* CSB02_body0003_Gen03.xhtml
* etc.
* CSB02_body1081_Rev22.xhtml
* CSB03\_back01\_appendix.xhtml
* CSB03\_back02\_appendix.xhtml
* etc.

## Verse Numbers

It is traditional to surround verse numbers in our Bibles with a `span.versenum`

```html
<span class="versenum">16</span> For God loved the world in this way: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.
```
**mywsb.css** contains attractive styling for the `.versenum` class

## Bible Data Attributes

There are a few data attributes specific to Bibles which are required for Content Platform indexing.

<aside class="caution">The examples here show attribute values in our "development" book.chapter.verse (B.C.V) format, but Content Platform will need the values to be in "Scripture Fragement Identifier" (SFI) format. SFIs are similar to the EPUB <a href="http://idpf.org/epub/linking/cfi/epub-cfi.html">"Canonical Fragment Identifier" (CFI)</a> format. The <b>toolkit</b> script <b>convert-epub</b> will convert B.C.V values to SFI. If you're not planning to use <b>convert-epub</b>, you will need to use SFI values. The document <a href="https://docs.google.com/document/d/1pArlqjQIDvZkPX49alvX9KdU0Wq6qVXaznErP6mi_K0/edit?usp=sharing">HTML Markup for Enhancing EPUB Content</a> provides guidance on the format.</aside>

<aside class="note"><b>Convert-epub</b> is used in <code>npm run build</code>, <code>npm run publish</code>, <code>build-partial</code>, and <code>npm run publishpart</code></aside>

### Chapter Data Attributes

Each chapter requires a `data-scripture-chapter` attribute on the containing element (usually a `<section>`) with the value of the book and chapter:

```html
<body epub:type="bodymatter">
<section epub:type="chapter" data-scripture-chapter="Gen.1">
<h1 class="bookname">Genesis</h1>
<p class="h1">1</p>
<h2>The Creation</h2>
<!-- chapter content -->
</section>
</body>
```

### Verse Data Attributes

Every verse requires a `data-scripture-verse` attribute on an element which contains the entire verse. The value must indicate the book, chapter, and verse.

#### Verse contained within one element

Sometimes a single verse is contained within one element, in which case, the data attribute can be put on the containing element:

```html
<p data-scripture-verse="Gen.1.1"><span class="versenum">1</span> In the beginning God created the heavens and the earth.</p>
```

#### Multiple verses in the same element

Other times, when there are multiple verses in an element, a `<span>` with the data attribute can be used to surround each verse:

```html
<p><span data-scripture-verse="Gen.1.2"><span class="versenum">2</span> Now the earth was formless and empty, darkness covered the surface of the watery depths, and the Spirit of God was hovering over the surface of the waters.</span> <span data-scripture-verse="Gen.1.3"><span class="versenum">3</span> Then God said, “Let there be light,” and there was light.</span> <span data-scripture-verse="Gen.1.4"><span class="versenum">4</span> God saw that the light was good, and God separated the light from the darkness.</span> <span data-scripture-verse="Gen.1.5"><span class="versenum">5</span> God called the light “day,” and the darkness he called “night.” There was an evening, and there was a morning: one day.</span></p>
```

#### Verse spans multiple elements

Another scenario sees a verse spanning multiple elements. I those cases, a `<div>` can be added with the data attribute to surround all elements of the verse:

```html
<div class="di" data-scripture-verse="Ps.1.1">
<p class="poem1"><span class="versenum">1</span> How happy is the one who does not</p>
<p class="poem2">walk in the advice of the wicked</p>
<p class="poem1">or stand in the pathway with sinners</p>
<p class="poem2">or sit in the company of mockers!</p>
</div>
```

The `<div>` should be styled as `display: inline;` in order to prevent its presence from changing the way the paragraphs are rendered. A `.di` class has been used here to accomplish this.

#### Verse begins or ends part-way through an element.

Where things get a little trickier is when a verse begins or ends part-way through an element, or both. In such cases, it will be necessary to add one or more `<div>`s, and change where elements start and stop. Additionally it will be necessary to change the CSS `display` styling of certain elements to preserve proper rendering, while still having each verse contained within its own element.

##### Verse ends part-way through an element

Notice in this example how verse 23 ends part-way into the next paragraph.

![verse ends mid-paragraph](assets/images/uploads/verse-ends-mid-paragraph.png)

To accomplish this:

- divide the element containing the end of verse 23 at the beginning of the next verse.
- add a `display: inline;` styled `<div>` around verse 23
- style the last element in verse 23 with `display: inline-block;` (a `.dib` class here)
- style the first element of the next verse as `display: inline;` (`.di` class)

```html
<div class="di" data-scripture-verse="Matt.1.23">
<p class="ind1"><span class="versenum">23</span> <span class="b">See, the virgin will become pregnant</span></p>
<p class="b ind1">and give birth to a son,</p>
<p class="b ind1">and they will name him Immanuel,</p>
<p class="dib">which is translated “God is with us.”</p>
</div>
<p class="di" data-scripture-verse="Matt.1.24"><span class="versenum">24</span> When Joseph woke up, he did as the Lord’s angel had commanded him. He married her</p>
```

##### Verse begins part-way through an element

In this example, notice how verse 3 begins toward the end of the paragraph also containing verses 1 and 2.

![verse begins mid-paragraph](assets/images/uploads/verse-begins-mid-paragraph.png)

To achieve this rendering:

- divide the element containing the beginning of verse 3 between it and verse 2
- style the element containing verses 1, 2, and the beginning of 3 to be `display: inline` (`.di` class)
- add an empty `<p></p>` before the `display: inline` styled element in order to keep it from displaying inline with whatever comes before it.
- add a `<div>` with `display: inline;` styling surrounding all of verse 3.
- style the first element of verse 3 with `display: inline;` to keep it visually in the same "paragraph" as verses 1 and 2

```html
<p></p>
<p class="di"><span data-scripture-verse="Matt.3.1"><span class="versenum">1</span> In those days John the Baptist came, preaching in the wilderness of Judea</span> <span data-scripture-verse="Matt.3.2"><span class="versenum">2</span> and saying, “Repent, because the kingdom of heaven has come near!”</span></p>
<div class="di" data-scripture-verse="Matt.3.3">
<p class="di"><span class="versenum">3</span> For he is the one spoken of through the prophet Isaiah, who said:</p>
<p class="b ind1">A voice of one crying out in the wilderness:</p>
<p class="b ind1">Prepare the way for the Lord;</p>
<p class="b ind1">make his paths straight!</p>
</div>
```

##### Verse begins *and* ends part-way through elements

This final example shows the most complicated scenario. Notice how verse 9 begins toward the end of one paragraph, and ends in the middle of the next:

![verse begins and ends mid-paragraph](assets/images/uploads/verse-begins-and-ends-mid-paragraph.png)

To get this to render properly:

- divide the element containing the beginning of verse 9 between it and the verse before, then give both elements `display: inline;` styling
- add an empty `<p></p>` before the element containing verses prior to verse 9
- divide the element containing the ending of verse 9 between it and verse 10, and style both elements with `display: inline;`
- add an empty `<p></p>` before the last element of verse 9
- add a `<div>` with `display: inline;` styling surrounding all of verse 9

```html
<p></p>
<p class="di"><span data-scripture-verse="Matt.27.6"><span class="versenum">6</span> The chief priests took the silver and said, “It’s not permitted to put it into the temple treasury, since it is blood money.”</span> <span data-scripture-verse="Matt.27.7"><span class="versenum">7</span> They conferred together and bought the potter’s field with it as a burial place for foreigners.</span> <span data-scripture-verse="Matt.27.8"><span class="versenum">8</span> Therefore that field has been called “Field of Blood” to this day.</span></p>
<div class="di" data-scripture-verse="Matt.27.9">
<p class="di"><span class="versenum">9</span> Then what was spoken through the prophet Jeremiah was fulfilled:</p>
<p></p>
<p class="b di">They took the thirty pieces of silver, the price of him whose price was set by the Israelites,</p>
</div>
<p class="di" data-scripture-verse="Matt.27.10"><span class="versenum">10</span> <span class="b">and they gave them for the potter’s field, as the Lord directed me.</span></p>
```
