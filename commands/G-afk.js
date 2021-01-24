const Discord = require("discord.js");
const qdb = require("quick.db")
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react("❌");

    if(client.config.SadeceTaglı) {

  
    if(!message.member.roles.cache.has(client.config.booster))
    if(!message.member.roles.cache.has(client.config.taglar.tagrol))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return message.react(client.config.emoji.red);

    let sebep = args.join(' ');
    if (!sebep) sebep = "Belirtilmedi."
    let zatenafk = qdb.fetch(`zAfk_${message.author.id}`)
    if(zatenafk) return message.channel.send(`2. kez afk olamazsın dostum.`);

    qdb.set(`zAfk_${message.author.id}`, sebep)  

    if(message.member.manageable) message.member.setNickname(`[AFK] ${message.member.displayName}`).catch(e => { });
    message.reply(`Başarılı şekilde afk moduna geçiş yapılmıştır`).then(x => x.delete({timeout: 5000}));

} else {

    let sebep = args.join(' ');
    if (!sebep) sebep = "Belirtilmedi."
    let zatenafk = qdb.fetch(`zAfk_${message.author.id}`)
    if(zatenafk) return message.channel.send(`2. kez afk olamazsın dostum.`);

    qdb.set(`zAfk_${message.author.id}`, sebep)  

    if(message.member.manageable) message.member.setNickname(`[AFK] ${message.member.displayName}`).catch(e => { });
    message.reply(`Başarılı şekilde afk moduna geçiş yapılmıştır.`).then(x => x.delete({timeout: 5000}));

}
};
exports.conf = {
  command: "afk", // Asıl komutumuz
  description: "Sunucudaki ismine [AFK] tagını verir", // Komut açıklamamız
  aliases: [] // Komutumuzun yardımcıları
};