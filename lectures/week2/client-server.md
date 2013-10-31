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

*   ![Client Server 2](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-2.gif)

### Berners-Lee's WorldWideWeb uses a client-server model that connects client to server using the Hypertext Transfer Protocol (HTTP).

*   ![Client Server 3](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-3.gif)

### A client web browser makes a request for a set of documents using a Uniform Resource Locator (URL).

*   ![Client Server 4](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-4.gif)

*	![Client Server 5](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-5.gif)

###  The Domain Name System (DNS) collectively converts the URL into the unique Internet Prototcol (IP) address of the computer assigned to the URL and requests the desired resource.

*	![Client Server 6](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-6.gif)

*	![Client Server 7](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-7.gif)

### The requested resource (eg. /dir/file.html) is then retrieved by the server and sent back into the internet as a response.

*	![Client Server 8](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-8.gif)

*	![Client Server 9](https://raw.github.com/site2site/site2site.github.io/master/images/lectures/client-server-model/client-server-9.gif)

### Once received, the web browser parses the file, perhaps requests additional resources (like images), and then renders out the files for the user once it has the files it needs.


## HTML

### The content of a web page is traditionally transmitted in Hypertext Markup Language (HTML), for example:

*	<script src="https://gist.github.com/troyth/6271084.js"></script>

### The `<!doctype>` defines the file type, the `<head>` contains metadata about the page, and `<body>` contains the content that is rendered to the page.

## HTML Tags

### HTML wraps content in tags to distinguish between different types of content so the client knows how to render it to the page, for example:

*	<script src="https://gist.github.com/griffiths/1658418.js"></script>

## Chrome Developer Tools

### You can inspect the elements of a web page in the Chrome browser by opening developer tools: alt+cmd+i (Mac), alt+ctrl+i (PC)


