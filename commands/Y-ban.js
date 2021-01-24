const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");


exports.execute = async (client, message, args) => {
  if(!message.guild) return;
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

  
    if(!message.member.roles.cache.has(client.config.ban.banyetkili))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react(client.config.emoji.red);


    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000})).catch(e => { });

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi"

    if (message.member.roles.highest.position <= user.roles.highest.position) return message.channel.send(`Senden Üstün Veye Aynı Rolde Olan Bir Yetkiliye Ban Atamazsın!`).then(x => x.delete({timeout: 5000})).catch(e => { });

    qdb.add(`banAtma.${message.member.id}`, 1)


    client.channels.cache.get(client.config.ban.log).send(embed.setDescription(`${user} (\`${user.id}\`) üyesinin başarılı şekilde suncudan uzaklaştırıldı\n• Sebep: \`${reason}\` `)).catch(e => { });



    user.ban().catch(e => { });
  qdb.add(`banL_${message.author.id}`, 1)
    if(await qdb.get(`banL_${message.author.id}`) >= client.config.ban.banlimit) {
      message.member.roles.remove(client.config.ban.banyetkili)              
}
    message.react(client.config.emoji.onay)
};




exports.conf = {
  command: "ban", // Asıl komutumuz
  description: "Ban Atar", // Komut açıklamamız
  aliases: ["yasakla"] // Komutumuzun yardımcıları
}