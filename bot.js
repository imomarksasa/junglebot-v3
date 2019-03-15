const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = '+'


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Founder OF MTA"));
    });


client.on('message',async message => {
  if(message.content === `${prefix}banall`) {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

message.guild.members.forEach(ns => {
  ns.ban()
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Ban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم تبنيد الجميع بواسطة** : <@${message.author.id}>`) 
let embed2 = new Discord.RichEmbed()
.setTitle('New banned All !')
.addField('Banned All By:', `${message.author}`)
.addField('Time & Date', `${message.createdAt}`)
.setFooter(client.user.username)
          let incidentchannel = message.guild.channels.find(`name`, `cmd`);
          if(!incidentchannel) return message.channel.send("Can't find log channel.");
          incidentchannel.sendEmbed(embed2)
  });
  }}
)








client.login(process.env.BOT_TOKEN);
