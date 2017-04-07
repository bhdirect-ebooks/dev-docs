Quality control is the best!

# Related Tools/Scripts

Install [stylecheck](https://github.com/bhdirect-ebooks/stylecheck):

    cd && git clone git@github.com:bhdirect-ebooks/stylecheck.git && cd stylecheck
    sudo npm install -g
    [enter your network password]

Use stylecheck:

    cd [path/to/epub/directory]
    stylecheck me

Then check for Scripture errors; search for `error_`

# Admin

1. Add yourself to the Harvest project and track time against "Review"
2. Add yourself to the Trello card and move it to "In Review"
3. Add any issues to the repo in GitHub
4. When complete (and if there are issues), move the card to "Review Issue Resolution"
5. If there are no issues (usually 2nd or later review), move the card to "Ready for Release"

# What to Look For

[Review Rubric (Google Doc)](https://docs.google.com/a/lifeway.com/document/d/1J1QP8AWLWvXdtBA10E6fKc_dagvOHtkVN6J5LqQFHjU/edit?usp=sharing 'Sign in - Google Accountsundefined)

## Structure & Style (per volume)

1. Run through EPUB Checker
2. Run through stylecheck
3. Check file names and directory structure
   * Look for all required folders and files
4. Check cover image
   * must be named "cover.jpg" (not png)
   * must be at least 1333x2000
   * must be referenced in opf `metadata` as `<meta name="cover" content="cover.jpg" />`
   * must include `properties="cover-image"`in its opf `manifest` item
5. Check html quality of
   1. headings ... ensure correct semantic structure
   2. lists ... check for appropriate nesting and ensure all `<ol>` and `<ul>` have a class
   3. tables ... appropriate tagging
   4. no `<section>` or `<div>` tags without a `class` or `epub:type`
   5. no superfluous `id` attributes
6. Check that epub:types are used appropriately

## Navigation

1. Check toc.xhtml
   * ensure both `toc` nav and `page-list` nav are included according to the style guide
   * ensure toc matches source...
     * ***but***, toc should not be deeply nested; 2 to 3 levels are plenty to not overwhelm the UI
   * ensure no classes are used in any toc item text
   * each toc item should link to a document + page `id`
   * check that toc.xhtml renders correctly in a browser and nested lists are correct.
2. Check content.opf `spine`
   * ensure the linear order is correct
   * ensure toc.xhtml is not at the top, but rather in its source location

## Code Choice

1. Check content.opf `metadata`
   * check for all required meta elements and refining data (according to the style guide)
   * compare metadata to copyright page to ensure correct information
   * `<dc:rights>` must include escaped HTML, like `&#60;p&#62;All rights reserved.&#60/;p&#62;` (etc.), *not just plain text.*
2. Check pagebreaks
   * do they exist?
   * are they placed appropriately?
     * not in h1-6 but above
     * not breaking Scripture references
     * not as direct children of `<ol>`, `<ul>`, `<dl>`, or `<table>`
3. Check hyperlinks
   * (stylecheck reports external links)
   * make sure internal linking is only by document + page `id` (links to documents only will result in broken links upon conversion)
4. Check `data-cross-...` attributes
   * search for `data-cross-(?!ref)` to find all of our data attributes in use and ensure they are used according to the style guide
   * check that the JSON values are formatted correctly (`'{"type":"data"}'`)
   * make sure `<figure>`, `<table>`, and `<video>` code blocks have the right markup
   * make sure `<img>` elements include `alt` attributes and are in `<figure>` blocks (or *not* in `<figure>` blocks, if they carry no real meaning in the work itself)
5. Ensure proper code style is followed in all other types of content
   * abbreviation lists and `<abbr>` elements themselves
     * `<abbr>` should only have `title` attribute, no `class` or `id`
   * asides (with or without bridgeheads)
   * bibliographies
   * block quotes (normal and Scripture)
   * footnotes and footnote indicators
   * glossaries
   * indexes
   * pull quotes
6. Look for tags that should be present in specific types of content (refer to [Dev Process Overview](https://app.nuclino.com/teams/13:24051/documents/a033da7f-f6fa-4a11-9ce5-b1cce71f85ae), "On Particular Projects")

## Rendered Content

1. Preview some things in the browser (tables, lists, images)
2. Zip to EPUB and check in iBooks
   * check UI TOC button to ensure toc correctness
   * click from TOC to several chapters to test navigation
   * click several footnotes to ensure functionality
   * skim/scan for anomalies or weird rendering