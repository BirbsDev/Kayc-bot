module.exports = {
    name: 'queisso',
    description: 'queisso',
    execute(message) {
        message.channel.send("Que isso cara!?");
        message.delete([1]);
    },
};