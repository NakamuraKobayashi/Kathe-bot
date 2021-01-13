module.exports = {
    commands: 'vaada',
    description: "Fun Command #2",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'Muditu VC Vaada'
        message.channel.send(reply)
    },
  }
  