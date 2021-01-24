const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
const kdb = new qdb.table("Kayıt");

exports.execute = async (client, message, args) => {

  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("❤️ Tonlys").setColor("RANDOM").setTimestamp();

    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react(client.config.emoji.red);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));

    kdb.delete(`kullanici.${user.id}.kayıt`);
    
   message.channel.send(embed.setDescription(`${user} adlı üyenin isimerli temizlendi`)).catch(e => { })
  
};

exports.conf = {
  command: "isim-temizle", // Asıl komutumuz
  description: "Belirtilen üyenin tüm isim geçmişlerini siler", // Komut açıklamamız
  aliases: ["isimtemizle"]
}