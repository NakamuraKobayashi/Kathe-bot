module.exports = {
    commands: 'status',
    description: "To Set Bot Status",
    userPermissions: ['ADMINISTRATOR'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const content = message.content.replace('!status ', '')
        // "!status hello world" -> "hello world"
        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        })
    },
  }


