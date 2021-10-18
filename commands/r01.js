const {MessageButton} = require(`discord-buttons`)

const { MessageEmbed } = require('discord.js'); //required for embeds

module.exports = {
	name: 'r01',
	description: 'Buttons',
	async execute(message, args, client, button) {

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Super Mario 3D World') 
      .setID('null1') 

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('The Legend of Zelda') 
      .setID('r01answer') 

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Halo') 
      .setID('null2') 

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Luigi\'s Mansion') 
      .setID('null3')  

    let embed1 = new MessageEmbed()
        .setColor('#FF0090')
        .setDescription(`*Round 1*`)   

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


