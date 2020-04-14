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

<details open>

<summary>Scriptext</summary>

* **Scriptext Finder (1): **Find blockquotes that have `data-ref` tags in them. (<mark>Use _after_ running Percival</mark>)<br>F: `<blockquote>(\s*(<p[^>]*>.*?</p>\s*)*<p[^>]*>.*?(<a data-ref="[^"]*">[^<]*</a>.*?</p>\s*</blockquote>))`<br>R: `<blockquote class="scriptext">\1`



* **Scriptext Finder (2): **Find blockquotes that have a `data-ref` before it. (<mark>Use _after_ running Percival</mark>)<br>F: `(<a data-ref="[^"]*">([^<]*)</a>(:|.)</p>\s*)<blockquote>`<br>R: `\1<blockquote class="scriptext">`

</details>

<details close>

<summary>Spacing</summary>

</details>

<details close>

<summary>Spans</summary>

</details>

<details close>

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
