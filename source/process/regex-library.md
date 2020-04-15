---
title: Regex Library
---
<details close>

<summary>Prep</summary>

* **extract text**: in the Find window, choose <mark>'Extract'</mark> to pull contents from a file or project.<br>F: `<body(?msi)(.*?)</body>`
* **remove divs: **Find divs and replace with only the div content<br>F: `<div( class="[^"]+")?>((.|\s)*?)</div>`<br>R: `\2`

</details>

<br>

<details close>

<summary>Clean and Code</summary>

<br>

<details close>

<summary>Languages, Apparatus and Symbols</summary>

* **lang-hbo: **Find instances of Hebrew.<br>F: `(([ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇאבגדהוזחטיךכלםמןנסעףפץצקרשתװױײ׳״]+-? ?)+)`
* **lang-grc: **Find instances of Greek.<br>F: `([\p{Greek}][\p{Greek} ́¨ˆ̂˘̆̑̃ˋ̔̓ ͂.,’“;]+\b)`
* **apparatus symbols: **Find apparatus symbols.<br>F: `([ℵ]|&#x(?:2135;|E(?:00[021];|5(?:0[45E6FA];|1[034679];))))`
* **check lang:** Find special lang characters.<br>F: `<span class="([^"]+)">([^A-Z][^<]*[āåâêëėèēîīôöòōûüū][^<]*)</span>`
* **extract lang: **Choose <mark>'Extract'</mark> to create a list of italicized words. Use this list to look for untagged `lang` or `translit`.<br>F: `<span class="(italic|i)">([^<]*)</span>`
* **ampersands: **replace ampersands<br>F: `([^>])&`<br>R: `\1\&#38;`

</details>

<details close>

<summary>Page Breaks and Paragraphs</summary>

* **pagebreak breaking words: **Find pagebreaks that are in between words.<br>F: `([a-z]+)-\s*(<span epub:type="pagebreak" id="[^"]*" title="[^"]*"></span>)`<br>R: `\2 \1`
* **pagebreak with no space: **Find page breaks that have no space on either side.<br>F: `(\w+<span epub:type="pagebreak" id="[^"]*" title="[^"]*"></span>)(\w+)`<br>R: `\1 \2`
* **pagebreak begin line space: **Find a pagebreak that has a space at the beginning of a line<br>F: `(<[^>]*><span epub:type="pagebreak"[^>]*></span>)\s`<br>R: `\1`
* **find broken paragraphs (1): **Find potential broken paragraphs<br>F: `([^\.|!|”|?|"|>|)|:])</p>\s*<p[^>]*>\s*(<span epub:type="pagebreak" id="page.+?" title="[^>]*></span>)`<br>R: `\1 \2`
* **find broken paragraphs (2): **Find potential broken paragraphs<br>F: `<p([^>]*)>\s*(<span epub:type="pagebreak" id="page.+?" title="[^>]*></span>)([a-z]+)`<br>! Case sensitive

</details>

<details close>

<summary>Scriptext</summary>

* **scriptext finder (1): **Find blockquotes that have `data-ref` tags in them. (<mark>Use _after_ running Percival</mark>)<br>F: `<blockquote>(\s*(<p[^>]*>.*?</p>\s*)*<p[^>]*>.*?(<a data-ref="[^"]*">[^<]*</a>.*?</p>\s*</blockquote>))`<br>R: `<blockquote class="scriptext">\1`
* **scriptext finder (2): **Find blockquotes that have a `data-ref` before it. (<mark>Use _after_ running Percival</mark>)<br>F: `(<a data-ref="[^"]*">([^<]*)</a>(:|.)</p>\s*)<blockquote>`<br>R: `\1<blockquote class="scriptext">`

</details>

<details close>

<summary>Spacing</summary>

* **no space between words: **Find and replace words with no space in between<br>F: `(<span class="(?!label)[^"]*">[^<]*</span>)(\w)`<br>R: `\1 \2`
* **no space between spans: **Find and replace span tags with no space in between<br>F: `(<span class="(?!label)[^"]*">[^<]*</span>)(<span class="(?!label)[^"]*">\w+[^<]*</span>)`<br>R:`\1 \2`
* **no space open parens: **Find and replace an opening parenthesis with no space before<br>F: `(\w</span>)(\()`<br>R: `\1 \2`
* **begin span spacing:** Find spans lacking a space before<br> F: `([a-z]+)(<span)`<br>R: `\1 \2`
* **space after first tag: **Find and replace opening tags with a space after<br>F: `<([^>])> (.*?)`<br>R: `<\1>\2`
* **space before last tag:** Find and replace closing tags with a space before<br>F:  `</(p|td|h1|h2|h3)>`<br>R: `</\1>`
* **dash spacing:** Find dashes with potential spacing issues<br>F: `(\s[^>/= ]*\s[-–][^</= ]*\s|\s[^>/= ]*[-–]\s[^</= ]*\s)`
* **space after comma: **Find a comma with no space after<br>F: `,([^"’”'<0-9 —\)]+)`<br>R: `, \1`

</details>

<details close>

<summary>Spans</summary>

