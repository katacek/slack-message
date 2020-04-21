# Slack message

This actor sends a message to Slack automatically.

## Input 

The following table shows specification of the actor INPUT fields as defined by its input schema. 

Field |	Type	| Description
---| ---| ---|
Token|	*String*|	(required) Slack token
Message|	*String*|	(required) Message that will be sent to Slack (i.e.  "Hello from Apify actor!" ).
Channel|	*String*|	(required) Channel where the message will be sent (i.e. "#general" ).

## How to run

To run the actor, you'll need an [Apify account](https://my.apify.com/). Simply create a new task for the actor by clicking the green button above, modify the actor input configuration, click Run and get your results.

## API

To run the actor from your code, send a HTTP POST request to the following API endpoint: 

https://api.apify.com/v2/acts/katerinahronik~slack-message/runs?token=<YOUR_API_TOKEN>

## CU usage 

Approximately 0.001 CU per run.


