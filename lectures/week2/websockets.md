---
layout: base
title: Site to Site | HTML and CSS
style: lecture
menu: lecture
lecture: web_websockets
---
## Web Sockets

### In 2011, the Web Socket protocol was standardized, offering a full-duplex alternative to HTTP for web-based data transfer.

*	![Full Duplex](http://imagenes.mailxmail.com/cursos/imagenes/8/9/comunicaciones-half-duplex-y-full-duplex_7898_6_1.jpg)


### Unlike HTTP, which is a protocol for a server to respond to requests by a client, Web Sockets opens a channel between multiple hosts allowing any of the hosts to emit messages to any of the other hosts.




## The Publish-Subscribe Pattern (Pub-Sub)

### Rather than a client-server model, Web Sockets allows for a publish-subscribe model in which any host in a network can either publish a message or subscribe to listen and respond to the messages published by any other host.

*	![Spacebrew](http://static.squarespace.com/static/507ddb54e4b073aaf62adc38/t/5081d54fe4b081d196170046/1350686031444/spacebrew-1.png?format=1500w)

### The implementation of Pub-Sub that we have used is Spacebrew, which allows any client that can publish or subscribe to messages over Web Sockets to be stitched together with any other.




## Example

### Spacebrew server

*	![Spacebrew Server](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew1.png)

### A website with a button that publishes to Spacebrew.

*	![Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/camera_interface.png)

### Spacebrew server showing the website client.

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew2.png)

### A Raspberry Pi camera setup

*	![Raspicam](http://www.adafruit.com/images/medium/1367_MED.jpg)

### Spacebrew server showing both website client and camera.

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew3.png)

### File Server app running on a server in New Jersey.

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/flie-server-terminal.png)

### Spacebrew server showing website client, camera and file server app.

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew4.png)

### Wiring website client capture button publish to camera capture trigger subscribe

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew5.png)

### Wiring camera binary publish to file server binary subscribe

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew6.png)

### Wiring file server string publish to website client url string subscribe

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/spacebrew7.png)

### Resulting photo in website client taken by camera, sent to file server and served for website

*	![Spacebrew Client](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/websockets/camera_interface_photo.png)









