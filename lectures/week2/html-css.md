---
layout: base
title: Site to Site | HTML and CSS
style: lecture
menu: lecture
lecture: web_html_css
---
## HTML

### The foundational content of a web page is transmitted in Hypertext Markup Language (HTML), for example:

*	<script src="https://gist.github.com/troyth/6271084.js"></script>

### The `<!doctype>` defines the file type, the `<head>` contains metadata about the page, and `<body>` contains the content that is rendered to the page.

>	See the page above rendered [here](http://sitetosite.co/examples/html5.html).



## HTML Tags

### HTML wraps content in tags to distinguish between different types of content so the client knows how to render it to the page, for example:

*	<script src="https://gist.github.com/troyth/7243934.js"></script>

>	See the page above rendered [here](http://sitetosite.co/examples/tags.html).



## Chrome Developer Tools

### You can inspect the elements of a web page in the Chrome browser by opening developer tools: alt+cmd+i (Mac), alt+ctrl+i (PC)

![Chrome Developer tools](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/chrome_dev_tools.png)

### You can interact with the HTML elements of the page through the Elements tab.



## CSS

### Cascading Style Sheets (CSS) allow you to have more control over the styling of the HTML content using `selectors` to change the `values` of the `properties` of specific elements.

	p{
		color: red;
	}

### The above snippet of CSS changes the `color` property of the `h1` selector to the value `red`.


## Cascading

### Style sheets are interpreted by the browser in a number of different types of cascades.



## Cascade Example Nº 1

*	<script src="https://gist.github.com/troyth/7244057.js"></script>

#### The interpreter reads from top to bottom, allowing properties and values on a selector to add up and overwrite with the values at the bottom of the file taking precedence; for example, the above CSS snippet produces the styling on the text below:

<span style="color: red; font-style: italic; text-decoration: underline; font-size:24px; color:blue;font-family:Times, serif;">This is the result of applying the CSS snippet above.</span>



## Cascade Example Nº 2

*	<script src="https://gist.github.com/troyth/7249579.js"></script>

#### The values of a selector's properties will cascade into the HTML elements nested inside of it; for example, applying the CSS above to this HTML snippet:

	<div>
		<p>This is example text to show CSS cascading.</p>
	</div>

#### produces the output below:

<div style="font-family:Times, serif;color: #00CCCC;"><p style="font-size: 24px;">This is example text to show CSS cascading.</p></div>



## Cascade Example Nº 3

* 	<script src="https://gist.github.com/troyth/7249682.js"></script>

#### Selectors with higher specificity will win over selectors with lower specificity even if the higher specificity selectors are declared above the lower specificity selectors; for example, applying the CSS above to the nested div > p HTML snippet above renders it in green, not blue:


<div style="font-family: Times, serif;color: blue;font-size: 24px;"><p style="font-style: italic;color: green;">This is example text to show CSS cascading.</p></div>





## Common CSS Properties

### Some common CSS properties are listed below

*	<script src="https://gist.github.com/troyth/7249411.js"></script>




## Classes and IDs

### In order to distinguish between different instances of the same tag selector, you can apply classes and IDs.

	<div id="header">
		<h1 class="title">This is a Title</h1>
	</div>

### In the snippet above, the container `div` is given a unique ID of "header" - there should be no other use of "header" as an ID in the document - and the `h1` element is given a class of "title" which may be used on all titles in the document.

*	<script src="https://gist.github.com/troyth/7249937.js"></script>

### The CSS above applies styling to the `div` and `h1` by it's ID and class.





## Box Model

### The browser renders HTML elements styled by CSS according to the box model.

*	![Box Model](http://parsons.brianwatterson.com/assets/images/lab/box-model.png)




## Floats

### If the `display` property of an HTML element is set to `block`, the following element will begin on a new line; if it is `inline`, it is inserted into the surrounding block on the same line.

<div style="height:120px; width: 250px; background-color:#ff554a;margin:20px;"></div>
<div style="height:120px; width: 250px; background-color:#00faef;margin:20px;"></div>

### Above are two fixed-size empty divs with colored backgrounds and 20px margins that are blocks by default.

<div style="margin-top:40px;">
<div style="height:120px; width: 250px; background-color:#ff554a;float:left;margin:20px;"></div>
<div style="height:120px; width: 250px; background-color:#00faef;float:left;margin:20px;"></div>
</div>
<div class="clearfix" style="clear:both;"></div>

### In order to have blocks share a line, they can be floated to the left

<div style="margin-top:40px;">
<div style="height:120px; width: 250px; background-color:#ff554a;float:right;margin:20px;"></div>
<div style="height:120px; width: 250px; background-color:#00faef;float:right;margin:20px;"></div>
</div>
<div class="clearfix" style="clear:both;"></div>

### or floated to the right.




## Absolute and Relative Sizing

### You can give elements absolute sizes in pixels:

<div style="background-color:#00faef;height:20px;width:500px;padding:50px;margin-top:40px;">This div is 120px by 500px</div>

### Or relative sizes by percentage of their containing element:

<div style="background-color:#00faef;height:20px;width:90%;padding:50px;margin-top:40px;">This div is 120px by 90%</div>

### Text also has relative sizing using em:

<div style="background-color:#00faef;height:auto;width:90%;font-size:17px;padding:50px;margin-top:40px;">
	This text is 17px as defined by the outer div.
	<div style="font-size:2em;padding:40px;background-color:#efefef;margin-top:10px;">
		This text is inside another div. It is 2em, or 2 times the size of the text of the outer div.
	</div>
</div>



## Applying CSS

### CSS can be applied to a web page in three ways:

	<p style="color:red;">This paragraph will be rendered in red.</p>

### The `style` attribute can be placed directly within an HTML tag to apply the styling only to that element in what's called an inline style.


	<style>
		p{
			color: red;
		}
	</style>

### The `<style>` tag can be placed in an HTML document to declare a block of CSS as an internal style sheet that will be applied to all elements in the document.

	
	<link rel="stylesheet" type="text/css" href="style.css">

### The `<link>` tag can be applied anywhere in an HTML document - though it is typically placed within the `<head>` tag - to apply an external stylesheet to the entire document.


