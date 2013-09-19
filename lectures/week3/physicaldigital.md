---
layout: base
title: Site to Site | Week 3
style: lecture
menu: lecture
lecture: 3_circuits
---
## Electricity

### Electricity is the flow of electric charge.

*	![Electron flow](http://www.nmsea.org/Curriculum/4_6/Electricity/wire_electrons.gif)
*	![Conventional Current](http://physicsnet.co.uk/wp-content/uploads/2010/08/electron-flow.jpg)

### Current is read by convent to be flowing in the opposite direction of negatively charged electron flow.


## Measuring Electricity

### The flow of electrons through a conductor is fundamentallyl measured in terms of voltage (V), current (I) and resistance (R).

*	![Hoover Dam](http://www.arialasvegas.com/sites/default/files/styles/1280x672/public/amenities/tours/hoover%20dam%20picture.jpg)

### Taking the Hoover dam as an analog, the voltage (V) is the potential energy force pushing on the dam.

*	![Hoover Dam turbines](http://upload.wikimedia.org/wikipedia/commons/0/0c/Hoover_Dam's_generators2.jpg)

### The current (I) is the speed at which the water flows through the dam and its turbines.

*	![Hoover dam tunnel](http://i1.ytimg.com/vi/pgkUIUoGrM4/maxresdefault.jpg)

### The resistance (R) is in anything that limits the flow.



## Circuit

### A circuit is an closed system of electric charge flow.

*	![Battery circuit](http://www.pcboard.ca/kits/led_notes/led_circuit_single_led.jpg)
*	![Circuit](http://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/LED_circuit.svg/200px-LED_circuit.svg.png)

### Circuits are described in symbolic notation.


## Ohm's Law

### Ohm's Law relates voltage (V), current (I), and resistance (R) in a circuit.

![Ohm's Law Triangle](http://1.bp.blogspot.com/-u7I--QJ3X3o/UTnjHEMx3_I/AAAAAAAAAB8/U04RXpfpQwM/s1600/Ohm's+Law.gif)

![Circuit](http://upload.wikimedia.org/wikipedia/commons/b/b4/Ohm's_Law_with_Voltage_source_TeX.svg)



## Resistance

### Resistors impede the flow of electric charge, converting the energy of flow into heat.

*	![Resistor melting](http://upload.wikimedia.org/wikipedia/commons/e/e6/Resistor.jpg))

### Resistors are typically made of a resin-fixed mixture of carbon and ceramic, the ratio of which determines the amount of resistance, which is registered by a color coding system and measured in Ohms (&Omega;).

*	![4 band resistor value guide](https://www.dlsweb.rmit.edu.au/toolbox/electrotech/toolbox1204/resources/01principles/04properties/images/4band.gif)

### Resistors are measured with either 4 or 5 bands.

*	![Five band resistor](http://guides.machinescience.org/file.php/29/QR/Resistor2.gif)

### The bands can be correlated to a value chart to determine the resistance.

![Resistor value chart](http://tronixstuff.files.wordpress.com/2010/05/resistor-colour-codes-small.jpg)


## Test

### What is the resistance of each of these?

*	![Resistor Test 220 ohm](http://www.opensprints.com/documentation/220ohm_resistor.jpg)
*	![Resistor Test 330 ohm](http://upload.wikimedia.org/wikipedia/commons/3/3e/Resistor_cropped.jpg)
*	![Resistor Test 470 ohm](http://www.basicmicro.com/assets/images/470ohm_resistor.jpg)
*	![Homework](http://25.media.tumblr.com/tumblr_lpvi5qG3MD1qa91zio1_500.jpg)


## Symbolic Notation

### In an electrical circuit, resistors are denoted with a wiggle.

![Resistor](http://www.circuitstoday.com/wp-content/uploads/2010/02/Symbol-of-resistor.JPG)


## Resistors as Sensors

### Different types of resistors react to different elements of their environment, allowing them to serve as cheap sensors.

*	![Photoresistor symbol](http://lh3.ggpht.com/-_rUIU4M5ksY/Tp2--4Q-s2I/AAAAAAAACT4/yfHWXfKcuOg/clip_image002_thumb.jpg?imgmax=800)
*	![Photoresistor diagram](http://www.autoshop101.com/trainmodules/resistors/image/photores.gif)
*	![Photoresistor photo](http://arthur.sewanee.edu/marcen0/HTML5T/arduino/imgs/photores0.jpg)

### A photoresistor changes its resistance depending on the amount of light it encounters.

*	![Thermistor symbol](http://upload.wikimedia.org/wikipedia/en/9/9b/Thermistor_symbol.png)
*	![Thermistor photo](http://shop.rabtron.co.za/catalog/images/ntcx.jpg)

### A thermistor changes its resistance depending on its surrounding temperature.



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

