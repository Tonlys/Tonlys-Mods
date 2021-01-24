const { MessageEmbed } = require("discord.js");
const qdb = require('quick.db');
require('moment-duration-format');
exports.execute = async(client, message, args) => {
  
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react(client.config.emoji.red);

    if(client.config.SadeceTaglı) {

    if(!message.member.roles.cache.has(client.config.booster))
    if(!message.member.roles.cache.has(client.config.taglar.tagrol))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react(client.config.emoji.red);

    
    let mesaj = qdb.get(`snipe.${message.guild.id}.${message.channel.id}`);
    if (!mesaj) return message.reply('Kanalda silinmiş bir mesaj yok!').then(x => x.delete(5000));


    message.channel.send(embed.addField(`Mesajın İçeriği`, mesaj.icerik).addField(`Mesaj Sahibi`, `<@${mesaj.yazar}>`));
    } else {
    
    let mesaj = qdb.get(`snipe.${message.guild.id}.${message.channel.id}`);
    if (!mesaj) return message.reply('Kanalda silinmiş bir mesaj yok!').then(x => x.delete(5000));


    message.channel.send(embed.addField(`Mesajın İçeriği`, mesaj.icerik).addField(`Mesaj Sahibi`, `<@${mesaj.yazar}>`));
    message.react(client.config.emoji.onay)
}
};

exports.conf = {
  command: "snipe", // Asıl komutumuz
  description: "En son silinen mesajı sohbete atar", // Komut açıklamamız
  aliases: ["snnipe"] // Komutumuzun yardımcıları
}
