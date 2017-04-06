# Constructing an EPUB

## File Naming Conventions

Name the EPUB project files and folders according to the following conventions.

<table>
  <thead>
    <tr>
      <th>File/Folder</th>
      <th>Naming Convention</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Root project folder</td>
      <td>ISBN-13</td>
    </tr>
    <tr>
      <td>EPUB package and container files</td>
      <td>Use the conventions shown in the Directory Structure section below.</td>
    </tr>
    <tr>
      <td>Fonts</td>
      <td>Include all default style sheet fonts.</td>
    </tr>
    <tr>
      <td>Images</td>
      <td>Include one cover image (1333x2000), named cover.jpg, along with all book images and video poster SVGs. <em>Also make sure to include "video.svg."</em></td>
    </tr>
    <tr>
      <td>Styles</td>
      <td>Include <em>only</em> fonts.css, mywsb.css, and bookstyles.css.</td>
    </tr>
    <tr>
      <td>Videos</td>
      <td>Include one XHTML document with video markup <strong>for each glossary video only</strong>.</td>
    </tr>
    <tr>
      <td>Text</td>
      <td>
        Each XHTML file should be named with:
        <ol class="digit">
          <li>Short name</li>
          <li>One of five numbers expressing order:
            <ul>
              <li>01 = frontmatter</li>
              <li>02 = bodymatter (named chapterXX)</li>
              <li>03 = backmatter</li>
              <li>04 = notes</li>
              <li>05 = glossary</li>
            </ul>
          </li>
          <li>Section name as shown by example below</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Text: Front Matter</td>
      <td>
        ShortName01_frontmatter01_cover.xhtml
        <br />
        ShortName01_frontmatter02_titlepage.xhtml
        <br />
        ShortName01_frontmatter03_copyright-page.xhtml
        <br />
        ShortName01_frontmatter04_xyz.xhtml (etc.)
        <br /><br />
        <em>Sections 01-03 should be in every EPUB. The numbers should then be sequential from that point forward, and the name that follows the number should correspond to the epub:type in the document.</em>
        <br />
        <em>Exception: name abbreviation documents "abbr" rather than "glossary."</em>
      </td>
    </tr>
    <tr>
      <td>Text: Main Content</td>
      <td>
        ShortName02_chapter01.xhtml
        <br />
        ShortName02_chapter02.xhtml
        <br />
        ShortName02_chapter03.xhtml (etc.)
      </td>
    </tr>
    <tr>
      <td>Text: Back Matter</td>
      <td>
        ShortName03_backmatter01_xyz.xhtml (etc.)
        <br /><br />
        <em>As with frontmatter, backmatter section numbers should be sequential, starting with 01, and the name that follows the number should correspond to the epub:type in the document.</em>
      </td>
    </tr>
    <tr>
      <td>
        Text: Notes
      </td>
      <td>
        ShortName04_notes.xhtml
        <br /><br />
        <em>All notes will be placed in notes.</em>
      </td>
    </tr>
    <tr>
      <td>
        Text: Glossary
      </td>
      <td>
        ShortName05_glossary.xhtml
        <br /><br />
        <em>All glossaries (not abbreviations) will be placed in the glossary document.</em>
      </td>
    </tr>
  </tbody>
</table>

## Directory Structure

> The [latest styleguide-aligned EPUB container](https://gitlab.com/bhdirect-ebooks/epub-container) is always available on GitLab.

Use the following directory structure for each EPUB:

![Screen shot of the correct directory structure.](images/dir-struct.png)

## Package and Container Files

The primary package and container files are referenced here in their expected basic forms, but it is beyond the scope of this documentation to describe the EPUB specification in detail. For a better understanding of EPUB and related specifications, please use the [documents available to the team in Alfresco](https://cms.lifeway.com/share/page/site/bh-academic/folder-details?nodeRef=workspace://SpacesStore/72fd3c44-683e-4532-974e-458e8c87f0ca).

### mimetype

The mimetype doc is the same for every EPUB we develop: <code class="inline">application/epub+zip</code>.

### container.xml

```xml
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
```

The container.xml is also the same for every EPUB.

### content.opf

> See a [content.opf](https://gitlab.com/snippets/26987) snippet on GitLab.

The content.opf is linked here in its basic form without metadata elements. For information on <code>metadata</code>, see the [Metadata Markup](#metadata).

Metadata and included files will vary from one publication to the next, but this snippet gives a good overview of the form.

***Every content file in the EPUB package must be referenced in the manifest.***

### toc.xhtml

> See a [toc.xhtml](https://gitlab.com/snippets/26989) snippet on GitLab.

The toc.xhtml is the navigation document for the EPUBs we develop. The children of <code>&#60;body&#62;</code> must be <code>&#60;nav&#62;</code> elements.

The linked code snippet shows the basic form. See [Navigation Document](#navigation-document), for necessary specifics.