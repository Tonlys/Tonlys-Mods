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

  let boster = client.config.booster;
 
  message.channel.send(embed.setDescription(`
  • **${message.guild.name} Ailesinin Kanatları Altında Toplam** ${client.emojiSayi(`${message.guild.memberCount}`)} **Üye Bulunmakta.**
  • **Aktif** ${client.emojiSayi(`${message.guild.members.cache.filter(u => u.presence.status != "offline").size}`)} **Kullanıcı Bulunmakta.**
  • **Tagımızı Alarak Ailemize Katılmış** ${client.emojiSayi(`${message.guild.roles.cache.get(tag).members.size}`)} **Kişi Bulunmakta.**
  • **Sunucumuzda** ${client.emojiSayi(`${message.guild.roles.cache.get(boster).members.size}`)} **Destekçi Bulunmakta.**
  • **Ses Kanallarında** ${client.emojiSayi(`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}`)} **Kişi Bulunmakta.**`) 
  );
} else {
  
   
  let tag = client.config.taglar.tagrol;

  let boster = client.config.booster;

 
 message.channel.send(embed.setDescription(`
 • **${message.guild.name} Ailesinin Kanatları Altında Toplam** ${client.emojiSayi(`${message.guild.memberCount}`)} **Üye Bulunmakta.**
 • **Aktif** ${client.emojiSayi(`${message.guild.members.cache.filter(u => u.presence.status != "offline").size}`)} **Kullanıcı Bulunmakta.**
 • **Tagımızı Alarak Ailemize Katılmış** ${client.emojiSayi(`${message.guild.roles.cache.get(tag).members.size}`)} **Kişi Bulunmakta.**
 • **Sunucumuzda** ${client.emojiSayi(`${message.guild.roles.cache.get(boster).members.size}`)} **Destekçi Bulunmakta.**
 • **Ses Kanallarında** ${client.emojiSayi(`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}`)} **Kişi Bulunmakta.**`) 
 );
}                                                                                                                                                                                                                                                                                                              
}
exports.conf = {
  command: "say", // Asıl komutumuz
  description: "Sunucdaki üyeleri sayar", // Komut açıklamamız
  aliases: [] // Komutumuzun yardımcıları
}
