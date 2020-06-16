const discord = require("discord.js");
const config = require("./config.json")
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const ytdl = require('ytdl-core')
const fs = require('fs');

client.on("ready", () => {
    console.log("[Kayc bot is running]")
})
// client.on('raw', console.log);
client.on('message', () => {
    function interaction() {
        //704330987705729134 - id do canal de home officie
        //720079259976073276 - id do canal de teste
        const msgLoka = client.channels.cache.get('704330987705729134');
        messageRandom = Math.floor(Math.random() * (800 - 1) + 1);
        console.log(messageRandom)
        if (messageRandom == 10 || 20 || 30 || 40 || 50) {

            randomNumber = Math.floor(Math.random() * (8 - 1) + 1);

            if (randomNumber == 1) {
                msgLoka.send("Guiguin")
            } if (randomNumber == 2) {
                msgLoka.send("Diguin")
            } if (randomNumber == 3) {
                msgLoka.send("To com saudades das minhas vaquinhas")
            } if (randomNumber == 4) {
                msgLoka.send("Alô, aqui é o Kayc da TI. Vim atualizar o seu PDV")
            } if (randomNumber == 5) {
                msgLoka.send("AOOOOOOOOOOO")
            } if (randomNumber == 6) {
                msgLoka.send("MUUUUUÉÉ")
            } if (randomNumber == 7) {
                msgLoka.send("Acho que vou jogar um CS..")
            } if (randomNumber == 8) {
                msgLoka.send("Aaaaaaaah!")
            }


        }
    }
    setInterval(interaction,5 * 60 * 1000)
})





