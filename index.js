const Discord = require('discord.js')
const roleClaim = require('./role-claim')
const client = new Discord.Client()
const loadCommands = require('./commands/load-commands')

const mongo = require('./mongo.js')
const { Mongoose } = require('mongoose')

const config = require('./config.json')
const welcome = require('./welcome')

//Client Check Log
client.on('ready', async () => {
  console.log('Kathe Chellam is Ready to work Checking with...')

  const activities = [
    `${this.client.guilds.cache.size} servers!`,
    `${this.client.channels.cache.size} channels!`,
    `${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
  ];

  let i = 0;
  setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);

  loadCommands(client)
  roleClaim(client)
  welcome(client)
})

client.login(process.env.DJS_TOKEN)
//client.login("Nzg2NDIwMTkyMDQwNTgzMjQ4.X9GI4A.GFdcuFoGthRYcVcm3po5mdOqjzo")