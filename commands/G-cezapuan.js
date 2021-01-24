const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const ms = require('ms');
require("moment-duration-format");
require("../atonlys.js");

exports.execute = async (client, message, args) => {
    if(!message.member.roles.cache.has(client.config.booster))
    if(!message.member.roles.cache.has(client.config.taglar.tagrol))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);
  
    let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let uye = message.guild.member(kullanici);

    let cpuan = qdb.fetch(`cpuan${uye.id}`) || `0`;
    message.channel.send(`${uye} üyesinin ceza pauanı : __**${cpuan}**__`) 

};

exports.conf = {
  command: "ceza-puan", // Asıl komutumuz
  description: "Sunucdaki ceza puanını atar", // Komut açıklamamız
  aliases: ["cezapuan","cezap","uyarıpuan","uyarı-puan","cp"] // Komutumuzun yardımcıları
}
