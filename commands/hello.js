module.exports = {
    commands: 'hello',
    description: "Fun Commands",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.reply('Angutu Poda')
    },
  }