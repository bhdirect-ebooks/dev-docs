---
title: Getting Started
---
<hr />

## Introduction: What is an EPUB?
An EPUB is a collection of content, distributed as a single file [using ZIP format](https://www.w3.org/publishing/EPUB32/EPUB-overview.html#sec-container).  
See the official [W3C EPUB 3 Overview document](https://www.w3.org/publishing/EPUB32/EPUB-overview.html) for a more in-depth overview.

<hr />

## Step 1: Export EPUB from Indesign
1. Open the main title contents indd file in Indesign
2. [Export as EPUB](https://helpx.adobe.com/indesign/using/export-content-epub-cc.html#export-to-epub)  
3. Unzip the .epub file that Indesign exported.  
	- [EPUB ZIP/UNZIP](/process/tools-setting-your-machine-and-software#ePub-Zip-Unzip-2-0-1)
	- [unzip-pub script](https://gist.github.com/codingChewie/fe194f5064084d15c6a562ede1487f85)
4. Rename the decompressed directory to the ISBN

## Step 2: Pull Metadata from Firebrand
1. Find the ISBN of the title (usually in JIRA or wherever the title was assigned to you).
2. Use the [firebrand-fetch script](https://github.com/EPUBknowledge/firebrand-fetch) to create content.opf
3. Review the [opf metadata style guide](/code/opf_format.html#OPF-Metadata) and ensure compliance

## Step 3: File Cleanup
1. Remove the following files completely (some will be added back later in a better format.)
	- META-INF/encryption.xml
	- OEBPS/cover.xhtml
	- OEBPS/toc.ncx
	- OEBPS/toc.xhtml
2. Rename the `/image/` directory to `/img/`
3. Copy all of the fonts from the `Document fonts` folder in the source files to the `/fonts/` directory
	- We do this because when Indesign exports an EPUB, it encrypts the fonts. We need the unencrypted fonts to move forward with development.
	- See the [Font Style Guide](/process/fonts.html) for more information

## Step 4: Export Cover Image from Indesign
1. Open the main cover indesign file
2. Export the cover page as a a JPG. (Be sure to follow the [Cover Image Style Guide](/code/structural_types.html#Cover-Image).)
3. Add the cover image to the [Content.opf manifest](/code/opf_format.html#OPF-Manifest)

## Step 5: Export Title Page Image from Indesign
1. Open the main content indesign file
2. Export the title page as a PNG. (Be sure to follow the [Title Page Style Guide](https://EPUBknowledge.com/docs/titlepage).)
3. Create the file `text/DS01_frontmatter01.xhtml` from the content file template
4. Add the image in a [full page `<div>`](https://epubknowledge.com/docs/fullpage)
5. Be sure the titlepage image is [included in the OPF manifest](https://EPUBknowledge.com/docs/opf-manifest#images)

## Step 6: Markup Cleanup
Indesign adds all kinds of CSS classes to the markup to do styling, but as with any auto-generated markup/CSS it's not written in the cleanest and most efficient way. We need to work through the content and clean up the extraneous CSS classes and markup tags.
- Separate each chapter of the content into `<section>` tags and files.
	- Each section should be put in it's own `DS02_chapterxx.xhtml` file so that page breaks render properly on all devices.
	- Each file's opening `<body>` tag should have an `epub:type` attribute with a value from the [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/)
- If there are `<p>` tags that are styled as headers, they should be re-formatted as `<h1-h6>` tags, following the [Headings Style Guide](https://style.bhdirect-ebooks.org/code/structural_types.html#Headings) (be sure to note the styles and keep what is needed retain the look of the header)
- Tables should be formatted according to the [Table Style Guide](https://epubknowledge.com/docs/table) and be added to the [list of tables](https://EPUBknowledge.com/docs/toc#list-of-tables) in `toc.xhtml`
- Endnotes or footnotes should be formatted as links according to the [Notes Style Guide](https://epubknowledge.com/docs/notes).
<!--- A set of regex substitutions should be run to resolve common markup problems (empty tags, etc.).  
**TODO**: Build a list of common markup issues that are generic enough to apply to all EPUBs (including entity code replacements).-->
- Add page breaks to align the content with the print version. See the [page break style guide](https://EPUBknowledge.com/docs/pagebreak) for more details.
- Convert all symbols to numerical entities (see the [entity style guide](/code/html_style.html#Entity-References)).
- Use Regex to find and fix all [empty tags](https://epubknowledge.com/docs/xhtml-general#empty-span), [multiple spans](https://epubknowledge.com/docs/xhtml-general#multiple-span), and [self closing tags](https://epubknowledge.com/docs/xhtml-general#self-closing-tags)
- [Add `format()`](https://EPUBknowledge.com/docs/opentype#css) to all CSS font definitions
- Remove unused CSS

## Step 7: Create the OPF Manifest and Spine
1. [List the font files used](https://EPUBknowledge.com/docs/opf-manifest#fonts) in the manifest.
2. [List the CSS files used](https://EPUBknowledge.com/docs/opf-manifest#css) in the manifest.
3. [List the images used](https://EPUBknowledge.com/docs/opf-manifest#images) (including [the cover](https://EPUBknowledge.com/docs/opf-manifest#cover)) in the manifest.
4. [List the text files used](https://EPUBknowledge.com/docs/opf-manifest#xhtml) in the manifest.
5. [Add the navigation files](https://EPUBknowledge.com/docs/opf-manifest#navigation) to the manifest
5. The `<spine>` tag determines the order in which the content files are rendered in the final EPUB. [Populate it from the text entries in the manifest](https://EPUBknowledge.com/docs/opf-spine/) (be sure to include the toc.xhtml).

## Step 8: Build the Table of Contents
1. Create a new `OEBPS/toc.xhtml` file from the [TOC template](https://EPUBknowledge.com/docs/toc#template)
2. Build a Table of Contents list in the `nav#toc` element.
	- See The [TOC Style Guide](https://EPUBknowledge.com/docs/toc#toc)
3. Build a page list in the `nav[EPUB:type="page-list"]` element.
	- Every page number that exists in the print version should be included in this list and linked to the pagebreak in the content files.
	- See the [Page List Style Guide](https://EPUBknowledge.com/docs/toc#page-list)
4. Add the [list of images](https://EPUBknowledge.com/docs/toc#list-of-images) and [list of tables](https://EPUBknowledge.com/docs/toc#list-of-tables)
5. Create a new `OEBPS/toc.ncx` file from the [NCX template](https://EPUBknowledge.com/docs/ncx)
6. Fill in the meta data in `OEBPS/toc.ncx`
7. Use the Table of Contents list to [generate the `<navMap>`](https://EPUBknowledge.com/docs/ncx)

## Step 9: Package your EPUB
1. Zip your EPUB using your method of choice.
	- [EPUB ZIP/UNZIP](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#ePub-Zip-Unzip-2-0-1)
	- [EPUB zipper](https://github.com/epubknowledge/scripts/tree/main/guidelines/epub-zipper)  
	<!-- **TODO**: Standardize the suggested method of packaging.  -->
2. Validate your EPUB using [EPUB checker](https://github.com/epubknowledge/scripts/tree/main/guidelines/epub-checker)
3. Run additional validation on your EPUB with FlightDeck (Access FlightDeck through the FireBrand record for the title)

## Step 10: Prepare Additional Files and Upload
1. Prepare any additional files listed in the current [Deliverables Style Guide](https://epubknowledge.com/docs/deliverables#reflowable-title)
2. Upload files to Alfresco
	- See the [suggested directory](https://epubknowledge.com/docs/file-structure#uploading-source-files) structure for uploading