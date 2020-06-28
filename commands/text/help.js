const { Client, MessageEmbed } = require('discord.js');
const { author } = require('../../config.json');
const dir_img = 'https://i.imgur.com/GLmRC33.jpg';
const chat_commands = require('../../../utils/chat-commands.json')
const voice_commands = require('../../../utils/voice-commands.json')
    // { "name": "\u200B", "value": "\u200B" },
module.exports = {
    name: 'help',
    description: 'help',
    async execute(message) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Kenny-bot - Ajuda')
            .setURL('https://discord.gg/JZT6MZN')
            .setAuthor('Kenny-bot', dir_img, 'https://discord.js.org')
            .setDescription('Listagem dos comandos')
            .setThumbnail(dir_img)
            .addFields({ name: '\u200B', value: '\u200B' })
            .addField('Comandos de chat', 'Comandos de chat')
            .addFields(...chat_commands)

        .addField('Comandos de voz', 'Comandos de voz')
            .addFields(...voice_commands)
            .setTimestamp()
            .setFooter('Solicitado', dir_img);
        message.author.send(embed);
        message.reply("Lista de comandos enviados por privado")
            //message.author.reply("Lista de comandos enviados por privado")
        message.delete([1]);
    }
}