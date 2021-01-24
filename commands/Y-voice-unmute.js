const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db")
const sicil = new qdb.table("tmute");
const ms = require('ms');
const moment = require("moment");
require("../atonlys.js");
require("moment-duration-format");

exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    if(!message.member.roles.cache.has(client.config.owner))
    if(!message.member.roles.cache.has(client.config.voicemute.yetkili))
    if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red)

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi.";


    client.channels.cache.get(client.config.chatmute.log).send(embed.setDescription(`
    ${user} (\`${user.id}\`) kullanıcısının ses kanallarındaki mutesi kaldırılmıştır.

    • Yetkili : ${message.member} (\`${message.member.id}\`)
    • Sebep : \`${reason}\` `)).catch(e => { })

    await user.roles.remove(client.config.voicemute.rol).catch(e => { })
    qdb.delete(`voiceCehck_${user.id}`)
    if(user.voice.channel) user.voice.setMute(false);


    message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "unsesmute", // Asıl komutumuz
  description: "Ses kanllarındaki mutesini kaldırır.", // Komut açıklamamız
  aliases: ["unvmute", "un-vmute","vunmute", "ses-unmute","sesunmute","voiceunmute","voice-unmute"] // Komutumuzun yardımcıları
}
require("../atonlys.js");
