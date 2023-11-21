import { WebClient } from '@slack/web-api';
import { Actor } from 'apify';
import { log } from 'crawlee';

// Initialize the Apify SDK
await Actor.init();

const { token, channel, text, blocks, threadId } = await Actor.getInput();

const web = new WebClient(token);

const result = await web.chat.postMessage({
    text,
    channel,
    blocks,
    thread_ts: threadId,
});

log.info(`Successfully send message ${result.ts} in conversation ${channel}`);

await Actor.setValue('OUTPUT', result);
await Actor.exit();
