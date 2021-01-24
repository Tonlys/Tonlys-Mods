const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db")
const sicil = new qdb.table("tmute");
const ms = require('ms');
const moment = require("moment");
require("moment-duration-format")
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);
    
    message.channel.send(embed.setDescription(`Tonlys boş alt yapı`))

};
exports.conf = {
  command: "", // Asıl komutumuz
  description: "", // Komut açıklamamız
  aliases: [] // Komutumuzun yardımcıları
}
