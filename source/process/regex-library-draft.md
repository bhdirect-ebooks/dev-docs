---
title: Regex Library
---
<details close>

<summary>General</summary>

* **extract text:** in the Find window, choose <mark>'Extract'</mark> to pull contents from a file or project<br>F: `&#60;body(?msi)(.*?)&#60;/body&#62;`
* **extract classes:** choose <mark>'Extract'</mark> to pull classes from a file or project<br>F: `\sclass="[^"]+"`
* **remove divs:** Find divs and replace with only the div content<br>F: `&#60;div(?: class="[^"]+")?>((?:.|\s)*?)&#60;/div&#62;`<br>R: `\1`

</details>

<br>

<details close>

<summary>Clean and Code</summary><blockquote>

<br>

<details close>

<summary>Languages, Apparatus and Symbols</summary>

* **lang-hbo**: Find instances of Hebrew<br>F: (`([ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇאבגדהוזחטיךכלםמןנסעףפץצקרשתװױײ׳״]+-? ?)+)`
* **lang-grc: **Find instances of Greek<br>F: `((?:[\x{0300}-\x{036F}\x{0370}-\x{03FF}\x{1F00}-\x{1FFF}\x{20D0}-\x{20FF}\x{FE20}-\x{FE2F}]+[,. ]*)+)`
* **lang-grc (2)**: Find instances of Greek<br>F: `([\p{Greek}][\p{Greek} ́¨ˆ̂˘̆̑̃ˋ̔̓ ͂.,’“;]+\b)`
* **apparatus symbols**: Find apparatus symbols.<br>F: `([ℵ]|&#x(?:2135;|E(?:00[021];|5(?:0[45E6FA];|1[034679];))))`
* **check lang**: Find special `lang` characters<br>F: `<&#60;span class="([^"]+)"&#62;([^A-Z][^<]*[āåâêëėèēîīôöòōûüū][^<]*)&#60;/span&#62;`
* **extract lang**: Choose <mark>'Extract'</mark> to create a list of italicized words. Use this list to look for untagged lang or translit<br>F: `&#60;span class="(italic|i)"&#62;([^<]*)&#60;/span&#62;`
* **ampersands**: replace ampersands<br>F: `([a-z]+\s*)&(\s*[a-z]+)`<br>R: `\1\&#38;\2`
* **unsafe chars: **find characters that are unsafe to use within HTML attribute values<br>F: `[a-z-]+="[^"]*?[\x{0000}-\x{0009}\x{000b}\x{000c}\x{000e}-\x{001f}\x{007f}-\x{009f}\x{00ad}\x{0600}-\x{0604}\x{070f}\x{17b4}\x{17b5}\x{200c}-\x{200f}\x{2028}-\x{202f}\x{2060}-\x{206f}\x{feff}\x{fff0}-\x{ffff}]+?[^"]*"`

</details>

<details close>

<summary>Page Breaks and Paragraphs</summary>

* **pagebreak breaking words**: Find pagebreaks that are in between words.<br>F: `([a-z]+)-\s*(&#60;span epub:type="pagebreak" id="[^"]*" title="[^"]*"&#62;&#60;/span&#62;)`<br>R: `\2 \1`
  > Example find: 
  >
  > `left-&#60;span epub:type="pagebreak" id="page1" title="1"&#62;&#60;/span&#62;hand`
* **pagebreak with no space**: Find page breaks that have no space on either side.<br>F: `(\w+&#60;span epub:type="pagebreak" id="[^"]*" title="[^"]*"&#62;&#60;/span&#62;)(\w+)`<br>R: `\1 \2`
  > Example find: 
  >
  > `I&#60;span epub:type="pagebreak" id="page1" title="1"&#62;&#60;/span&#62;have`
* **pagebreak begin line space**: Find a pagebreak that has a space at the beginning of a line<br>F: `(&#60;[^>]*&#62;&#60;span epub:type="pagebreak"[^>]*&#62;&#60;/span&#62;)\s`<br>R: `\1`
  > Example find: 
  >
  > `&#60;p&#62;&#60;span epub:type="pagebreak" id="page1" title="1"&#62;&#60;/span&#62; All`
* **find broken paragraphs (1)**: Find potential broken paragraphs<br>F: `([^\.|!|”|?|"|>|)|:])&#60;/p&#62;\s*&#60;p[^>]*&#62;\s*(&#60;span epub:type="pagebreak" id="page.+?" title="[^>]*&#62;&#60;/span&#62;)`<br>R: `\1 \2`
* **find broken paragraphs (2)**: Find potential broken paragraphs. <mark>Case sensitive</mark><br>F: `&#60;p([^>]*)&#62;\s*(&#60;span epub:type="pagebreak" id="page.+?" title="[^>]*&#62;&#60;/span&#62;)([a-z]+)`

</details>

<details close>

<summary>Scriptext</summary>

* **scriptext finder (1)**: Find blockquotes that have data-ref tags in them. (<mark>Use _after_ running Percival</mark>)<br>F: `&#60;blockquote&#62;(\s*(&#60;p[^>]*&#62;.*?&#60;/p&#62;\s*)*&#60;p[^>]*&#62;.*?(&#60;a data-ref="[^"]*"&#62;[^<]*&#60;/a&#62;.*?&#60;/p&#62;\s*&#60;/blockquote&#62;))`<br>R: `&#60;blockquote class="scriptext"&#62;\1`
* **scriptext finder (2)**: Find blockquotes that have a data-ref before it. (<mark>Use _after_ running Percival</mark>)<br>F: `(&#60;a data-ref="[^"]*"&#62;([^<]*)&#60;/a&#62;(:|.)&#60;/p&#62;\s*)&#60;blockquote&#62;`<br>R: `\1&#60;blockquote class="scriptext"&#62;`

</details>

<details close>

<summary>Spacing</summary>

* **no space between words**: Find and replace words with no space in between<br>F: `(&#60;span class="(?!label)[^"]*"&#62;[^<]*&#60;/span&#62;)(\w)`<br>R: `\1 \2`
  > Example find: 
  >
  > `A &#60;span class="i"&#62;100 foot&#60;/span&#62;drop`
* **no space between spans**: Find and replace span tags with no space in between(<mark>Check before using _span combine_</mark>)<br>F: `(&#60;span class="(?!label)[^"]*"&#62;[^<]*&#60;/span&#62;)(&#60;span class="(?!label)[^"]*"&#62;\w+[^<]*&#60;/span&#62;)`<br>R: `\1 \2`
  > Example find: 
  >
  > `A &#60;span class="i"&#62;100 foot&#60;/span&#62;&#60;span class="i"&#62;drop&#60;/span&#62;`
* **no space open parens**: Find and replace an opening parenthesis with no space before<br>F: `(\w&#60;/span&#62;)(\()`<br>R: `\1 \2`
  > Example find: 
  >
  > `&#60;span class="i"&#62;100 foot drop&#60;/span&#62;(30 meters).`
* **begin span spacing**: Find spans lacking a space before<br> F: `([a-z]+)(&#60;span)`<br>R: `\1 \2`
  > Example find: 
  >
  > `A&#60;span class="i"&#62;100 foot drop&#60;/span&#62;`
* **space after first tag**: Find and replace opening tags with a space after<br>F: `&#60;([^>])&#62; (.*?)`<br>R: `<\1>\2`
  > Example find: 
  >
  > `&#60;p&#62; A &#60;span class="i"&#62;100 foot drop&#60;/span&#62;`
* **space before last tag**: Find and replace closing tags with a space before<br>F: `&#60;/(p|td|h1|h2|h3)&#62;`<br>R: `</\1>`
  > Example find: 
  >
  > `drop. &#60;/p&#62;`
* **dash spacing**: Find dashes with potential spacing issues<br>F: `(\s[^>/= ]*\s[-–][^</= ]*\s|\s[^>/= ]*[-–]\s[^</= ]*\s)`
* **space after comma**: Find a comma with no space after<br>F: `,([^"’”'<0-9 —\)]+)<br>R: , \1`

</details>

<details close>

<summary>Spans</summary>

* **span combine (1)**: In this Regex Library navigate to _Clean and Code > Spacing > **no space between spans**_ and check before running span combine. Find and replace to combine the content of spans with the same class<br>F: `&#60;span class="([^"]*)"&#62;([^<]*)&#60;/span&#62;(\s*)&#60;span class="\1"&#62;([^<]*)&#60;/span&#62;`<br>R: `&#60;span class="\1"&#62;\2\3\4&#60;/span&#62;`
* **span combine (2)**: Find and replace spans that can be combined into a single class<br>F: `&#60;span class="([^"]*)"&#62;&#60;span class="([^"]*)"&#62;([^<]*)&#60;/span&#62;&#60;/span&#62;`<br>R: `&#60;span class="\1 \2"&#62;\3&#60;/span&#62;`
* **remove spans from headings**: Find spans in headings that are potentially not needed<br>F: `(&#60;h\d[^>]*&#62;.*?)&#60;span(\s*class="(?!label)[^"]*")*&#62;([^<]*)&#60;/span&#62;(.*?&#60;/h\d&#62;)`<br>R: `\1\3\4`
  > Example find: 
  >
  > `&#60;h1&#62;&#60;span class="i"&#62;Foreword&#60;/span&#62;&#60;/h1&#62;`
  >
  > `&#60;h2&#62;The &#60;span class="i"&#62;Rock-Star&#60;/span&#62; Complex&#60;/h2&#62;`
* **remove space within spans**: Find spans with a space inside<br>F: `&#60;span class="([^"]+)"&#62; ([^<]+)&#60;/span&#62;`<br>R: `&#60;span class="\1"&#62;\2&#60;/span&#62;` (include the space _before_ the span)<br><br>F: `&#60;span class="([^"]+)">([^<]+) &#60;/span&#62;`<br>R: `&#60;span class="\1"&#62;\2&#60;/span&#62;` (include the space _after_ the span)
* **move non-english chars in span**: Find and replace the class of a span containing non-english characters<br>F: `&#60;span class="(italic|i)"&#62;([^a-zA-Z0-9\s]+)&#60;/span&#62;`<br>R: `&#60;span class="\1"&#62;\2&#60;/span&#62;`
* **remove unnecessary span**: Find spans around punctuation and replace without the span<br>F: `&#60;span class="[^"]*"&#62;(‘|“|’|”|\.|\)|\(|\?|!|,)+&#60;/span&#62;`<br>R: `\1`
  > Example find: 
  >
  > `&#60;span class="i"&#62;(&#60;/span&#62;`
  >
  > `&#60;span class="b"&#62;.&#60;/span&#62;`
* **repeating spans**: Find and replace adjacent spans that repeat<br>F: `&#60;span class="([^\n<>]+)"&#62;([^\n<>]+)&#60;/span&#62;&#60;span class="\1"&#62;`<br>R: `&#60;span class="\1">\2`

</details></blockquote>

</details>

<br>

<details close>

<summary>Enhance</summary><blockquote>

<details close>

<summary>Abbreviations</summary>

* **tables to ABBR 1**: convert tables to abbreviation lists<br>F: `&#60;tr&#62;\s*&#60;td&#62;(.*?)&#60;/td&#62;\s*&#60;td&#62;(.*?)&#60;/td&#62;\s*&#60;/tr&#62;`<br>R: `&#60;dt epub:type="glossterm"&#62;&#60;dfn&#62;\1&#60;/dfn&#62;&#60;/dt&#62;&#60;dd epub:type="glossdef"&#62;\2&#60;/dd&#62;`
* **tables to ABBR 2**: after running tables to ABBR 1 use this regex to format the lists new lines<br>F: `&#60;dfn&#62;(.*?)&#60;/dfn&#62;&#60;/dt&#62;&#60;dd epub:type="glossdef"&#62;(.*?)&#60;/dd&#62;`<br>R: `\n            &#60;dfn&#62;\1&#60;/dfn&#62;\n          &#60;/dt&#62;\n          &#60;dd epub:type="glossdef"&#62;\2&#60;/dd&#62;`

</details>

<details close>

<summary>Footnotes</summary>

* **footnote references: **for footnotes _not_ in `backmatter` use this find and replace to format footnote refs in each file. Adjust the find to match source file markup, if necessary, and edit the replace to ensure unique IDs. After replacing in BBEdit use _Markup > Update > Document_ to change `#FILENAME#` to document filename<br>F: `&#60;p&#62;(\d)\. (.*?)&#60;/p&#62;`<br>R: `&#60;div epub:type="footnote" id="\1"&#62;\n          &#60;p&#62;&#60;sup&#62;&#60;a href="#FILENAME##backlink-\1"&#62;\1&#60;/a&#62;&#60;/sup&#62;&#38;#160;&#60;span class="note"&#62;\2&#60;/span&#62;&#60;/p&#62;\n        &#60;/div&#62;`
* **footnote indicators: **for footnotes _not_ in `backmatter` use this find and replace to format footnote indicators in each file. Adjust the find to match source file markup, if necessary, and edit the replace to ensure unique IDs. After replacing in BBEdit use _Markup > Update > Document_ to change `#FILENAME#` to document filename<br>F: `&#60;sup&#62;(\d+)&#60;/sup&#62;`<br>R: `&#60;sup class="fn" id="backlink-intro-\1"&#62;&#60;a epub:type="noteref" href="#FILENAME##intro-\1"&#62;[\1]&#60;/a&#62;&#60;/sup&#62;`
* **unique footnote reference id**: use filename to make footnote reference id unique<br>F: `&#60;sup class="fn" id="note-backlink-(\d+)"&#62;&#60;a epub:type="noteref" href="([^#]+)_([^#]*?).xhtml#note-(\d+)"&#62;\[(\d+)\]&#60;/a&#62;&#60;/sup&#62;`<br>R: `&#60;sup class="fn" id="note-backlink-\3-\1"&#62;&#60;a epub:type="noteref" href="\2_\3.xhtml#note-\3-\4"&#62;[\5]&#60;/a&#62;&#60;/sup&#62;`
* **unique footnote indicator id**: use filename to make footnote id unique<br>F: `&#60;div id="note-(\d+)" epub:type="footnote"&#62;\s*&#60;p&#62;&#60;sup&#62;&#60;a href="([^#]+)_([^#]*?)\.xhtml#note-backlink-(\d+)"&#62;`<br>R: `&#60;div id="note-\3-\1" epub:type="footnote"&#62;&#60;p&#62;&#60;sup&#62;&#60;a href="\2_\3.xhtml#note-backlink-\3-\4"&#62;`
* **remove Ibids: **make sure footnotes are formatted correctly according to the style guide and then use to replace Ibids<br>F: `(&#60;p class="[^"]*"&#62;&#60;sup&#62;(\d+)&#60;/sup&#62;(.*?&#60;span class="i"&#62;.*?&#60;/span&#62;).*?&#60;/p&#62;\s*&#60;p class="[^"]*"&#62;&#60;sup&#62;\d+&#60;/sup&#62;)Ibid\.(,.*?)*&#60;/p&#62;`<br>R: `\1\3\4</p>`

</details>

<details close>

<summary>Index</summary>

* **move pagebreaks up top**: find pagebreaks in a file and move them before the h1. (<mark>Run multiple times until there are no new finds</mark>)<br>F: `(&#60;h1[^>]*&#62;.*?&#60;/h1&#62;(?msi)(.*?))(&#60;span epub:type="pagebreak"[^>]*&#62;&#60;/span&#62;)`<br>R: `\3\1`

</details>

<details close>

<summary>Links</summary>

* **add `target="_blank"` to links**: Add `target="_blank"` attribute to existing external links<br>F: `&#60;a href="http([^"]+)"&#62;`<br>`R: &#60;a href="http\1" target="_blank" rel="noopener"&#62;`<br>R: `&#60;a href="http\1" target="_blank" rel="noopener"&#62;`
* **URLs**: Add links to URLs (Does not capture every instance)<br>F: `\shttp(.+?)([;|\.|,|\)][\s|<])`<br>R: `\s&#60;a href="http\1" target="_blank" rel="noopener"&#62;http\1&#60;/a&#62;\2\3`
* **tag hyperlinks:** find and replace to tag hyperlinks<br>F: `&#60;a (?:class="[^"]*"\s*)*href="((?:mail[^"]*)|(?:http[^"]*))"&#62;([^<]*)&#60;/a&#62;`<br>R: `&#60;a href="\1" target="_blank" rel="noopener"&#62;\2&#60;/a&#62;`
* **link chapters**: Find potential instances where chapters can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all chapters<br>F: `(first chap(\.|ters?)|chap(s?\.|ters?) 1)(?!\d)`
* **link parts**: Find potential instances where parts can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all parts<br>F: `(first part|parts? 1)(?!\d)`

</details>

<details close>

<summary>Percival</summary>

* **percival parsing**: add parsing tags before headings containing scripture. Replace `Gen` with Bible book needed<br>F: `^(\s+)&#60;(h\d)&#62;(.*?)(\d+):(.*?)&#60;/\2&#62;`<br>R: `\&#60;span data-parsing="Gen.\4"&#62;&#60;/span&#62;\n\1&#60;\2&#62;\3\4:\5&#60;/\2&#62;`

</details>

<details close>

<summary>Commentary Markup</summary>

* **headings `data-context`**: add `data-context` tags before headings. Adjust `h3` to capture desired heading<br>F: `^(\s+)&#60;(h3)&#62;(.*?&#60;a data-ref="(.*?)"&#62;.*?&#60;/a&#62;.*?)&#60;/\2&#62;`<br>R: `\1&#60;hr data-context="\4" /&#62;\n\1&#60;\2&#62;\3&#60;/\2&#62;`

</details></blockquote>

</details>

<br>

<details close>

<summary>Review</summary>

* **remove pagebreaks from headings: **find and replace to move pagebreaks out of headings<br>F: `(&#60;h\d&#62;.*?)(&#60;span epub:type="pagebreak[^>]*&#62;&#60;/span&#62;)`<br>R: `\2\1`
  > Example find: 
  >
  > `&#60;h1&#62;&#60;span epub:type=”pagebreak” id=”page1” title=”1”&#62;&#60;/span&#62;Chapter 1&#60;/h1&#62;`
* **remove space before footnote**: find and replace extra space before a footnote indicator<br>F: `\s&#60;sup class="fn"`<br>R: `&#60;sup class="fn"`
* **special chars spacing: **find special characters with extra spacing on either side of it<br>F: `\s+(\{|\$|\&#38;|\,|\:|\;|\?|\@|\#|\||\'|\&#60;|\&#62;|\-|\^|\*|\(|\)|\%|\!|\]|\"|”|“)\s+`<br>R: `\2 \1`
  > Example finds: 
  >
  > `(`
  >
  > `:`
  >
  > `$`
* **special chars spans: **review special characters in spans and replace the character without the span<br>F: `&#60;span[^>]&#62;({|$|&#38;|,|:|;|?|@|#|||'|.|-|^||(|)|%|!|]|"|”|“|—)+&#60;/span&#62;`<br>R: `\1`
  > Example finds: 
  >
  > `&#60;span class="i"&#62;)&#60;/span&#62;`
  >
  > `&#60;span class="b"&#62;.&#60;/span&#62;`
* **non-english chars spans: **review non-english characters in spans that could be tagged as `lang`<br>F: `&#60;span class="i(?:talic)?"&#62;([^a-zA-Z0-9\s]+)&#60;/span&#62;`
* **missed verses: **Find digits with a colon in between and no tag that could potentially be missed scripture verses<br>F: `(?&#60;!&#60;/abbr&#62;|&#60;/span&#62;)(?&#60;!'&#62;|[a-z]|\d|\.)(?:\(| )\d+:\d{1,2}(?!&#60;/a&#62;)`
  > Example finds: 
  >
  > `106:9`
  >
  > `10:10`

</details>
