const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
require("../atonlys.js");
exports.execute = async (client, message, args, emoji) => {
    const embed = new MessageEmbed().setColor("RANDOM").setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setFooter(client.config.footer);


    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react("❌");


if(client.config.SadeceTaglı) {
   if(!message.member.roles.cache.has(client.config.booster))
   if(!message.member.roles.cache.has(client.config.taglar.tagrol))
   if(message.author.id !== client.config.sahip)
   if(!message.member.roles.cache.has(client.config.owner)) return  message.react("❌");
    let tag = client.config.taglar.tagrol;
    message.channel.send(`
  **Toplam Üye** ${client.emojiSayi(`${message.guild.memberCount}`)} **Toplam Taglı Üye** ${client.emojiSayi(`${message.guild.roles.cache.get(tag).members.size}`)} 
    **Ses Kanallarında Bulunan Üye** ${client.emojiSayi(`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}`)}
                      `);
} else {
  
  let tag = client.config.taglar.tagrol;
 message.channel.send(`
 **Toplam Üye** ${client.emojiSayi(`${message.guild.memberCount}`)} **Toplam Taglı Üye** ${client.emojiSayi(`${message.guild.roles.cache.get(tag).members.size}`)} 
    **Ses Kanallarında Bulunan Üye** ${client.emojiSayi(`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}`)}
                     `);

}                                                                                                                                                                                                                                                                                                              
}
exports.conf = {
  command: "sessay", // Asıl komutumuz
  description: "Sunucdaki üyeleri sayar", // Komut açıklamamız
  aliases: ["sesbilgi","ses"] // Komutumuzun yardımcıları
}
