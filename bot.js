require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');
//const cooldowns = new Discord.Collection();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFilesText = fs.readdirSync('./commands/text').filter(file => file.endsWith('.js'));
const commandFilesVoice = fs.readdirSync('./commands/voice').filter(file => file.endsWith('.js'));

for (const file of commandFilesText) {
    const command = require(`./commands/text/${file}`);
    client.commands.set(command.name, command);
}

for (const file of commandFilesVoice) {
    const command = require(`./commands/voice/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('[Kenny-bot is running]')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message);
    } catch (error) {
        console.error(error);
        // message.reply('There was an error trying to execute that command!')
        message.reply(`error ${error}`)
    }
});

client.login(process.env.DISCORD_TOKEN);