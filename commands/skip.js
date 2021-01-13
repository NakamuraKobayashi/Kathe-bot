module.exports = {
    commands: 'skip',
    description: "Fun Command #3",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'Waifu is temporary, Yaksha is Eternal'
        message.channel.send(reply)
    },
  }
  