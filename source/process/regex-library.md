---
title: Regex Library
---
<details close>

<summary>Prep</summary>

* **extract text**: in the Find window, choose <mark>'Extract'</mark> to pull contents from a file or project.<br>F: `<body(?msi)(.*?)</body>`

</details>

<br>

<details open>

<summary>Clean and Code</summary>

<br>

<details close>

<summary>Languages and Apparatus Symbols</summary>

* **lang-hbo: **Find instances of Hebrew.<br>F: `(([ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇאבגדהוזחטיךכלםמןנסעףפץצקרשתװױײ׳״]+-? ?)+)`
* **lang-grc: **Find instances of Greek.<br>F: `([\p{Greek}][\p{Greek} ́¨ˆ̂˘̆̑̃ˋ̔̓ ͂.,’“;]+\b)`
* **Apparatus Symbols: **Find apparatus symbols.<br>F: `([ℵ]|&#x(?:2135;|E(?:00[021];|5(?:0[45E6FA];|1[034679];))))`
* **Check Lang:** Find special lang characters.<br>F: `<span class="([^"]+)">([^A-Z][^<]*[āåâêëėèēîīôöòōûüū][^<]*)</span>`
* **Extract Lang: **Choose <mark>'Extract'</mark> to create a list of italicized words. Use this list to look for untagged `lang` or `translit`.<br>F: `<span class="(italic|i)">([^<]*)</span>`

</details>

<details close>

<summary>Page Breaks and Paragraphs</summary>

* **Pagebreak breaking words: **Find pagebreaks that are in between words.<br>F: `([a-z]+)-\s*(<span epub:type="pagebreak" id="[^"]*" title="[^"]*"></span>)`<br>R: `\2 \1`
* **Pagebreak with no space: **Find page breaks that have no space on either side.<br>F: `(\w+<span epub:type="pagebreak" id="[^"]*" title="[^"]*"></span>)(\w+)`<br>R: `\1 \2`
* **Pagebreak begin line space: **Find a pagebreak that has a space at the beginning of a line<br>F: `(<[^>]*><span epub:type="pagebreak"[^>]*></span>)\s`<br>R: `\1`
* **Find broken paragraphs (1): **Find potential broken paragraphs<br>F: `([^\.|!|”|?|"|>|)|:])</p>\s*<p[^>]*>\s*(<span epub:type="pagebreak" id="page.+?" title="[^>]*></span>)`<br>R: `\1 \2`
* **Find broken paragraphs (2): **Find potential broken paragraphs<br>F: `<p([^>]*)>\s*(<span epub:type="pagebreak" id="page.+?" title="[^>]*></span>)([a-z]+)`<br>! Case sensitive

</details>

<details close>

<summary>Scriptext</summary>

* **Scriptext Finder (1): **Find blockquotes that have `data-ref` tags in them. (<mark>Use _after_ running Percival</mark>)<br>F: `<blockquote>(\s*(<p[^>]*>.*?</p>\s*)*<p[^>]*>.*?(<a data-ref="[^"]*">[^<]*</a>.*?</p>\s*</blockquote>))`<br>R: `<blockquote class="scriptext">\1`
* **Scriptext Finder (2): **Find blockquotes that have a `data-ref` before it. (<mark>Use _after_ running Percival</mark>)<br>F: `(<a data-ref="[^"]*">([^<]*)</a>(:|.)</p>\s*)<blockquote>`<br>R: `\1<blockquote class="scriptext">`

</details>

<details close>

<summary>Spacing</summary>

* **No space between words: **Find and replace words with no space in between<br>F: `(<span class="(?!label)[^"]*">[^<]*</span>)(\w)`<br>R: `\1 \2`
* **No space between spans: **Find and replace span tags with no space in between<br>F: `(<span class="(?!label)[^"]*">[^<]*</span>)(<span class="(?!label)[^"]*">\w+[^<]*</span>)`<br>R:`\1 \2`
* **No space open parens: **Find and replace an opening parenthesis with no space before<br>F: `(\w</span>)(\()`<br>R: `\1 \2`
* **Begin span spacing:** Find spans lacking a space before<br> F: `([a-z]+)(<span)`<br>R: `\1 \2`
* **Space after first tag: **Find and replace opening tags with a space after<br>F: `<([^>])> (.*?)`<br>R: `<\1>\2`
* **Space before last tag:** Find and replace closing tags with a space before<br>F:  `</(p|td|h1|h2|h3)>`<br>R: `</\1>`
* **Dash spacing:** Find dashes with potential spacing issues<br>F: `(\s[^>/= ]*\s[-–][^</= ]*\s|\s[^>/= ]*[-–]\s[^</= ]*\s)`
* **Space after comma: **Find a comma with no space after<br>F: `,([^"’”'<0-9 —\)]+)`<br>R: `, \1`

</details>

<details close>

<summary>Spans</summary>

* **Span combine (1): **Find and replace to combine the content of spans with the same class<br>F: `<span class="([^"]*)">([^<]*)</span>(\s*)<span class="\1">([^<]*)</span>`<br>R: `<span class="\1">\2\3\4</span>`
* **Span combine (2): **Find and replace spans that can be combined into a single class<br>F: `<span class="([^"]*)"><span class="([^"]*)">([^<]*)</span></span>`<br>R: `<span class="\1 \2">\3</span>`
* **Remove spans from headings:** Find spans in headings that are potentially not needed<br>F: `(<h\d[^>]*>.*?)<span(\s*class="(?!label)[^"]*")*>([^<]*)</span>(.*?</h\d>)`<br>R: `\1\3\4`
* **Remove space within spans:** Find spans with a space inside<br>F: `<span class="([^"]+)"> ([^<]+)</span>`<br>R: `<span class="\1">\2</span>` (include the space _before_ the span)<br><br>F: `<span class="([^"]+)">([^<]+) </span>`<br>R: `<span class="\1">\2</span>` (include the space _after_ the span)
* **Move non-english chars in span:** Find and replace the class of a span containing non-english characters<br>F: `<span class="(italic|i)">([^a-zA-Z0-9\s]+)</span>`<br>R: `<span class="\1">\2</span>`
* **Remove unnecessary span:** Find spans around punctuation and replace without the span<br>F: `<span class="[^"]*">(‘|“|’|”|\.|\)|\(|\?|!|,)+</span>`<br>R: `\1`
* **Repeating spans:** Find and replace adjacent spans that repeat<br>F: `<span class="([^\n<>]+)">([^\n<>]+)</span><span class="\1">`<br>R: `<span class="\1">\2`

</details>

<details open>

<summary>Links</summary>

</details>

</details>

<br>

<details close>

<summary>Enhance</summary>

* `code`, description

</details>

<br>

<details close>

<summary>Review</summary>

* `code`, description

</details>
