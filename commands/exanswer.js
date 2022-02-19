const {MessageButton} = require(`discord-buttons`)

const { Collector, MessageEmbed } = require('discord.js'); //required for embeds

module.exports = {
	name: 'exampleround',
	description: 'Buttons',
	async execute(message, args, client, button) {

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Epic Mickey') 
      .setID('null1') 
      .setDisabled()

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Super Mario') 
      .setID('null2') 
      .setDisabled()

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Fallout') 
      .setID('exanswer') 
      .setDisabled()

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Bioshock') 
      .setID('null4') 
      .setDisabled()



    let button5 = new MessageButton()
      .setStyle('red')
      .setLabel('Epic Mickey') 
      .setID('null1') 

    let button6 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Super Mario') 
      .setID('null2') 

    let button7 = new MessageButton()
      .setStyle('green')
      .setLabel('Fallout') 
      .setID('exanswer') 

    let button8 = new MessageButton()
      .setStyle('grey')
      .setLabel('Bioshock') 
      .setID('null4')  


    let embed1 = new MessageEmbed()
        .setColor('#FFF000')
        .setTitle('Vault Boy is featured in what video game franchise?')
        .setDescription(`***Example Round***`)
        .setThumbnail(`https://imgur.com/I09vjs2.png`)

    let embed2 = new MessageEmbed()
        .setColor('#FFF000')
        .setTitle('Vault Boy is featured in what video game franchise?')
        .setDescription(`***Example Round***`)
        .setThumbnail(`https://imgur.com/I09vjs2.png`)

    let a = {
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed1
} 

    let b = {
  buttons: [
    button5, button6, button7, button8
  ],
  embed: embed2}
        
  

message.channel.send(a).then( message => 
     

     (setTimeout(async function() {message.edit(b)}, 3000)))

  }}
