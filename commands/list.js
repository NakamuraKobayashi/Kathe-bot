const fs = require('fs')
const path = require('path')
const Discord = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class ImageCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ttest',
      group: 'misc',
      description: 'Test Commands',
    })
  }

  run = (message) => {
    message.reply('Here is my boi')
  }
}