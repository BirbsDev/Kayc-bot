const fs = require('fs');
module.exports = {
    name: 'moco2',
    description: 'moco2',
    async execute(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            if (connection) {
                const dispatcher = connection.play(fs.createReadStream('./src/audio/moco2.mp3'));
                message.delete([1]);
                dispatcher.on('start', () => {
                    console.log('moco2 is now playing!');
                });

                dispatcher.on('finish', () => {
                    console.log('moco2 has finished playing!');
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