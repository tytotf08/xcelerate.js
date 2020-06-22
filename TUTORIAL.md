# xCelerate JS Tutorial

Welcome to the xCelerate.JS tutorial! Here, we'll teach you how to use all of xCelerate.JS' functions, as well as how to contribute. 
___________

Prerequisites:
+ a Text Editor that supports JavaScript - Atom is the best free text editor. VSCode could be classified as an IDE, but it's slow loading really subtracts from it's overall value. I'd also suggest, as a paid option, Sublime Text.
+ a Web Browser that supports modern JS - Internet Explorer is _not_ good for these kinds of things. I suggest Safari or Firefox Developer Edition. Chrome and Edge have unusable consoles and inspector tools. Firefox Dev is best for developing hardcore webpages.
+ a File Manager like Apple's Finder, or Windows' File Explorer.

Open your file manager and make a new folder, with some name. Open the folder with your text editor (Command/Ctrl-O, open the folder in most cases), and create a new file (Command/Ctrl-N on most text editors). Save it as "index.html". This will be the display page for your xCelerate Code. Copy and paste the following HTML structure into that file: 
``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset = "UTF-8"/>
</head>
<body>
  <script src = "xcelerate.js/xcelerate.js"></script>
  <script src = "main.js"></script>
</body>
```
You will then create a file, main.js, which is your xCelerate client. Download this Repo and place it in your site's folder, so you can call it locally. 

Go to your main.js file in the text editor and enter the following code: `print("Hello World!");`. Go to the file manager and open index.html in the browser. You have created your first xCelerate JS webpage!
