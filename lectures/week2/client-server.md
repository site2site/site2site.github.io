---
layout: base
title: Site to Site | Client-Server
style: lecture
menu: lecture
lecture: 2_client_server
---
## The Internet and the Web

### The Internet and the Web are not the same.

*	![Web-like Internet](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/week2/imageOfTheInternet_650px.png)
*	![Internet as pipes](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/week2/internet_map_information_architects.png)

### The Web is an application of the Internet composed of a series of protocols, languages and applications, such as the browser.

## Web History and Structure

*	![CERN Large Hadron Collider](http://www.webassite.com/lectures/img/CERN_LHCaerialwest.jpg)
*	![Tim Berners-Lee's 1989 Proposal for the WorldWideWeb](http://info.cern.ch/images/proposal.gif)

### In 1989, Tim Berners-Lee proposed the WorldWideWeb as a means of organizing the documentation of the Large Hadron Collider (LHC) at CERN.

*	![Tim Berners-Lee WWW Browser/Editor](http://www.webassite.com/lectures/img/1989_NextEditorBW.gif)

### It consisted of a browser/editor client that could render and edit the Hypertext Markup Language (HTML)


*	![Tim Berners-Lee NeXT Server](http://www.webassite.com/lectures/img/1989_TBL_NeXT.jpg)

### and a server that would store the HTML files and send them to anyone on the internet with a browser/editor client who requested them.


## Client-Server Model

### Berners-Lee's WorldWideWeb uses a client-server model that connects client to server using the Hypertext Transfer Protocol (HTTP).

*   ![Client Server 2](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-2.gif)

*   __General Idea__
	
	__The Internet connects a client request to the server corresponding to the URL that sends the response that the browser renders as a web page__

*   ![Client Server 3](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-3.gif)

*	__The client sends an HTTP request (GET, POST, PUT or DELETE) to the Internet in the form of a URL__

*   ![Client Server 4](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-4.gif)

*	__The Domain Name System (DNS) is used to decode the URL into the Internet Protocol (IP) address of the server__

*	![Client Server 5](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-5.gif)

*	__Once the IP address is resolved, the server at that address is sent the client's request__


#### The web is built upon a set of protocols (such as HTTP) and languages (such as HTML, CSS and Javascript) that employ the physical network connections and protocols that make up the Internet according to a client-server model. The client takes the form of a browser on the user's machine. The server is a remote computer that stores the files required to render web pages.


*	![Client Server 6](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-6.gif)

*	__The web server - a program such as Apache, nGinx, Node.js - listens for requests and routes them to the correct folder to retrieve the requested file__

*	![Client Server 7](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-7.gif)

*	__The server then returns an HTTP response with the requested file__

*	![Client Server 8](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-8.gif)

*	__The client browser receives the response, checks that the status code is ok, and then begins to render the page__

*	![Client Server 9](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-9.gif)

*	__The HTML file is made up of two main parts, the `<head>` and the `<body>`. The `<head>` contains meta-data about the page, dependencies, and other information such as the page title that shows up in the browser tab. The `<body>` contains the page content. See this Gist with the standard HTML structure.__

*	<script src="https://gist.github.com/troyth/4699954.js"></script>

*	![Client Server 10](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-10.gif)

*	__The example above show how and where different blocks of HTML are rendered in the browser.__