const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const emojiMap = {
    ':nugg:': '<:nugg:EMOJI_ID>',  // You'll get this ID after uploading to Discord
    ':nugg2:': '<:nugg2:EMOJI_ID>' // You'll get this ID after uploading to Discord
};

client.on('ready', () => {
    console.log('NuggLife Emoji Bot is online!');
});

client.on('message', message => {
    if (message.author.bot) return;
    let content = message.content;
    Object.keys(emojiMap).forEach(code => {
        content = content.replace(new RegExp(code, 'g'), emojiMap[code]);
    });
    if (content !== message.content) {
        message.channel.send(content);
    }
});

client.login(config.token);
