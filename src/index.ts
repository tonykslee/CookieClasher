require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

module.exports = {
    /**
     * @param {Client} client
     */
}

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
    message.reply("Hey noob!");
  }
  console.log(message.content);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'hello') {
      interaction.reply("sup noob.");
  }
  if (interaction.commandName === 'bye') {
      interaction.reply("cya");
  }
});

client.login(process.env.TOKEN);
