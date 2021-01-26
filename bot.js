const Discord = require("discord.js"); 
const MessageEmbed = require("discord.js");  
 //TONLYS TARAFINDAN KODLANMIŞTIR...
const _client = new Discord.Client({ fetchAllMembers: true });  
const client = global.client = _client
global.client = client;
 
const fs = require("fs");
const qdb = require("quick.db");
 

client.commands = new Discord.Collection();  
client.aliases = new Discord.Collection();  
fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    let command = require(`./commands/${file}`);  
    client.commands.set(command.conf.command, command);  
    console.log(`[Command] ${file.replace(".js", "")} command loaded.`);  
    command.conf.aliases.forEach(aliases => {
    client.aliases.set(aliases, command)  
  })
});
 
fs.readdirSync("./events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./events/${file}`);  
    client.on(event.conf.event, event.execute);  
    console.log(`[Event] ${file.replace(".js", "")} event loaded.`);  
});
const sayiEmojiler = {0: client.config.emoji.sıfır, 1: client.config.emoji.bir, 2: client.config.emoji.iki, 3: client.config.emoji.üç, 4: client.config.emoji.dört, 5: client.config.emoji.beş, 6: client.config.emoji.altı, 7: client.config.emoji.yedi, 8: client.config.emoji.sekiz, 9: client.config.emoji.dokuz };

  const emoji = global.emoji;
  client.emojiSayi = function(sayi) {
    var newMesaj = "";
    var arr = Array.from(sayi);
    for (var x = 0; x < arr.length; x++) {
      newMesaj += (sayiEmojiler[arr[x]] === "" ? arr[x] : sayiEmojiler[arr[x]]);
    }
    return newMesaj; 
  };
  
client.login(client.config.token).then(c => console.log(`Başarılı şekilde bağlandım ${client.user.tag}!`)).catch(err => console.error(`Bot giriş yapamadı!`));  
 
