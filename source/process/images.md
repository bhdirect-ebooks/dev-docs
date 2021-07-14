---
title: Images
---

All images should be in a PNG format except for [the cover](/code/structural_types.html#Cover-Image). Transparent PNGs should not exist and should have a white background (fixed layout is an exception to transparency).

All images with a width exceeding `300px` should be resized to `1000px` unless the overall aspect ratio exceeds 4.5 million pixels then resize to `980px`. If an image has a width below the `900px` its advised to review the image for pixelation. If pixelation does exist ask editorial if they have a higher res image for replacement.

Vertical images used in the printed edition (maps for example) should be rotated 90 degrees so the text is readable and not sideways or rotated allowing the Legend readability to flow with the text.

## Image Directory
All images should be moved into an `img` directory. If an image director is named `images` or `image` it should be renamed to the shorthand `img`.

## Image PPI
Image resolution shouldn’t exceed 150ppi.

## Tag Structure
`<img>` tags should follow the coding structure:

```html
<img id="" class="" src="" alt="" />
```

## Image `alt` attributes
`alt` attributes should always be descriptive and never empty

## Image `<div>` tags
Images should be in a `<div>` tag not `<p>` tag unless the image is inline, 

## Image in toc.xhtml
If the image adds value to the content it should be referenced in the `epub:type="loi"` within the _toc.xhtml_ and the `id` can be applied to the `div`.
```html
<div id="img123" class="style">
  <img src="../img/page123.png" alt="First hit on softball field" />
</div>

Or:

<div class="style">
  <img id="foobar" src="../img/foobar.png" alt="Foo Bar" />
</div>
```

## Image Naming
If there is a print edition the image should be named to reflect that page. For example if there are 300 pages and the image is for page 10 name it _page010.png_ because this helps with scripting and produces a top-down reading order.
```html
<div id="img023" class="style">
  <img src="../img/page023.png" alt="First hit on softball field" />
</div>
```

If more than one image exists on a page then append a letter numerical value, example:

First Image:
```html
<div id="img023a" class="style">
  <img src="../img/page023a.png" alt="First hit during softball field" />
</div>
```

Second Image:
```html
<div id="img023b" class="style">
  <img src="../img/page023b.png" alt="First hit on second base" />
</div>
```

## Image Tools
Since images are used in several parts of an EPUB, it's helpful to have some tools in your toolbelt for editing and formatting.
<hr />

### Preview
<iframe width="560" height="315" src="https://www.youtube.com/embed/qgbxtUGzdL0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<hr />

### Photoshop
<iframe width="560" height="315" src="https://www.youtube.com/embed/mxQNYSx0hWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
