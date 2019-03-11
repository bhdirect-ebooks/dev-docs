---
title: Media Types
---
## Images

Images that do not serve a figural purpose in the content should be included according to XHTML specifications. **Purely decorative glyphs and line images should be excluded from the EPUBs we develop.**

For all other images use `<figure>`.

There are three placement options for figures: left, right, and full-width centered. Use the provided classes `float-left`, `float-right`, and `full-width` on the `<figure>` element.

```html
<figure class="full-width">
  <img alt="" src="../images/trinity.jpg" />
  <figcaption>The Trinity</figcaption>
</figure>

<figure class="float-right">
  <img alt="" src="../images/jerusalem.jpg" />
  <figcaption>Jerusalem in the Time of Christ</figcaption>
</figure>
```

Since an `alt` value would be redundant when a `figcaption` is present, you may leave it blank. (Refer to [Multimedia Fallback](html_style.html#Multimedia-Fallback) for `alt` guidelines.)

<br />

~~<hr />~~

The **tachyons** CSS stylings can be very helpful in controlling images. A few examples:

In the following example, width 'w-80-ns' will keep the width at 80% and make sure that it reverts to it's original size in a smaller screen (the '-ns' part). \
\
`<figure class="full-width w-80-ns">`\
`<img alt="" src="../images/trinity.jpg" />`\
`<figcaption>The Trinity</figcaption>`\
`</figure>`

<hr />

## Videos

### Embedded Videos

Included by using the `<video>` element, each video must have a corresponding SVG as the `poster` and two transcoded source files located in the epub-remote-resources s3 bucket: an MP4 and a WEBM file as a fallback.

```html
<video poster="../images/everyday-theology-003.svg" controls="controls" preload="none">
  <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.mp4" type="video/mp4" />
  <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.webm" type="video/webm" />
</video>
```

### Linked Videos

For Linked videos, including all glossary and notes videos, the video markup must be placed in individual XHTML documents (one per video) in a video folder.

Make sure each video has a unique `id` in order to link from the text.

For consistency, the XHTML file name should be the same as the MP4 and WEBM file names (which, in turn, should be the same as the SVG file name).

_**Note the differences below for non-glossaries vs. glossaries.**_

```html
<!-- Link from non-glossary file -->
<a href="../videos/everyday-theology-123.xhtml">Watch the interview with Soandso.</a>

<!-- Link from a glossary file -->
<dd epub:type="glossdef">
  <a class="video-glyph" href="../videos/everyday-theology-123.xhtml"></a>
  <p>A view of the millennium that...</p>
</dd>
```
