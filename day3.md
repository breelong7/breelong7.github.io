# Learning Journal Day 2 - June 19, 2019

This is my learning journal from day 3! Shocked I made it this far to be honest..

## My guide to Git

Git is a distributed version control system (DCVS allows clients to create mirrored repositories to allow greater collaboration efforts). Git relies on local operations which allows for a quick process and the option to continue your work offline.

Files in Git can reside in three main states: committed, modified and staged.

Committed
Data is securely stored in a local database

Modified
File has been changed but not committed to the database

Staged
Flagged a file’s changed version to be committed in the next snapshot

**The local Git repository has three components:**

1. Working Directory: The actual files reside here.
2. Index: The area used for staging
3. Head: Points to the most recent commit

**The Lifecycle of a file status**

1. After you edit a file, Git flags it as modified because of changes made after the previous commit.
2. You stage the modified file.
3. Then, you commit staged changes.

**Check File Status**
To determine the state of files, utilize the git status command:

$ git status
On branch master
nothing to commit, working directory clean

**Tracking and staging a new file**
Single File
Track one file only by using the following format:

git add filename
All Files
Track all files in a repository by using the following command:

$ git add *

**Committing a file**
After staging one or multiple files, you should commit the changes and record what you did within the commit message:

$ git commit -m “made change x,y,z”

Commit all changes
$ git commit -a

Pushing changes
Next, you would push changes to a remote repository. We will discuss remote repositories in more depth in the next section. For now, we will look at a general overview of pushing changes to remotes.

Example:

$ git push origin master

**Git Stash**
When you are not ready to commit changes but do not want to lose them either, git stash is a great option. This command temporarily removes changes and hides them, giving you a clean working directory.

**Fetching**
Fetching entails pulling data that you don’t have from a remote project. git fetch [remote-name]

**Pushing**
To push your changes “upstream” for sharing, you would use the following git push command format:
git push [remote-name][branch-name]

**Renaming**

To rename a remote’s short name, use the git remote rename command.

Example:

$ git remote rename js jane
$ git remote
origin
jane

**Removing**

 remove a remote for whatever reason (e.g., a contributor has left the team, the server has moved), simply use the git remote rm command:

Example:

$ git remote rm jane
$ git remote
origin

**Amend**

You can use the –amend command when you need to alter a commit message or forgot to add some files.

$ git commit --amend

**Undo a committed snapshot**

To undo changes resulting from a particular commit, use the git revert command. This command appends a new commit that undoes changes introduced by a specific commit. This prevents Git from losing history.

$ git commit -m "Example Commit"
$ git revert HEAD

**Unmodify a file**

To have a file return to its state when you last committed, utilize the git checkout command.
Example:

$ git checkout -- index.html

**Branching**

Almost every type of Version Control System incorporates branching. By creating branches of a central repository, collaborators are able to work on a project simultaneously via multiple branches, without affecting this main repository.

A collaborator can create a branch, work on it and save commit snapshots within it, switch between various branches, and merge changes. A Git branch is basically a movable pointer that always points to the most recent commit, or snapshot. Git uses the default local branch name “master,” which can be changed. Just because the default name is “master” does not imply that it is higher in importance or has more functionality than other branches. The head is a special pointer which indicates which branch you are currently working within.

**Create a new branch**

To create a new branch, use the git branch name format:

$ git branch test

**Switch branches**

To switch to another branch, use the git checkout command.

$ git checkout test

*This command moves the HEAD pointer to the test branch*

## More of the command line and Git!

Git is a great tool for versioning control and collaboration! I learned how to download my repository through the command line - sweet! I also learned how to open my markdown page in VS from the command line! :) I ALSO!! Learned how to open a new 'Preview' tab to see a preview of what my page will look like!

git status - what changes have been made? What files are included/excluded

git add - add files to prep for commit

git commit -m - commit files and add comment in quotations to note changes made

git push origin master - push to master repo