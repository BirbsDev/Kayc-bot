module.exports = {
    name: 'mds',
    description: 'mds',
    execute(message) {
        message.channel.send("Meu Deeeeeus!!!");
        message.delete([1]);
    },
};