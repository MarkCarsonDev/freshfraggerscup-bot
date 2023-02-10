const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const Enmap = require("enmap");

module.exports.run = (client, message, args) => {
    if (message.guild.member(message.member.id).hasPermission("ADMINISTRATOR")) {
        fs.readFile(args[0], 'utf8', function (err, currentcontent) {
            if (err) {
                return message.channel.send(err);
                return console.log(err);
            }
            fs.writeFile(process.cwd() + "\\" + args[0], currentcontent + "\n" + args[1]);
        });
    }
}