module.exports = (client) => {
  const channelId = '789675889565761546' // welcome channel
  const targetChannelId = '787688808006287400' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Welcome to Our Genshin Impact Server <@${
      member.id
    }> Travelers, Claim your role ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}