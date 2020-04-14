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

<details close>

<summary>Languages and Apparatus Symbols</summary>

* **lang-hbo: **Find instances of Hebrew. Find:


```
     (([ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇאבגדהוזחטיךכלםמןנסעףפץצקרשתװױײ׳״]+-? ?)+)
```

* **lang-grc: **Find instances of Greek. Find:


```
     ([\p{Greek}][\p{Greek} ́¨ˆ̂˘̆̑̃ˋ̔̓ ͂.,’“;]+\b)
```

* **Apparatus Symbols: **Find apparatus symbols. Find:


```
     ([ℵ]|&#x(?:2135;|E(?:00[021];|5(?:0[45E6FA];|1[034679];))))
```

* **Check Lang:** Find special lang characters. Find:


```
     <span class="([^"]+)">([^A-Z][^<]*[āåâêëėèēîīôöòōûüū][^<]*)</span>
```

* **Extract Lang: **Choose <mark>'Extract'</mark> to create a list of italicized words. Use this list to look for untagged `lang` or `translit`. Find:


```
     <span class="(italic|i)">([^<]*)</span>
```

</details>

<details close>

<summary>Page Breaks and Paragraphs</summary>

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
