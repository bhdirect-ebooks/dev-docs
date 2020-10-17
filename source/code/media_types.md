---
title: Media Types
---
## Images

Images that serve a figural purpose in the content should be included according to XHTML specifications, using the `<figure>` element.

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

## Videos

### Embedded Videos

Add videos by using the `<video>` element. Each video must have a corresponding SVG as the `poster` and two transcoded source files located in **OEBPS/videos/** of the ePub: an MP4 and a WEBM file as a fallback. [How to transcode videos.](https://github.com/bhdirect-ebooks/transcode-video/blob/main/README.md) Below is an example of how the video should appear in the HTML file.

```html
<video poster="../images/everyday-theology-003.svg" controls="controls" preload="none">
  <source src="../videos/everyday-theology-003.mp4" type="video/mp4" />
  <source src="../videos/everyday-theology-003.webm" type="video/webm" />
</video>
```

[This SVG template](https://drive.google.com/file/d/1zB15OlTyGdrKX_L42XjTBSeQJ2TzHK2M/view?usp=sharing) can be used and modified to include the title of the video.

The content.opf should also include a manifest entry for each video file.

```html
<!-- Videos -->
<item href="videos/AmerHist2-001.mp4" id="AmerHist2-001mp4" media-type="video/mp4" />
<item href="videos/AmerHist2-001.webm" id="AmerHist2-001webm" media-type="video/webm" />
```

Each XHTML file that includes a video svg poster [may](https://www.w3.org/publishing/epub3/epub-packages.html#sec-svg) have the `svg` property included in the manifest entry for that file.

```html
<item id="AmerHist202_body01_chapter01" href="text/AmerHist202_body01_chapter01.xhtml" media-type="application/xhtml+xml" properties="svg" />
```

### Linked Videos

Linked Videos can be used in places where an embedded video is impractical, such as within footnotes or glossary definitions.

The link can be either text, or an image (icon):

```html
<!-- Worded link -->
<a href="../videos/everyday-theology-045.xhtml#video-045">Video on Adoption</a>

<!-- Icon link -->
<a href="../videos/everyday-theology-045.xhtml#video-045"><img alt="Play Video" src="../images/video.png" /></a>
```

This is our standard video icon: ![video.png icon](/assets/images/uploads/video.png) Right-click and "Save Image As..." to download and use it in your book.

For Linked videos, the video markup must be placed in individual XHTML files (one per video) in the **OEBPS/videos/** folder.

![XHTML files in OEBPS/videos folder](/assets/images/uploads/videos-folder.png)

For consistency, the XHTML file name should be the same as the MP4 and WEBM file names (which, in turn, should be the same as the SVG file name).

The differences in the markup from [Embedded Videos](#Embedded-Videos) are:
- the addition of an `id` attribute to the `video` element for linking to from the text. (Each `id` value must be unique.)
- changes in the source path to the video files, since they're in the same folder as the xhtml file in this case

Here is an example video file:

```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
  <head>
    <title>Everyday Theology</title>
    <link href="../styles/mywsb-dev.css" rel="stylesheet" type="text/css" />

  </head>
  <body epub:type="learning-resource">
    <video poster="../images/everyday-theology-045.svg" controls="controls" preload="none" id="video-045">
      <source src="everyday-theology-045.mp4" type="video/mp4" />
      <source src="everyday-theology-045.webm" type="video/webm" />
    </video>
  </body>
</html>
```

Manifest entries for these XHTML files in content.opf [may](https://www.w3.org/publishing/epub3/epub-packages.html#sec-svg) include the `svg` property.

### Audio Files

Add audio files by using the `audio` element. Each audio file should be located in **OEBPS/audio/**. Below is an example of how the audio file should appear in the HTML file.

```html
<div class="center">
  <audio class="w-100 w-50-ns" controls="controls" src="../audio/superheroes-cant-save-you-05.mp3" >
  <p>Sorry, it appears your system does not support audio playback.</p>
  </audio>
</div>
```

The content.opf should also include a manifest entry for each audio file.

```html
<!-- Audio -->
<item id="superheroes-cant-save-you-01mp3" href="audio/superheroes-cant-save-you-01.mp3" media-type="audio/mp3" />
```

