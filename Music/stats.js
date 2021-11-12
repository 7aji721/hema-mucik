const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "stats",
  aliases: ["stats"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://images-ext-2.discordapp.net/external/tT97smxwy-eR9n7y0wWIzgtQZV3l--Usmf1bMkTyUtI/https/cdn.discordapp.com/emojis/903388699843264563.gif`)
    .setTitle(`Moon Light`)
    .setDescription(`
 {__**Developer Bot**__}
 <@!904074858147762257>

[__**TIK TOK**__](https://vm.tiktok.com/ZSerp5GjL/)

[__**EDITOR BOKANI**__](https://discord.gg/Mnd7sjm5jn)

[__**MOON LIGHT**__](https://discord.gg/Mnd7sjm5jn)

[__**Invite Bot**__](https://discord.com/api/oauth2/authorize?client_id=841788647014531073&permissions=446713670464&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#8F00F")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
