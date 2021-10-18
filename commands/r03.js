const {MessageButton} = require(`discord-buttons`)

const { MessageEmbed } = require('discord.js'); //required for embeds

module.exports = {
	name: 'r03',
	description: 'Buttons',
	async execute(message, args, client, button) {

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Yoshi\'s Island') 
      .setID('null1') 

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Super Mario RPG') 
      .setID('r03answer') 

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Dragon Quest V') 
      .setID('null2') 

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Mario Party DS') 
      .setID('null3')  

    let embed1 = new MessageEmbed()
        .setColor('#FF0090')
        .setDescription(`*Round 3*`)   

  try {message.channel.send({
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed1
}); 
    } catch(e) {
      console.log(e)
     }} 
	}


