module.exports = {
    commands: 'list',
    description: "Displays All Genshin Players List",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .setTitle('Genshin Players UID & InGameName')
        .setDescription('Server: Asia')
        .setFooter('1/2 Page. Type "p!next" For Next Page')
        .addFields(
            /*World Level 6*/
            { name: 'Emilica [WL-6]', value: '802462774', inline: true },
            { name: 'KiTsune13 [WL-6]', value: '800570605', inline: true },
            { name: 'Amy-chan [WL-6]', value: '806236513', inline: true },
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

            /*World Level 5*/
            { name: 'TetRun [WL-5]', value: '802110210', inline: true },
            { name: 'Kvxzero [WL-5]', value: '812277108', inline: true },
            { name: 'Meliodas [WL-5]', value: '807740960', inline: true },
            { name: 'Sid [WL-5]', value: '815237748', inline: true },
            { name: 'TK [WL-5]', value: '814728811', inline: true },
            { name: 'Leafeon [WL-5]', value: '802014120', inline: true },
            { name: 'Sasha [WL-5]', value: '8077245780', inline: true },
            { name: 'Anand [WL-5]', value: '805943182', inline: true },
            { name: 'Itachi [WL-5]', value: '808861203', inline: true },
            { name: 'Mr.Bot [WL-5]', value: '801374737', inline: true },
        )
        message.channel.send(embed)
    },
  }