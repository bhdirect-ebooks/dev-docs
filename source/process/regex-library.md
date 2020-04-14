---
title: Regex Library
---
<details close>

<summary>Prep</summary>

* **extract text**: in the Find window, choose <mark>'Extract'</mark> to pull contents from a file or project. Find:


```
     <body(?msi)(.*?)</body>
```

</details>

<br>

<details open>

<summary>Clean and Code</summary>

<br>

<details open>

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

</details>

<details close>

<summary>Scriptext</summary>

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
