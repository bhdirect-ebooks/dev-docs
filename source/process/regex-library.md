---
title: RegEx Library
---

## General
- **extract text**: in the Find window, choose <mark>'Extract'</mark> to pull contents from a file or project<br>F: <code>&#60;body(?msi)(.&#42;?)&#60;/body&#62;</code>

- **extract classes**: choose <mark>'Extract'</mark> to pull classes from a file or project<br>F: <code>\sclass=&#34;\[^&#34;]+&#34;</code>

- **remove divs**: Find divs and replace with only the div content<br>F: <code>&#60;div(?: class=&#34;\[^&#34;]+&#34;)?>((?:.|\s)\*?)&#60;/div&#62;</code><br>R: <code>\1</code>

## Clean and Code
### Languages, Apparatus and Symbols
- **lang-hbo**: Find instances of Hebrew<br>F: <code>(\[ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇאבגדהוזחטיךכלםמןנסעףפץצקרשתװױײ׳״]+-? ?)+)</code>

- **lang-grc**: Find instances of Greek<br>F: <code>((?:\[\x{0300}-\x{036F}\x{0370}-\x{03FF}\x{1F00}-\x{1FFF}\x{20D0}-\x{20FF}\x{FE20}-\x{FE2F}]+\[,. ]\*)+)</code>

- **lang-grc (2)**: Find instances of Greek<br>F: <code>(\[\p{Greek}]\[\p{Greek} ́¨ˆ̂˘̆̑̃ˋ̔̓ ͂.,’“;]+\b)</code>

