# Style Guide

Code all index backmatter files to the following standard:

Sample:[skeletal_index.xhtml](https://api.nuclino.com/api/files/ceb81b1d-e4bb-48e9-97b5-58d558ae6cae)

![skeletal_index_guide.jpg](https://api.nuclino.com/api/files/f41539e3-3e87-4beb-ae7a-0c1c24652c60)

Before performing the conversion below, make sure you have a correct page-list in toc.xhtml, since epubindex uses it for creating hrefs.

# Converting to EPUB Indexes

[https://github.com/bhdirect-ebooks/epubindex](https://github.com/bhdirect-ebooks/epubindex)

* Open terminal and clone the above repo by entering: `git clone https://github.com/bhdirect-ebooks/epubindex`
* cd into /epubindex and run `sudo npm install -g` to install on your system
* Navigate into the directory of the EPUB for which you want to convert indexes
* All files in /OEBPS/text that contain '_index' in their filename will be processed and overwritten, so be sure to commit all changes before running epubindex
* Run by entering `epubindex` 
* You now should have valid epub index files.