title: HTML Formatting Rules
---

## General Formatting

Use a new line for every block, list, or table element, and indent every such child element.

```html
<blockquote>
  <p><span class="italic">Space</span>, the final frontier.</p>
</blockquote>

<table>
  <tr>
    <th>Income</th>
    <th>Taxes</th>
  </tr>
  <tr>
    <td>$ 5.00</td>
    <td>$ 4.50</td>
  </tr>
</table>
```

## Block Elements

The rules above reference block elements as opposed to inline elements. Technically, the HTML5 specification no longer distinguishes elements by "block" or "inline" since the display property can be changed with CSS. However, browsers and reading systems have default stylesheets that generally set block and inline display properties according to past HTML specifications. Therefore, for reference on what constitutes a block element, see the MDN article, [Block-level Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).

## HTML Quotation Marks

When quoting attributes values, use double quotation marks.

<em>Exception</em>: when a serialized JSON object is used as an attribute value, use single quotes to prevent malformed code.

```html
<!-- Recommended -->
<p class="oh-yeah">...</p>

<hr data-context='{"scripture":"Gen.1.1"}' />

<!-- Not Recommended -->
<p class='nope'>...</p>
```