# Slack message

This actor sends message to [Slack](https://slack.com/intl/en-cz/) automatically. It can be used separately, or as a notificaton tool at the end of other actors. For example, you can set automated invoice downloading from Toggl.com by [Toggl Invoice Download](https://apify.com/katerinahronik/toggl-invoice-download) and at the end, let this actor alerts you on dedicated Slack channel that everythings went well and the invoice is on [Dropbox](https://www.dropbox.com/).

## Input 

The following table shows specification of the actor INPUT fields as defined by its input schema. 

Field |	Type	| Description
---| ---| ---|
Token|	*String*|	(required) Slack token
Message|	*String*|	(required) Message that will be sent to Slack (i.e.  "Hello from Apify actor!" ).
Channel|	*String*|	(required) Channel where the message will be sent (i.e. "#general" ).

## How to run

To run the actor, you'll need an [Apify account](https://my.apify.com/). Simply create a new task for the actor by clicking the green button above, modify the actor input configuration, click Run and get your results. 
To get the **Slack token**, please follow the instructions on [Slack help center](https://slack.com/intl/en-cz/help/articles/215770388-Create-and-regenerate-API-tokens)).

## API

To run the actor from your code, send a HTTP POST request to the following API endpoint: 

https://api.apify.com/v2/acts/katerinahronik~slack-message/runs?token=<YOUR_API_TOKEN>

## CU usage 

Approximately 0.001 CU per run.


