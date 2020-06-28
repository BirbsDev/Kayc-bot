module.exports = {
    name: 'gui',
    description: 'gui',
    execute(message) {
        let randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
        if (randomNumber == 1) {
            var gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas1.gif')
            message.reply(gifLuks)
        }
        if (randomNumber == 2) {
            var gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas2.gif')
            message.reply(gifLuks)
        }
        if (randomNumber == 3) {
            var gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas3.gif')
            message.reply(gifLuks)
        }
        if (randomNumber == 4) {
            var gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas4.gif')
            message.reply(gifLuks)
        }
        message.delete([1]);
    },
};