const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
  bot.user.setGame("Command: *help");
  console.log("connectedç");
});

bot.login('NjAwNjY2MjUzMTQwNDI2NzUy.XTXq2g.yc20h_nwqTtNWQT6OvnGELMHHHs');


bot.on('messade', message => {
  if (message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes: \n -*help");
  }

  if (message.content === "Salut"){
    message.reply("Bien le bonjour. :)");
    console.log("commande Salut effectué");
  }
});
