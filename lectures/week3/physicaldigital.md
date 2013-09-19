---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_physical_digital
---
## Electricity

### Electricity is the flow of electrons through a conductor.

*	![Electron flow](http://www.nmsea.org/Curriculum/4_6/Electricity/wire_electrons.gif)
*	![Conventional Current](http://physicsnet.co.uk/wp-content/uploads/2010/08/electron-flow.jpg)



## Measuring Electricity

### The useful flow of electrons through a conductor is measured in voltage, current and resistance.

![Hoover Dam](http://www.arialasvegas.com/sites/default/files/styles/1280x672/public/amenities/tours/hoover%20dam%20picture.jpg)

### Taking the Hoover dam as an analog, the voltage is the potential energy force pushing on the dam.

*	![Hoover Dam turbines](http://upload.wikimedia.org/wikipedia/commons/0/0c/Hoover_Dam's_generators2.jpg)

### The current is the speed at which the water flows through the dam and its turbines.

![Hoover dam tunnel](http://i1.ytimg.com/vi/pgkUIUoGrM4/maxresdefault.jpg)

### The resistance is in anything that limits the flow.



## Circuit

### A circuit is a closed system of electron flow.

*	![Battery circuit](http://www.pcboard.ca/kits/led_notes/led_circuit_single_led.jpg)
*	![Circuit](http://upload.wikimedia.org/wikipedia/commons/b/b4/Ohm's_Law_with_Voltage_source_TeX.svg)



## Ohm's Law

### Ohm's Law relates voltage, current, and resistance in a circuit.

![Ohm's Law Triangle](http://1.bp.blogspot.com/-u7I--QJ3X3o/UTnjHEMx3_I/AAAAAAAAAB8/U04RXpfpQwM/s1600/Ohm's+Law.gif)



## Resistance

![Resistor](http://guides.machinescience.org/file.php/29/QR/Resistor2.gif)

![Resistor value chart](http://tronixstuff.files.wordpress.com/2010/05/resistor-colour-codes-small.jpg)


## Symbolic Notation

![Resistor]()

![Variable Resistor](http://openclipart.org/image/250px/svg_to_png/19195/rsamurti_RSA_IEC_Variable_Resistor_Symbol-1.png)





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


