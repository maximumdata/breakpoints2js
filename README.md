# breakpoints2js
A library to import your sass breakpoint variables to javascript.

## Usage
Import the bp2js.sass file into your Sass files (or simply copy and paste the mixins near the top of your Sass), call whichever mixin is appropriate for your media queries (bp2jsMAX or bp2jsMIN).
Then, include the bp2js.js file in your html, and call bp2js() in your javascript. The function returns the current value of the 'content' property of 'body:after'

Here's a basic example

```
<html>
<head>
<link rel="stylesheet" href="style.css"> <!-- assume this is the stylesheet of your compiled Sass, in which you @import bp2js.sass -->
</head>
<body>
<script src="bp2js.js"></script>
<script type="text/javascript">
  window.onresize = function() { console.log( bp2js() ); };
</script>
</body>
```

## Dependencies
The mixin assumes you're using Sass, but you could always adapt this for use with plain CSS if you prefer. The javascript is all vanilla, so it requires no third party libraries.

## Why use this?
Of course, you could accomplish a similar thing with `window.innerWidth` or perhaps `document.documentElement.clientWidth`. However, utilizing this library you can set your breakpoints ONCE, inside your _variables.sass partial (or wherever you like), and have access to them not only throughout your Sass code, but in your front end javascript as well.
For example, I recently used this library to adjust which animations would play at different screen sizes on my ajax powered blog at [http://mikedettmer.com/](http://mikedettmer.com). This way, I can ensure that even if my breakpoints for different screen sizes change down the road, the proper animation set will still trigger in tandem with the new media queries.

## Demo
Check `/demo/index.html` for a basic example, or to see a live example, check [http://mikedettmer.com/demo/breakpoints2js/](http://mikedettmer.com/demo/breakpoints2js/).