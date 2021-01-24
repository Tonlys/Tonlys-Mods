const Discord = require("discord.js");
const client = global.client;
require("../atonlys.js");
exports.execute = async () => {
  
  client.user.setPresence({ 
    activity: { name: client.config.footer }, 
    status:  client.config.status
  });
  client.channels.cache.get(client.config.botses).join().catch(e => { });
};

exports.conf = {
  event: "ready" // Eventin ne olduğunu belirliyoruz.
};
