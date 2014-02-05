---
layout: base
style: sensor
title: Flex Sensor
sensor: Flex Sensor
---
##	Flex Sensor

![Flex Sensor](https://dlnmh9ip6v2uc.cloudfront.net//images/products/1/0/2/6/4/10264-01.jpg)

A simple flex sensor. As the sensor is flexed, the resistance across the sensor increases.  

The resistance of the flex sensor changes when the metal pads are on the outside of the bend (text on inside of bend).  

Source: [Bildr wiki](http://wiki.bildr.org/index.php/Flex_Sensor)



##### Specs

*	$7.95/unit from [Sparkfun](https://www.sparkfun.com/products/250)
*	Sparkfun [Datasheet](https://www.sparkfun.com/datasheets/Sensors/Flex/flex22.pdf)
*	Bildr [Tutorial](http://bildr.org/2012/11/flex-sensor-arduino/)



##### Code
```javascript
var five = require("johnny-five"),
    board, flex;

board = new five.Board();

board.on("ready", function() {

  // Create a new `flex` hardware instance.
  flex = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Inject the `flex` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    flex: flex
  });

  // Properties

  // flex.scaled
  //
  // Current value of a flex sensor, scaled to a value
  // between the lower and upper bound set by calling
  // scale( low, high ).
  //
  // Defaults to value between 0-255
  //


  // Sensor Event API

  // "data"
  //
  // Fires when the pin is read for a value
  //
  flex.scale([ 0, 100 ]).on("data", function() {
    console.log( this.value, this.raw );
  });

  // "change"
  //
  // Aliases: "bend", "force", "slide", "touch"
  //
  // Fires when value of sensor changes
  //
});
```

![Flex Sensor - Arduino Diagram](https://raw.github.com/site2site/object-oriented-office/master/docs/images/flex_sensor_diagram.png)

##### Phone-home to Louis Identifier

_Ignore for now._

##### Examples in Use

_Optional._
