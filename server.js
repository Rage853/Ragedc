const prefix = ",,";
const UP = require("uplife-api");

var stat = ["hii", "my owner Happy Birthday", "{prefix}help"];
var status = stat[3];

UP.start(
  process.env.TOKEN, status
 ,
  "WATCHING",
  "dnd",
  prefix,
  "528106181546213388",
  {
    util: "true",
    mod: "true",
    giveaway: "true",
    reaction: "🎉",
    giveawaystorage: __dirname+"/giveaway.json",
    giveawayembed: "🎉🎉**START GIVEAWAY**🎉🎉",
    giveawaymessage: "🎉🎉**start giveaway**🎉🎉",
    participate: "click to 🎉 participate",
    music: "true",
    youtubekey: "AIzaSyCRMpZZjPMWcV1omDzLCW6FUfUCGUk_VZ0",
    economy: "true",
    help: "true",
    welcomer: "true",
    statusTime: 20000
  }
);
  


/* afk ceck system */
  UP.checkAfk({
    message: "> 💤**{usertag}** is currently afk. Reason: {reason}",
    autoDeleteAfk: "true"
  });

/* custom Commands */
UP.commandHeader({
  name: __dirname+"/commands",
  prefix: prefix
});

UP.command({
  prefix: prefix,
  dm: "false",
  name: "eventlist",
  embed: { title: 'here uplife-api event list', image: "https://flamingtext.com/net-fu/proxy_form.cgi?script=star-wars-logo&text=Eventlist+&_loc=generate&imageoutput=true", message: '<a:12:645164385031028757>`command` - **custom command**\n<a:12:645164385031028757>`guildadd` - **your bot join guild send notification in channel**\n<a:12:645164385031028757>`guildremove` - **your bot leave guild send notification in channel**\n<a:12:645164385031028757>`msgdelete` - **message delete log**\n<a:12:645164385031028757>`commandHeader` - **discord.js base version**', color: 'black'}
});
UP.command({
  prefix: prefix,
  dm: "false",
  name: "say",
  send: "{args}"
});
UP.command({
  prefix: prefix,
  dm: "false",
  name: "myavatar",
  send: "here your Avatar <@{authorid}>\n\n\n"+`{authoravatar}`
});

/* guild join or guild leave message */
// server add notification 
UP.guildadd({
  channelname: "up-log-life-api-70",
  channelid: "705395991427285034",
  thumbnail: "{guildicon}",
  message: "guild name- **{guildname}**\nguild id- **{guildid}**\nguild member count- **{guildmember}**\nguild owner- `{guildownertag}`",
  color: "#00ff00",
  title: "join new server | `🎉`"
});

/* only use glitch hosting to add http and express  */
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.send("<h1><b>UPLIFE-API NOW ONLINE MY BOT</b></h1>");
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
