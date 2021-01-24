const {MessageEmbed}= require("discord.js");
const qdb = require("quick.db");
require("../atonlys.js");
const client = global.client;

  
exports.execute = (oldState, newState) => {

	let sunucu = client.config.guildid;

 	let user = client.guilds.cache.get(sunucu).members.cache.get(newState.id)
 	let kontrol = qdb.fetch(`voiceCehck_${user.id}`)

   	if (!oldState.channelID && newState.channelID) {
    if (newState.channelID === client.config.meeting.log) return;
	if (!kontrol) {
	user.voice.setMute(false).catch(e => { });	
}}
 
};
  exports.conf = {
  event: "voiceStateUpdate" // Eventin ne olduğunu belirliyoruz.
};