* **span combine (1): **Find and replace to combine the content of spans with the same class<br>F: `<span class="([^"]*)">([^<]*)</span>(\s*)<span class="\1">([^<]*)</span>`<br>R: `<span class="\1">\2\3\4</span>`
* **span combine (2): **Find and replace spans that can be combined into a single class<br>F: `<span class="([^"]*)"><span class="([^"]*)">([^<]*)</span></span>`<br>R: `<span class="\1 \2">\3</span>`
* **remove spans from headings:** Find spans in headings that are potentially not needed<br>F: `(<h\d[^>]*>.*?)<span(\s*class="(?!label)[^"]*")*>([^<]*)</span>(.*?</h\d>)`<br>R: `\1\3\4`
* **remove space within spans:** Find spans with a space inside<br>F: `<span class="([^"]+)"> ([^<]+)</span>`<br>R: `<span class="\1">\2</span>` (include the space _before_ the span)<br><br>F: `<span class="([^"]+)">([^<]+) </span>`<br>R: `<span class="\1">\2</span>` (include the space _after_ the span)
* **move non-english chars in span:** Find and replace the class of a span containing non-english characters<br>F: `<span class="(italic|i)">([^a-zA-Z0-9\s]+)</span>`<br>R: `<span class="\1">\2</span>`
* **remove unnecessary span:** Find spans around punctuation and replace without the span<br>F: `<span class="[^"]*">(‘|“|’|”|\.|\)|\(|\?|!|,)+</span>`<br>R: `\1`
* **repeating spans:** Find and replace adjacent spans that repeat<br>F: `<span class="([^\n<>]+)">([^\n<>]+)</span><span class="\1">`<br>R: `<span class="\1">\2`

</details>

</details>

<br>

<details open>

<summary>Enhance</summary>

<details close>

<summary>Abbreviations</summary>

* **tables to ABBR 1: **convert tables to abbreviation lists<br>F: `<tr>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*</tr>`<br>R: `<dt epub:type="glossterm"><dfn>\1</dfn></dt><dd epub:type="glossdef">\2</dd>`
* **tables to ABBR 2: **after running _tables to ABBR 1_ use this regex to format the lists new lines<br>F: `<dfn>(.*?)</dfn></dt><dd epub:type="glossdef">(.*?)</dd>`<br>R: `\n\s\s\s\s\s\s\s\s\s\s\s\s<dfn>\1</dfn>\n\s\s\s\s\s\s\s\s\s\s</dt>\n\s\s\s\s\s\s\s\s\s\s<dd epub:type="glossdef">\2</dd>`

</details>

<details close>

<summary>Footnotes</summary>

* **remove space before footnote: **find and replace extra space before a footnote indicator<br>F: `\s<sup class="fn"`<br>R: `<sup class="fn"`
* **unique footnote reference id: **use filename to make footnote reference id unique<br>F: `<sup class="fn" id="note-backlink-(\d+)"><a epub:type="noteref" href="([^#]+)_([^#]*?).xhtml#note-(\d+)">\[(\d+)\]</a></sup>`<br>R: `<sup class="fn" id="note-backlink-\3-\1"><a epub:type="noteref" href="\2_\3.xhtml#note-\3-\4">[\5]</a></sup>`
* **unique footnote indicator id:** use filename to make footnote id unique<br>F: `<div id="note-(\d+)" epub:type="footnote">\s*<p><sup><a href="([^#]+)_([^#]*?)\.xhtml#note-backlink-(\d+)">`<br>R: `<div id="note-\3-\1" epub:type="footnote"><p><sup><a href="\2_\3.xhtml#note-backlink-\3-\4">`

</details>

<details close>

<summary>Index</summary>

* **move pagebreaks up top:** find pagebreaks in a file and move them before the h1. (<mark>Run multiple times until there are no new finds</mark>)<br>F: `(<h1[^>]*>.*?</h1>(?msi)(.*?))(<span epub:type="pagebreak"[^>]*></span>)`<br>R: `\3\1`

</details>

<details close>

<summary>Links</summary>

* **add `target="_blank"` to links: **Add `target="_blank"` attribute to existing external links<br>F: `<a href="http([^"]+)">`<br>R: `<a href="http\1" target="_blank" rel="noopener">`
* **URLs: **Add links to URLs (Does not capture every instance)<br>F: `\shttp(.+?)([;|\.|,|\)][\s|<])`<br>R: `\s<a href="http\1" target="_blank" rel="noopener">http\1</a>\2\3`
* **link chapters: **Find potential instances where chapters can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all chapters<br>F: `(first chap(\.|ters?)|chap(s?\.|ters?) 1)(?!\d)`
* **link parts:** Find potential instances where parts can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all parts<br>F: `(first part|parts? 1)(?!\d)`

</details>

<details close>

<summary>Percival</summary>

* **percival parsing: **add parsing tags before headings containing scripture. Replace `Gen` with Bible book needed<br>F: `^(\s+)<(h\d)>(.*?)(\d+):(.*?)</\2>`<br>R: `\1<span data-parsing="Gen.\4"></span>\n\1<\2>\3\4:\5</\2>`

</details>

<details close>

<summary>Commentary Markup</summary>

* **headings** **`data-context`: **add `data-context` tags before headings. Adjust `h3` to capture desired heading<br>F: `^(\s+)<(h3)>(.*?<a data-ref="(.*?)">.*?</a>.*?)</\2>`<br>R: `\1<hr data-context="\4" />\n\1<\2>\3</\2>`

</details>

<details open>

<summary>LESSON_maker_ Markup</summary>

* **LESSON_maker_ lists: **
* **panic LESSON_maker_: **

</details>

</details>

<br>

<details close>

<summary>Review</summary>

* `code`, description

</details>
