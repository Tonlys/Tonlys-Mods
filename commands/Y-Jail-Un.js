const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db")
const sicil = new qdb.table("tmute");
const ms = require('ms');
const moment = require("moment");
require("moment-duration-format")
require("../atonlys.js");
exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

   
  if(!message.member.roles.cache.has(client.config.owner))
  if(!message.member.roles.cache.has(client.config.jail.yetkili))
  if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red)

    let reason = args.splice(1).join(" ");
    if(!reason) reason = "Belirtilmedi.";
    qdb.add(`jailKaldırma.${message.member.id}`, 1)
    client.channels.cache.get(client.config.jail.log).send(embed.setDescription(`
    ${user} (\`${user.id}\`) adlı kullanıcıya <@&${client.config.jail.rol}> rolü alınmıştır.
    
    • Sebep : \`${reason}\` `)).catch(e => { })
    qdb.delete(`jaill.${user.id}`) //KALICI JAİL KOMUTU
    let eskiRolles = await qdb.get(`jailRoles.${user.id}`);
    await user.roles.set(eskiRolles).catch(e => { });
    message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "unjail", // Asıl komutumuz
  description: "Belirtilen üyenin jailini kaldırır.", // Komut açıklamamız
  aliases: ["jail-un","un-jail"] // Komutumuzun yardımcıları
}
