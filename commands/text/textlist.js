const { Client, MessageEmbed } = require('discord.js');
const { author } = require('../../config.json');
const dir_img = 'https://i.imgur.com/GLmRC33.jpg';
const chat_commands = require('../../utils/chat-commands.json')
    // { "name": "\u200B", "value": "\u200B" },
module.exports = {
    name: 'textlist',
    description: 'textlist',
    async execute(message) {
        let msg = []
            //console.log(voice_commands)
        chat_commands.forEach((ele, idx) => {
            msg.push(`${ele.value}\n`)
        })
        let retorno = msg.toString(msg);
        retorno = retorno.replace(/,/g, '')
        message.author.send('>>> Comandos de texo');
        message.author.send('```' + retorno + '```');
        message.reply("Lista de comandos enviados por privado")

        message.delete([1]);
    }
}