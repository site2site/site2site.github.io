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

True innovation in architecture arises not from the hours spent hunched over a desk, but rather in the moments of shared respite -- the smoke breaks, coffee runs, and shared distractions we relish to reconnect and retain our sanity.

This is nothing new to architecture -- office design has been slowly moving away from the language of corner offices and the cubicles to foster spaces of chance encounters and impromptu social gatherings. Similarly, the software and tools we use to generate our work has also seen a shift to the collaborative, moving from the confines of our desks to the cloud, allowing us to work in new ways and across physical divides.

Despite these advances, space making and software are not a complete panacea. Situated in the space between the software and the architecture are a milieu of objects we interact with everyday that aren’t capitalizing on their latent potential. By embedding the everyday furniture and appliances with inexpensive technology, we can turn these “dumb objects” of the office into an ad-hoc network of intelligence, capable of interpreting, translating, and responding to our habits into even more opportunities for collaboration.


## Scenario 1: Unoccupied Opportunities

*	![Chair - Rendering 01](https://raw.github.com/site2site/object-oriented-office/master/docs/images/scenario1.gif)

###A network of smart seating, programmed for collaborative instigation.

The chair is the common platform of the office, a fairly pedestrian object designed for ergonomics, but an untapped resource.

A "smart" chair becomes an object for gathering information about it’s occupants behavior and conduit for physical communication. The way we sit conveys a lot about our actions, whether we are leaning in and focused on our work, hunched over in a power nap, or leaning back to take a mental break. Embedded sensors detect heat, motion, and orientation, helping us focus when we are in the zone, and--with the assistance of integrated actuators--subtly directing us to productive opportunities for collaboration when we are in need of distraction.

*	![Chair_sleeper](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-01.png)
*	![Chair_worker](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-02.png)
*	![Chair_daydreamer](https://raw.github.com/site2site/object-oriented-office/master/docs/images/seat_activity-03.png)
Sensors translate position into program.

####Getting to Know You
RFID sensors allow our furniture to know who we are (name tags for the digital realm), in addition to what we are doing, and, when employed in appliances of social gathering (like the coffee pot), can remotely inform and direct us to potential opportunities for collaborative socialization. Remote access to the cloud also allows for personalization, providing the smart chair with data to make intelligent suggestions, tailoring its recommendations for interaction to our mood, social desires, and personal interests.

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

What if objects can talk?

From the perspective of the coffee machine, it witnesses who uses it, relies on it, spends the most amount of time near it while watching events unfold and interactions take place near its presence. Architecture can be understood as the programming and organization of space. The episodes that take place within evolve over time and memories of what took place are limited only by the people who were apart of them in happenstance. The “Ric-Rac” of furniture’s and appliances meant to aid the programming of spaces are static and don’t exist unless they are used but then forgotten shortly after.

What if chairs can broadcast a desire to be seated on? What if a table invited two acquaintances to work together?

What if our “Ric-Rac” had the ability to record the new encounters they helped facilitate that day by broadcasting their achievements on a visible domain with messages, emoticons and friendly solicitations? Moreover – what if these appliances “bragged” and “responded” to their counterparts in other office locations via a public newsfeed display? Our static objects need their own space to communicate.

Peer up at the projected “newsfeed wall” and delight at the water-cooler reminding us to pass a drink to a pre-occupied friend, the table specifically asking you to share a work desk with someone you haven’t worked with in a while and the coffee machine calling out two lonesome office workers to come enjoy a hot coffee in the break room.


*	![CrossOffice - Render 02](https://raw.github.com/site2site/object-oriented-office/master/docs/images/scenario2-diagram.gif)

###Strategies for Success

(1) Quantifying uses 
Objects quantified by their intended uses and variables such as the duration of use, the person(s) using the objects and the time of day they are being used set up the possibility to attach emotions or responses to these varied scenarios. A list of “If” statements pertaining to use can be aligned with specific responses meant to be triggered and recorded for broadcast.

(2) Triggering Emotional Responses
The objects are embedded with emotional triggers and solicitations in an attempt incite an emotional response by the people reading an objects sentiment. A person ignoring object requests will incite a deeper emotional response by the object displayed on the newsfeed. Likewise, if a person is responding to object requests then he/she is an active collaborator to the office environment and will be noticed as such on the newsfeed. 

(3) You In Social Media Written By Objects
The intent is broadcast this newsfeed publicly to other studio x-offices. Employees build personalities based on what the objects say about them and who they are usually talking with (or “friends” with). These sentiment driven objects also are able to quantify general office moods as well as individual personality types. 

*	![CrossOffice - Plan](https://raw.github.com/site2site/object-oriented-office/master/docs/images/92413_studioxplan2_working.png)

***

###Component Workflow
*	![Components Diagram 1](https://raw.github.com/site2site/object-oriented-office/master/docs/images/component_diagram-01.png)

Sensor inputs from chair are processed by the Arduino.
*	![Components Diagram 2](https://raw.github.com/site2site/object-oriented-office/master/docs/images/component_diagram-02.png)

Inputs are translated and parsed by the RaspberryPI and the cloud into local and global responses.

***

###Component Elements
(Chair) -> (Thermistor & Flex Sensor) -> (Rangefinder & Magnetometer) -> (RFID Tag & Reader) -> (Arduino) -> (RaspberryPI)

***

###Reference
Diller+Scofidio - Braincoats for the Blur Building (unrealized)
*	__![Braincoat - HumanInput](https://github-camo.global.ssl.fastly.net/8efef98c183286c846ec2953829bfc13def51714/687474703a2f2f6473726e792e636f6d2f70726f6a656374732f426c7572427261696e636f61742f30382d76697375616c2d636f6d6d756e69636174696f6e732d636f2e6a7067)__
	__![Braincoat - Interaction](https://github-camo.global.ssl.fastly.net/ccff3d5ac3c230585521aa9bfde44ce289fd6167/687474703a2f2f6473726e792e636f6d2f70726f6a656374732f426c7572427261696e636f61742f31382d2d7472616e736d697373696f6e2d7a6f6e65732d636f70792e6a7067)__
