---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_example
---
## Package Management

### Node.js is an 





## Sample Setup

![Fritzing for Photoresistor](https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/photoresistor.png)




## Sample Code

{% highlight javascript %}
	var five = require("johnny-five"),
	    board, photoresistor;

	board = new five.Board();

	board.on("ready", function() {

	  // Create a new `photoresistor` hardware instance.
	  photoresistor = new five.Sensor({
	    pin: "A2",
	    freq: 250
	  });

	  // Inject the `sensor` hardware into
	  // the Repl instance's context;
	  // allows direct command line access
	  board.repl.inject({
	    pot: photoresistor
	  });

	  // "data" get the current reading from the photoresistor
	  photoresistor.on("data", function() {
	    console.log( this.value );
	  });
	});


	// References
	//
	// http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/
{% endhighlight %}

Code [source](https://github.com/rwaldron/johnny-five/blob/master/docs/photoresistor.md) in Johnny-Five examples.