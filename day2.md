# Learning Journal Day 2 - June 19, 2019

## The Coder's Computer

Today was a bit challenging! I am very new to technical terms when it comes to operating systems, file systems, and things of that nature. I enjoyed learning about the CUI.
VS Code looks like a really great tool for coding! I used it a bit in 101 and I'm excited to learn more about how to utilize it plus the extensions.


### Have you ever pondered the importance of text editors? Want to learn more about terminals? Look no further!~

#### Text Editors 101
Choosing a text editor is no easy task! It boils down to a personal choice, since there are so many great tools out there. 

**So what is a text editor?** A text editor is a type of computer program that edits plain text. Software programmers and web developers use text editors to write and edit in programming and markup languages. This is one of the primary purposes of text editors, and many of the features of text editing software are built to help these users read and write code. The text editor that you choose should be the one that you enjoy the most! As long as it is able to fulfill it's primary purpose to successfully make a website to your satisfaction.

A great feature of any text editing software is code completion. Code completion allows you to start typing, and the code completion feature will display possible suggestions based on what you originally typed.

Another feature you should definitely look into is called syntax highlighting. Syntax highlighting is a feature that takes the text you type, and makes it more noticeable by colorizing the text.

The next feature that you should look for in a text editor is a nice series of themes. These themes will allow you to change the color of the background of your text editor, the series of colors in your text, and sometimes themes will affect other aspects of your text editing software as well. Usually, web developers use a dark background and brightly colored text. This combination seems to be easier on the eyes.

The computers that you purchase will have a built-in text editor (different editors for different operating systems) that you should check out. Keep in mind - most of the built in editors do not have more advanced features like syntax highlighting.

#### All Things Terminals!

A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

When you enter commands, they are actually stored in a history. You can traverse this history using the up and down arrow keys. So don't bother re-typing out commands you have previously entered, you can usually just hit the up arrow a few times. You can also edit these commands using the left and right arrow keys to move the cursor where you want.

The **pwd** command (stands for Present Working Directory) is a common command.
The **ls** command is short for list which will give us a list of contents in our current directory if run without arguments.

Files or directories on the command line refer to a path. A path means to get to a particular file or directory on the system.
There are 2 types of paths we can use, absolute and relative. Whenever we refer to a file or directory we are using one of these paths. Whenever we refer to a file or directory, we can, in fact, use either type of path (either way, the system will still be directed to the same location).

t the very top of the structure is what's called the root directory. It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

Absolute paths specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / )

Relative paths specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.

Here are some more building blocks you may use to help build your paths.

~ (tilde) - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents
. (dot) - This is a reference to your current directory. eg in the example above we referred to Documents on line 4 with a relative path. It could also be written as ./Documents (Normally this extra bit is not required but in later sections we will see where it comes in handy).
.. (dotdot)- This is a reference to the parent directory. You can use this several times in a path to keep going up the hierarchy. eg if you were in the path /home/ryan you could run the command ls ../../ and this would do a listing of the root directory.