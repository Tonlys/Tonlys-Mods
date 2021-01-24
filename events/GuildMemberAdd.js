const { MessageEmbed } = require("discord.js");
const client = global.client;
const qdb = require("quick.db");

require("moment-duration-format");

exports.execute = async (member) => {
  

  let guvenli = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
  let jail = qdb.get(`jaill.${member.id}`)
  let fBan = qdb.get(`fBan.${member.id}`)

 if(fBan) {
    member.ban();
    client.channels.cache.get(client.config.guildMemberAdd.forceban).send(`${member} adlı üye banlı olduğu halde girmeye çalıştı ve tekrardan banlandı.`).catch(e => { })
  } else if(jail) {
    member.roles.set([client.config.jail.rol]).catch(e => { })
    client.channels.cache.get(client.config.guildMemberAdd.jail).send(`${member} adlı üye jailli olduğu için tekrardan jaile atılmıştır.`).catch(e => { })

  } else if(guvenli) {
    member.roles.set([client.config.jail.rol]).catch(e => { })
    client.channels.cache.get(client.config.guildMemberAdd.guvenli).send(`${member} adlı üye hesabı 7 gün önce açılmış olduğu için jaile atılmıştır.`).catch(e => { })
  } else {
    member.roles.set([client.config.register.kayıtsız]).catch(e => { })
  }

 
};
exports.conf = {
  event: "guildMemberAdd" // Eventin ne olduğunu belirliyoruz.
};





