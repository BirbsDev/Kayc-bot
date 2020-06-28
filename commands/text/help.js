const { Client, MessageEmbed } = require('discord.js');
const { author } = require('../../config.json');
const dir_img = 'https://i.imgur.com/GLmRC33.jpg';
// { "name": "\u200B", "value": "\u200B" },
module.exports = {
    name: 'help',
    description: 'help',
    async execute(message) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Kenny-bot - Ajuda')
            .setURL('https://discord.gg/JZT6MZN')
            // .setAuthor('Kenny-bot', dir_img, 'https://discord.js.org')
            .setDescription('Lista de comandos')
            .setThumbnail(dir_img)
            .addField('Comandos de text', 'Escreva "k.textlist" para a listagem dos comandos de texto')
            .addField('Comandos de voz', 'Escreva "k.voicelist" para a listagem dos comandos de voz')
            .setTimestamp()
            .setFooter('Solicitado às', dir_img);
        message.reply(embed)
        message.delete([1]);
    }
}