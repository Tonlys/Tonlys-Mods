const { MessageEmbed, Role } = require("discord.js");
const qdb = require("quick.db");
require("../atonlys.js");

exports.execute = async (client, message, args) => {

    if(!message.member.roles.cache.has(client.config.owner))
    if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red); 


    let embed = new MessageEmbed().setAuthor("Kara Liste Üyeleri").setFooter(client.config.footer).setColor("RANDOM");
    let data = qdb.get(`karaL`) || {};
    let arr = Object.keys(data);

    let bilgi = arr.map((value) => `\`${data[value].users}\` Atılma Zamanı: ${data[value].zaman}`).join("\n");

    message.channel.send(embed.setDescription(`\n${bilgi}`));

};
exports.conf = {
  command: "karaliste-bilgi", // Asıl komutumuz
  description: "Kara liste bilgiyi atar", // Komut açıklamamız
  aliases: ["kara-liste-bilgi","klb"],
};