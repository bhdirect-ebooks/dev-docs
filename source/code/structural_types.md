---
title: Structural Types
---
## Cover Image
eISBN.jpg or any cover in the image directory should be renamed Cover.jpg. The following adjustments can be performed in any advanced image editor, but Photoshop is our current standard. 

### Width
Cover.jpg should have a width of `1600px`, unless the total aspect ratio exceeds 4 million pixels. The image size can be changed in Photoshop by selecting `Image->Image Size`. If it does exceed 4 mil then adjust the width in increments of `20px` and test.

### Extension
Cover.jpg should use the file extension .jpg **not** .jpeg.

### Color Space
The cover image should be in an RGB format.
You can check an image's color space by selecting `Image->Mode`. The output should say `RGB`. If the output is `Grayscale` `Indexed Color` or anything else it should be converted to `RGB`.

## Title Page
### Half Title Page
Half title pages should always be removed and should never be added to an ePub. Exception to this rule is if editorial has made the request, but push-back is encouraged as it is redundant and customers have complained.

### Full Title Page
Sometimes the title page can be built with text but for best results the title page should be exported from InDesign as a PNG and placed in the frontmatter as a [full page image](/css_lib/figures.html#Full-Page-Image).

#### Export Title Page Image from InDesign
In InDesign, choose `File->Export`. From the `Format` dropdown select `PNG` and then click `Save`. Then apply these settings:

![Export PNG](/assets/images/title-page-export.png)

- **Range**: The page number
- **Page**: Page should be selected
- **Image**: Desired image settings

#### **Note About Title Page Image Transparency
It's common for the title page to have transparency and this should be removed because there will be rendering issues with the image in color modes, biggest issue can be found in **iBook's Black Mode**. Transparency will be removed if you deselect the transparency option in the export process described above.

#### Adjust Title Page Image Width in Photoshop
Open the exported Title Page in Photoshop. All title pages should have a width of `1000px` if the title is a reflowable ePub. To adjust the Title Page size, select `Image->Image Size` and set the width to 1000px. 

#### Title Page Code Sample
<iframe height="500" style="width: 100%;" scrolling="no" title="title page " src="https://codepen.io/bhdirect/embed/a13ade81164f9d9dbf040044d2afb497?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bhdirect/pen/a13ade81164f9d9dbf040044d2afb497'>title page </a> by BH Direct
  (<a href='https://codepen.io/bhdirect'>@bhdirect</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Copyright Page
The copyright page should be the third frontmatter document.


## Headings
Heading tags reflect a hierarchy and should therefore be used for semantic (not stylistic) purposes. _Only the chapter title, part title, or frontmatter/backmatter section title should be tagged using `<h1>`._ The next lower level heading tag would be `<h2>`, then `<h3>`, etc.

_**It is important to understand the concept of the HTML document outline**_ [See the spec](http://w3c.github.io/html/sections.html#outline). Always think of headings in terms of the document outline.

Since headings create an outline, heading tags should not be used for subheadings ([See the spec](http://w3c.github.io/html/sections.html#headings-and-sections)).

For any headings that should not be included in the document outline (usually in `aside` elements), use `<p epub:type="bridgehead"></p>`. Also acceptable: `<p>` with `.h1sub`, `.h2sub`, or `.h3sub`.

### Script-Specific Markup
<aside class="caution">The following sections on <strong>Chapter Titles, Labels, and Numbers</strong>; <strong>Parts</strong>; and <strong>Sub-Parts</strong> are only necessary for the proper operation of the `toolkit` scripts `buildtoc` and `stylecheck`. These guidelines need not be followed if the developer does not intend to use those tools</aside>

#### Chapter Titles, Labels, and Numbers

As mentioned above, chapter titles should always be tagged as `<h1>` elements.

When a chapter has a label of some kind (e.g., "Chapter 1", "1", "A" "IV", etc.) <strong>and</strong> also has a title, there is a special class to use. Follow the recommended code examples, using the `.label` class.

**Do the same for any Section or Part title.**

```html
<!-- Chapter titled simply "Chapter 1" -->
<h1>Chapter 1</h1> <!-- Don't use .label when the label *is* the title -->

<!-- Chapter titled "Chapter 1: How We Got the New Testament" -->
<h1><span class="label">Chapter 1</span>How We Got the New Testament</h1>

<!-- Part titled "1. What Is Theology?" -->
<h1><span class="label">1</span>What Is Theology?</h1>

<!-- Section titled "Section 1: Introduction to the Study of the Bible -->
<h1><span class="label">Section 1</span>Introduction to the Study of the Bible</h1>
```

#### Parts

Whenever a book has a part structure (hierarchical groupings of related chapters), at least one special class (`.top-level`) should be used with _any `<h1>` element in front, back, or body that does not belong in a part_.

##### `.top-level` Example
<p>Let's imagine we have a book with the following structure. <strong>The bolded sections should have the `.top-level` class on their `&#60;h1&#62;` elements.</strong></p>
<ul style="list-style-type:none">
    <li><strong>Preface</strong></li>
    <li><strong>Introduction</strong></li>
    <li>Part 1
        <ul style="list-style-type:none">
            <li>Chapter 1</li>
            <li>Chapter 2</li>
        </ul>
    </li>
    <li><strong>Interlude</strong></li>
    <li>Part 2
        <ul style="list-style-type:none">
            <li>Chapter 3</li>
            <li>Chapter 4</li>
        </ul>
    </li>
    <li><strong>Conclusion</strong></li>
    <li><strong>Index</strong></li>
</ul>
<p>More specifically, the <code>&#60;section epub:type=""&#62;</code> and <code>&#60;h1&#62;</code> conventions would be like so:</p>
<table>
    <tr>
        <th>Book Section</th>
        <th>Section Epub Type</th>
        <th>h1</th>
    </tr>
    <tr>
        <td>Preface</td>
        <td><code>preface</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Preface&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Introduction</td>
        <td><code>introduction</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Introduction&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part 1</td>
        <td><code>part</code></td>
        <td><code>&#60;h1&#62;Part 1&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 1</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 1&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 2</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 2&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Interlude</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Interlude&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part 2</td>
        <td><code>part</code></td>
        <td><code>&#60;h1&#62;Part 2&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 3</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 3&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 4</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 4&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Conclusion</td>
        <td><code>conclusion</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Conclusion&#60/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Index</td>
        <td><code>index</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Index&#60/h1&#62;</code></td>
    </tr>
</table>

##### Sub-Parts

When there are parts that consist of sub-parts, the special classes `.part-1`, `.part-2`, `.part-3`, `.part-4`, `.part-5`, and `.part-6` exist to help you represent the book's structural hierarchy.

_**Note that the numbers 1-6 here indicate hierarchy level, not sequential order!**_ ([Just like h1-6 tags.](http://w3c.github.io/html/sections.html#outline))

###### Sub-Parts Example
<p>Let's imagine we have a book with the following structure.</p>
<ul style="list-style-type:none">
    <li>Preface</li>
    <li>Introduction</li>
    <li>Part A
        <ul style="list-style-type:none">
            <li>Part A-1
                <ul style="list-style-type:none">
                    <li>Chapter 1</li>
                    <li>Chapter 2</li>
                </ul>
            </li>
            <li>Part A-2
                <ul style="list-style-type:none">
                    <li>Chapter 3</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Interlude</li>
    <li>Part B
        <ul style="list-style-type:none">
            <li>Chapter 4</li>
            <li>Chapter 5</li>
        </ul>
    </li>
    <li>Conclusion</li>
    <li>Index</li>
</ul>
<p>In this case, the <code>&#60;section epub:type=""&#62;</code> and <code>&#60;h1&#62;</code> conventions would be like so:</p>
<table>
    <tr>
        <th>Book Section</th>
        <th>Section Epub Type</th>
        <th>h1</th>
    </tr>
    <tr>
        <td>Preface</td>
        <td><code>preface</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Preface&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Introduction</td>
        <td><code>introduction</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Introduction&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part A</td>
        <td><code>part</code></td>
        <td><code>&#60;h1 class="part-1"&#62;Part A&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part A-1</td>
        <td><code>part</code></td>
        <td><code>&#60;h1 class="part-2"&#62;Part A-1&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 1</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 1&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 2</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 2&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part A-2</td>
        <td><code>part</code></td>
        <td><code>&#60;h1 class="part-2"&#62;Part A-2&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 3</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 3&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Interlude</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Interlude&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Part B</td>
        <td><code>part</code></td>
        <td><code>&#60;h1 class="part-1"&#62;Part B&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 4</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 4&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Chapter 5</td>
        <td><code>chapter</code></td>
        <td><code>&#60;h1&#62;Chapter 5&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Conclusion</td>
        <td><code>conclusion</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Conclusion&#60;/h1&#62;</code></td>
    </tr>
    <tr>
        <td>Index</td>
        <td><code>index</code></td>
        <td><code>&#60;h1 class="top-level"&#62;Index&#60;/h1&#62;</code></td>
    </tr>
</table>

## Page Breaks
Pages should be marked with an `<a>` element and the EPUB `pagebreak` type.
```html
<span epub:type="pagebreak" id="pageX" title="X"></span>
```
EPUB `pagebreak` tags are inserted before all of the text on the corresponding source page, and for our team, they must follow these guidelines:
* not in `h1-6` but above
* not breaking Scripture references
* not as direct children of `<ol>`, `<ul>`, `<dl>`, or `<table>` (HTML syntax rules)
```html
<!-- Above headings -->
<a epub:type="pagebreak" id="page123" title="123"></a>
<h1>My Heading</h1>
```
<aside class="notice">If a page break is the first or last element in a `<p>` tag, it should be moved to outside the `<p>` tag and placed on its own line.</aside>

## Notes
Footnotes, rearnotes or any kind of notes found in content **must** back link regardless if they exist in the same file or another file as this is a channel requirement.
The corresponding note content should be placed in an `epub:type="footnotes"` section, either in a `<footer>` in each chapter file or in a `backmatter` file.
File names must always be included in the `href` attributes of both the footnote link and backlink, even for `<footer>`-based footnotes.
```html
Note indicator:
	<a id="endnote-backlink-2-1" href="SC03_backmatter01.xhtml#endnote-2-1" class="superscript">1</a>

Note (in backmatter):
	<p class="note"><a href="SC02_chapter02.xhtml#endnote-backlink-2-1">1.</a> Note content ... </p>
```

## Indexes

See the [Indexes](indexes.html) section.

## Bibliographies

Each bibliography in the work should be tagged with `<section>` and the appropriate EPUB `bibliography` type. <em>If a bibliography appears after the final chapter, it should be placed in a</em> `backmatter` <em>document</em>. 

Keep in mind that true bibliographies contain <b>only sources that were actually used/cited</b> in the work. Therefore the bibliography-specific `epub:type` attributes should not be used for 'recommended reading'-type lists.

Each entry in a bibliography should be tagged with `<p epub:type="biblioentry" class="hang">`.

```html
<!-- Separate file, in <body> -->
<section epub:type="bibliography">
  <h1>Bibliography</h1>
  <p epub:type="biblioentry" class="hang">Entry text.</p>
  <!-- One <p epub:type="biblioentry" class="hang"> for every entry -->
</section>

<!-- With chapter, inside the chapter <section>-->
<section epub:type="bibliography">
  <!-- the heading here is not always <h2> -->
  <!-- it should instead follow the document outline -->
  <h2>Bibliography</h2>
  <p epub:type="biblioentry" class="hang">Entry text.</p>
  <!-- One <p epub:type="biblioentry" class="hang"> for every entry -->
</section>
```

## Abbreviations and Glossaries

Glossaries and abbreviation sections should receive the `glossary` EPUB type.

Glossary terms must be nested in a `<dl>` element and tagged according to the recommendations here.

```html
<section epub:type="glossary">
  <!-- <dl> must be a child of <section epub:type="glossary"> -->
  <dl>
    <!-- The <dt> tag receives "glossterm" -->
    <dt epub:type="glossterm">
      <!-- The term or abbreviation itself must be tagged with <dfn> -->
      <dfn>The term</dfn>
    </dt>
    <!-- The definition/full term is tagged with <dd> and "glossdef" -->
    <dd epub:type="glossdef">The definition</dd>
    <!-- etc., for each term -->
  </dl>
</section>
```

### Sub-sections

Since the only allowable children of `<dl>` are `<dt>` and `<dd>`, headings and page numbers should be children of the `glossary` section.

This means that any pagebreaks and headings must be outside of the `<dl>` element. Simply use separate `<dl>` elements as shown in the example.

```html
<!-- Separate sections and page break examples -->
<section epub:type="glossary">
  <span epub:type="pagebreak" id="pagexv" title="xv"></span>
  <h1>Abbreviations</h1>
  <h2>Periodicals, Reference Works, and Serials</h2>
  <dl class="abbr-list">
    <dt epub:type="glossterm">
      <dfn>AB</dfn>
    </dt>
    <dd epub:type="glossdef">Anchor Bible</dd>
    <!-- etc. -->
  </dl>

  <span epub:type="pagebreak" id="pagexvi" title="xvi"></span>
  <h2>Ancient Works</h2>
  <h3>Pseudepigraphical Books</h3>
  <dl class="abbr-list">
    <dt epub:type="glossterm">
      <dfn><span class="italic">Apoc. Abr.</span></dfn>
    </dt>
    <dd epub:type="glossdef"><span class="italic">Apocalypse of Abraham</span></dd>
    <!-- etc. -->
  </dl>
</section>
```

### Abbreviation Lists

Abbreviation lists should appear wherever they appear in the content, and the only additional requirement beyond the standard EPUB and HTML markup is that the `<dl>` element receive `class="abbr-list"`. This simply applies different styling to abbreviation lists than to actual glossaries.

```html
<section epub:type="glossary">
  <h1>Abbreviations</h1>
  <dl class="abbr-list">
```

### Abbreviation Terms

Abbreviation terms must also be tagged throughout the content and should follow the HTML specification. See [Abbreviations](general_types.html#Abbreviations).

```html
<abbr title="Abbreviation Definition">ABBRD</abbr>
```

### Actual Glossaries

Actual glossaries (not abbreviation sections) should also appear wherever they appear in the content, and they must each have a unique `<id>` on the `<dt>` element, like `<dt id="glossterm-1" epub:type="glossterm">`.

Corresponding terms in the content documents are to be linked to the glossary according to the recommended code in the documentation below.

### Glossary Links

Glossary terms appearing in the work are to be linked to the glossary document using `<a>` with `epub:type="noteref`.

```html
<a epub:type="noteref" href="[filename]_glossary.xhtml#glossterm-376">Old Testament</a>
```