client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;

    let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if (message.content === 'k!perfil') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }

    if (message.content === 'k!help') {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Kayc bot help')
        .setURL('https://discord.gg/JZT6MZN')
        .setAuthor('Kayc bot', 'https://imgur.com/GLmRC33', 'https://discord.js.org')
        .setDescription('<comandos>')
        .setThumbnail('https://imgur.com/GLmRC33')
        .addField('\u200B', '\u200B')
        .addField('_____________________','chat commands')
        .addFields(
            {name: '\u200B', value: '\u200B' },
            {name:'chat command ' , value: 'k!mds', inline: true },
            {name:'chat command ' , value: 'k!queisso', inline: true },
            {name:'chat command ' , value: 'k!triste', inline: true },
            {name:'chat command ' , value: 'k!indignado', inline: true },
            {name:'chat command ' , value: 'k!filho', inline: true },
            {name:'chat command ' , value: 'k!mano', inline: true },
            {name:'chat command ' , value: 'k!con5', inline: true },
            {name:'chat command ' , value: 'k!dificil', inline: true },
            {name: 'chat command' , value:'k!gui', inline: true},
            {name: '\u200B', value: '\u200B' }
            )
            

            .addField('_____________________', 'voice commands')
            .addFields(
            {name: '\u200B', value: '\u200B' },
            {name:'voice command ' , value: 'k!diguin', inline: true },
            {name:'voice command ' , value: 'k!opa', inline: true },
            {name:'voice command ' , value: 'k!meudeus', inline: true },
            {name:'voice command ' , value: 'k!moco', inline: true },
            {name:'voice command ' , value: 'k!beleza', inline: true },
        )
        .setImage('https://imgur.com/GLmRC33')
        .setTimestamp()
        .setFooter('Solicitado', 'https://imgur.com/GLmRC33');
        message.channel.send(embed);
    }


    switch (comando) {
        case 'lucas':
            var gifLuks
                randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
                console.log(randomNumber)
                if (randomNumber == 1) {
                    gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas2.gif')
                    message.reply(gifLuks)
                } if (randomNumber == 2) {
                    gifLuks = new discord.MessageAttachment('./src/gif/luks/lukinhas3.gif')
                    message.reply(gifLuks)
                } if (randomNumber == 3) {
                    gifLuks  = new discord.MessageAttachment('./src/gif/luks/lukinhas2.gif')
                    message.reply(gifLuks)
                } if (randomNumber == 4) {
                    gifLuks  =  new discord.MessageAttachment('./src/gif/luks/lukinhas4.gif')
                    message.reply(gifLuks)
                }
           break
        case 'gui':
             var guiImg
             var randomImage = Math.floor(Math.random() * 11);
                console.log('Hit number: ' + randomImage)
                if(randomImage % 2 == 0 ){
                    guiImg = message.reply("tirei essa foto do Gui agora", {files:['./src/image/gui-boi.jpg']})
                    return(guiImg)
                }else{
                    guiImg = message.reply("tirei essa foto do Gui agora", {files:['./src/image/gui-celeron.jpg']})
                    return(guiImg)
                }

           
            break
        case'dificil':
            const dificil = message.reply("voce é um menino(a) muito dificil")
            break
        case 'mds':
            const mds = message.channel.send("Meu Deeeeeus!!!");
            break

        case 'queisso':
            const queisso = message.channel.send("Que isso cara!?")

            break

        case 'triste':
            const triste = message.channel.send("Fico triste com um negócio desse...")

            break

        case 'indignado':
            const indignado = message.channel.send("Fico indignado com um negócio desse...")

            break

        case 'filho':
            const filho = message.reply("Perai que o menino tá batendo a cabeça ali!")

            break

        case 'mano':
            const mano = message.channel.send("Ah mano sei la!")

            break

        case 'con5':
            const con5 = message.channel.send("Perai que o rapaz da consinco tá me ligando aqui, ferrou")

            break
        case 'nhai':
             if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                    if (connection) {
                        const dispatcher = connection.play(fs.createReadStream('./src/audio/nhai.mp3'));
                        dispatcher.on('start', () => {
                            console.log('audio.mp3 is now playing!');
                        });
    
                        dispatcher.on('finish', () => {
                            console.log('audio.mp3 has finished playing!');
                            message.member.voice.channel.leave();
                        });
    
                        dispatcher.on('error', () => {
                            console.error
                            message.member.voice.channel.leave();
                        });
                    }
                } else {
                    message.reply('Você precisa entrar em um canal de voz antes.')
                }
                break    

        case 'miau':
              if (message.member.voice.channel) {
                 const connection = await message.member.voice.channel.join();
                    if (connection) {
                        const dispatcher = connection.play(fs.createReadStream('./src/audio/miau.mp3'));
                        dispatcher.on('start', () => {
                            console.log('audio.mp3 is now playing!');
                        });
    
                        dispatcher.on('finish', () => {
                            console.log('audio.mp3 has finished playing!');
                            message.member.voice.channel.leave();
                        });
    
                        dispatcher.on('error', () => {
                            console.error
                            message.member.voice.channel.leave();
                        });
                    }
                } else {
                    message.reply('Você precisa entrar em um canal de voz antes.')
                }
                break    
        case 'bn':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/boa-noite.mp3'));
                        dispatcher.on('start', () => {
                            console.log('audio.mp3 is now playing!');
                        });
    
                        dispatcher.on('finish', () => {
                            console.log('audio.mp3 has finished playing!');
                            message.member.voice.channel.leave();
                        });
    
                        dispatcher.on('error', () => {
                            console.error
                            message.member.voice.channel.leave();
                        });
                    }
                } else {
                    message.reply('Você precisa entrar em um canal de voz antes.')
                }
                break            
        case 'brabo':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/brabo.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break    
        case 'urro':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/urro.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break    
        case 'diguin':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    // YOUTUBE CODE - connection.play(ytdl('https://youtu.be/O4swU5kFwt0'));
                    // FILESYSTEM CODE - connection.play(fs.createReadStream('./src/audio/diguin.mp3'));
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/diguin.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }

            break;
        case 'moco':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    // YOUTUBE CODE - connection.play(ytdl('https://youtu.be/O4swU5kFwt0'));
                    // FILESYSTEM CODE - connection.play(fs.createReadStream('./src/audio/moco.mp3'));
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/moco.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break;
        case 'beleza':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    // YOUTUBE CODE - connection.play(ytdl('https://youtu.be/O4swU5kFwt0'));
                    // FILESYSTEM CODE - connection.play(fs.createReadStream('./src/audio/moco.mp3'));
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/beleza.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break;
        case 'meudeus':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    // YOUTUBE CODE - connection.play(ytdl('https://youtu.be/O4swU5kFwt0'));
                    // FILESYSTEM CODE - connection.play(fs.createReadStream('./src/audio/moco.mp3'));
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/mds.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break;
        case 'opa':
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                if (connection) {
                    // YOUTUBE CODE - connection.play(ytdl('https://youtu.be/O4swU5kFwt0'));
                    // FILESYSTEM CODE - connection.play(fs.createReadStream('./src/audio/moco.mp3'));
                    const dispatcher = connection.play(fs.createReadStream('./src/audio/oopa.mp3'));
                    dispatcher.on('start', () => {
                        console.log('audio.mp3 is now playing!');
                    });

                    dispatcher.on('finish', () => {
                        console.log('audio.mp3 has finished playing!');
                        message.member.voice.channel.leave();
                    });

                    dispatcher.on('error', () => {
                        console.error
                        message.member.voice.channel.leave();
                    });
                }
            } else {
                message.reply('Você precisa entrar em um canal de voz antes.')
            }
            break;
    }
})

client.login(config.token)


// -- NOT BEING USED

//heroku
// const express = require('express');
// const path = require('path')
// const PORT = process.env.PORT || 5000;


// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .set('views', path.join(__dirname, 'views'))
//     .set('view engine', 'ejs')
//     .get('/', (req, res) => res.render('pages/index'))
//     .listen(PORT, () => console.log('ouvindo a porta ${PORT}'))