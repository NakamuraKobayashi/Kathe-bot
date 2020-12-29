const Discord = require('discord.js')

module.exports = {
    commands: 'list',
    description: "Displays All Genshin Players List",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const test101 = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .setTitle('Genshin Players UID & InGameName')
        .setDescription('Server: Asia')
        .addFields(
            /*World Level 7*/
            { name: 'Amy-chan', value: '806236513', inline: true },
            { name: 'KiTsune13', value: '800570605', inline: true },
            { name: 'Emilica', value: '802462774', inline: true },
            { name: 'Buju', value: '809196280', inline: true },
            { name: 'SalnEvil', value: '804414084', inline: true },

            /*World Level 6*/
            { name: 'Rox', value: '808015934', inline: true },
            { name: 'Rex', value: '806002485', inline: true },
            { name: 'WhiteFangPlayz', value: '810792481', inline: true },
            { name: 'Arav', value: '806681868', inline: true },
            { name: 'Nitish', value: '806540640', inline: true },
            { name: 'Azazel', value: '800186022', inline: true },
            { name: 'Ash', value: '805179155', inline: true },
            { name: 'WOLFY', value: '806715913', inline: true },
            { name: 'Rem', value: '811823820', inline: true },
            { name: 'JoFendo', value: '805376530', inline: true },
            { name: 'Chrzn', value: '806497214', inline: true },
            { name: 'PANDA', value: '814949855', inline: true },
            { name: 'Railscythe', value: '810976192', inline: true },

            /*World Level 5*/
            { name: 'TetRun', value: '802110210', inline: true },
            { name: 'Kvxzero', value: '812277108', inline: true },
            { name: 'Meliodas', value: '807740960', inline: true },
            { name: 'Keqingsimp#1', value: '815237748', inline: true },
            { name: 'TK', value: '814728811', inline: true },
            { name: 'Leafeon', value: '802014120', inline: true },
            { name: 'Sasha', value: '8077245780', inline: true },
        )
        message.channel.send(test101)

        const test102 = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .addFields(
            /*World Level 5*/
            { name: 'Anand', value: '805943182', inline: true },
            { name: 'Itachi', value: '808861203', inline: true },
            { name: 'Mr.Bot', value: '801374737', inline: true },
            { name: 'Chi', value: '809987177', inline: true },
            { name: 'Alfy', value: '811983046', inline: true },
            { name: 'Senseii', value: '808654297', inline: true },
            { name: 'AlbionHORDE', value: '812609271', inline: true },
            { name: 'LordGrim', value: '817721784', inline: true },

            /*World Level 4*/
            { name: 'MehenraMizuki', value: '810584079', inline: true },
            { name: 'Quinn', value: '816643614', inline: true },

            /*World Level 3*/
            { name: 'Lara', value: '807250035', inline: true }, 
            { name: 'Iruta', value: '809000795', inline: true },
            { name: 'ZhainanWang', value: '801411676', inline: true },

            /*World Level 2*/
            { name: 'Kidflash', value: '807101223', inline: true },
            { name: 'XKaliber', value: '807953400', inline: true },
            { name: 'SilverFang', value: '801387984', inline: true },
            { name: 'Zero_Two', value: '812440262', inline: true },
            { name: 'Ryuzaki', value: '805836792', inline: true },

            /*World Level 1*/
            { name: 'Emiya', value: '809982698', inline: true },
            { name: 'Joel._.Joestar', value: '818456786', inline: true },
            { name: 'Ryuku', value: '817591950', inline: true },
            { name: 'Gowtham', value: '802522451', inline: true },
            { name: 'Yuva', value: '812475004', inline: true },
            { name: 'Sekki', value: '808769350', inline: true },
                    
             /*World Level YET*/                 
            { name: 'Coochieman', value: '811714646', inline: true },
            { name: 'STE4LTH_B0T', value: '818636457', inline: true },
            { name: 'Sudharshan', value: '819834242', inline: true },
        )
        message.channel.send(test102)

        const test103 = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .addFields(              
             /*World Level YET*/                 
            { name: 'STE4LTH_B0T', value: '818636457', inline: true },
            { name: 'Sudharshan', value: '819834242', inline: true },
        )
        message.channel.send(test103)
    },
  }