const { MessageEmbed } = require("discord.js");
require("../atonlys.js");
const qdb = require("quick.db")

exports.execute = async (client, message, args) => {

  let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
  if(KaraListe) return message.react(client.config.emoji.red);

  if(client.config.SadeceTaglı) {

  
  if(!message.member.roles.cache.has(client.config.booster))
  if(!message.member.roles.cache.has(client.config.taglar.tagrol))
  if(message.author.id !== client.config.sahip)
  if(!message.member.roles.cache.has(client.config.owner)) return message.react(client.config.emoji.red);


  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");
  if (!uye) return message.channel.send(embed.setDescription("Ses odasına gidilecek üyeyi belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(embed.setDescription("Belirtilen üyenin ve kendinin ses kanalında olduğundan emin ol!")).then(x => x.delete({timeout: 5000}));
    const kabul = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    const reddet = (reaction, user) => {
      return ['❌'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    message.channel.send(`${uye}`, {embed: embed.setAuthor(uye.displayName, uye.user.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author} Senin Ses Kanalına Girmek İçin İzin İstiyor! Onaylıyor Musun?`)}).then(async msj => {
      await msj.react('✅');
      await msj.react('❌');
    
      msj.awaitReactions(reddet, {max: 1, time: 50000, error: ['time']}).then(c => {
        let cevap = c.first();
        if (cevap) {
          msj.delete();
          message.channel.send(`${message.member} isteğin kabul edilmedi.`)
        };
            });
    
  msj.awaitReactions(kabul, {max: 1, time: 50000, error: ['time']}).then(c => {
	let cevap = c.first().catch(e => { });
	if (cevap) {
	  message.member.voice.setChannel(uye.voice.channelID);
          msj.delete().catch(e => { });
	};
      });
    });
} else {

    let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");
    if (!uye) return message.channel.send(embed.setDescription("Ses odasına gidilecek üyeyi belirtmelisin!")).then(x => x.delete({timeout: 5000}));
    if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(embed.setDescription("Belirtilen üyenin ve kendinin ses kanalında olduğundan emin ol!")).then(x => x.delete({timeout: 5000}));
    const kabul = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    const reddet = (reaction, user) => {
      return ['❌'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    message.channel.send(`${uye}`, {embed: embed.setAuthor(uye.displayName, uye.user.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author} Senin Ses Kanalına Girmek İçin İzin İstiyor! Onaylıyor Musun?`)}).then(async msj => {
      await msj.react('✅');
      await msj.react('❌');
    
      msj.awaitReactions(reddet, {max: 1, time: 50000, error: ['time']}).then(c => {
        let cevap = c.first();
        if (cevap) {
          msj.delete().catch(e => { });
          message.channel.send(`${message.member} isteğin kabul edilmedi.`)
        };
            });
    
    msj.awaitReactions(kabul, {max: 1, time: 50000, error: ['time']}).then(c => {
	let cevap = c.first();
	if (cevap) {
	  message.member.voice.setChannel(uye.voice.channelID);
          msj.delete().catch(e => { });
	};
      });
    });


}
};
exports.conf = {
  command: "git", // Asıl komutumuz
  description: "Belirtilen üyeynin yanına gitme isteği atar", // Komut açıklamamız
  aliases: ["go"] // Komutumuzun yardımcıları
}
require("../atonlys.js");
