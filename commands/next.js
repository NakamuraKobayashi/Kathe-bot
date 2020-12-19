const Discord = require('discord.js')

module.exports = {
    commands: 'next',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const test102 = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .setFooter('2/2 Page. End of the List')
        .addFields(
            /*World Level 5*/
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