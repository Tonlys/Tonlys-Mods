const Discord = require("discord.js");
const client = global.client;
const qdb = require("quick.db")
require("../atonlys.js");
exports.execute = async (message) => {

    if (message.channel.type === "dm" || !message.guild || message.member.bot) return;
    await qdb.set(`snipe.${message.guild.id}.${message.channel.id}`, { yazar: message.author.id });
    if (message.content) qdb.set(`snipe.${message.guild.id}.${message.channel.id}.icerik`, message.content);
};

exports.conf = {
    event: "messageDelete" // Eventin ne olduğunu belirliyoruz.
};