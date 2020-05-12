---
title: Markup Content
---

![Tag all the things!](../assets/images/tagallthethings.jpg)

The question is not "How can I recreate this style?" but "What actually is this thing I'm looking at?"

## Related Tools/Scripts

### For code formatting

[PrettifyHTML.textfactory](https://cms.lifeway.com/share/page/site/bh-academic/document-details?nodeRef=workspace://SpacesStore/85d32d5c-4814-45ce-bcf9-e7e803ec4406) & [SourceFormat.profile](https://cms.lifeway.com/share/page/site/bh-academic/document-details?nodeRef=workspace://SpacesStore/b96d8d5b-bef0-4671-88fe-6dabba163419)

* Place the `.textfactory` file in Library --> Application Support --> BBEdit --> Text Filters
* Place the `.profile` file directly in Library --> Application Support --> BBEdit
* Run PrettifyHTML from within BBEdit (Text --> Apply Text Filter --> PrettifyHTML) *assigning a shortcut is recommended!

[prettify-all.scpt](https://cms.lifeway.com/share/page/site/bh-academic/document-details?nodeRef=workspace://SpacesStore/f4f2ca38-100d-4ba6-963f-04421d9532a1)

* This script to prettify every text file in an EPUB directory; use this after installing the above files.

### For changing heading case

Run `titlecase` to make all headings titlecase. Use `titlecase --help` for more options:

* Use `titlecase -1` to make only `<h1>s` titlecase. Continue incrementing the digit flag to titlecase headings up to `<h6>s`
* Use `titlecase -c` to choose which project ePubs on which to run `titlecase`
* Use `titlecase -all` to run on all ePubs in a project
* Use `titlecase -i` to include a comma-delimited list of ePubs on which to run

## Recommended Code

[Content Markup](../code/general_types.html) (all sections)
