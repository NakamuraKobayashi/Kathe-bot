const Discord = require('discord.js')
const { Mongoose } = require('mongoose')
const client = new Discord.Client()
const mongo = require('./mongo.js')
//const config = require('./config.json')

const connecToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongodb!')
    } finally {
      mongoose.connection.close()
    }
  })
}


client.on('ready', () => {
  console.log('The client is ready!')
})

client.login(process.env.DJS_TOKEN)