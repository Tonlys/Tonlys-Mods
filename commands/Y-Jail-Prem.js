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


    qdb.add(`jailAlma.${user.id}`, 1) //User kaç mute yemiş onu sayar
    qdb.add(`jailAtma.${message.member.id}`, 1) //Yetkili kaçtane mute atmış onu sayar

    qdb.add(`cpuan${user.id}`, 20) //Ceza puan sayma
    qdb.add(`Cezaİd_`, +1); //Ceza ID sayma

    let Cezaİd = qdb.fetch(`Cezaİd_`) + 1; //Ceza ID veri çekme 
    let cpuan = qdb.fetch(`cpuan${user.id}`) //Ceza puan veri çekme

    let tarih = moment(Date.now()).format('DD-MM-YYYY | H:mm:ss')
    qdb.set(`jailRoles.${user.id}`, user.roles.cache.map(x => x.id)) //Jail rol kayıt etme
    qdb.set(`jaill.${user.id}`, `jails`) //KALICI JAİL KOMUTU

    await user.roles.set(user.roles.cache.has(client.config.booster) ? [client.config.jail.rol, client.config.booster] : [client.config.jail.rol]);

    //Ceza ID veri kayıt
    qdb.set(`cezaBilgi_${Cezaİd}`, {
        sebep: reason,
        kod: Cezaİd,
        yetkili: message.author.id, 
        uyes: user.id,
        bsure: tarih,
        ssure: "Kalıcı",
        cezatip: "Prem Jail"
    });


    client.channels.cache.get(client.config.jail.log).send(embed.setDescription(`${user} (\`${user.id}\`) adlı kullanıcıya <@&${client.config.jail.rol}> rolü verilmiştir.
    • Sebep : \`${reason}\` `)).catch(e => { })
    client.channels.cache.get(client.config.cezapuan).send(`${user}; adlı üye aldığı **#${Cezaİd}** ID'li ceza ile **${cpuan}** ulaştı.`).catch(e => { })
    message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "jail", // Asıl komutumuz
  description: "Süreli Jaile Atar.", // Komut açıklamamız
  aliases: ["kalıcıjail", "kalıcı-jail"] // Komutumuzun yardımcıları
}
