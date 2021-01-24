const { MessageEmbed } = require("discord.js");
let qdb = require("quick.db")
require("../atonlys.js");
exports.execute = async (client, message, args) => {
  let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
  if(KaraListe) return  message.react(client.config.emoji.red);
  
  if(client.config.SadeceTaglı) {
 
    if(!message.member.roles.cache.has(client.config.booster))
    if(!message.member.roles.cache.has(client.config.taglar.tagrol))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return message.react(client.config.emoji.red);

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
	let avatar = user.avatarURL({ dynamic: true, size: 2048 });
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(user.tag, avatar)
    .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
	.setImage(avatar)
    message.channel.send(embed).catch(e => { });
} else {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let avatar = user.avatarURL({ dynamic: true, size: 2048 });
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(user.tag, avatar)
    .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
    .setImage(avatar)
    message.channel.send(embed).catch(e => { });

}
};


exports.conf = {
  command: "avatar", // Asıl komutumuz
  description: "Avatarını sohbete atar", // Komut açıklamamız
  aliases: ["pp"] // Komutumuzun yardımcıları
}
