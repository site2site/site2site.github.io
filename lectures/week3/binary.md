---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_binary
---
## Signals

### A signal is the value of a particular measure of a circuit at a particular point over time.

*	![Analog signal](http://www.eetkorea.com/ARTICLES/2006DEC/2/EEKOL_2006DEC_BC_04.gif)
*	![Oscilloscope](http://mosaic.cnfolio.com/uploads/M528Coursework2008B101/gos6112-600.jpg)

### Given Ohm's law, if current (I) is fixed and resistance (R) is dependent on the environment, then voltage (R) will give us a useful measure of, say, light levels or room temperature over time.

## Analog

### Electrical circuits produce (ideally) smooth analog signals that change their values continuously over time.

![1s and 0s](http://orionstarmedia.com/inc/sites/TheComputerTutor//inc/images/computer/software-screen5.jpg)

### But computers don't work in analog, they are digital!


## Signal Processing

### We use hardware to convert continous analog signals to discrete digital signals that a computer can process.

![Analog vs Digital Signal](http://soulargrooves.com/new/wp-content/uploads/2012/11/analog-signal.gif)

### These hardware enact a given protocol of signal processing to convert analog information into different forms of digital information, depending on the use case.

*	![Simple Encoding](http://ecomputernotes.com/images/Binary-Representation-Forming-Digital-Signal.png)
*	![PCM Encoding](http://www.networkworld.com/subnets/cisco/chapters/1587052695/graphics/04fig01.jpg)


## Binary

### The basic building block of a computer is a transistor - invented at Bell labs in 1947 - which is either on or off, 1 or 0, determined by holding either a high or low voltage

*	![Transistor symbol](http://upload.wikimedia.org/wikipedia/commons/9/91/Transistor_Simple_Circuit_Diagram_with_NPN_Labels.svg)
*	![Replica of first working transistor](http://upload.wikimedia.org/wikipedia/commons/b/bf/Replica-of-first-transistor.jpg)

### By simply holding a binary (1/0) state, transistors can be built up into complex hardware configurations that can perform boolean operations, named after George Boole who developed them abstractly in the 19th century.

*	![George Boole](http://booleanblackbelt.com/wp-content/uploads/2009/02/george_boole.jpg)

### AND, OR and NOT are the logical building blocks of [contemporary](http://en.wikipedia.org/wiki/Quantum_computer) digital computation.

*	![Boolean Operations](http://www.geo.hunter.cuny.edu/~rdatta/gis2/lectures/lecture5/boo.gif)

### These are implemented in "gates", which are fixed circuits of transistors that perform these operations on electric charge, often registered in voltage (V).

*	![Gates](http://www.theshahrevolution.com/CMPSC101/images/thumb/9/9f/Gatetypesannotated.png/500px-Gatetypesannotated.png)


## Why do we care?

### In order to take [architecture online](http://www.arch.columbia.edu/labs/architecture-online-lab), we need to convert the analog physical world into a computable digital representation.

*	![Arduino Uno](http://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png)
*	![Johnny-Five logo](https://github.com/rwldrn/johnny-five/raw/master/assets/sgier-johnny-five.png)

### We will use the [Arduino](http://arduino.cc/) and the [Johnny-Five](https://github.com/rwaldron/johnny-five) framework to do so strictly in Javascript, originally a language for programming websites.


## Arduino

> 	"Arduino is an open-source electronics prototyping platform based on flexible, easy-to-use hardware and software. It's intended for artists, designers, hobbyists and anyone interested in creating interactive objects or environments."  
	-[Arduino website](http://arduino.cc/)

## Johnny-Five

>	"Johnny-Five is an Open Source, JavaScript Arduino programming framework, developed at Bocoup."  
	-[Johnny-Five README](https://github.com/rwaldron/johnny-five)

### Johnny-Five builds on top of the [serialport](https://github.com/voodootikigod/node-serialport) module and the [firmata](https://github.com/jgautier/firmata) protocol to connect to and control an Arduino using only javascript in the [Node.js](http://nodejs.org/) embed environment.

{% highlight javascript %}
	{
	  "name": "johnny-five",
	  "description": "Firmata based Arduino Programming Framework.",
	  "version": "0.7.3",
	  "author": {
	    "name": "Rick Waldron <waldron.rick@gmail.com>",
	    "email": "waldron.rick@gmail.com"
	  },
	  "contributors": [
	    // MANY!!
	  ],
	  "keywords": [
	    "arduino", "usb", "serial", "serialport", "firmata"
	  ],
	  "licenses": [
	    {
	      "type": "MIT",
	      "url": "https://github.com/rwldrn/johnny-five/blob/master/LICENSE-MIT"
	    }
	  ],
	  "engines": {
	    "node": ">=0.10.0"
	  },
	  "dependencies": {
	    "colors": ">=0.5.1",
	    "firmata": ">=0.2.9",
	    "lodash": ">=0.1.0",
	    "es6-collections": ">=0.0.1",
	    "socket.io": "latest",
	    "compulsive": "latest",
	    "temporal": "latest",
	    "descriptor": "latest",
	    "serialport": "latest",
	    "optimist": "~0.5.2",
	    "async": "~0.2.9",
	    "keypress": "latest"
	  }
	}
{% endhighlight %}

An edited sample of the Johnny-Five `package.json` file.


## Technology Stack 1.0

### In our first iteration, we will use Johnny-Five to connect a laptop to the Arduino.

![Johnny-Five to Arduino 1](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/week3/johnny-five1.png)

### In our second iteration, we will use Johnny-Five read the inputs from a sensor through the Arduino to the laptop terminal.

![Johnny-Five to Arduino 2](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/week3/johnny-five2.png)

### Ultimately, we will swap out our laptops for a Raspberry Pi minicomputer.

![Johnny-Five to Arduino 3](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/week3/johnny-five3.png)



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
