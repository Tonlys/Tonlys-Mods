  
const { MessageEmbed } = require('discord.js');
const moment = require("moment")
const qdb = require("quick.db")


exports.execute = async (client, message, args) => {
  if(!message.guild) return;

  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    if(!message.member.roles.cache.has(client.config.yetkilisay.yetkili))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return  message.react("❌");
  
    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return  message.react("❌");

  let enAltYetkiliRolu = message.guild.roles.cache.get(client.config.yetkilisay.altyetkili);
  let yetkililer = message.guild.members.cache.filter(member => member.roles.highest.position >= enAltYetkiliRolu.position);
  let yetkililer2 = yetkililer.filter(member => !member.user.bot)

  message.channel.send(embed.setDescription(`
 \`•\` Toplam Yetkili Sayısı: ${yetkililer2.size}
  \`•\` Aktif Yetkili Sayısı: ${yetkililer2.filter(uye => uye.presence.status !== "offline").size}
  \`•\` Ses Kanalında Olan Yetkili Sayısı: ${yetkililer2.filter(member => member.voice.channel).size}
  \`•\` Ses Kanalında Olmayan Yetkili Sayısı: ${yetkililer2.filter(member => !member.voice.channel).size}
  `)).catch(e => { });
  message.react(client.config.emoji.onay)
};


exports.conf = {
    command: "yetkili-say", // Asıl komutumuz
    description: "Sunucudaki yetkililerin seste olup olmama durumuna bakar.", // Komut açıklamamız
    aliases: ["yetkilisay"] // Komutumuzun yardımcıları
  }
  