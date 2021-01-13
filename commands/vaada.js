module.exports = {
    commands: 'vaada',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'Muditu VC Vaada'
        message.channel.send(reply)
    },
  }
  