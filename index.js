const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

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

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})

client.login(process.env.DJS_TOKEN)
//client.login("Nzg2NDIwMTkyMDQwNTgzMjQ4.X9GI4A.GFdcuFoGthRYcVcm3po5mdOqjzo")