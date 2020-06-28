module.exports = {
    name: 'consinco',
    description: 'consinco',
    execute(message) {
        message.channel.send("Perai que o rapaz da consinco tá me ligando aqui, ferrou");
        message.delete([1]);
    },
};