const fs = require('fs');
module.exports = {
    name: 'diguin3',
    description: 'diguin3',
    async execute(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            if (connection) {
                const dispatcher = connection.play(fs.createReadStream('./src/audio/diguin3.mp3'));
                message.delete([1]);
                dispatcher.on('start', () => {
                    console.log('diguin3 is now playing!');
                });

                dispatcher.on('finish', () => {
                    console.log('diguin3 has finished playing!');
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