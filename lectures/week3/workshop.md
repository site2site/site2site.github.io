---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_workshop
---


## Ohm's Law

![Circuit](http://upload.wikimedia.org/wikipedia/commons/b/b4/Ohm's_Law_with_Voltage_source_TeX.svg)

![Ohm's Law Triangle](http://1.bp.blogspot.com/-u7I--QJ3X3o/UTnjHEMx3_I/AAAAAAAAAB8/U04RXpfpQwM/s1600/Ohm's+Law.gif)


## Resistance

![Resistor](http://guides.machinescience.org/file.php/29/QR/Resistor2.gif)

![Resistor value chart](http://tronixstuff.files.wordpress.com/2010/05/resistor-colour-codes-small.jpg)


## Symbolic Notation

![Resistor]()

![Variable Resistor](http://openclipart.org/image/250px/svg_to_png/19195/rsamurti_RSA_IEC_Variable_Resistor_Symbol-1.png)


<img src="/people/rsamurti/rsamurti_RSA_IEC_Variable_Resistor_Symbol-1.svg" alt="RSA IEC Variable Resistor Symbol-1 by rsamurti - Adjustable or variable resistor; rheostat." id="RSA IEC Variable Resistor Symbol-1" onerror="this.onerror=null; this.src='/image/250px/svg_to_png/19195/rsamurti_RSA_IEC_Variable_Resistor_Symbol-1.png'">




## Binary / Digital

![1s and 0s](http://orionstarmedia.com/inc/sites/TheComputerTutor//inc/images/computer/software-screen5.jpg)

### Computers (today) convert all information into binary code - 1s and 0s - to perform hardware operations.

![George Boole](http://booleanblackbelt.com/wp-content/uploads/2009/02/george_boole.jpg)

### This is based on the mathematical system proposed by George Boole in the 19th C.

*	![Gates](http://www.theshahrevolution.com/CMPSC101/images/thumb/9/9f/Gatetypesannotated.png/500px-Gatetypesannotated.png)
*	![Boolean Operations](http://www.geo.hunter.cuny.edu/~rdatta/gis2/lectures/lecture5/boo.gif)

### The lowest-level of hardware, called "gates", convert voltages between a high and a low

## Analog vs. Digital Signals

![Analog vs Digital Signal](http://soulargrooves.com/new/wp-content/uploads/2012/11/analog-signal.gif)

### Analog is continuous, digital is discrete


## Signal Processing / Binaries

### Signal processing uses protocols to interpret signals over time into more complex information and codes

*	![Simple Encoding](http://ecomputernotes.com/images/Binary-Representation-Forming-Digital-Signal.png)
*	![PCM Encoding](http://www.networkworld.com/subnets/cisco/chapters/1587052695/graphics/04fig01.jpg)






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


