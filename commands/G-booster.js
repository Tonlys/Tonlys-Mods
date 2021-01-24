const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react("❌");
  
    if(!message.member.roles.cache.has(client.config.owner))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.booster)) 
    return message.react(client.config.emoji.red);
    let tag = client.config.taglar.tag;
    let tag2 = client.config.taglar.tag2;
    let uye = message.member;

    let isim = args.splice(0).join(" ");
    if(!isim) return message.channel.send(embed.setDescription("Geçerli bir isim belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  
    if(isim.length >= "26") return message.channel.send(embed.setDescription(`Max 25 karakter kullana bilirsin.`))


    if(client.config.taglar.TagVarYok) {

    if(!message.member.roles.cache.has(client.config.taglar.tagrol)) {

    uye.setNickname(`${tag2} ${isim}`).catch(e => { });
  message.channel.send(embed.setDescription(`${message.member} yeni adın : ${tag2} ${isim}`));	

} else {
    uye.setNickname(`${tag} ${isim}`).catch(e => { });
    message.channel.send(embed.setDescription(`${message.member} yeni adın ${tag} ${isim}`));
}
} else {

    uye.setNickname(`${tag} ${isim}`).catch(e => { });
    message.channel.send(embed.setDescription(`${message.member} yeni adın ${tag} ${isim}`));
}

};
exports.conf = {
  command: "b", // Asıl komutumuz
  description: "Sunucudaki ismini değiştirir", // Komut açıklamamız
  aliases: ["booster","boster"] // Komutumuzun yardımcıları
}