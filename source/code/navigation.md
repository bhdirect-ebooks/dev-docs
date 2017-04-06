# Navigation Document

```html
<body>
  <nav>
    <h1>Title</h1>
    <ol>
      <li><a></a></li>
    </ol>
  </nav>
</body>
```

All navigational aids are located within the <code>&#60;body&#62;</code> of the navigation document (toc.xhtml for our EPUB projects). Each one is an ordered list (<code>&#60;ol&#62;</code>) of hyperlinks nested in a <code>&#60;nav&#62;</code> element.

## Table of Contents

```html
<nav epub:type="toc" id="toc">
  <h1>Table of Contents</h1>
  <ol id="tocList">
    <!-- <li> elements with <a>, linking to each location -->
    <!-- with additional nested lists as the TOC requires. -->
  </ol>
</nav>
```

Each EPUB we develop must have a TOC in the navigation document.

The EPUB TOC should always reflect the printed TOC.

## LOA, LOI, LOT, LOV

```html
<nav epub:type="loi" id="loi">
  <h1>[Maps, Photos, etc.]</h1>
  <ol id="figureList">
    <!-- <li> with <a> for each corresponding <figure> -->
  </ol>
</nav>

<nav epub:type="lot" id="lot">
  <h1>Tables</h1>
  <ol id="tableList">
    <!-- <li> with <a> for each <table>* -->
    <!-- *This should only include the tables used
         for illustration purposes in the work itself,
         not those added merely for presentation. -->
  </ol>
</nav>

<nav epub:type="lov" id="lov">
  <h1>Videos</h1>
  <ol id="videoList">
    <!-- <li> with <a> for each <video> -->
  </ol>
</nav>

<nav epub:type="loa" id="loa">
  <h1>Audio</h1>
  <ol id="audioList">
    <!-- <li> with <a> for each <audio> -->
  </ol>
</nav>
```

Lists of all audio clips, figures, tables, and videos in the document receive their own navigation sections within the navigation document. Only those that apply to the document should be included.