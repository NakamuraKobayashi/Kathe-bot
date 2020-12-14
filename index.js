const Discord = require('discord.js')
const { Mongoose } = require('mongoose')
const client = new Discord.Client()
const mongo = require('./mongo.js')
//const config = require('./config.json')

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

//Connected Log 
client.on('ready', () => {
  console.log('Katheryne Has Been Back To Work')
})

client.login(process.env.DJS_TOKEN)
//client.login(config.token)