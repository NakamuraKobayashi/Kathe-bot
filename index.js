const Discord = require('discord.js')
const client = new Discord.Client()
const loadCommands = require('./commands/load-commands')

const mongo = require('./mongo.js')
const { Mongoose } = require('mongoose')

const config = require('./config.json')

//MongoDB Connection 
const connecToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongodb!')
    } finally {
      mongoose.connection.close()
    }
  })
}

connecToMongoDB()

//Client Check Log
client.on('ready', async () => {
  console.log('The client is ready!')

  loadCommands(client)
})

client.login(process.env.DJS_TOKEN)
//client.login("Nzg2NDIwMTkyMDQwNTgzMjQ4.X9GI4A.GFdcuFoGthRYcVcm3po5mdOqjzo")