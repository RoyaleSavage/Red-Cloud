const Discord = require('discord.js');
const client = new Discord.Client();
console.log("RoyaleSavage#6176");
var prefix = "+";
client.on("message", message => {

            if (message.content.startsWith(prefix + "dm")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`Message Was Sent To :  Members`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Astro Terminal - Bot : RoyaleSavage#6176`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot made by : RoyaleSavage#6176 ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd");
  client.user.setActivity(`Astro Services Discord`, { type: "Watching" });
});

client.login(process.env.BOT_TOKEN);
