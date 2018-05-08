---
title: CSS Formatting Rules
---

## Block Content Indentation

Indent all declarations to reflect hierarchy and improve understanding.

```css
body {
  background: #fff;
  color: #444;
}
```

## Declaration Order

Prefer alphabetical order in each declaration block.

## Declaration Stops

End every declaration with a semicolon for consistency and extensibility reasons.

```css
.test {
  display: block;
  height: 100px;
}
```

## Property Name Stops

Always use a single space between property and value (but no space between property and colon) for consistency reasons.

```css
h3 {
  font-weight: bold;
}
```

## Declaration Block Separation

Always use a single space between the last selector and the opening brace that begins the declaration block.

The opening brace should be on the same line as the last selector in a given rule.

```css
video {
  margin-top: 1em;
}
```

## Selector and Declaration Separation

Always start a new line for each selector and declaration.

```css
/* Recommended */
h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.2;
}

/* Not Recommended */
h1,h2,h3{font-weight:300;line-height:1.2;}

h1,h2,h3 {
  font-weight:300;line-height:1.2;
}
```

## Rule Separation

Always put a blank line (two line breaks) between rules.

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```