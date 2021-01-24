const Discord = require("discord.js");
require("../atonlys.js");
const qdb = require("quick.db");
exports.execute = async (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.react(client.config.emoji.red)
 
    let KaraListe = qdb.fetch(`karaL.${message.author.id}`)
    if(KaraListe) return message.react(client.config.emoji.red)

    if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) 
    return message.channel.send("1-100 arasında silinecek mesaj miktarı belirtmelisin!").then(x => x.delete({timeout: 5000}));
    await message.delete().catch(e => { });
    await message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send(`Başarıyla **${msjlar.size}** adet mesaj silindi!`).then(x => x.delete({timeout: 5000}))).catch(e => { });

};
exports.conf = {
  command: "sil", // Asıl komutumuz
  description: "Belirtilen miktar kadar sohbeti temizler.", // Komut açıklamamız
  aliases: ["celar"] // Komutumuzun yardımcıları
}