const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db")
const sicil = new qdb.table("tmute");
const ms = require('ms');
const moment = require("moment");
require("moment-duration-format");
require("../atonlys.js");
exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    if(!message.member.roles.cache.has(client.config.owner))
    if(!message.member.roles.cache.has(client.config.voicemute.yetkili))
    if(message.author.id !== client.config.sahip) return message.react(client.config.emoji.red);

    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red)
  
    let time = args[1];
    if(!time || !ms(time)) return message.react(client.config.emoji.red)

    let reason = args.splice(2).join(" ");
    if(!reason) reason = "Belirtilmedi.";

    qdb.add(`smuteAlma.${user.id}`, 1) //User kaç mute yemiş onu sayar
    qdb.add(`smuteAtma.${message.member.id}`, 1) //User kaç tane mute atmış onu sayar

    qdb.add(`cpuan${user.id}`, 3) //Userin ceza puanını sayar
    qdb.add(`Cezaİd_`, +1); //Ceza ID'yi sayar

    let Cezaİd = qdb.fetch(`Cezaİd_`) + 1; //
    let cpuan = qdb.fetch(`cpuan${user.id}`)

    let tarih = moment(Date.now()).format('DD-MM-YYYY | H:mm:ss')
    let bitis =  moment(Date.now() + ms(time)).format('DD-MM-YYYY | H:mm:ss')

    //Ceza ID veri kayıt
    qdb.set(`cezaBilgi_${Cezaİd}`, {
      sebep: reason,
      kod: Cezaİd,
      yetkili: message.author.id, 
      uyes: user.id,
      bsure: tarih,
      ssure: bitis,
      cezatip: "Voice Mute"
  });

    client.channels.cache.get(client.config.voicemute.log).send(embed.setDescription(`${user} (\`${user.id}\`) kullanıcısının ses kanallarında mutesi başlamıştır.\n\n• Atılış Tarihi : \`${tarih}\`\n• Bitiş Tarihi : \`${bitis}\`\n• Atılan Süre : \`${time.replace(`s`, ` Saniye`).replace(`m`, ` Dakika`).replace(`h`, ` Saat`).replace(`d`, ` Gün`)}\`\n• Sebep : \`${reason}\` `)).catch(e => { })
    client.channels.cache.get(client.config.cezapuan).send(`${user}; adlı üye aldığı **#${Cezaİd}** ID'li ceza ile **${cpuan}** ulaştı.`).catch(e => { })

    qdb.set(`voiceCehck_${user.id}`, reason); //Mute geri açma

    await user.roles.add(client.config.voicemute.rol).catch(e => { })
    if(user.voice.channel) user.voice.setMute(true);

    setTimeout(async () => {

    await user.roles.remove(client.config.voicemute.rol).catch(e => { })
    qdb.delete(`voiceCehck_${user.id}`)
    if(user.voice.channel) user.voice.setMute(false);

    }, ms(time));

    message.react(client.config.emoji.onay)
};
exports.conf = {
  command: "vmute", // Asıl komutumuz
  description: "Ses kanllarındaki mutesini başlatır", // Komut açıklamamız
  aliases: ["v-mute","sesmute","ses-mute","voice-mute","voicemute"] // Komutumuzun yardımcıları
}
