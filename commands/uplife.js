exports.run = async (option) => {
  
let client = option.bot;
let args = option.message;
let message = option.msg;
  
    let say = args.join(" ");
  let avatar = message.author.displayAvatarURL();
  let username = message.author.username;
  let Channel = client.channels.get("708502784911081542");
Channel.send("<@&664639748647813142>",{embed:{
  color: 0x0099ff,
  title: "UPLIFE COMMAND",
  description: say,
  timestamp: new Date(),
	footer: {
		text: `UPLIFE COMMAND BY.${username}| time`,
		icon_url: `${avatar}`,
	}
             }})
  	.then(function (message) {
          message.react("662160618182410260")   
message.react("662160739603316764")
});
  message.channel.send(`<@${message.author.id}>`,{embed:{
  description:"THANKS YOU HELP OTHER PEOPLE SEND YOUR UPLIFE CODE"+`${message.author.username}`,
    color: 0x00FFFF
  }});
}
exports.command = {
  name: "uplife",
  aliases: [""]
}