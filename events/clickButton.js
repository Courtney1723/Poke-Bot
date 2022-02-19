const {MessageButton} = require(`discord-buttons`)

const { Collector, MessageEmbed } = require('discord.js'); //required for embeds

module.exports = {
	name: 'clickButton',
	async execute(button, client, member) {

      let embedCongrats = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`Congratulations <@${button.clicker.id}>! You have been awarded **2** points!`) 

      let bonusCongrats = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`Congratulations <@${button.clicker.id}>! You have been awarded **3** points!`)


    

if (button.id === "exanswer") { 

  button.reply.defer()

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

    let embed3 = new MessageEmbed()
        .setColor('#FFF000')
        .setTitle('Vault Boy is featured in what video game franchise?')
        .setDescription(`<@${button.clicker.id}> won this round! \n> **Fallout** \nwas the correct answer
        `)
        .setThumbnail(`https://imgur.com/I09vjs2.png`)  


      const filter = (button, user) => button.id === 'exanswer' && !user.bot;

      const collector = 
      button.message.createButtonCollector(filter, {max:1, time: 60000 })


collector.on('collect', async (button, user, clicker, filter) => {        


setTimeout(function() {button.message.edit({
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed3
    })}, 10000)

setTimeout(function() {button.channel.send({
  embed: embedCongrats
    })}, 12000)})


} else 

if(button.id === "r02answer") {

    button.reply.defer()

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Sonic the Hedgehog 1991') 
      .setID('r02answer') 
      .setDisabled()

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Crash Bandicoot') 
      .setID('null1') 
      .setDisabled()

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Dr. Mario') 
      .setID('null2') 
      .setDisabled()

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Spyro Trilogy') 
      .setID('null3')  
      .setDisabled()

    let embed1 = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`Round 2 is over! \n> **__Sonic the Hedgehog 1991__** \nwas the correct answer`) 
  

setTimeout(function() {button.message.edit({
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed1
    })}, 8000)

setTimeout(function() {button.channel.send({
  embed: embedCongrats
    })}, 100)    
    
    
    } else
    
if(button.id === "r01answer") {

    button.reply.defer()

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Super Mario 3D World') 
      .setID('null1') 
      .setDisabled()

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('The Legend of Zelda') 
      .setID('r01answer') 
      .setDisabled()

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Halo') 
      .setID('null2') 
      .setDisabled()

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Luigi\'s Mansion') 
      .setID('null3')  
      .setDisabled()

    let embed1 = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`Round 1 is over! \n> **__The Legend of Zelda__** \nwas the correct answer`) 
        
  

setTimeout(function() {button.message.edit({
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed1
    })}, 8000)

setTimeout(function() {button.channel.send({
  embed: embedCongrats
    })}, 100)    
    
    
    
    } else
    
if(button.id === "r03answer") {

    button.reply.defer()

    let button1 = new MessageButton()
      .setStyle('red')
      .setLabel('Yoshi\'s Island') 
      .setID('null1') 
      .setDisabled()

    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Super Mario RPG') 
      .setID('r03answer') 
      .setDisabled()

    let button3 = new MessageButton()
      .setStyle('green')
      .setLabel('Dragon Quest V') 
      .setID('null2') 
      .setDisabled()

    let button4 = new MessageButton()
      .setStyle('grey')
      .setLabel('Mario Party DS') 
      .setID('null3') 
      .setDisabled() 

    let embed1 = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`Round 3 is over! \n> **__Super Mario RPG__** \nwas the correct answer \n ${button.clicker} won this round!`) 
        
  

setTimeout(function() {button.message.edit({
  buttons: [
    button1, button2, button3, button4
  ],
  embed: embed1
    })}, 8000)

setTimeout(function() {button.channel.send({
  embed: embedCongrats
    })}, 100)    
    
    
    
    } else 

if (button.id === "null1") { 

  return
      

} else 

if (button.id === "null2") { 

  return
      

} else 

if (button.id === "null3") { 

  return
      

} else 

if (button.id === "null4") { 

  return
      

} else 

 error => console.log(error)



  }}
