---
layout: base
title: Site to Site | HTML and CSS
style: lecture
menu: lecture
lecture: web_javascript
---
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
## Javascript

### Javascript brings programmability to a web page, it allows you to make changes to the web page in real time.




## Window

### When HTML is loaded into a browser, the entire browser display is rendered as a `window` object in Javascript that hosts both the metadata about the page and it's content, for example:

	window.location

### Provides information like the URL

	window.location.href

### and the origin

	window.location.origin

### History is provided by the history object in the window:

	window.history




## Document

### The entire content of the HTML document is made available to Javascript through the document object

	window.document

### Javascript implements a Document Object Model wherein each HTML element is considered a `node` that can be selected and manipulated by a set of native functions in Javascript.

{% highlight javascript %}
	window.document.getElementById("title");
	window.document.getElementsByTagName("h2");
	window.document.getElementsByClassName("menu")
{% endhighlight %}

### These functions return Javascript objects that can be assigned to variables, for example:

	var title = window.document.getElementById("title");

### The variable can then be manipulated, producing effects in the live HTML document.

	title.setAttribute("style","width: 500px; background-color: yellow;");




## Applying Javascript

### Javascript scripts can be inserted directly in the HTML document using the `<script>` tag:
	
*	<script src="https://gist.github.com/troyth/7251123.js"></script>


### External Javascript files can be loaded into the HTML document using the same tag by giving it a `src` attribute and a `type` attribute:

{% highlight javascript %}
	<script src="script.js" type="text/javascript"></script>
{% endhighlight %}



## jQuery

### The jQuery library was released in 2006 as a cleaner interface for selecting and manipulating DOM objects.

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

### Inserting the snippet above will present the jQuery function `$` to any scripts loaded after it, allowing DOM object selection using the same selector patterns as CSS, for example:

	$("#title");

### This will return any HTML elements with an ID of "title", which can be assigned to a variable:

{% highlight javascript %}
	var title = $("#title");
{% endhighlight %}

### This variable can then be manipulated using additional jQuery functions:

{% highlight javascript %}
	title.css("color", "red");
	title.addClass("new-class-name");
{% endhighlight %}


## Function Chaining

### Each jQuery function returns the updated jQuery object, so commands can be chained to operate in series:

{% highlight javascript %}
	$("#title").css("color", "red").addClass("new-class-name");
{% endhighlight %}



## Timing

### Javascript provides timing functions that can be combined with jQuery to have effects happen over time:

{% highlight javascript %}
	setTimeout(function(){
		$("h3").css("font-size", "100px");
	}, 2000);
{% endhighlight %}

### The above script will change the font-size of all `h3` elements 2000 ms (2 seconds) after the script is run.

{% highlight javascript %}
	var original_size = $("h3").css("font-size");
	original_size = parseInt( original_size );
	var scale = 1;

	setInterval(function(){
		scale = scale * 0.9;

		var new_size = original_size * scale + "px";

		console.log("new_size: " + new_size);

		$("h3").css("font-size", new_size);

	}, 1000);
{% endhighlight %}

### The above script will shrink the size of all `h3` elements by 90% every second.




## Animation

### jQuery provides a built-in animation function that takes the final value of the attributes you want to animate and does it's best to interpolate from the current value to the final value over the given time:

{% highlight javascript %}
	$("h3").animate({
		opacity: 0.25,
		width: "40%"
	}, 3000);
{% endhighlight %}

### The above script will fade all `h3` elements to 25% opacity and shrink their width to 40% of their container over 3 seconds.




## Event Handling

### One of the most powerful features of jQuery is the ability to bind event handlers to HTML objects using the `on` function to respond to events thrown by the browser upon user interaction:

{% highlight javascript %}
	$("#example1").on("click", function(){
		$(this).css("color", "red");
	});
{% endhighlight %}

### Run the above script in the Chrome Developer Tools Javascript console and then click <span id="example1">here</span> to turn the text of the link red.



## AJAX

### jQuery allows you to load in content from other web resources and APIs over HTTP using the AJAX function:

{% highlight javascript %}
	$.ajax({ url: target_url })
{% endhighlight %}

### In order to work with the data returned by the `ajax` function, append the `done()` function:

{% highlight javascript %}
	$.ajax({ url: target_url }).done(function(data){
		//do something with the data
	});
{% endhighlight %}

## JSON

### AJAX HTTP requests typically return values in Javascript Object Notation (JSON) format, which we've seen before in the Node.js package.json file, for example:

{% highlight javascript %}
	{
	    "name": "camera",
	    "description": "Raspberry Pi camera for taking snapshots",
	    "version": "0.0.1",
	    "author": {
	        "name": "Troy Conrad Therrien <troyth@gmail.com>",
	        "email": "troyth@gmail.com"
	    },
	    "dependencies": {
	        "ws": "*",
	        "colors": "*",
	        "raspicam": "*"
	    },
	    "engines": {
	        "node": ">=0.10.0"
	    }
	}
{% endhighlight %}

### You can convert these files into a Javascript object that you can then manipulate using the parseJSON() function of jQuery:

{% highlight javascript %}
	var obj = $.parseJSON( json_object );
	console.log( obj.name );
{% endhighlight %}


## AJAX and JSON

### The jQuery AJAX call retrieves data in JSON format and does the conversion to a Javascript object for you, so you can call it's attributes using dot notation.

{% highlight javascript %}
	var target_url = "http://api.tumblr.com/v2/blog/site-to-site.tumblr.com/posts";

	$.ajax({
		url: target_url,
		dataType: 'jsonp',
		type: 'GET',
		data:{
			api_key: "API_KEY_GOES_HERE"
		}
	}).done(function(data){
		console.dir( data );

		$("#example2").append("<blockquote>" + data.response.posts[0].text + "</blockquote>");
	});
{% endhighlight %}

<div id="example2"></div>


