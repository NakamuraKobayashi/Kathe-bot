const Discord = require('discord.js')

module.exports = {
    commands: ['help', 'help'],
    description: "Katheryne Commands",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
        .setColor('#EC407A')
        .setTitle('Katheryne Commands')
        .setDescription('Server: Asia | These are the Katheryune Commands')
        .addFields(
            { name: 'Fun Commands - 4', value: '`hello`,`vaada`,`skip`,`pity`' },
            { name: 'List All Players UID:', value: '`list, l`' },
            { name: 'Bot Commands: ', value: '`help, l`' },
        )
        .setFooter('Use p! Before Any Commands | Example: p!hello');
        message.channel.send(help)
    },
  }