---
title: CSS Style Rules
---

## Default Stylesheets

<aside class="notice">Access the latest versions of our team's [default stylesheets](https://github.com/bhdirect-ebooks/epub-container/tree/master/OEBPS/styles) on GitHub.</aside>

Use the provided "mywsb-dev.css" stylesheet.

## Styling Content

Your goal is not to recreate the printed version of a publication. Rather, your goal is a clean, well-formed, and usable digital product. Therefore, avoid adjusting styles wherever possible.

The inclusion of the [Tachyons framework](http://tachyons.io/) in our stylesheet allows you to adjust content formatting as needed without having to write CSS. Consult the [CSS Library](../css_lib/) for more information.

Avoid adding writing CSS unless absolutely necessary.

## CSS Validity

Use valid CSS. Using valid CSS is a measurable baseline quality attribute that ensures proper CSS usage and team consistency.

## Type Selectors

Avoid qualifying ID and class names with type selectors. Avoiding unnecessary ancestor selectors is useful for performance reasons.

It is also bad practice to use IDs as selectors in your CSS files.

```css
/* Recommended */
.example {}
.another {}
.and-another {}

/* Not Recommended */
ul#example {}
div.another {}
#and-another {}
```

## Attribute Selectors

In contrast to the above section, using types with <em>attribute</em> selectors <em>is</em> good practice because unqualified attribute selectors are known to be slow.

Therefore, always qualify attribute selectors with types.

<aside class="caution">If you need to use an epub:type attribute selector, make sure to use both versions seen in the example markup, one using the vertical pipe, "|", and one using an escaped colon, "\\:". (The vertical pipe is for XML parsing, and the escaped colon is for HTML parsing.)</aside>

```css
/* Recommended */
figure[data-tour*=illustration] {}

/* For epub:type, always use both versions seen below */
p[epub\:type~=bridgehead] {}
p[epub|type~=bridgehead] {}

/* Not Recommended */
[data-scripture] {}
```

## Shorthand Properties

Use shorthand properties where possible.

CSS offers a variety of shorthand properties (like <code>font</code>) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.

_Note that in the following snippet, the two declaration blocks set the same properties!_

```css
/* Recommended */
.classy-class {
  border: 1px 0 0 0;
  font: normal bold 100%/1.6 "Palatino", "Georgia", serif;
  padding: 0 1em 2em 1em;
}


/* Not Recommended */
.freshnewstyle {
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 100%;
  line-height: 1.6;
  font-family: "Palatino", "Georgia", serif;
  padding-top: 0;
  padding-right: 1em;
  padding-bottom: 2em;
  padding-left: 1em;
}
```

## 0 and Units

Omit unit specification after "0" values.

Do not use units after 0 values unless they are required.

```css
/* Recommended */
.zeros {
  margin: 0;
  padding: 0;
}

/* Not Recommended */
.units {
  margin: 0em;
  padding: 0px;
}
```

## Leading 0s

Include leading 0s in decimal values for readability.

```css
/* Recommended */
.small {
  font-size: 0.8em;
}

/* Not Recommended */
.ewww {
  font-size: .8em;
}
```

## Hexadecimal Notation

Use 3 character hexadecimal notation where possible.

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.

```css
/* Recommended */
.shorty {
  color: #ebc;
}

/* Not Recommended */
.stooge {
  color: #eebbcc;
}
```

## CSS Font Declarations
Any font added to the `font` directory should be referenced in the CSS.
```css
@font-face {
  font-family: 'Adobe Garamond Pro';
  font-style: normal;
  font-weight: normal;
  src: url('../font/AGaramondPro-Regular.otf') format('opentype');
}
```
When exporting from Indesign, the format is not included and should be added.
```
Find:
	(?<=\.otf"\));$
	
Replace:
	format('opentype');
```
<aside class="notice">When using a TrueType font, the format should be 'truetype'</aside>

If a font comes in italic it should be included with a font style of `italic` and `oblique`:
```css
@font-face {
  font-family: 'Adobe Garamond Pro';
  font-style: italic;
  font-weight: normal;
  src: url('../font/AGaramondPro-Italic.otf') format('opentype');
}
@font-face {
  font-family: 'Adobe Garamond Pro';
  font-style: oblique;
  font-weight: normal;
  src: url('../font/AGaramondPro-Italic.otf') format('opentype');
}
```