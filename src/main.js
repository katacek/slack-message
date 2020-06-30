const Apify = require('apify');
const { WebClient } = require('@slack/web-api');

const { utils: { log } } = Apify;

Apify.main(async () => {
    const { token, channel, text, blocks, threadId } = await Apify.getValue('INPUT');

    const web = new WebClient(token);

    const result = await web.chat.postMessage({
        text,
        channel,
        blocks,
        thread_ts: threadId,
    });


    log.info(`Successfully send message ${result.ts} in conversation ${channel}`);

    await Apify.setValue('OUTPUT', result);
});
