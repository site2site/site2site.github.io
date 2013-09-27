---
layout: base
style: lecture
title: Site to Site | Presentation
menu: project
project: object-oriented-office
---
## Object-Oriented Office (OOO)

### Collaborative Intelligence.

![OOO - Network of Objects](https://raw.github.com/site2site/object-oriented-office/master/docs/images/ooo_network-01.png)


## Scenario 1: Unoccupied Opportunities

*	![Chair - Rendering 01](https://raw.github.com/site2site/object-oriented-office/master/docs/images/scenario1.gif)

###A network of smart seating, programmed for collaborative instigation.

The chair is the common platform of the office, a fairly pedestrian object designed for ergonomics, but an untapped resource.

*	![Chair_sleeper](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-01.png)
*	![Chair_worker](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-02.png)
*	![Chair_daydreamer](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-03.png)
Sensors translate position into program.

####Getting to Know You

*	![Chair_floorPlan](https://raw.github.com/site2site/object-oriented-office/master/docs/images/92113_studioxplan1-01.png)


####Scales of Influence

(1) Local / Person to Person
Chairs coordinate collaboration within the immediate environment.

(2) Global / Person to Cloud
Chairs relay information to GSAPP Cloud - recording activity and collaboration across Studio-X locations.

(3) Local-Global / Person to Cloud to Person
Chairs act as a conduit for communication between collaborators in different Studio-X locations.

***

## Scenario 2: Cross-Office Feeds

*	![CrossOffice - Rendering 01](https://raw.github.com/site2site/object-oriented-office/master/docs/images/scenario2-newsfeed.gif)

### Embedding sentiment in smart office furniture's to broadcast messages, emoticons and solicitations to a newsfeed streamed on a projection.

>	What if objects can talk?


*	![CrossOffice - Render 02](https://raw.github.com/site2site/object-oriented-office/master/docs/images/scenario2-diagram.gif)

###Strategies for Success

(1) Quantifying uses 
Objects quantified by their intended uses and variables such as the duration of use, the person(s) using the objects and the time of day they are being used set up the possibility to attach emotions or responses to these varied scenarios. A list of “If” statements pertaining to use can be aligned with specific responses meant to be triggered and recorded for broadcast.

(2) Triggering Emotional Responses
The objects are embedded with emotional triggers and solicitations in an attempt incite an emotional response by the people reading an objects sentiment. A person ignoring object requests will incite a deeper emotional response by the object displayed on the newsfeed. Likewise, if a person is responding to object requests then he/she is an active collaborator to the office environment and will be noticed as such on the newsfeed. 

(3) You In Social Media Written By Objects
The intent is broadcast this newsfeed publicly to other studio x-offices. Employees build personalities based on what the objects say about them and who they are usually talking with (or “friends” with). These sentiment driven objects also are able to quantify general office moods as well as individual personality types. 

*	![CrossOffice - Plan](https://raw.github.com/site2site/object-oriented-office/master/docs/images/92413_studioxplan2_working.png)



###Component Workflow
*	![Components Diagram 1](https://raw.github.com/site2site/object-oriented-office/master/docs/images/component_diagram-01.png)

Sensor inputs from chair are processed by the Arduino.
*	![Components Diagram 2](https://raw.github.com/site2site/object-oriented-office/master/docs/images/component_diagram-02.png)

Inputs are translated and parsed by the RaspberryPI and the cloud into local and global responses.



###Component Elements
(Chair) -> (Thermistor & Flex Sensor) -> (Rangefinder & Magnetometer) -> (RFID Tag & Reader) -> (Arduino) -> (RaspberryPI)



###Reference
Diller+Scofidio - Braincoats for the Blur Building (unrealized)
*	__![Braincoat - HumanInput](https://github-camo.global.ssl.fastly.net/8efef98c183286c846ec2953829bfc13def51714/687474703a2f2f6473726e792e636f6d2f70726f6a656374732f426c7572427261696e636f61742f30382d76697375616c2d636f6d6d756e69636174696f6e732d636f2e6a7067)__
	__![Braincoat - Interaction](https://github-camo.global.ssl.fastly.net/ccff3d5ac3c230585521aa9bfde44ce289fd6167/687474703a2f2f6473726e792e636f6d2f70726f6a656374732f426c7572427261696e636f61742f31382d2d7472616e736d697373696f6e2d7a6f6e65732d636f70792e6a7067)__
