const {MessageEmbed}= require("discord.js");
const qdb = require("quick.db");
const client = global.client;
require("../atonlys.js");
exports.execute = (message) => {

    if(!message.guild || message.author.bot || message.content.toLowerCase().includes(`${client.config.prefix}afk`)) return;
    
    if(!qdb.has(`zAfk_${message.author.id}`)) return;	
    qdb.delete(`zAfk_${message.author.id}`)
    if(message.member.manageable) message.member.setNickname(message.member.displayName.replace("[AFK] ", "")).catch(e => { });
    message.channel.send(`${message.author} artık AFK değilsin!`).then(x => x.delete({timeout: 5000})).catch(e => { });
  
 
};
  exports.conf = {
  event: "message" // Eventin ne olduğunu belirliyoruz.
};
