module.exports = {
    commands: 'status',
    description: "To Set Bot Status",
    userPermissions: ['Paimon Slave'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const content = message.content.replace('p!status ', '')
        // "!status hello world" -> "hello world"
        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        })
    },
  }


