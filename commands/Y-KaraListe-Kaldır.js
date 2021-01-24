const { MessageEmbed, Role } = require("discord.js");
const qdb = require("quick.db");
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    if(!message.guild) return;
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");



    if(!message.member.roles.cache.has(client.config.owner))
    if(!message.member.roles.cache.has(client.config.karaliste.yetkili))
    if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red);

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi.";

    
    qdb.delete(`karaL.${user.id}`)

    client.channels.cache.get(client.config.karaliste.log).send(embed.setDescription(`
    __**Kara Listeden Kaldırıldı**__

    **Yetkili** : ${message.member} - (\`${message.member.user.username} - ${message.member.id}\`) 
    **Üye** : ${user} - (\`${user.user.username} - ${user.id}\`)
    **Sebep** : ${reason}
    `)).catch(e => { })

   user.send(embed.setDescription(`${message.guild.name} adlı sunucudan kara listeden kaldırıldın bota erişimin tekrardan açılmıştır.`)).catch(e => { })
   message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "karaliste-kaldır", // Asıl komutumuz
  description: "Üyeyi kara listeden kaldırır", // Komut açıklamamız
  aliases: ["kara-liste-kaldır","klk","unkaraliste","un-karaliste"],
}

  
