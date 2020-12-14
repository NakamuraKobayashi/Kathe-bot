const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const { Mongoose } = require('mongoose')
const client = new Discord.Client()
const config = require('./config.json')
const mongo = require('./mongo.js')
const { dir } = require('console')


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

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = dir => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname,dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file)) 
      } else if (file != baseFile) {
        const option = require(path.join(__dirname, dir, file))
        console.log(file, option)
      }
    }
  }
  readCommands('commands')
})

client.login(process.env.DJS_TOKEN)
//client.login(config.token)