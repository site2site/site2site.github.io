---
layout: sensor
title: Thermistor
sensor: Thermistor
---
##	Thermistor

![Thermistor](https://dlnmh9ip6v2uc.cloudfront.net//images/products/2/5/0/thermistor.jpg)

A thermistor is a type of resistor whose resistance varies significantly with temperature, more so than in standard resistors. The word is a portmanteau of thermal and resistor. Thermistors are widely used as inrush current limiters, temperature sensors, self-resetting overcurrent protectors, and self-regulating heating elements.  

Thermistors differ from resistance temperature detectors (RTD) in that the material used in a thermistor is generally a ceramic or polymer, while RTDs use pure metals. The temperature response is also different; RTDs are useful over larger temperature ranges, while thermistors typically achieve a higher precision within a limited temperature range, typically −90 °C to 130 °C.  

Source: [Wikipedia](http://en.wikipedia.org/wiki/Thermistor)



##### Specs

*	$1.95/unit from [Sparkfun](https://www.sparkfun.com/products/250)
*	Sparkfun [Datasheet](http://dlnmh9ip6v2uc.cloudfront.net/datasheets/Sensors/Temp/ntcle100.pdf)



##### Code

	var five = require("johnny-five"), Thermistor;

	(function() {
  		var adcres, beta, kelvin, rb, ginf;

		adcres = 1023;
		// Beta parameter
		beta = 3950;
		// 0°C = 273.15 K
		kelvin = 273.15;
		// 10 kOhm
		rb = 10000;
		// Ginf = 1/Rinf
		ginf = 120.6685;

		Thermistor = {
			c: function( raw ) {
				var rthermistor, tempc;

				rthermistor = rb * (adcres / raw - 1);
				tempc = beta / ( Math.log( rthermistor * ginf ) );

				return tempc - kelvin;
			},
			f: function( raw ) {
				return ( this.c(raw) * 9 ) / 5 + 32;
			}
		};
	}());

	new five.Board().on("ready", function() {
		new five.Sensor("I0").on("change", function() {
			console.log( "F: ", Thermistor.f(this.value) );
			console.log( "C: ", Thermistor.c(this.value) );
		});
	});

Code sample from @rwaldron, [Johnny-Five examples](https://github.com/rwaldron/johnny-five/blob/master/docs/tinkerkit-thermistor.md)


##### Phone-home to Louis Identifier

JSON identifier to be used in machine.json file of any object incorporating this sensor using Phone-home to connect to the Louis server.

	"thermistor": {
    	"name": "thermistor",
      	"type": "analog",
      	"source": "arduino",
      	"pin": "A2",
      	"range": [0, 1000],
      	"freq": 1000
    }

##### Examples in Use
