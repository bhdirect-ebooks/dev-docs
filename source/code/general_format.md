title: General Formatting Rules
---

<aside class="notice">Style guide Adapted from <a target="_blank" href="https://google.github.io/styleguide/htmlcssguide.xml">Google HTML/CSS Style Guide</a></aside>

## Indentation

Indent using 2 spaces. Don't mix tabs and spaces for indentation.

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

```css
.example {
  color: #00f;
}
```

<aside class="tip">In BBEdit, set tab properties at Preferences --> Editor Defaults<ul><li>Make sure "Auto-expand tabs" is checked.</li><li>Set "Tab width" to 2.</li></aside>

## Capitalization

Use only lowercase.

This applies to XML and HTML element names, attributes, attribute values, CSS selectors, properties, and property values (with the exception of strings and case-sensitive XML element nodes).

```html
<!-- Not Recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google" />
```

```css
/* Not Recommended */
{ color: #E5E5E5; }

/* Recommended */
{ color: #e5e5e5; }
```

## Trailing Whitespace

Remove trailing white spaces.

```html
<!-- Not Recommended -->
<p>What?</p>__

<!-- Recommended -->
<p>Yes, please.</p>
```

<aside class="tip">In BBEdit, you can have trailing whitespace removed automatically when you save.<ul><li>In Preferences --> Text Files, make sure "Strip trailing whitespace" is checked.</li></ul></aside>

## Encoding

Use UTF-8 (no BOM).

For XHTML, XML, and OPF, specify the encoding within the XML declaration.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
```

<aside class="tip">Make sure BBEdit uses UTF-8 as character encoding for each document, without a byte order mark.</aside>