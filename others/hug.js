const Discord = require("discord.js");
const sakran = require('nekos.life');
const neko = new sakran();

module.exports = {
  name: `hug`,
  description: "🎸",
  aliases: ["hug"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to hug');

        async function work() {
        let owo = (await neko.sfw.hug());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been hugged! ")
        .setDescription((user.toString() + " got hugged by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`BLACK`)
        .setURL(owo.url);
        message.channel.send(kissembed);

}

      work();
  }
};
