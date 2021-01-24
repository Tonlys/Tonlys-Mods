const Discord = require("discord.js");
const client = global.client;
require("../atonlys.js");
exports.execute = async (message) => {
  
  let client = message.client;
  
  if (message.author.bot) return;
  if(!message.guild) return;
  if (message.content.startsWith(client.config.prefix)) {
  
  let args = message.content.split(" ");
  let command = args[0].substring(client.config.prefix.length);
  args = args.splice(1)
    
  if (client.commands.has(command)) {
  client.commands.get(command).execute(client, message, args);   
  }
  else if(client.aliases.has(command)) {
  client.aliases.get(command).execute(client, message, args);   
  } return;
 };
};

exports.conf = {
    event: "message" // Eventin ne olduğunu belirliyoruz.
};