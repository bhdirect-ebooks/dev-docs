---
title: Git and GitHub
---

Get yourself right with Git.

Recommended free course: [How to Use Git and GitHub](https://www.udacity.com/course/how-to-use-git-and-github--ud775)

## Commit

If you add any files to the directory, you'll need to add them to tracking ***before*** you commit:

```plain
git add --all
```

You can't really commit too much, so commit often (once per logical set of changes is a good rule of thumb). You will likely commit multiple times per hour.

See our [Git commit message guidelines](../code/git_commit.html).

```plain
git commit -am "commit message here"
```

## Push

A push will upload your local Git repo to its remote counterpart. You do not need to push every time you commit. Make a habit of pushing your repo at least once or twice each work day.

```plain
git push origin master
```

## For reference
***(no longer necessary with the latest process)***

### Create a local repo

Initialize the repo and make your first commit.

```plain
git init
git add --all
git commit -am "initial commit"
```

### Create a remote repo in GitHub

1. Navigate to [https://github.com/bhdirect-ebooks](https://github.com/bhdirect-ebooks)
2. Click the green "New" button
3. Repository name:
   * Volume: 13-digit EPUB ISBN
   * Set: set short name
4. Description: full title of the volume or set
5. Select "Private"
6. Click "Create repository"

### Add the remote to the local repo and push

```plain
git remote add origin (the remote repo url)
git push origin master
```

### Before using (only needed once)

1. Create a `.gitignore` file in your home directory (`\~/`)
2. Then, add a line with ".DS_Store" without the quotes to that file
3. In your terminal, enter

```plain
git config --global core.excludesfile \~/.gitignore
```
