---
title: Particular Projects
---
That's right. Particular. Special. Unique. Like a snowflake.

## LESSON<em>maker</em> Content

\> See Recommended Code for [Lesson<em>maker</em> Content](/code/data_types.html#LESSONmaker-Content)

LESSON<em>maker</em> is a feature in Wordsearch desktop enabling users to quickly create lessons by entering a Bible passage or topic, and selecting from the lesson materials they have in their library. It is intended for responsive devotionals or study guides that specifically focus on passages or books of Scripture.

Here's a short explanatory video outlining LESSON<em>maker</em> features:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PDQ9-2Tul4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
<aside class="notice">
Project volumes intended to have LESSON<em>maker</em> content will most likely be in the "Lessons" category and have a type of "Lesson" specified in **crossrc.json**.

However, volumes in other categories can have LESSON<em>maker</em> content, but in order to work with Wordsearch's LESSON<em>maker</em> features, the book must be compiled with the "Lesson" type.
</aside> 

There are three things to think about for LESSON<em>maker</em> content:
- Scripture passages and references
- Topics
- Main content and questions

What **Scripture passages and references** a lesson covers will be automatically detected from the tagged Scripture references within the content. No additional markup is necessary. However, it is good to take note of what is the primary passage of Scripture on which the lesson focuses. This will help with identifying topics and main content to specify.

The **Topics** a lesson covers are not automatically identified by Wordsearch, and should be [specifically included in the code](/code/data_types.html#Lesson-Topics). For many lessons, gleaning the topics from the text of the main heading and an introductory sentence/paragraph is sufficient. If the study has a topical index, it can be used to help discover topics covered in a lesson.

**Main (panic) content and questions** can be designated by adding a ['panic' data attribute](/code/data_types.html#Main-Panic-Lesson-Content-and-Questions). All such content can be quickly copied into the word processor using LESSON<em>maker</em>'s "Panic!" button. The user will also be given the option to choose other books in their library from which to include text that covers the verses discussed in the open lesson. If no content is designated as "panic", the "Panic!" button will copy the entire open lesson. If no Scripture references are tagged in the lesson, the "Panic!" button is disabled, regardless of whether there is "panic" content or not. Because of this functionality, **we recommend you consider designating content as "panic" if it relates directly to the central Scripture verse(s) or passage(s) covered in the lesson, and focuses on textual analysis or themes** (rather than feelings or experiential connections of the reader).

When viewed in Wordsearch, content marked in this way will have an asterisk (\*) in the left margin. Here is an example from *Adult Questions for LESSONmaker*

![Panic button questions](/assets/images/uploads/panic-questions.png)

## Workbook Enhancements (In Content Platform)

\> See Recommended Code for [Workbook Questions and Answers](/code/data_types.html#Workbook-Questions-and-Answers)

Workbook enhancements are a feature in Content Platform (Wordsearch web app), and can be used wherever it is desirable to give the user a text box in which to record their answer to a specific question.

Here's an example of a Workbook-enhanced portion in an ePub:

![Workbook enhancement user interface](/assets/images/uploads/workbook-enhancement.png)

For instructions on markup which will inform Content Platform where to index and display Workbook enhancements, see [Workbook Questions and Answers](/code/data_types.html#Workbook-Questions-and-Answers) in Recommended Code

We have established a shorthand-plus-script workflow to make adding workbook markup easier, see [expand-ws.js](https://github.com/bhdirect-ebooks/single-scripts/tree/master/expand-wb) for information.

For instructions on creating Workbook Enhancements using the CP Manager interface, see [Getting Started with Workbook Enhancements in Content Platform](https://docs.google.com/document/d/1PHt7vAiTYnLbqnVne_HH8RrRO16PZGkagGWd8FLG7W8/edit?usp=sharing)
