module.exports = {
    name: 'gui',
    description: 'gui',
    execute(message) {
        var guiImg
        var randomImage = Math.floor(Math.random() * 11);
        console.log('Hit number: ' + randomImage)
        if (randomImage % 2 == 0) {
            guiImg = message.reply("tirei essa foto do Gui agora", { files: ['./src/image/gui-boi.jpg'] })
            return (guiImg)
        } else {
            guiImg = message.reply("tirei essa foto do Gui agora", { files: ['./src/image/gui-celeron.jpg'] })
            return (guiImg)
        }

        message.delete([1]);
    },
};