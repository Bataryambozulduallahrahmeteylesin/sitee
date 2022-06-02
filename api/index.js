const app = require("express")();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const {
    Client,
    MessageEmbed
} = require("discord.js");
const client = new Client({
    intents: 32767
});

const settings = require("./settings.json");

client.login(settings.token);
client.on("ready",() => console.log("Bot is ready"));

client.on("messageCreate",async (message) => {
    if(message.author.bot) return false;
    let commands = await db.get("commands");

    let cmd = commands.find(c => message.content.startsWith(c.cmd));

    if(cmd){
        if(cmd.waitMention && !message.mentions.users.first()) return message.reply(cmd.waitMentionAlertMessage);
        if(cmd.specialFor && !message.member.roles.cache.get(cmd.specialFor)) return message.reply(cmd.specialAlertMessage);

        if(cmd.waitMentionGrr) message.guild.members.cache.get(message.mentions.users.first().id).roles.add(cmd.waitMentionGrr);
        if(cmd.waitMentionTrr) message.guild.members.cache.get(message.mentions.users.first().id).roles.remove(cmd.waitMentionTrr);
        if(cmd.waitMentionBan) message.guild.members.cache.get(message.mentions.users.first().id).ban();
        if(cmd.waitMentionKick) message.guild.members.cache.get(message.mentions.users.first().id).kick();

        if(cmd.grr) message.member.roles.add(cmd.grr);
        if(cmd.trr) message.member.roles.remove(cmd.trr);
        return message.reply(cmd.res.replace(`<mentionAuthor>`,`<@!${message.author.id}>`));
    };
});

const {
    JsonDatabase
} = require("wio.db");

const db = new JsonDatabase({
  databasePath:"./db.json"
});

app.get("/getData",async (req,res) => {
    let commands = await db.get(`commands`) || [];
    let roles = client.guilds.cache.get(settings.guildId).roles.cache.map(r => r).slice(1);

    res.send({
        commands,
        roles
    });
});

app.post("/addCommand",(req,res) => {
    let command = req.body;

    db.push(`commands`,command);

    res.status(200).send();
});

app.post("/deleteCommand",(req,res) => {
    let commands = db.get(`commands`) || [];

    commands = commands.filter(c => c.cmd != req.body.cmd);

    db.set(`commands`,commands);

    res.status(200).send();
});

module.exports = {
    path: "/api/",
    handler: app
};