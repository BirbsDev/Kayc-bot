module.exports = {
    name: 'triste',
    description: 'triste',
    execute(message) {
        message.channel.send("Fico triste com um negócio desse...");
        message.delete([1]);
    },
};