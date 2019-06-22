# Learning Journal Day 4 - June 22, 2019

## Day 4 and the longest day of the course is here, hooray! Excited to get into some HTML, CSS, and javaScript!

### HTML & CSS - Process & Design

#### How to approach building a site
- Understand who your target audience is
  - Ask questions about the people you would expect to visit your site
  - Think realistically. Even if your site is based on a product used worlwide, it is not likely someone from another country will come to your site for this product.
- Target audience
  - Age range
  - Gender
  - Location
  - Average income, level of education, family status, occupation
  - Access channel


#### Understanding your audience and their needs

Create some fictional visitors from your typical target audience. They will influence design decisions. Once you know who your characters are, consider **why** they are coming to your site. Create a list of reasons why people would be coming to your site.

- Are they looking for general entertainment or do they have a specific goal?
  - Specific goals could include just looking for general info or researching a topic or looking for a particular fact
  - Are they familiar with the prduct or do they need to be introduced?
  - Is the information time sensitive such as breaking news?
  - Are they looking for buying information?
  - Do they need your contact information?
- If there is a specific goal, is it personal or professional?
- Do they see spending time on this activity as essential or a luxury?

Visitors needs -
- Do visitors need you to introduce yourself, brand, or subject area?
- Will visitors be familiar or will they need background on the information you are covering
- What is special about what you offer or differentiates you?
- Are there any common questions in your subject area?
- How often do you need to update your site?


#### How to present information visitors want to see

Once you know what needs to appear on your site, you can start to organize the information into sections or pages.
It is important to reflect the public's understanding of the subject rather than just the site owner's understanding of it.

- Home
  - About
    - History
    - Foundation
    - Future plans
  - Visit
    - Location
    - Hours
    - Tickets
  - Shop
    - Books
    - Gifts    
  - Contact

**Wireframes**
A wireframe is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.
Wireframes should include elements such as logo, primary navigations, headings and main bodies of text, user logins, etc.
Wireframes should not include color scheme, font choices, backgrounds, or images for the site.

**Design Navigation**
Navigation not only helps people find where they want to go, but also helps them understand what your site is about.

Good navigation is:
- Concise
  - Quick and easy to read. Limit the number of options in a menu to no more than eight links
- Clear
  - Users should be able to predict the kind of information they will find on the page before clicking on it
- Selective
  - The primary navigation should only reflect the sections or content of the site. Functions should be elsewhere
- Context
  - Good navigation provides context. It lets the user know where they are in the website at that moment. Use a different color or some kind of visual marker to indicate the current page
- Interactive
  - Each link should be big enough to click and change appearnce when users hover over it
- Consistent
  - Keep primary navigation exactly the same          

  ## Design with CSS
  ### What is CSS? How to control the design to make your webpages more attractive. CSS associates style rules with HTML elements

  Rules contain two parts: a selector and a declaration.
  **Selectors** indicate which element the rule applies to. The same rule can apply to more than one element if you separate the element names with commas.

  **Declarations** indicate how the elements referred to in the selector should be styled. 
  Declarations sit inside curly brackets and each is made up of two parts - property and value, separated by a colon.
  **Properties** indicate the aspects of the element you want to change. For example, color, font, width, height and border.
  **Values** specify the setting you want to use for the chosen properties. For example, if you want to specify a color property then the value is the color you want the text in these elements to be.

  Link CSS files in your HTML files to apply the styling.

  Get your skeleton in place first. Capture each tag first. Then go through each tag and define what it will look like  

  ## Learning javaScript, Woooo!

  Statements - a script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a **statement**. Statements should end with a semicolon ;
  Statements are instructions and each one starts on a new line.

  You should write comments to explain what your code does. This can help yourself and others who read your code.

  A script will have to temporarily store the bits of information it needs to do its job. It can store this data in variables. A variable is a good name for this concept because the data stored in a variable can change each time a script runs.

  Before you can use variables you have to declare them - or announce how you want to use it. If a variable is more than one word, the words will be written in camelCase
  
  Once you have created a variable, you can tell it what information you would like it to store for you. This is called assigning a value to a variable.

  *A variables name should describe the kind of data it holds*

  Javascript distinguishes between numbers, strings, and true or false values known as Booleans. These true or false values can trigger different CSS class rules.

  ### Six rules for giving variable names
  1. The name must begin with a letter, dollary sign, or an underscore. It must **not** start with a number
  2. The name can contain letters, numbers, dollar sign, or an underscore. Note that you must not use dash or a period in a variable name
  3. You cannot use keywords or reserved words. Keywords are special words that tell the interpreter to do something. For example, var is a keyword used to declare a variable. Reserved words are ones that may be used in a future version or JavaScript.
  4. All variables are case sensitive, so score and Score would be different variable names, but it is bad practice to create two variables that have the same name using different cases.
  5. Use a name that describes the kind of information that the variable stores. For example, firstName might be used to store a person's first name, lastName for their last name, and age for their age.
  6. If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word. For example firstName rather than firstname. You can also use and underscore between each word.