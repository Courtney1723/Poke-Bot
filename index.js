const Discord = require("discord.js"); //Discord package
const keep_alive = require('./keep_alive.js'); //Keep Alive File in sidebar
const fs = require("fs")
const fetch = require("node-fetch") //Required for .fetch() 
const prefix = "+"; //Creates a prefix +
const { MessageEmbed } = require('discord.js'); //required for embeds


const client = new Discord.Client();

require('discord-buttons')(client) // required for buttons 


client.login(process.env.DISCORD_TOKEN).catch(err => console.log(err))

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}! \n`);
})



//Bot rich presence
client.on("ready", () => {
    client.user.setPresence({
        activity: { 
            name: 'Gotta catch em all',
            type: 'PLAYING'
        },
        status: 'online'
    })
});






//Event Files

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}








// COmmand files

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});








// Pokemon tag test

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix + "pokemon") || message.author.bot) return;

let pTitles = [
    {
      name: "Bulbasaur",
      output: "[__Bulbasaur__](https://pokemondb.net/pokedex/bulbasaur)! A [__Grass__](https://pokemondb.net/type/grass) and [__Poison__](https://pokemondb.net/type/poison) pokémon!",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
      },
    {
      name: "Charmander",
      output: "[__Charmander__](https://pokemondb.net/pokedex/charmander)! A [__Fire__](https://pokemondb.net/type/fire) pokémon!",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
      },    
    {
      name: "Charizard",
      output: "[__Charizard__](https://pokemondb.net/pokedex/Charizard)! A [__Fire__](https://pokemondb.net/type/fire) & [__Flying__](https://pokemondb.net/type/flying) pokémon!",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
      },      
]


var pokemon = pTitles[Math.floor(Math.random() * pTitles.length)];



    message.channel.send({embed: {
      color: 0xB75AFF, //Purple
      title: `${message.member.displayName}, you caught a wild...`,
      description: `${pokemon.output}`,
      image: {
        url: `${pokemon.img}`}      
          
          }})
          });






























          










"";