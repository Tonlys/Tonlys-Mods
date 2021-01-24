const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
require("moment-duration-format");
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react("❌");

    if(client.config.SadeceTaglı) {
  
    if(!message.member.roles.cache.has(client.config.booster))
    if(!message.member.roles.cache.has(client.config.taglar.tagrol))
    if(message.author.id !== client.config.sahip) 
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react("❌");
  
    let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let uye = message.guild.member(kullanici);


    let muteAlma = qdb.fetch(`muteAlma.${uye.id}`) || `0`;
    let muteAtma = qdb.fetch(`muteAtma.${uye.id}`) || `0`;

    let jailAlma = qdb.fetch(`jailAlma.${uye.id}`) || `0`;
    let jailAtma = qdb.fetch(`jailAtma.${uye.id}`) || `0`;


    let smuteAlma = qdb.fetch(`smuteAlma.${uye.id}`) || `0`;
    let smuteAtma = qdb.fetch(`smuteAtma.${uye.id}`) || `0`;

    let erkek = qdb.get(`erkekKayit_${uye.id}`) || `0`;
    let toplam = qdb.get(`toplamKayit_${uye.id}`) || `0`;
    let kız = qdb.get(`bayanKayit_${uye.id}`) || `0`;

  const embed = new MessageEmbed().setColor("RANDOM").setThumbnail(kullanici.avatarURL({dynamic: true, size: 2048}))
.addField(`__**Kullanıcı Mute Bilgi**__`, `Aldığı Mute Sayısı: \`${muteAlma}\`\nAttığı Mute Sayısı: \`${muteAtma}\` `)
.addField(`__**Kullanıcı Jail Bilgi**__`, `Aldığı Cezalı Sayısı: \`${jailAlma}\`\nAttığı Cezalı Sayısı: \`${jailAtma}\``)
.addField(`__**Kullanıcı Ses Mute Bilgi**__`, `Aldığı Ses Mute Sayısı: \`${smuteAlma}\`\nAttığı Ses Mute Sayısı: \`${smuteAtma}\` `)
.addField(`__**Kullanıcı Kayıt Bilgi**__`, `Toplam Kayıtı : \`${toplam}\`\nToplam Erkek Kayıt : \`${erkek}\`\nToplam Kız : \`${kız}\` `)

    message.channel.send(embed);
} else {
  
    let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let uye = message.guild.member(kullanici);


    let muteAlma = qdb.fetch(`muteAlma.${uye.id}`) || `0`;
    let muteAtma = qdb.fetch(`muteAtma.${uye.id}`) || `0`;

    let jailAlma = qdb.fetch(`jailAlma.${uye.id}`) || `0`;
    let jailAtma = qdb.fetch(`jailAtma.${uye.id}`) || `0`;
    let jailKladırma = qdb.fetch(`jailKaldırma.${uye.id}`) || `0`;


    let smuteAlma = qdb.fetch(`smuteAlma.${uye.id}`) || `0`;
    let smuteAtma = qdb.fetch(`smuteAtma.${uye.id}`) || `0`;


   let erkek = qdb.get(`erkekKayit_${uye.id}`) || `0`;
   let toplam = qdb.get(`toplamKayit_${uye.id}`) || `0`;
   let kız = qdb.get(`bayanKayit_${uye.id}`) || `0`;



const embed = new MessageEmbed().setColor("RANDOM").setThumbnail(kullanici.avatarURL({dynamic: true, size: 2048}))
.addField(`__**Kullanıcı Mute Bilgi**__`, `Aldığı Mute Sayısı: \`${muteAlma}\`\nAttığı Mute Sayısı: \`${muteAtma}\` `)
.addField(`__**Kullanıcı Jail Bilgi**__`, `Aldığı Cezalı Sayısı: \`${jailAlma}\`\nAttığı Cezalı Sayısı: \`${jailAtma}\`\nCezalıdan Kaldırma Sayısı: \`${jailKladırma}\` `)
.addField(`__**Kullanıcı Ses Mute Bilgi**__`, `Aldığı Ses Mute Sayısı: \`${smuteAlma}\`\nAttığı Ses Mute Sayısı: \`${smuteAtma}\` `)
.addField(`__**Kullanıcı Kayıt Bilgi**__`, `Toplam Kayıtı : \`${toplam}\`\nToplam Erkek Kayıt : \`${erkek}\`\nToplam Kız Kayıt: \`${kız}\` `)

    message.channel.send(embed); 
}
};
exports.conf = {
    command: "all-gbt",
    aliases: ["gbt", "i","istatistik"],
    description: "Belirtilen üyenin tüm bilgilerini gösterir."
};
