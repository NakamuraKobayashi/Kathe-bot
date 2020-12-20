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
            { name: 'Amy-chan [WL-7]', value: '806236513', inline: true },
            { name: 'KiTsune13 [WL-7]', value: '800570605', inline: true },

            /*World Level 6*/
            { name: 'Emilica [WL-6]', value: '802462774', inline: true },
            { name: 'Rox [WL-6]', value: '808015934', inline: true },
            { name: 'Buju [WL-6]', value: '809196280', inline: true },
            { name: 'Rex [WL-6]', value: '806002485', inline: true },
            { name: 'SalnEvil [WL-6]', value: '804414084', inline: true },
            { name: 'WhiteFangPlayz [WL-6]', value: '810792481', inline: true },
            { name: 'Arav [WL-6]', value: '806681868', inline: true },
            { name: 'Nitish [WL-6]', value: '806540640', inline: true },
            { name: 'Azazel [WL-6]', value: '800186022', inline: true },
            { name: 'Ash [WL-6]', value: '805179155', inline: true },
            { name: 'WOLFY [WL-6]', value: '806715913', inline: true },
            { name: 'Rem [WL-6]', value: '811823820', inline: true },
            { name: 'JoFendo [WL-6]', value: '805376530', inline: true },
            { name: 'Chrzn [WL-6]', value: '806497214', inline: true },
            { name: 'PANDA [WL-6]', value: '814949855', inline: true },

            /*World Level 5*/
            { name: 'TetRun [WL-5]', value: '802110210', inline: true },
            { name: 'Kvxzero [WL-5]', value: '812277108', inline: true },
            { name: 'Meliodas [WL-5]', value: '807740960', inline: true },
            { name: 'Sid [WL-5]', value: '815237748', inline: true },
            { name: 'TK [WL-5]', value: '814728811', inline: true },
            { name: 'Leafeon [WL-5]', value: '802014120', inline: true },
            { name: 'Sasha [WL-5]', value: '8077245780', inline: true },
            { name: 'Anand [WL-5]', value: '805943182', inline: true },
        )
        message.channel.send(test101)

        const test102 = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .addFields(
            /*World Level 5*/
            { name: 'Itachi [WL-5]', value: '808861203', inline: true },
            { name: 'Mr.Bot [WL-5]', value: '801374737', inline: true },
            { name: 'Chi [WL-5]', value: '809987177', inline: true },
            { name: 'Alfy [WL-5]', value: '811983046', inline: true },
            { name: 'Senseii [WL-5]', value: '808654297', inline: true },
            { name: 'AlbionHORDE [WL-5]', value: '812609271', inline: true },

            /*World Level 4*/
            { name: 'MehenraMizuki [WL-4]', value: '810584079', inline: true },
            { name: 'Quinn [WL-4]', value: '816643614', inline: true },
            { name: 'LordGrim [WL-4]', value: '817721784', inline: true },

            /*World Level 3*/
            { name: 'Lara [WL-3]', value: '807250035', inline: true }, 
            { name: 'Iruta [WL-3]', value: '809000795', inline: true },
            { name: 'ZhainanWang [WL-3]', value: '801411676', inline: true },

            /*World Level 2*/
            { name: 'Kidflash [WL-2]', value: '807101223', inline: true },
            { name: 'XKaliber [WL-2]', value: '807953400', inline: true },
            { name: 'SilverFang [WL-2]', value: '801387984', inline: true },
            { name: 'Zero_Two [WL-2]', value: '812440262', inline: true },
            { name: 'Ryuzaki [WL-2]', value: '805836792', inline: true },

            /*World Level 1*/
            { name: 'Emiya [WL-1]', value: '809982698', inline: true },
            { name: 'Joel._.Joestar [WL-1]', value: '818456786', inline: true },
            { name: 'Ryuku [WL-1]', value: '817591950', inline: true },
            { name: 'Gowtham [WL-1]', value: '802522451', inline: true },
            { name: 'Yuva [WL-1]', value: '812475004', inline: true },
            { name: 'Sekki [WL-1]', value: '808769350', inline: true },
                    
             /*World Level YET*/                 
            { name: 'Coochieman', value: '811714646', inline: true },
            { name: 'STE4LTH_B0T', value: '818636457', inline: true },
        )
        message.channel.send(test102)
    },
  }