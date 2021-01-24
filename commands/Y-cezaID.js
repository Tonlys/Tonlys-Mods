const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");

require("moment-duration-format");

exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    if(!message.member.roles.cache.has(client.config.owner))
    if(!message.member.roles.cache.has(client.config.cezabilgi.yetkili))
    if(message.author.id !== client.config.sahip) return  message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react(client.config.emoji.red);


    let CezaID = args[0]

    if(!CezaID || isNaN(CezaID)) return message.channel.send(embed.setDescription(`${message.member} lütfen geçerli bir \`ID\` giriniz.`))

    let ceza = qdb.get(`cezaBilgi_${CezaID}`)
    if(!ceza) return message.channel.send(`:x: **\`${CezaID}\`** ID'sine ait bir veri bulunamadı!`)  
  
    message.channel.send(embed.setDescription(`
        \`${ceza.kod}\` ID'li Ceza Bilgi **Tipi:** __**${ceza.cezatip}** __

        • **Üye :** <@${ceza.uyes}>
        • **Yetkili :** <@${ceza.yetkili}>
        • **Başlangıç Süresi :** \`${ceza.bsure}\`
        • **Bitiş Süresi :** \`${ceza.ssure}\`
        • **Sebep :** ${ceza.sebep}
`))

message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "cb", // Asıl komutumuz
  description: "ID li ceza bildiyi gösterir", // Komut açıklamamız
  aliases: ["ceza-bilgi","bilgi-ceza","cezabilgi"] // Komutumuzun yardımcıları
}
