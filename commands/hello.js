module.exports = {
    commands: ['hello', 'h', 'Hello'],
    description: "Fun Command #1",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'Poda Angutu'
        message.channel.send(reply)
    },
  }