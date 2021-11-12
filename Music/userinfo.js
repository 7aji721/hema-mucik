const { MessageEmbed } = require('discord.js');
const { BOT_OWNER_ID,BOT_ID,SERVER_INVITE,EMOJI_DONE,EMOJI_ERROR} = require("../config.json");
module.exports = {
    name: "userinfo",
    aliases: ["user", "u", "U"],
    cooldown: 5,
    category: "extra",
    async execute(message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 online";
                break;
            case "dnd":
                status = "⛔ dnd";
                break;
            case "idle":
                status = "🌙 idle";
                break;
            case "offline":
                status = "⚪ offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}`)
            .setColor(`#B800FF`)
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "🎁 Name : ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID : ",
                    value: user.user.id,
                },
                
                {
                    name: "♻️ Activity : ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: '🅰️ Avatar link : ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: '⏰ Creation Date : ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '⏳ Joined Date : ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '📍 User Roles : ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}
