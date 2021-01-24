const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
const kdb = new qdb.table("Kayıt");

exports.execute = async (client, message, args) => {

  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("❤️ Tonlys").setColor("RANDOM").setTimestamp();


    if(!message.member.roles.cache.has(client.config.register.yetkili))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react(client.config.emoji.red);


    let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let uye = message.guild.member(kullanici);
    let kayıt = kdb.get(`kullanici.${uye.id}.kayıt`) || [];
   let kayıtrol = qdb.fetch(`erol.${uye.id}`)
    kayıt = kayıt.reverse();
 
    let isimler = kayıt.length > 0 ? kayıt.map((value, index) => `${index + 1} - ${value.isim} ${value.yas ? value.yas : ``}`).join("\n") : "Daha Önce Böyle Bir Üye Kayıt Olmamıştır!";
   message.channel.send(embed.setDescription(`${uye} Daha Önceki Rolü : ${kayıtrol}\nKullanıcının Eski İsimleri;\n ${isimler}`)).catch(e => { })
  

};

exports.conf = {
  command: "isimler", // Asıl komutumuz
  description: "Belirtilen üyenin eski isimlerini atar", // Komut açıklamamız
  aliases: ["uye-info","uyeinfo","info-uye","üye-bilgi","üyebilgi"]
}