---
title: Final EPUB Deliverables
---
Files should follow the below naming convention.
When a title is completed it should either be named by the **eISBN** or by the **LIN** if one is provided.
If neither eISBN or LIN are provided we are technically not to develop the title unless otherwise instructed by management.

## Reflowable Title Deliverables
- **eISBN.jpg**
- **eISBN.epub**
- **eISBN.pdf:** Print edition PDF with cover image inserted and named as _Cover_ and crop marks removed. If a PDF is not supplied do an export from the InDesign file and add the Cover and rename to Cover using Acrobat.
- **eISBN.docx:** export from the PDF and review because the Cover may have issues and need replacing

## Reflowable Title With Fixed Versions
In some instances a title may require a fixed layout version along with a reflowable version. If a title has a fixed version it must have an accompanying sample.
- **eISBN.jpg**
- **eISBN.epub**
- **eISBN_fixed_sample.epub**
- **eISBN_fixed.epub**

## Fixed Layout Title Deliverables
- **eISBN.jpg**
- **eISBN.epub**
- **eISBN_sample.epub**
- **eISBN.pdf:** Print edition PDF with cover image inserted and named as _Cover_ and crop marks removed. If a PDF is not supplied do an export from the InDesign file and add the Cover and rename to Cover using Acrobat.
- **eISBN.mobi** EPUB with [required additional metadata](/code/opf_format.html#FixedLayoutMetadata), converted to mobi format using kindlegen or Kindle Previewer

### Enhanced Deliverables <sup>(historically named iBooks in Alfresco)</sup>
- **eISBN_sample_enhanced.epub**
- **eISBN_enhanced.epub**
- **eISBN.pdf**
- **ISBN.epub:** ADE versions are image spreads in a XHTML file and are not supported on major platforms.

## Out of Print Titles
For old titles that are being converted from ePub 2.0 to 3.0 you will sometimes see a folder named _Old Files_ with a different ISBN which might be the print ISBN. For the folder named _Old Files_ search the ISBN in Firebrand to see if the asset has been marked as _Out of Print_. If the asset has been marked _Out of Print_ tag the Old Folder with `OP`. To tag a Folder `OP` go to **Edit Properties -> Tags -> Select**

### ePib
If a file and/or directory is named `.epib` this can be ignored. ePibs were specially built titles for _Barnes & Noble_ but they now support and ingest enhanced ePubs.
