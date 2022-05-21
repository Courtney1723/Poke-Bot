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









































"";