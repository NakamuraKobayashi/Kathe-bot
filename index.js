const Discord = require('discord.js')
const roleClaim = require('./role-claim')
const client = new Discord.Client()
const loadCommands = require('./commands/load-commands')

const mongo = require('./mongo.js')
const { Mongoose } = require('mongoose')

const config = require('./config.json')
const welcome = require('./welcome')

client.db = require("quick.db");
client.request = new (require("rss-parser"))();
client.config = require("./config.js");

//Client Check Log
client.on('ready', async () => {
  console.log('Kathe Chellam is Ready to work Checking with...')

  client.user.setActivity('Genshin Impact | 52 Travalers');

  loadCommands(client)
  roleClaim(client)
  welcome(client)
  handleUploads()
});

function handleUploads() {
  if (client.db.fetch(`postedVideos`) === null) client.db.set(`postedVideos`, []);
  setInterval(() => {
      client.request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${client.config.channel_id}`)
      .then(data => {
          if (client.db.fetch(`postedVideos`).includes(data.items[0].link)) return;
          else {
              client.db.set(`videoData`, data.items[0]);
              client.db.push("postedVideos", data.items[0].link);
              let parsed = client.db.fetch(`videoData`);
              let channel = client.channels.cache.get(client.config.channel);
              if (!channel) return;
              let message = client.config.messageTemplate
                  .replace(/{author}/g, parsed.author)
                  .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                  .replace(/{url}/g, parsed.link);
              channel.send(message);
          }
      });
  }, client.config.watchInterval);
}

client.login(process.env.DJS_TOKEN)
//client.login("Nzg2NDIwMTkyMDQwNTgzMjQ4.X9GI4A.GFdcuFoGthRYcVcm3po5mdOqjzo")