module.exports = {
    commands: ['vaada', 'vaa'],
    description: "Fun Commands #2",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'unakulaa satti kuduthadhey thappu idhula pity kaekriya nee'
        message.channel.send(reply)
    },
  }