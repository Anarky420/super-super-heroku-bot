const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  if(message.content === 'Dunban Talent Art') {
    message.channel.send('Born In A World Of Strife, Against The Odds, We Choose To Fight, Blossom Dance!.');
  }
  if(message.content === 'Shulk Talent Art') {
    message.channel.send('Monado Lend Us Your Power');
  }
  if(message.content === 'Melia Talent Art') {
    message.channel.send('Manifest Yourself');
  }
  if(message.content === 'Sharla Talent Art') {
    message.channel.send('Gotta Cool Off);
  }
  if(message.content === 'Fiora Talent Art') {
    message.channel.send('Sword Drones!');
  }
if(message.content === 'Riki Talent Art') {
    message.channel.send('Riki Find Goodies');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
