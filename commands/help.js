const Discord = require('discord.js')

module.exports = {
    commands: ['help', 'help'],
    description: "Katheryne Commands",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
        .setColor('#2CC4DB')
        .setTitle('Katheryne Commands')
        .setDescription('Server: Asia | These are the Katheryune Commands')
        .addFields(
            { name: 'Fun Commands - 4', value: '`hello`,`vaada`,`skip`,`pity`' },
            { name: 'List All UID -', value: '`list`' },
            { name: 'Bot Commands - ', value: '`help`' },
        )
        message.channel.send(help)
    },
  }