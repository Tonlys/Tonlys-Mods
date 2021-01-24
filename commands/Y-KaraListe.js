const { MessageEmbed, Role } = require("discord.js");
const qdb = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
require("../atonlys.js");
exports.execute = async (client, message, args) => {

    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");


    if(!message.member.roles.cache.has(client.config.owner))
    if(!message.member.roles.cache.has(client.config.karaliste.yetkili))
    if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);
 
    let tarih = moment(Date.now()).format('DD-MM-YYYY')
  
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red);

    if(message.member.roles.highest.position <= user.roles.highest.position) return message.channel.send(`Senden aynı yetkide verya üstün olan bir yetkiliyi kara listeye atamazsın!`).then(x => x.delete({timeout: 5000})).catch(e => { });

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi.";

    qdb.add(`karaLP_${user.id}`, +1)
    
    qdb.set(`karaL.${user.id}`, {
        yetkili: message.member.user.username,
        zaman: tarih,
        users: user.user.username
    })

    client.channels.cache.get(client.config.karaliste.log).send(embed.setDescription(`
    __**Kara Liste Eklendi**__
  
    **Yetkili** : ${message.member} - (\`${message.member.user.username} - ${message.member.id}\`) 
    **Üye** : ${user} - (\`${user.user.username} - ${user.id}\`)
    **Sebep** : ${reason}
    `)).catch(e => { })

    user.send(embed.setDescription(`Hey dostum **${message.guild.name}** adlı sunucuda kara listeye eklendin ve bota erişimin kısıtlandı.`)).catch(e => { })
    message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "karaliste", // Asıl komutumuz
  description: "Üyeyi kara listeye atar", // Komut açıklamamız
  aliases: ["kara-liste","kl"],
}

  
