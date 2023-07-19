require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`x ${c.user.username} is online.`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content == "hello world") {
        message.reply('Hey noob!');
    }
    console.log(message.content);
});

client.login(process.env.TOKEN);