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

	  if (!args[0] || isNaN(args[0])) return message.channel.send(embed.setDescription("Geçerli bir kişi ID'si belirtmelisin!")).then(x => x.delete({timeout: 5000}));
    let user = args[0];
    if(!user) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000})).catch(e => { });

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi"


    qdb.add(`banAtma.${message.member.id}`, 1)




    message.guild.members.unban(user).catch(err => message.channel.send("Belirtilen ID numarasına sahip bir ban bulunamadı!").then(x => x.delete({timeout: 5000})));
		client.channels.cache.get(client.config.ban.log).send(embed.setDescription(`${user} üyesinin başarılı şekilde uzaklaştırılması kaldırıldı.\n• Sebep: \`${reason}\` `)).catch(e => { });

    message.react(client.config.emoji.onay)
};




exports.conf = {
  command: "unban", // Asıl komutumuz
  description: "Ban Atar", // Komut açıklamamız
  aliases: ["unyasakla"] // Komutumuzun yardımcıları
}
