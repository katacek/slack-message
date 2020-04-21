const Apify = require('apify');
const Slack = require('slack-node');
const request = require('request-promise');

Apify.main(async () => {
    
    const input = await Apify.getValue('INPUT');
    
    const bot = new Slack(input.token);
    
    const response = await new Promise((resolve, reject) => {
        bot.api('chat.postMessage', input, function(err, response){
            if(err){reject(err);}
            else{resolve(response);}
        });
    });
    
    await Apify.setValue('OUTPUT', response);

});