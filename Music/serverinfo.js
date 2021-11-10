const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  cooldown: 5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#8F00FF")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
    .addField('🆔 Server ID :',`\`${message.guild.id}\``,true)
    .addField('⏰ Created On :',message.guild.createdAt.toLocaleString())
    .addField('👑 Owner Server :',`<@${message.guild.ownerID}>`,true)
    .addField('📋 Members :',`\`${message.guild.memberCount}\``,true)
    .addField('📈 Channels :',`\`${message.guild.channels.cache.size}\``,true)
    .addField('🌏 Region :',`\`${message.guild.region}\``,true)
    .addField('📌 Roles :', `\`${message.guild.roles.cache.size}\``, true)
    .addField('⚡ Total Boost :',`\`${message.guild.premiumSubscriptionCount} Boost\``,true)
    .addField('😂 Emojis :',`\`${message.guild.emojis.cache.size}\``,true)
   helpEmbed
   message.react("☑")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
