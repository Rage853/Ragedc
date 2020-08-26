const up = require("uplife-api");

exports.run = async (option) => {
let Discord = option.discord;
let msg = option.msg;
let message = option.message;
let guild = option.guild;
let author = option.author;
 if(!message[0]) return msg.channel.send("`🤔` | please give me `set` or `remove`");
  
  if(message[0] === "set"){
up.setAfk({
  msg: msg,
  message: message.slice(1).join(" "),
  successReply: "false"
}); 
  option.channel.send("✅ | Successfully set your afk list");
  } 
  if(message[0] === "remove"){
    up.removeAfk({
      authorId: author.id
    });
    option.channel.send("✅ | successfully remove your afk list");
  }
}
exports.command = {
  name: "afk",
  aliases: [""]
};