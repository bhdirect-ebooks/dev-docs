---
title: OCR Tools Setup
---
## Abbyy FineReader 14

The first you need to do is install Abbyy FireReader 14. The OCR Team Lead will give you an Abbyy installation file. 1341_9_ABBYY_FineReader_14_Trial_US.exe will install a trial version of Abbyy 14 on your Windows PC (or Windows emulator on your MacBook. You will be provided with an installation key which will unlock the full version of the software.

**Abbyy Settings**

Once Abbyy is open, select "Tools" from the bar at the top of the screen, then select "Options" from the drop down. The following screen will open:

![null](/assets/images/uploads/tools.options.png)

We will walk through the settings for the six tabs at the top: General, Image Processing, Languages, OCR, Format Settings, and Other.

_**General**_

The only setting we will look at on this tab is the first one: "When OCR Editor starts". Make sure "Open the last used OCR project" is selected.

_**Image Processing**_

Make sure the Image Processing selections are as follows:

![null](/assets/images/uploads/imageprocessing.png)

Then click the "Show Advanced Settings button at the bottom. Make sure your settings look like this:

![null](/assets/images/uploads/imageadvancedsettings.png)

_**Languages**_

Typically, we want to have the first option, _Automatically select OCR languages_, selected. You can choose which languages the OCR software uses in its automatic selection and add them to the list.  The _Specify OCR languages manually_ option is for special cases in which unusual languages (such as Biblical Greek) need to be recognized.

![null](/assets/images/uploads/toolslanguages.png)

_**OCR**_

Make sure the OCR settings are as follows:

![null](/assets/images/uploads/toolsocr.png)

It is especially important that none of the boxes are selected in the _Detection of structural elements_ section. If any of these boxes are checked, Abbyy will add unwanted structural elements to the document during the reading process, oftentimes making the document unreadable.

_**Format Settings**_

Make sure your Format Settings are as follows:

![null](/assets/images/uploads/toolsformatting.png)

These setting dictate the type of file that is exported when the book is finished in Abbyy. Make sure the Document type on the left is set to DOC(X)/RTF/ODT. Pay special attention to the _Document layout_ setting. Your Word file will not look right if it is not set to Formatted text.

_**Areas and Text**_

Make sure your Areas and Text settings appear as follows:

![null](/assets/images/uploads/toolsareaandtext.png)

The _Font used to display plain text_ is set to Times New Roman because it does the best job of displaying transliterations, Greek, and Hebrew. You can change the Font either here before recognizing the book, or in the Abbyy text editor after recognizing. In addition, you are free to change the Color: to any color you prefer. This will be the color that Abbyy uses to display text that it is not confident it read correctly.

**_Other_**

The only setting that you will likely need to change here is in the _Check for program updates_ section. I suggest you have the _Download and install updates without warnings_ item unchecked. There have been times in the past where we suspected updates caused issues in books, so manually installing updates at least alerts you to that possibility.
