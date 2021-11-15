const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`**Moon Light Help**`)
    .setDescription(`




 📌 | **User Commands**
> \`ping\` • \`prefix\` • \`uptime\`\`invite\` • \`support\` • \`about\`
> \`se\` • \`avatar\` • \`sifo\` • \`user\`\`tinvites\` • \`sug\` • \`roleuser\`
> \`chinfo\` • \`listemoji\` • \`stats\`\`allbots\`

 🎵 | **Music Commands**
> \`stop\` • \`volume\` • \`nowplaying\`\`play\` • \`skip\` • \`skipto\`
> \`shuffle\` • \`search\` • \`resume\`\`remove\` • \`queue\` • \`loop\`
> \`lyrics\` • \`radio\`

 ⚙ |** Moderation Commands**
> \`ban\` • \`unban\` • \`setnick\`\`roleadd\` • \`roleremove\`
> \`setprefix\` • \`clear\` • \`lock\`\`unlock\` • \`embed\` • \`vkick\`
> \`chcreate\` • \`chdelete\` • \`slowmode\`\`addemoji\` • \`banner\` • \`say\`

 ✨ | **Gif Commands**
> \`boy\` • \`girl\` • \`couple\`\`sad\` • \`cartoon\` • \`anime\`
> \`neon\` • \`smoking\` • \`baby\`\`animal\`

 🌅 | **Photo Command **
> \`pboy\` • \`pgirl\` • \`pcouple\`
> \`pemoji\` • \`panime\` • \`meme\`

 🕹 | **Game Commands**
> \`kiss\` • \`slap\` • \`hug\`\`poke\`
> \`feed\` • \`cuddle\` • \`pat\`
 
🖇 | **Links**

[Support](https://discord.gg/Mnd7sjm5jn) | [Invite](https://discord.com/api/oauth2/authorize?client_id=841788647014531073&permissions=446713670464&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#8F00FF");
   message.reply
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

