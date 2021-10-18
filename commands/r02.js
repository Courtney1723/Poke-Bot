const {MessageButton} = require(`discord-buttons`)

const { MessageEmbed } = require('discord.js'); //required for embeds

module.exports = {
	name: 'r02',
	description: 'Buttons',
	async execute(message, args, client, button) {

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Sonic the Hedgehog 1991') 
      .setID('r02answer') 

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Crash Bandicoot') 
      .setID('null1') 

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Dr. Mario') 
      .setID('null2') 

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Spyro Trilogy') 
      .setID('null3')  

    let embed1 = new MessageEmbed()
        .setColor('#FF0090')
        .setDescription(`*Round 2*`)   

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


