title: Review Process
---

Quality control is the best!

## Related Tools/Scripts

Install [stylecheck](https://github.com/bhdirect-ebooks/stylecheck): `sudo npm install -g @bhdirect/stylecheck`:

Use stylecheck (in `/dev/epub/isbn/`): `stylecheck me`

<aside class="caution"><strong>Remember to check for Scripture errors after running stylecheck (search for `error_`).</strong></aside>

## Admin
### Developer

<aside class="caution"><strong>As the developer, it is your responsibility to ensure that the EPUBs you develop are completed according to the Style Guide by performing a thorough self-review.</strong>
<ul><li>Do not move a card into "Ready for Review" unless you have completed the entire review process on your own project.</li><li>Peer Review is meant to be a "second set of eyes" because humans make mistakes. It should not be used as an error catch-all for projects that are not fully-developed. That approach is disrespectful towards your fellow team members and their time.</li><li>Placing a card in "Ready for Review" means you affirm that development is complete and ready for delivery to paying customers!</li></ul></aside>

0. If the project passes a thorough self-review and you feel in good conscience that it is ready to be sold, move the Trello card to "Ready for Review"
1. Once the card is in "Review Issue Resolution," resolve issues with commits **using 1 commit for each issue**, [following the commit style guidelines](../code/git_commit.html).
2. When you are done with issue resolution, **move the card to "Ready for Review" (_not "In Review"_)**.

### Reviewer

1. Add yourself to the Harvest project and track time against "Review"
2. Add yourself to the Trello card and move it to "In Review"
3. Add any issues to the repo in GitHub ([20-second how-to GIF](../assets/images/githubissue.gif))
4. When complete (and if there are issues), move the card to "Review Issue Resolution"
5. If there are no issues (usually 2nd or later review), move the card to "Ready for Release"

## What to Look For

See [Project Review Rubric](https://docs.google.com/document/d/1J1QP8AWLWvXdtBA10E6fKc_dagvOHtkVN6J5LqQFHjU/).

### Checkpoint!

<aside class="warning">Make sure the EPUB passes EpubCheck and stylecheck before moving forward! If you are reviewing another developer's project, do not proceed with Review, and <strong>don't</strong> open issues in GitHub based on these tools. Simply move the Trello card to Review Issue Resolution and alert the developer.</aside>

### Content.opf

1. `spine`
   * ensure the linear order is correct
   * ensure toc.xhtml is not at the top, but rather in its source location
2. `metadata`
   * check for all required meta elements (according to the style guide)
   * If journal, check for [Journal metadata](../code/metadata.html#Journal-Metadata)
   * If dictionary, check for [Dictionary metadata](../code/dictionaries.html#Dictionary-Metadata)
     * Also, check for [Search Key Map](../code/dictionaries.html#Search-Key-Map) in manifest and included in EPUB


### Code Choice

0. Search for un-fixed Scripture ref errors: `error_`
1. Check TOC stylecheck view ... ensure TOC renders correctly and represents source
2. Using stylecheck views, verify quality of
   * headings ... ensure correct semantic structure
   * lists ... check for appropriate nesting and ensure no duplication of list item indicators in the text.
   * tables ... appropriate widths, columns, look
3. Check hyperlinks
   * make sure internal linking is only by document + `id` (links to documents only will result in broken links upon conversion)
   * ensure non-pagebreak `id` attributes are coded like `<a id=""></a>` only
4. Check classes that are specific to certain elements
   * .full-width and .float-left or -right only with `<figure>` (or `<div>` with child `<figure>`s)
   * .h1-6 only on `<h2-6>`
   * .h1sub-h3sub only on `<p>`
   * .label only on `<span>` and only as child of `<h1>`
   * .pullquotec only with `<div>`
   * .pullquotel or r only with `<div>` or `<span>`
   * .poetry only with `<div>` or `<blockquote>`
   * .poem1-10 only with `<p>`
   * .scriptext only with `<blockquote>`
   * .verse only with `<sup>`
   * .versenum (only with `<span>`), .selah, & .bookname only in Bibles
5. Check `data-cross-...` attributes
   * search for `data-cross-(?!ref)` to find all non-ref data attributes in use and ensure they are used according to the style guide
   * check that the JSON values are formatted correctly (`'{"type":"data"}'`)
6. Check tables and media
   * make sure `<figure>`, `<table>`, and `<video>` code blocks have the right markup
   * make sure `<img>` elements include `alt` attributes and are in `<figure>` blocks (or *not* in `<figure>` blocks, if they carry no real meaning in the work itself)
7. Ensure proper code style is followed in all other types of content
   * abbreviation lists and `<abbr>` elements themselves
     * `<abbr>` should only have `title` attribute, no `class` or `id`
   * asides (with or without bridgeheads)
   * bibliographies
   * block quotes (normal and Scripture)
   * footnotes and footnote indicators (including all footnote content in note span)
     * Check for ibid
     * Exactly one `<p>` in footnote `<div>`
   * glossaries
   * indexes
   * pull quotes