const fs = require('fs');
module.exports = {
    name: 'fome',
    description: 'fome',
    async execute(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            if (connection) {
                const dispatcher = connection.play(fs.createReadStream('./src/audio/fome.mp3'));
                message.delete([1]);
                dispatcher.on('start', () => {
                    console.log('fome is now playing!');
                });

                dispatcher.on('finish', () => {
                    console.log('fome has finished playing!');
                    message.member.voice.channel.leave();
                });

                dispatcher.on('error', () => {
                    console.error
                    message.member.voice.channel.leave();
                });
            }
        } else {
            message.reply('Você precisa entrar em um canal de voz antes.')
        }
    },
};