- **apparatus symbols**: Find apparatus symbols.<br>F: <code>(\[ℵ]|&#x(?:2135;|E(?:00\[021];|5(?:0\[45E6FA];|1\[034679];))))</code>

- **check lang**: Find special `lang` characters<br>F: <code>&#60;span class=&#34;(\[^&#34;]+)&#34;&#62;(\[^A-Z]\[^<]\*\[āåâêëėèēîīôöòōûüū]\[^<]\*)&#60;/span&#62;</code>

- **extract lang**: Choose <mark>'Extract'</mark> to create a list of italicized words. Use this list to look for untagged lang or translit<br>F: <code>&#60;span class=&#34;(italic|i)&#34;&#62;(\[^<]\*)&#60;/span&#62;</code>

- **ampersands**: replace ampersands<br>F: <code>(\[a-z]+\s\*)\&#38;(\s\*\[a-z]+)</code><br>R: <code>\1&#38;\2</code>

- **unsafe chars**: find characters that are unsafe to use within HTML attribute values<br>F: <code>\[a-z-]+=&#34;\[^&#34;]\*?\[\x{0000}-\x{0009}\x{000b}\x{000c}\x{000e}-\x{001f}\x{007f}-\x{009f}\x{00ad}\x{0600}-\x{0604}\x{070f}\x{17b4}\x{17b5}\x{200c}-\x{200f}\x{2028}-\x{202f}\x{2060}-\x{206f}\x{feff}\x{fff0}-\x{ffff}]+?\[^&#34;]\*&#34;</code>

### Page Breaks and Paragraphs
- **pagebreak breaking words**: Find pagebreaks that are in between words.<br>F: <code>(\[a-z]+)-\s\*(&#60;span epub:type=&#34;pagebreak&#34; id=&#34;\[^&#34;]\*&#34; title=&#34;\[^&#34;]\*&#34;&#62;&#60;/span&#62;)</code><br>R: <code>\2 \1</code>
<blockquote>Example find: <br><code>left-&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page1&#34; title=&#34;1&#34;&#62;&#60;/span&#62;hand</code></blockquote>
- **pagebreak with no space**: Find page breaks that have no space on either side.<br>F: <code>(\w+&#60;span epub:type=&#34;pagebreak&#34; id=&#34;\[^&#34;]\*&#34; title=&#34;\[^&#34;]\*&#34;&#62;&#60;/span&#62;)(\w+)</code><br>R: <code>\1 \2</code>
<blockquote>Example find: <br><code>I&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page1&#34; title=&#34;1&#34;&#62;&#60;/span&#62;have</code></blockquote>
- **pagebreak begin line space**: Find a pagebreak that has a space at the beginning of a line<br>F: <code>(&#60;\[^>]\*&#62;&#60;span epub:type=&#34;pagebreak&#34;\[^>]\*&#62;&#60;/span&#62;)\s</code><br>R: <code>\1</code>
<blockquote>Example find: <br><code>&#60;p&#62;&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page1&#34; title=&#34;1&#34;&#62;&#60;/span&#62; All</code></blockquote>
- **find broken paragraphs (1)**: Find potential broken paragraphs<br>F: <code>(\[^.|!|”|?|"|>|)|:])&#60;/p&#62;\s\*&#60;p\[^>]\*&#62;\s\*(&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page.+?&#34; title=&#34;\[^>]\*&#62;&#60;/span&#62;)</code><br>R: <code>\1 \2</code>

- **find broken paragraphs (2)**: Find potential broken paragraphs. <mark>Case sensitive</mark><br>F: <code>&#60;p(\[^>]\*)&#62;\s\*(&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page.+?&#34; title=&#34;\[^>]\*&#62;&#60;/span&#62;)(\[a-z]+)</code>

### Scriptext
- **scriptext finder (1)**: Find blockquotes that have data-ref tags in them. (<mark>Use _after_ running Percival</mark>)<br>F: <code>&#60;blockquote&#62;(\s\*(&#60;p\[^>]\*&#62;.\*?&#60;/p&#62;\s\*)\*&#60;p\[^>]\*&#62;.\*?(&#60;a data-ref=&#34;\[^&#34;]\*&#34;&#62;\[^<]\*&#60;/a&#62;.\*?&#60;/p&#62;\s\*&#60;/blockquote&#62;))</code><br>R: <code>&#60;blockquote class=&#34;scriptext&#34;&#62;\1</code>

- **scriptext finder (2)**: Find blockquotes that have a data-ref before it. (<mark>Use _after_ running Percival</mark>)<br>F: <code>(&#60;a data-ref=&#34;\[^&#34;]\*&#34;&#62;(\[^<]\*)&#60;/a&#62;(:|.)&#60;/p&#62;\s\*)&#60;blockquote&#62;</code><br>R: <code>\1&#60;blockquote class=&#34;scriptext&#34;&#62;</code>

### Spacing
- **no space between words**: Find and replace words with no space in between<br>F: <code>(&#60;span class=&#34;(?!label)\[^&#34;]\*&#34;&#62;\[^<]\*&#60;/span&#62;)(\w)</code><br>R: <code>\1 \2</code>
<blockquote>Example find: <br><code>A &#60;span class=&#34;i&#34;&#62;100 foot&#60;/span&#62;drop</code></blockquote>
- **no space between spans**: Find and replace span tags with no space in between(<mark>Check before using _span combine_</mark>)<br>F: <code>(&#60;span class=&#34;(?!label)\[^&#34;]\*&#34;&#62;\[^<]\*&#60;/span&#62;)(&#60;span class=&#34;(?!label)\[^&#34;]\*&#34;&#62;\w+\[^<]\*&#60;/span&#62;)</code><br>R: <code>\1 \2</code>
<blockquote>Example find: <br><code>A &#60;span class=&#34;i&#34;&#62;100 foot&#60;/span&#62;&#60;span class=&#34;i&#34;&#62;drop&#60;/span&#62;</code></blockquote>
- **no space open parens**: Find and replace an opening parenthesis with no space before<br>F: <code>(\w&#60;/span&#62;)(()</code><br>R: <code>\1 \2</code>
<blockquote>Example find: <br><code>&#60;span class=&#34;i&#34;&#62;100 foot drop&#60;/span&#62;(30 meters).</code></blockquote>
- **begin span spacing**: Find spans lacking a space before<br> F: <code>(\[a-z]+)(&#60;span)</code><br>R: <code>\1 \2</code>
<blockquote>Example find: <br><code>A&#60;span class=&#34;i&#34;&#62;100 foot drop&#60;/span&#62;</code></blockquote>
- **space after first tag**: Find and replace opening tags with a space after<br>F: <code>&#60;(\[^>])&#62; (.\*?)</code><br>R: <code><\1>\2</code>
<blockquote>Example find: <br><code>&#60;p&#62; A &#60;span class=&#34;i&#34;&#62;100 foot drop&#60;/span&#62;</code></blockquote>
- **space before last tag**: Find and replace closing tags with a space before<br>F: <code>&#60;/(p|td|h1|h2|h3)&#62;</code><br>R: <code></\1></code>
<blockquote>Example find: <br><code>drop. &#60;/p&#62;</code></blockquote>
- **dash spacing**: Find dashes with potential spacing issues<br>F: <code>(\s\[^>/= ]\*\s\[-–]\[^</= ]\*\s|\s\[^>/= ]\*\[-–]\s\[^</= ]\*\s)</code>

- **space after comma**: Find a comma with no space after<br>F: <code>,(\[^&#34;’”'<0-9 —)]+)</code><br>R: <code>, \1</code>

### Spans
#### Span Combine (1)
In this Regex Library navigate to _Clean and Code > Spacing > **no space between spans**_ and check before running span combine.
Find and replace to combine the content of spans with the same class.
```
Find:
	<span class="([^"]*)">([^<]*)</span>(\s*)<span class="\1">([^<]*)</span>

Replace:
	<span class="\1">\2\3\4</span>
```

#### Span Combine (2)
Find and replace spans that can be combined into a single class.
```
Find:
	<span class="([^"]*)"><span class="([^"]*)">([^<]*)</span></span>

Replace:
	<span class="\1 \2">\3</span>
```

- **remove spans from headings**: Find spans in headings that are potentially not needed<br>F: <code>(&#60;h\d\[^>]\*&#62;.\*?)&#60;span(\s\*class=&#34;(?!label)\[^&#34;]\*&#34;)\*&#62;(\[^<]\*)&#60;/span&#62;(.\*?&#60;/h\d&#62;)</code><br>R: <code>\1\3\4</code>
<blockquote>Example find: <br><code>&#60;h1&#62;&#60;span class=&#34;i&#34;&#62;Foreword&#60;/span&#62;&#60;/h1&#62;</code><br><code>&#60;h2&#62;The &#60;span class=&#34;i&#34;&#62;Rock-Star&#60;/span&#62; Complex&#60;/h2&#62;</code></blockquote>
- **remove space within spans**: Find spans with a space inside<br>F: <code>&#60;span class=&#34;(\[^&#34;]+)&#34;&#62; (\[^<]+)&#60;/span&#62;</code><br>R: <code>&#60;span class=&#34;\1&#34;&#62;\2&#60;/span&#62;</code> (include the space _before_ the span)<br><br>F: <code>&#60;span class=&#34;(\[^&#34;]+)&#34;>(\[^<]+) &#60;/span&#62;</code><br>R: <code>&#60;span class=&#34;\1&#34;&#62;\2&#60;/span&#62;</code> (include the space _after_ the span)

- **move non-english chars in span**: Find and replace the class of a span containing non-english characters<br>F: <code>&#60;span class=&#34;(italic|i)&#34;&#62;(\[^a-zA-Z0-9\s]+)&#60;/span&#62;</code><br>R: <code>&#60;span class=&#34;\1&#34;&#62;\2&#60;/span&#62;</code>

- **remove unnecessary span**: Find spans around punctuation and replace without the span<br>F: <code>&#60;span class=&#34;\[^&#34;]\*&#34;&#62;(‘|“|’|”|.|)|(|?|!|,)+&#60;/span&#62;</code><br>R: <code>\1</code>
<blockquote>Example find: <br><code>&#60;span class=&#34;i&#34;&#62;(&#60;/span&#62;</code><br><code>&#60;span class=&#34;b&#34;&#62;.&#60;/span&#62;</code></blockquote>
- **repeating spans**: Find and replace adjacent spans that repeat<br>F: <code>&#60;span class=&#34;(\[^\n<>]+)&#34;&#62;(\[^\n<>]+)&#60;/span&#62;&#60;span class=&#34;\1&#34;&#62;</code><br>R: <code>&#60;span class=&#34;\1&#34;>\2</code>

#### Remove Empty Spans
Find Remove all spans that are empty or only contain space
```
Find:
	<span class="[A-Za-z0-9_-]*">( |)</span>

Replace:
	\1
```

## Enhance
### Abbreviations
- **tables to ABBR 1**: convert tables to abbreviation lists<br>F: <code>&#60;tr&#62;\s\*&#60;td&#62;(.\*?)&#60;/td&#62;\s\*&#60;td&#62;(.\*?)&#60;/td&#62;\s\*&#60;/tr&#62;</code><br>R: <code>&#60;dt epub:type=&#34;glossterm&#34;&#62;&#60;dfn&#62;\1&#60;/dfn&#62;&#60;/dt&#62;&#60;dd epub:type=&#34;glossdef&#34;&#62;\2&#60;/dd&#62;</code>

- **tables to ABBR 2**: after running tables to ABBR 1 use this regex to format the lists new lines<br>F: <code>&#60;dfn&#62;(.&#42;?)&#60;/dfn&#62;&#60;/dt&#62;&#60;dd epub:type=&#34;glossdef&#34;&#62;(.&#42;?)&#60;/dd&#62;</code><br>R: <code>\n            &#60;dfn&#62;\1&#60;/dfn&#62;\n          &#60;/dt&#62;\n          &#60;dd epub:type=&#34;glossdef&#34;&#62;\2&#60;/dd&#62;</code>

### Footnotes
- **footnote references**: for footnotes _not_ in `backmatter` use this find and replace to format footnote refs in each file. Adjust the find to match source file markup, if necessary, and edit the replace to ensure unique IDs. After replacing in BBEdit use _Markup > Update > Document_ to change `#FILENAME#` to document filename<br>F: <code>&#60;p&#62;(\d). (.\*?)&#60;/p&#62;</code><br>R: <code>&#60;div epub:type=&#34;footnote&#34; id=&#34;\1&#34;&#62;\n &#60;p&#62;&#60;sup&#62;&#60;a href=&#34;#FILENAME##backlink-\1&#34;&#62;\1&#60;/a&#62;&#60;/sup&#62;&#38;#160;&#60;span class=&#34;note&#34;&#62;\2&#60;/span&#62;&#60;/p&#62;\n &#60;/div&#62;</code>

- **footnote indicators**: for footnotes _not_ in `backmatter` use this find and replace to format footnote indicators in each file. Adjust the find to match source file markup, if necessary, and edit the replace to ensure unique IDs. After replacing in BBEdit use _Markup > Update > Document_ to change `#FILENAME#` to document filename<br>F: <code>&#60;sup&#62;(\d+)&#60;/sup&#62;</code><br>R: <code>&#60;sup class=&#34;fn&#34; id=&#34;backlink-intro-\1&#34;&#62;&#60;a epub:type=&#34;noteref&#34; href=&#34;#FILENAME##intro-\1&#34;&#62;\[\1]&#60;/a&#62;&#60;/sup&#62;</code>

- **unique footnote reference id**: use filename to make footnote reference id unique<br>F: <code>&#60;sup class=&#34;fn&#34; id=&#34;note-backlink-(\d+)&#34;&#62;&#60;a epub:type=&#34;noteref&#34; href=&#34;(\[^#]+)\_(\[^#]\*?).xhtml#note-(\d+)&#34;&#62;\\[(\d+)]&#60;/a&#62;&#60;/sup&#62;</code><br>R: <code>&#60;sup class=&#34;fn&#34; id=&#34;note-backlink-\3-\1&#34;&#62;&#60;a epub:type=&#34;noteref&#34; href=&#34;\2\_\3.xhtml#note-\3-\4&#34;&#62;\[\5]&#60;/a&#62;&#60;/sup&#62;</code>

- **unique footnote indicator id**: use filename to make footnote id unique<br>F: <code>&#60;div id=&#34;note-(\d+)&#34; epub:type=&#34;footnote&#34;&#62;\s\*&#60;p&#62;&#60;sup&#62;&#60;a href=&#34;(\[^#]+)\_(\[^#]\*?).xhtml#note-backlink-(\d+)&#34;&#62;</code><br>R: <code>&#60;div id=&#34;note-\3-\1&#34; epub:type=&#34;footnote&#34;&#62;&#60;p&#62;&#60;sup&#62;&#60;a href=&#34;\2\_\3.xhtml#note-backlink-\3-\4&#34;&#62;</code>

- **remove Ibids**: make sure footnotes are formatted correctly according to the style guide and then use to replace Ibids<br>F: <code>(&#60;p class=&#34;\[^&#34;]\*&#34;&#62;&#60;sup&#62;(\d+)&#60;/sup&#62;(.\*?&#60;span class=&#34;i&#34;&#62;.\*?&#60;/span&#62;).\*?&#60;/p&#62;\s\*&#60;p class=&#34;\[^&#34;]\*&#34;&#62;&#60;sup&#62;\d+&#60;/sup&#62;)Ibid.(,.\*?)\*&#60;/p&#62;</code><br>R: <code>\1\3\4&#60;/p&#62;</code>

### Index
- **move pagebreaks up top**: find pagebreaks in a file and move them before the h1. (<mark>Run multiple times until there are no new finds</mark>)<br>F: <code>(&#60;h1\[^>]\*&#62;.\*?&#60;/h1&#62;(?msi)(.\*?))(&#60;span epub:type=&#34;pagebreak&#34;\[^>]\*&#62;&#60;/span&#62;)</code><br>R: <code>\3\1</code>

### Links
- **add `target="_blank"` to links**: Add `target="_blank"` attribute to existing external links<br>F: <code>&#60;a href=&#34;http(\[^&#34;]+)&#34;&#62;</code><br>R: <code>&#60;a href=&#34;http\1&#34; target=&#34;\_blank&#34; rel=&#34;noopener&#34;&#62;</code>

- **URLs**: Add links to URLs (Does not capture every instance)<br>F: <code>\shttp(.+?)(\[;|.|,|)]\[\s|<])</code><br>R: <code>\s&#60;a href=&#34;http\1&#34; target=&#34;\_blank&#34; rel=&#34;noopener&#34;&#62;http\1&#60;/a&#62;\2\3</code>

- **tag hyperlinks**: find and replace to tag hyperlinks<br>F: <code>&#60;a (?:class=&#34;\[^&#34;]\*&#34;\s\*)\*href=&#34;((?:mail\[^&#34;]\*)|(?:http\[^&#34;]\*))&#34;&#62;(\[^<]\*)&#60;/a&#62;</code><br>R: <code>&#60;a href=&#34;\1&#34; target=&#34;\_blank&#34; rel=&#34;noopener&#34;&#62;\2&#60;/a&#62;</code>

- **link chapters**: Find potential instances where chapters can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all chapters<br>F: <code>(first chap(.|ters?)|chap(s?.|ters?) 1)(?!\d)</code>

- **link parts**: Find potential instances where parts can be linked. Adjust the word `first` to `second` and the number `1` to `2` etc., to find all parts<br>F: <code>(first part|parts? 1)(?!\d)</code>

### Percival
- **percival parsing**: add parsing tags before headings containing scripture. Replace `Gen` with Bible book needed<br>F: <code>^(\s+)&#60;(h\d)&#62;(.\*?)(\d+):(.\*?)&#60;/\2&#62;</code><br>R: <code>&#60;span data-parsing=&#34;Gen.\4&#34;&#62;&#60;/span&#62;\n\1&#60;\2&#62;\3\4:\5&#60;/\2&#62;</code>

- **format existing scripture tags**: capture existing verse tags and convert them to `data-ref` format<br>F: <code>&#60;data(?: tag=&#34;auto-generated&#34;)\* ref=&#34;Bible&#91;&#94;:&#93;\&#42;:(\d\&#42;\s\&#42;&#91;a-z&#93;+)&#92;.\&#42; (\d+):(\d+)&#91;a-z&#93;\&#42;&#34;&#62;</code><br>R: <code>&#60;a data-ref=&#34;\1.\2.\3&#34;&#62;</code>

### Commentary Markup
- **headings `data-context`**: add `data-context` tags before headings. Adjust `h3` to capture desired heading<br>F: <code>^(\s+)&#60;(h3)&#62;(.\*?&#60;a data-ref=&#34;(.\*?)&#34;&#62;.\*?&#60;/a&#62;.\*?)&#60;/\2&#62;</code><br>R: <code>\1&#60;hr data-context=&#34;\4&#34; /&#62;\n\1&#60;\2&#62;\3&#60;/\2&#62;</code>

## Review
- **remove pagebreaks from headings**: find and replace to move pagebreaks out of headings<br>F: <code>(&#60;h\d&#62;.\*?)(&#60;span epub:type=&#34;pagebreak\[^>]\*&#62;&#60;/span&#62;)</code><br>R: <code>\2\1</code>
<blockquote>Example find: <br><code>&#60;h1&#62;&#60;span epub:type=&#34;pagebreak&#34; id=&#34;page1&#34; title=&#34;1&#34;&#62;&#60;/span&#62;Chapter 1&#60;/h1&#62;</code></blockquote>
- **remove space before footnote**: find and replace extra space before a footnote indicator<br>F: <code>\s&#60;sup class=&#34;fn&#34;</code><br>R: <code>&#60;sup class=&#34;fn&#34;</code>

- **special chars spacing**: find special characters with extra spacing on either side of it<br>F: <code>\s+(\&#123;|\&#36;|\&#38;|\,|\:|\;|\?|\@|\&#35;|\&#124;|\'|\&#60;|\&#62;|\&#45;|\^|\&#42;|\&#40;|\&#41;|\%|\&#33;|\&#93;|\&#34;|\”|\“)\s+</code><br>R: <code>\2 \1</code>
<blockquote>Example finds: <br><code> ( </code><br><code> : </code><br><code> $ </code></blockquote>
- **special chars spans**: review special characters in spans and replace the character without the span<br>F: <code>&#60;span&#91;&#94;&#62;&#93;&#62;(\&#123;|\&#36;|\&#38;|\,|\:|\;|\?|\@|\&#35;|\&#124;|\'|\.|\&#45;|\^|\&#40;|\&#41;|\%|\&#33;|\&#93;|\&#34;|\”|\“|\—)+&#60;/span&#62;</code><br>R: <code>\1</code>
<blockquote>Example finds: <br><code>&#60;span class=&#34;i&#34;&#62;)&#60;/span&#62;</code><br><code>&#60;span class=&#34;b&#34;&#62;.&#60;/span&#62;</code></blockquote>
- **non-english chars spans**: review non-english characters in spans that could be tagged as `lang`<br>F: <code>&#60;span class=&#34;i(?:talic)?&#34;&#62;(\[^a-zA-Z0-9\s]+)&#60;/span&#62;</code>

- **missed verses**: Find digits with a colon in between and no tag that could potentially be missed scripture verses<br>F: <code>(?&#60;!&#60;/abbr&#62;|&#60;/span&#62;)(?&#60;!'&#62;|\[a-z]|\d|.)(?:(| )\d+:\d{1,2}(?!&#60;/a&#62;)</code>
<blockquote>Example finds: <br><code>106:9</code><br><code>10:10</code></blockquote>