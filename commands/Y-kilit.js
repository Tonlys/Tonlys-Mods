const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");


exports.execute = async (client, message, args) => {
    
  if(!message.member.roles.cache.has(client.config.owner))
  if(!message.member.roles.cache.has(client.config.kilit.yetkili))
  if(message.author.id !== client.config.sahip) return  message.react(client.config.emoji.red);

  let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
  if(KaraListe) return  message.react(client.config.emoji.red);

  let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
  let permObjesi = {};
  if(message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) {
    permObjesi["SEND_MESSAGES"] = false;
    message.channel.updateOverwrite(everyone, permObjesi);
    message.channel.send("Kanal kilitlendi.").catch(e => { })
  } else {
    permObjesi["SEND_MESSAGES"] = null;
    message.channel.updateOverwrite(everyone, permObjesi);
    message.channel.send("Kanal kilidi açıldı.").catch(e => { });
  };
  message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "kilit", // Asıl komutumuz
  description: "Yazılan kanalı everyone rolüne kanala yazı kapatır", // Komut açıklamamız
  aliases: ["loock"] // Komutumuzun yardımcıları
}