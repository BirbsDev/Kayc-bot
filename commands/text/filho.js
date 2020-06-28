module.exports = {
    name: 'mds',
    description: 'mds',
    execute(message) {
        message.reply("Perai que o menino tá batendo a cabeça ali!");
        message.delete([1]);
    },
};