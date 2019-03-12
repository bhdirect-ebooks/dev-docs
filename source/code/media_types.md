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

The **tachyons** CSS stylings can be very helpful in controlling images. 

In the following example, width 'w-80-ns' will keep the width at 80% and make sure that it reverts to it's original size in a smaller screen, as `ns` means not small. 

```html
<figure class="full-width w-80-ns">
  <img alt="" src="../images/trinity.jpg" />
  <figcaption>The Trinity</figcaption>
</figure>
```

## Videos

### Embedded Videos

Add videos by using the `<video>` element. Each video must have a corresponding SVG as the `poster` and two transcoded source files located in the epub-remote-resources s3 bucket: an MP4 and a WEBM file as a fallback. [How to transcode videos.](https://docs.google.com/document/d/1XziFW_5nUWsNkPK7hblfeaXe1MDCpfRRuyPP-EmyoM0/edit) Below is an example of how the video should appear in the HTML file.

```html
<video poster="../images/everyday-theology-003.svg" controls="controls" preload="none">
  <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.mp4" type="video/mp4" />
  <source src="https://epub-remote-resources.mywsb.com/9781433651090/everyday-theology-003.webm" type="video/webm" />
</video>
```

[This SVG template](https://drive.google.com/file/d/1zB15OlTyGdrKX_L42XjTBSeQJ2TzHK2M/view?usp=sharing) can be used and modified to include the name of the current book.

The content.opf should also include a manifest entry for each video file.

```html
<!-- Videos -->
<item href="https://epub-remote-resources.mywsb.com/9781433644443/AmerHist2-001.mp4" id="AmerHist2-001_alt" media-type="video/mp4" />
<item href="https://epub-remote-resources.mywsb.com/9781433644443/AmerHist2-001.webm" id="AmerHist2-001" media-type="video/webm" />
```

Each HTML file that includes a video must have the `remote-resources` property included in the manifest entry for that file.

```html
<item id="AmerHist202_body01_chapter01" href="text/AmerHist202_body01_chapter01.xhtml" media-type="application/xhtml+xml" properties="remote-resources" />
```

### Linked Videos

For Linked videos, including all glossary and notes videos, the video markup must be placed in individual XHTML documents (one per video) in a video folder.

Make sure each video has a unique `id` in order to link from the text.

For consistency, the XHTML file name should be the same as the MP4 and WEBM file names (which, in turn, should be the same as the SVG file name).

**_Note the differences below for non-glossaries vs. glossaries._**

```html
<!-- Link from non-glossary file -->
<a href="../videos/everyday-theology-123.xhtml">Watch the interview with Soandso.</a>

<!-- Link from a glossary file -->
<dd epub:type="glossdef">
  <a class="video-glyph" href="../videos/everyday-theology-123.xhtml"></a>
  <p>A view of the millennium that...</p>
</dd>
```

### Audio Files

Add audio files by using the `audio` element. Each audio file should be located in the epub-remote-resources s3 bucket. [How to add audio files to the epub-remote-resources s3 bucket.](https://docs.google.com/document/d/1SFj9rJviWlo_Kxdk25TOaQnNKbr7373OC4r_iukFIKU/edit) Below is an example of how the audio file should appear in the HTML file.

```html
<div class="center">
  <audio class="w-100 w-50-ns" controls="controls" src="https://epub-remote-resources.mywsb.com/9781535942041/superheroes-cant-save-you-05.mp3" >
  <p>Sorry, it appears your system does not support audio playback.</p>
  </audio>
</div>
```

The content.opf should also include a manifest entry for each audio file.

```html
<!-- Audio -->
<item id="superheroes-cant-save-you-01.mp3" href="https://epub-remote-resources.mywsb.com/9781535942041/superheroes-cant-save-you-01.mp3" media-type="audio/mp3" />
```

Each HTML file that includes an audio file must have the `remote-resources` property included in the manifest entry for that file.

```html
<item id="SuperheroAudio02_body01_chapter01" href="text/SuperheroAudio02_body01_chapter01.xhtml" media-type="application/xhtml+xml" properties="remote-resources" />
```
