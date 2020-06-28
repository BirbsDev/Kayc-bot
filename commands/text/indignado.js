module.exports = {
    name: 'indignado',
    description: 'indignado',
    execute(message) {
        message.channel.send("Fico indignado com um negócio desse...");
        message.delete([1]);
    },
};