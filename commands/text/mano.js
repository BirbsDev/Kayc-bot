module.exports = {
    name: 'mano',
    description: 'mano',
    execute(message) {
        message.channel.send("Ah mano sei la!");
        message.delete([1]);

    },
};