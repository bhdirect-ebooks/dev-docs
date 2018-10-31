---
title: Convert & Upload
---
Once a title has made it through the entire development process and has passed peer review, congrats! It's time to convert and upload files so that they are one step closer to availability in Wordsearch and <https://app.wordsearchbible.com/>.

## Avoiding Issues During Conversion/Upload in VMWare (Windows)

VMWare Fusion is what our team uses to simulate the Windows environment, which is necessary for running Wordsearch and reviewing titles therein. 

Working in the VMWare environment can be a bit tricky. Below are a few steps for avoiding obstacles that deal with permissions and other scripting requirements.

1. First, before opening VWWare, log into the Cisco AnyConnect VPN on your Mac-side.
2. Next, open the VMWare environment (for setting up VMWare and other Windows-side programs, check this [Google Doc](https://docs.google.com/document/d/1FCB8IKsH9g0CzzPEqyoobgxX2euKk-bVAxDnywGRIuA/edit?usp=sharing)).
3. Next, sign in to the Windows-side CiscoAnyConnect.
4. And finally, open the browser (Windows-side) and use your sign in credentials to sign in to: [lifeway.okta.com](https://lifeway.okta.com/)
5. Finally, sign in (Windows-side) to the <https://app.wordsearchbible.com> with these credentials: 

* user: admin@msb.com
* pass: godspow3r

(In the even that VMWare locks up, it often helps to log out of VPN, and redo the steps above).

<hr />

## The Basic Upload Process

**1. **In the command line ("Mac-side"), `cd` into project (must be in `~/Documents/EPUB Projects/[project-name]`)

**2. **With the project directory (Mac-side), run **`update-project`** _(**purpose**: this will update a project's metadata and other pertinent details_).

**3. **While still in the project directory (Mac-side), run **`npm run build`** in the command line _(**purpose**: this script builds, from the EPUB, a variety of files which are necessary for upload and distribution in Lifeway's platforms)_. 

**4. **\[Follow steps above to open/log-in properly to VMWare]

**5a. **Within the VMWare (or "Windows-side"), open the command line and `cd` into the project directory. Run **`npm run compile`. **Next, open the title in Wordsearch and check for heading/structure/markup issues. _(**purpose**: this takes the 'cross' files created from 'npm run build' and compiles them for use as a Wordsearch title)_.

** 5b.** (Skip this step if there were no issues with the title in Wordsearch). If needed, make necessary changes on the Mac-side in the /dev folder, and then repeat (Mac-side) **`npm run build`**, then (Windows-side) **`npm run compile`, **and re-check the title.

When the title looks good in Wordsearch on the Windows-side, you can...

**6. **Run **`npm run moveit`** within the Windows-side project directory.

**7.** Then on the Mac-side in the project directory, run **`npm run upload`** so that the files are moved to Content Platform and the Wordsearch library.

**8. Move the Scene7 image to the 'Images to Scene7' (no longer adding this to the _Automation>Scene7 folder) directory in Alfresco.

<hr />

## The process in action...

The video below gives a play-by-play of a typical conversion & upload.

[Notes](https://docs.google.com/document/d/1SKd2fDSqLkvqHil_4lCacR8y5F0ms-JzYy308O7D2sg/edit#heading=h.oe8txcg3fgbe)

<iframe width="560" height="315" src="https://www.youtube.com/embed/DTfFtJwO3FY" frameborder="0" allowfullscreen></iframe>

<hr />

## Partial

Occasionally you may need to upload an additional title/volume to a set which was previously converted & uploaded. The video below details steps to take in that instance.

<iframe width="560" height="315" src="https://www.youtube.com/embed/G3udL6Rrkco" frameborder="0" allowfullscreen></iframe>

<hr />

## Content Platform

Once files have successfuly been converted and uploaded to Content Platform (CP), it's time to sign-in to CP (<https://content.lifeway.com/>)  and finalize the addition of the title to the CP library.

##
