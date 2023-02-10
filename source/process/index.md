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
2. Anchor images in the text so that they are in the right place when you export the EPUB.
    1. Find your image in the Indesign document
    2. Click the little blue square in the upper right corner of the image and drag it to the place in the text where you want the image to be placed in the text.
    
    <aside class="notice">
    
    See [This short YouTube video](https://www.youtube.com/watch?v=5eEp6uIIjII) for a visual demonstration.
    
    </aside>
3. Review the Paragraph and Character Styles
    1. Reviewing the paragraph styles will give you a good idea of what types of CSS classes you will need.
    2. Any styles that are not necessary (like "no_break", or "keep_together") can be removed in Indesign before exporting.
4. [Export as EPUB](https://helpx.adobe.com/indesign/using/export-content-epub-cc.html#export-to-epub) (<kbd>&#8984;E</kbd>)
    1. Under General, make sure Version is set to "EPUB 3.0"
    2. Under General, set Cover to "None"
    3. Under Text > Options, check "Remove Forced Line Breaks"
    4. Under Text > Lists, set Bullets and Numbers to "Convert to Text"
    5. Under Conversion settings, set Format to "PNG" and resolution to 150 PPI
    6. Under HTML & CSS > Additional CSS, click "Add Style Sheet" and add epub3.css from your local machine
5. Unzip the .epub file that Indesign exported.  
	- [EPUB ZIP/UNZIP](/process/tools-setting-your-machine-and-software#ePub-Zip-Unzip-2-0-1)
	- [unzip-pub script](https://gist.github.com/codingChewie/fe194f5064084d15c6a562ede1487f85)
6. Rename the decompressed directory to the ISBN

## Step 2: Pull Metadata from Firebrand
1. Find the ISBN of the title (usually in JIRA or wherever the title was assigned to you).
2. Use the [Create Firebrand OPF](/assets/Downloads/Create_Firebrand_OPF.zip) Applescript to create content.opf. `Note:` *When using the Create Firebrand OPF script, use the ISBN-13 number for the ePub without dashes.
3. If the title is fixed-layout (such as a cookbook, coffee table book, and some children's books), add the [necessary tags](/code/opf_format.html#Fixed-Layout-MetaData) to the content.opf.
4. Review the [opf metadata style guide](/code/opf_format.html#OPF-Metadata) and ensure compliance

## Step 3: File Cleanup
1. Remove the following files completely (some will be added back later in a better format.)
	- META-INF/encryption.xml
	- OEBPS/cover.xhtml
	- OEBPS/toc.ncx
	- OEBPS/toc.xhtml
2. Rename the `/image/` directory to `/img/`
3. Copy all of the fonts from the `Document fonts` folder in the source files to the `/font/` directory
	- We do this because when Indesign exports an EPUB, it encrypts the fonts. We need the unencrypted fonts to move forward with development.
	- If any of the original fonts have been replaced with fonts found in the Universal Type Client, they can be collected from UTC.
	- If Adobe fonts are included in the ePub, they should remain encrypted, and the encryption.xml file is retained.
	- See the [Font Style Guide](/process/fonts.html) for more information

## Step 4: Export Cover Image from Indesign
1. Open the main cover indesign file
2. Export the cover page as a a JPG. (Be sure to follow the [Cover Image Style Guide](/code/structural_types.html#Cover-Image).)
3. Add the cover image to the [Content.opf manifest](/code/opf_format.html#Cover-Image-Manifest)

## Step 5: Export Title Page Image from Indesign
1. Open the main content indesign file
2. Export the title page as a PNG. (Be sure to follow the [Title Page Style Guide](/code/structural_types.html#Title-Page).)
3. Create the file `text/DS01_frontmatter01.xhtml` from the content file template
4. Add the image in a [full page `<div>`](/css_lib/figures.html#Full-Page-Image)
5. Be sure the titlepage image is [included in the OPF manifest](/code/opf_format.html#Image-Manifest)

## Step 6: Markup Cleanup
Indesign adds all kinds of CSS classes to the markup to do styling, but as with any auto-generated markup/CSS it's not written in the cleanest and most efficient way. We need to work through the content and clean up the extraneous CSS classes and markup tags.
- Separate each chapter of the content into `<section>` tags and files.
	- Each section should be put in it's own `DS02_chapterxx.xhtml` file so that page breaks render properly on all devices.
	- Each file's opening `<body>` tag should have an `epub:type` attribute with a value from the [EPUB Document Sections Style Guide](https://style.bhdirect-ebooks.org/code/semantics.html#Document-Sections).
- If there are `<p>` tags that are styled as headers, they should be re-formatted as `<h1-h6>` tags, following the [Headings Style Guide](https://style.bhdirect-ebooks.org/code/structural_types.html#Headings) (be sure to note the styles and keep what is needed retain the look of the header)
- Images should be exported from Indesign following the [Image Style Guide](/process/images.html)
- Tables should be formatted according to the [Table Style Guide](/code/general_types.html#Tables) and be added to the [list of tables](/code/navigation.html#toc-xhtml-List-of-Tables) in `toc.xhtml`
- Endnotes or footnotes should be formatted as links according to the [Notes Style Guide](/code/structural_types.html#Notes).
- Add page breaks to align the content with the print version. See the [Page Break Style Guide](/code/structural_types.html#Page-Breaks) for more details.
- Convert all symbols to numerical entities (see the [Entity References Style Guide](/code/html_style.html#Entity-References)).
- Use Regex to find and fix all [empty tags](/process/regex-library.html#Remove-Empty-Spans), [multiple spans](/process/regex-library.html#Span-Combine-1), and [self closing tags](/code/html_style.html#Self-Closing-Tags)
- [Add `format()`](/code/css_style.html#CSS-Font-Declarations) to all CSS font definitions
- Find and remove any `CharOverride` and `ParaOverride` classes in the xhtml
- Remove unused CSS (including the `CharOrverride` and `ParaOverride` rules)

## Step 7: Create the OPF Manifest and Spine
1. [List the font files used](/code/opf_format.html#Font-Manifest) in the manifest.
2. [List the CSS files used](/code/opf_format.html#CSS-Manifest) in the manifest.
3. [List the images used](/code/opf_format.html#Image-Manifest) (including [the cover](/code/opf_format.html#Cover-Image-Manifest)) in the manifest.
4. [List the text files used](/code/opf_format.html#Text-XHTML-Manifest) in the manifest.
5. [Add the navigation files](/code/opf_format.html#Navigation-Manifest) to the manifest
5. Populate the [`<spine>` tag](/code/opf_format.html#OPF-Spine) from the table of contents. (be sure to include the toc.xhtml).

## Step 8: Build the Table of Contents
1. Create a new `OEBPS/toc.xhtml` file from the [TOC template](/code/navigation.html#toc-xhtml)
2. Build a Table of Contents list in the `nav#toc` element.
	- See The [TOC Style Guide](/code/navigation.html#toc-xhtml)
3. Build a page list in the `nav[EPUB:type="page-list"]` element.
	- Every page number that exists in the print version should be included in this list and linked to the pagebreak in the content files.
	- See the [Page List Style Guide](/code/navigation.html#toc-xhtml-Page-List)
4. Add the [list of images](/code/navigation.html#toc-xhtml-List-of-Images) and [list of tables](/code/navigation.html#toc-xhtml-List-of-Tables)
5. Create a new `OEBPS/toc.ncx` file from the [NCX template](/code/navigation.html#toc-ncx)
6. Fill in the meta data in `OEBPS/toc.ncx`
7. Use the Table of Contents list to [build the `<navMap>`](/code/navigation.html#toc-ncx)

## Step 9: Package your EPUB
1. Zip your EPUB using your method of choice.
	- [EPUB ZIP/UNZIP](https://style.bhdirect-ebooks.org/process/tools-setting-your-machine-and-software#ePub-Zip-Unzip-2-0-1)
	- [EPUB zipper](https://github.com/epubknowledge/scripts/tree/main/guidelines/epub-zipper)  
2. Validate your EPUB using [EPUB checker](https://lifewaychristianresources.sharepoint.com/:u:/s/PETMicrosoftTestTeam/EamNiErSJoVIig_-X-uwVhAB0Iy06FANtEXZTxF2KdLkbg?e=WJqAFt)
3. Run additional validation on your EPUB with FlightDeck (Access FlightDeck through the FireBrand record for the title)

<details close>
	<summary><strong>Optional</strong>: Create a CHO version of the EPUB</summary>
	<ol>
		<li>Copy the EPUB directory and rename to the CHO version ISBN</li>
		<li>Replace the ISBN in all locations in the EPUB (content.opf, toc.ncx, copyright page, etc.)</li>
		<li>Make sure that the LIN is listed properly on the copyright page</li>
		<li>Zip the CHO version as a separate EPUB to upload</li>
	</ol>
</details>


## Step 10: Prepare Additional Files and Upload
1. Prepare any additional files listed in the current [Deliverables Style Guide](/process/deliverables.html)
2. Upload files to Alfresco
	- See the [suggested directory](https://epubknowledge.com/docs/file-structure#uploading-source-files) structure for uploading

<details close>
	<summary><strong>Optional</strong>: Add Content Platform (CP) enhancements</summary>
	<ol>
		<li>Login to Content Platform with your LifeWay ID using the following URL: <a href="https://content.lifeway.com/">https://content.lifeway.com/</a> (Must be on VPN)</li>
		<li>Search for the specific title by ISBN, GUID, LIN, or Title using the search box/drop-down in the top left of the screen. <img src="/assets/images/contentplatform/image3.png" alt="Search Feature" /></li>
		<li>Click on the title needing enhancement and select the <em>Enhance Content</em> button from the modal window. <img src="/assets/images/contentplatform/image6.png" alt="Enhance Content Button" /></li>
		<li>A new browser window will open displaying the ePub itself with options at the top. Begin by selecting <em>Workbook</em> from the drop-down menu. <img src="/assets/images/contentplatform/image2.png" alt="Index Dropdown" /></li>
		<li>Next, choose the chapter that you want to begin enhancing by using the TOC on the left. When you’re ready to begin, click the rectangular button next to the drop-down menu. <img src="/assets/images/contentplatform/image1.png" alt="Question Button" /></li>
		<li>To create a workbook enhancement, select a question in the body of the text. Once the text is selected a new modal window will appear on the left side of the screen. Click the Save button and an icon will appear after the selected text indicating a workbook enhancement has been added. <img src="/assets/images/contentplatform/image7.png" alt="Save Question Modal" /></li>
		<li>Once you’ve finished and are ready to move on to the next chapter, click the small rectangular icon next to the drop-down menu at the top. This will allow you to access the TOC to move to the next chapter needing enhancements. <img src="/assets/images/contentplatform/image1.png" alt="Add Question Button" /></li>
		<li>If you need to delete an individual enhancement, click on the enhancement icon in the body of the text and click <em>Delete</em>. The icon should no longer be visible in the content. <img src="/assets/images/contentplatform/image8.png" alt="Delete Question Button" /></li>
		<li>When all the enhancements have been made for a title, click the orange <em>Workbook</em> button (which is the drop-down). This should change the color to green indicating the status has successfully changed in Content Platform. <img src="/assets/images/contentplatform/image5.png" alt="Save Workbook Button" /></li>
	</ol>
</details>