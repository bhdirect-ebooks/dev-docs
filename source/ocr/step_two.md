---
title: Step Two
---
# Drawing Recognition Boxes

When Abbyy recognizes a document, it needs to know what parts of the image it should read. Drawing recognition boxes defines the areas for text and tables, as well as images, on each page.

## Text Boxes

Text boxes will define which sections of each page Abbyy attempts to recognize as text. Using the Draw Text Area tool in the upper left portion of the Image Window, draw boxes around areas of text. Text boxes will appear green.

## Tables

Table boxes will tell Abbyy which content it should read as tables. Tabular information is content which is displayed in columns and rows. Using the Draw Table Area tool in the upper left portion of the Image Window, draw a box around the entire table. Table boxes will appear blue. Once the box is drawn, click on the Analyze Table Structure button above the table box. Ensure that all distinct pieces of information are contained within their own cell. Some tables are so complex that Abbyy is not able to correctly draw all of the cell boundaries. The table tools accessible at the top of the table box give you the ability to manually draw new rows and columns, as well as edit existing cell boundaries.

## Images/Figures

We do not typically capture images/figures during the OCR process, the developers pull the images directly from the PDF. That being said, you cannot ignore images and capture along with the text. Abbyy will freak out and add all kinds of garbage to the text. Accordingly, draw your Text and Table boxes to exclude images. There is a cut box tool that allows you to cut out part of a box, in order to exclude unwanted non-text elements.
