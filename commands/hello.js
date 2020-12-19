module.exports = {
    commands: 'hello',
    description: "Fun Command",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'Poda Angutu'
        message.channel.send(reply)
    },
  }