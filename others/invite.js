const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

[{Click here}](https://discord.com/api/oauth2/authorize?client_id=841788647014531073&permissions=446713670464&scope=bot) **to invite the bot.**
`)

  
   .setColor("#8F00FF");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
