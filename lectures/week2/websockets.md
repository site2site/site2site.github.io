---
layout: base
title: Site to Site | HTML and CSS
style: lecture
menu: lecture
lecture: web_websockets
---
## Web Sockets

### In 2011, the Web Socket protocol was standardized, offering a full-duplex alternative to HTTP.

*	![Full Duplex](http://imagenes.mailxmail.com/cursos/imagenes/8/9/comunicaciones-half-duplex-y-full-duplex_7898_6_1.jpg)


### Unlike HTTP, which is a protocol for a server to respond to requests by a client, Web Sockets opens a channel between multiple hosts allowing any of the hosts to emit messages to any of the other hosts.



## The Publish-Subscribe Pattern (Pub-Sub)

### Rather than a client-server model, Web Sockets allows for a publish-subscribe model in which any host in a network can either publish a message or subscribe to listen and respond to the messages published by any other host.

*	![Spacebrew](http://static.squarespace.com/static/507ddb54e4b073aaf62adc38/t/5081d54fe4b081d196170046/1350686031444/spacebrew-1.png?format=1500w)

### The implementation of Pub-Sub that we have used is Spacebrew, which allows any client that can publish or subscribe to messages over Web Sockets to be stitched together with any other.



## Example

### A website with a button that publishes to Spacebrew



	



### Spacebrew 





## The Pursuit Internet

### Researchers at Cambridge University recently published evidence of a working Publish-Subscribe model for the internet that they call the [Pursuit Internet](http://fp7pursuit.ipower.com/PursuitWeb/wp-content/uploads/2011/03/INFSO-ICT-257217_PURSUIT_D5.2_Project_Presentation.pdf).

*	<iframe src="//player.vimeo.com/video/37299318" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>






