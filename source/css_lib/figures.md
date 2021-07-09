---
title: Figures and Images
---

## Tags

* `<figure>`
* `<figcaption>`
* `<img>`

## Classes

**For use with `<figure>` or `<div>` only**
* `.full-width`
* `.float-left`
* `.float-right`

<p data-height="1404" data-theme-id="28900" data-slug-hash="37f4d760d183c4ff482dfb0b54c4625a" data-default-tab="html,result" data-user="bhdirect" data-embed-version="2" data-pen-title="Figures" class="codepen">See the Pen <a href="https://codepen.io/bhdirect/pen/37f4d760d183c4ff482dfb0b54c4625a/">Figures</a> by BH Direct (<a href="https://codepen.io/bhdirect">@bhdirect</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Full Page Image
If full page images in content are found they should follow the flow of content and if the image comes in between a paragraph it should be moved to the closest `<p>` depending on how placement falls.
<aside class="notice">If an ePub has a print edition then a pagebreak must exist before and after.</aside>

### Full Page Image HTML
```html
<a epub:type="pagebreak" id="page123" title="123"></a>
<div id="img123" class="fullpage">
  <img src="../img/page123.png" alt="foo bar" />
</div>
<a epub:type="pagebreak" id="page124" title="124"></a>
```

### Full Page Image CSS
CSS used for the title page can also be used:
```css
.fullpage {
  width: 100%;
  text-align: center;
  page-break-inside: avoid !important;
  page-break-after: always !important;
}
.fullpage img {
  display: inline-block;
  width: 100%;
  margin: 0 auto;
}
```

### Full Page Image Code Example
<iframe height="750" style="width: 100%;" scrolling="no" title="fullpage image" src="https://codepen.io/bhdirect/embed/059416ea1e4cf94e4750736805add430?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bhdirect/pen/059416ea1e4cf94e4750736805add430'>fullpage image</a> by BH Direct
  (<a href='https://codepen.io/bhdirect'>@bhdirect</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>