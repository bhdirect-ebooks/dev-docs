---
title: Review Process
---

Quality control is the best!

## Related Tools/Scripts

Install [stylecheck](https://github.com/bhdirect-ebooks/stylecheck): `sudo npm install -g @bhdirect/stylecheck`:

Use stylecheck (in `/dev/epub/isbn/`): `stylecheck me`

## Admin
### Developer

<aside class="caution"><strong>As the developer, it is your responsibility to ensure that the EPUBs you develop are completed according to the Style Guide by performing a thorough self-review.</strong>
<ul><li>Do not move a card into "Ready for Review" unless you have completed the entire review process on your own project.</li><li>Peer Review is meant to be a "second set of eyes" because humans make mistakes. It should not be used as an error catch-all for projects that are not fully-developed. That approach is disrespectful towards your fellow team members and their time.</li><li>Placing a card in "Ready for Review" means you affirm that development is complete and ready for delivery to paying customers!</li></ul></aside>

0. If the project passes a thorough self-review and you feel in good conscience that it is ready to be sold, move the Trello card to "Ready for Review"
1. Once the card is in "Review Issue Resolution," resolve issues with commits **using 1 commit for each issue**, [following the commit style guidelines](../code/git_commit.html).
2. When you are done with issue resolution, **move the card to "Ready for Review" (_not "In Review"_)**.

### Reviewer

1. Add yourself to the Harvest project and track time against "Review"
2. Add yourself to the Trello card and move it to "In Review"
3. Add any issues to the repo in GitHub ([20-second how-to GIF](../assets/images/githubissue.gif))
4. When complete (and if there are issues), move the card to "Review Issue Resolution"
5. If there are no issues (usually 2nd or later review), move the card to "Ready for Release"

### Checkpoint!

<aside class="warning">Make sure the EPUB passes EpubCheck and stylecheck before moving forward! If you are reviewing another developer's project, do not proceed with Review, and <strong>don't</strong> open issues in GitHub based on these tools. Simply move the Trello card to Review Issue Resolution and alert the developer.</aside>

## What to Look For

* **If any Structural or Markup Issues exist**, make sure they should. If any of them are issues that should have been addressed, follow the warning above and notify the developer.


* **Check all views in stylecheck** to ensure everything is on the up and up.
  * **TOC**: ensure the toc accurately reflects the structure of the book. Click on a few links and verify they point to the correct locations.
  * **Heading Outlines**: ensure each heading outline is correct.
  * **Lists**: ensure the lists render well and do not duplicate item indicators. _In the markup, make sure the `.none` class is used only where no item indicators are intended._
  * **Tables**: ensure tables render well in the smaller viewports provided by stylecheck. Look for anything out of sorts.
  * **Quotes**: look for anything out of sorts here. Ensure scripture quotes and normal blockquotes were each tagged appropriately.
  * **Asides**: look for anything out of sorts here. In general, asides should be brief and tangential. Long asides are an indication something should probably be tagged differently.