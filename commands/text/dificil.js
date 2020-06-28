module.exports = {
    name: 'dificil',
    description: 'dificil',
    execute(message) {
        message.reply("Voce é um menino(a) muito dificil")
        message.delete([1]);
    },
};