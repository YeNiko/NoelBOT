const Discord = require("discord.js");
const prefix = "miku.";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice[1];

    if(!command.startsWith(prefix)) return;
    
    if(command === `${prefix}help`) {        
        var embedhelp = new Discord.RichEmbed()
        .setTitle("**List of Commands**\n")
        .addField("Coinflip", "Flips a coin.") 
        .addField("Roll", "Rolls a dice.") 
        .addField("Ping", "Shows your ping status.")
        .addField("8ball", "Answers all questions.") 
        .addField("Avatar", "Displays the user profile picture.") 
        .addField("Userinfo", "Shows information about your account.") 
        .addField("Owl", "Link to Overwatch League's Twitch.")
        .addField("Ban", "Bans the user provideded.")
        .addField("Kick", "Kicks the user provided.")
        message.channel.sendEmbed(embedhelp);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice[1];

    if(!command.startsWith(prefix)) return;
    
    if(command === `${prefix}avatar`) {        
        const target = message.mentions.users.first() || message.author;
        message.channel.send(target.displayAvatarURL);
    }

    if(command === `${prefix}owl`) {
        message.channel.send("https://www.twitch.tv/overwatchleague");
    }

    
    if(command === `${prefix}roll`) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send("You rolled a " + roll);
    }

    if(command === `${prefix}coinflip`) {
        var answers = [
            "**Heads**", "**Tails**"
        ];
        var answers = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(answers.toString());
    }

    if(command === `${prefix}cf`) {
        var answers = [
            "**Heads**", "**Tails**"
        ];
        var answers = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(answers.toString());
    }
    
    if(command === `${prefix}8ball`) {
        var answers = [
            "**Yes**", "**No**", "**Maybe**", "**Most Likely**", "**Can't answer right now, ask again**", "**Least likely**"
        ];
        var answers = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(answers.toString());
    }

    if(command === `${prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is your user info.")
            .setColor("#9a0000")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", message.author.id)
            .addField("User Avatar", message.author.defaultAvatarURL)
            .addField("Created On", message.author.createdAt);
        message.channel.sendEmbed(embed);
    }

    if(command === `${prefix}ping`) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
    
    if(command === `${prefix}echo` {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage);
}
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice[1];

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}ban`) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this command.");
        const member = message.mentions.members.first();
        if (!member) return message.reply('Invalid usage, please mention the person in this server!');
        member.ban({
            reason: `Banned by ${message.author.tag}`
        });
        message.reply("The user has been banned from this server.");       
    }

    if(command === `${prefix}kick`) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this commmand.");
        const member = message.mentions.members.first();
        if (!member) return message.reply('Invalid usage, please mention the person in this server!');
        member.kick({
            reason: `Kicked by ${message.author.tag}`
        });
        message.reply("The user has been kicked from this server.");      
    }
});

bot.on("ready", () => bot.user.setGame("in the Café."));

bot.login("NDU4MjA4MDUzMjM4NjkzODg4.DgkTBw.McHcLdfEFXz1TemjodBCbyNjbGs");
