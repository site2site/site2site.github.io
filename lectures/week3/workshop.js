---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_workshop
---


## Ohm's Law

![Ohm's Law Triangle](http://1.bp.blogspot.com/-u7I--QJ3X3o/UTnjHEMx3_I/AAAAAAAAAB8/U04RXpfpQwM/s1600/Ohm's+Law.gif)




## Sample Code

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