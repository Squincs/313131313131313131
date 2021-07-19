const ytdl = require('ytdl-core');
var opus = require('opusscript');
const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const deneme = new Discord.Client();
const deneme1 = new Discord.Client();
const deneme2 = new Discord.Client();
const deneme3 = new Discord.Client();
const deneme4 = new Discord.Client();
const deneme5 = new Discord.Client();
const deneme6 = new Discord.Client();
const deneme7 = new Discord.Client();
const deneme8 = new Discord.Client();
const deneme9 = new Discord.Client();

////////////////////////////////////////////////////////////////////////////////////////////////


deneme1.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme2.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme3.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme4.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme5.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme6.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme7.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme8.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
deneme9.on('message', async msg => {
  if (msg.content.toLowerCase() === "allahinci") {
      const streamOptions = { seek: 0, volume: 0 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////

deneme.login("NzA4MDg4Mjk0OTQwMDgyMjc2.XrSQ4g.vxs__8IcYLWkx2kZrEMZZAOLFiQ");
deneme1.login("NzA4MDg3MjcxMTEwMzQ0NzU1.XrSQSw.sRWXkmz67WCxHilF5oosbyPNTQA");
deneme2.login("NzA4MDg2NzA1MjQ4NDAzNTI2.XrSPYA.Cd4xcws_Zb73kzQ9WYUmV4riE8Q");
deneme3.login("NzA4MDg1ODY2NDcxNjIwNjU4.XrSOmg.CbAZvjJIPeyEVZiJRenme1dmezs");
deneme4.login("NzA4MDg0ODI2OTkyODAzODYx.XrSNrA.K7ikMPdH3UWibZyogyi1Ry_xu_o");
deneme5.login("NzA4MDgzNjMxOTQzMzE5NjIy.XrSMtQ.7yYY8dWCpOI_BcvwsbM53-c9pmI");
deneme6.login("NzA4MDgyNTQwNDIxOTcyMDA4.XrSLZA.BsvHQ66ppj8YpuvZ4gK2jPIsUtc");
deneme7.login("NzA4MDgxNDU5MTMwNDAwODEz.XrSKcw.DtPCsx73A3LoIdhTSQKOmL0t7bg");
deneme8.login("NzA4MDc5ODA1MzI5MDQ3ODAy.XrSJ7g.8igsU7Xr8FaQcgAqhcvSxHnWuLA");
deneme9.login("NzA4MDc4NjE3MDMyMTMwNjcx.XrSIDw.71sSMDpGO-HY9_LWjZ-87iabCsI");