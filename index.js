const Discord = require('discord.js')
const roleClaim = require('./role-claim')
const client = new Discord.Client()
const loadCommands = require('./commands/load-commands')

const mongo = require('./mongo.js')
const { Mongoose } = require('mongoose')

const config = require('./config.json')

//Client Check Log
client.on('ready', async () => {
  console.log('The client is ready!')

  loadCommands(client)
  roleClaim(client)
})

client.login(process.env.DJS_TOKEN)
//client.login("Nzg2NDIwMTkyMDQwNTgzMjQ4.X9GI4A.GFdcuFoGthRYcVcm3po5mdOqjzo")