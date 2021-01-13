const Discord = require('discord.js')

module.exports = {
    commands: ['help'],
    description: "Katheryne Commands",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
        .setColor('#EC407A')
        .setTitle('Katheryne Commands')
        .setDescription('Server: Asia | Dont Bully Me Travaler')
        .addFields(
            { name: 'Fun Commands - 4', value: '`hello`,`vaada`,`skip`,`pity`' },
            { name: 'List All Players UID:', value: '`list, l`' },
            { name: 'Bot Commands: ', value: '`help, h`' },
        )
        .setFooter('Use p! Before Any Command | Example: p!hello');
        message.channel.send(help)
    },
  }