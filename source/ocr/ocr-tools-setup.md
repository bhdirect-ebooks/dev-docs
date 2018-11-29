---
title: OCR Tools Setup
---
## Abbyy FineReader 14

System Requirements blah blah. Installation blah blah.

**Abbyy Settings**

Once Abbyy is open, select "Tools" from the bar at the top of the screen, then select "Options" from the drop down. The following screen will open:

![null](/assets/images/uploads/tools.options.png)

We will walk through the settings for the six tabs at the top: General, Image Processing, Languages, OCR, Format Settings, and Other.

_General_

The only setting we will look at on this tab is the first one: "When OCR Editor starts". Make sure "Open the last used OCR project" is selected.

_Image Processing_

Make sure the Image Processing selections are as follows:

![null](/assets/images/uploads/imageprocessing.png)

Then click the "Show Advanced Settings button at the bottom. Make sure your settings look like this:

![null](/assets/images/uploads/imageadvancedsettings.png)

_Languages_

Typically, we want to have the first option, _Automatically select OCR languages_, selected. You can choose which languages the OCR software uses in its automatic selection and add them to the list.  The _Specify OCR languages manually_ option is for special cases in which unusual languages (such as Biblical Greek) need to be recognized.

![null](/assets/images/uploads/toolslanguages.png)

_OCR_

Make sure the OCR settings are as follows:

![](/assets/images/uploads/toolsocr.png)

It is especially important that none of the boxes are selected in the **Detection of structural elements** section. If any of these boxes are checked, Abbyy will add unwanted structural elements to the document during the reading process, oftentimes making the document unreadable.

_Format Settings_

Make sure your Format Settings are as follows:

![](/assets/images/uploads/toolsformatting.png)

These setting dictate the type of file that is exported when the book is finished in Abbyy. Make sure the Document type on the left is set to DOC(X)/RTF/ODT. Pay special attention to the **Document layout** setting. Your Word file will not look right if it is not set to Formatted text.

**_Areas and Text_**

Make sure your Areas and Text settings appear as follows:

![](/assets/images/uploads/toolsareaandtext.png)

The **Font used to display plain text** is set to Times New Roman because it does the best job of displaying transliterations, Greek, and Hebrew. You can change the Font either here before recognizing the book, or in the Abbyy text editor after recognizing. In addition, you are free to change the Color: to any color you prefer. This will be the color that Abbyy uses to display text that it is not confident it read correctly.
