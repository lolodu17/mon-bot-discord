const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')

require("opusscript");
search = require('youtube-search');

con = console.log,

bot.on("ready", function () {
  bot.user.setAvatar('./avatar 5.jpg')
  bot.user.setGame("mettre de la nouvelle musique")


.then(user => console.log(`j'ai choisis mon avatar`))
prefix = "!"





memberCount = client.users.size;
servercount = client.guilds.size;

    console.log("Je suis connecté");});

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regle ( si il en as)')
      }).catch(console.error)
    })

    bot.on('message', message => {
    if (message.content.startsWith('!ping')) {
      var commande = ["pong","PONG","C'est bon tu as FINI , pong","Je me souvient tu as déja fait cette commande","Cette commande est nul en plus",`Qui c'est qui metterai cette commande :thinking: Bas toi ${message.author},Bas oui c'est logique tu la fait là`,"Je ten supli arrête"];
      message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)
    }
    })

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
let userData = points[message.author.id];
userData.points++;
let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if(curLevel > userData.level) {
// Level up!
userData.level = curLevel;
var commande = [`tient tien ${message.author} et passer niveaux**${curLevel}**!`,`${message.author} vient de passer niveaux **${curLevel}**!`,`BRAVO tu passe au niveau **${curLevel}**! et la tu doit être happy non ?`];

message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`);
}
if(message.content.startsWith(prefix + "level")) {
message.reply(`Vous êtes actuellement niveau ${userData.level}, avec ${userData.points} d'expérience(s).`);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});


bot.on('message', message => {
   if (message.content.startsWith('!information')) {
     message.channel.send(` information de moi :je suis dans ${client.guilds.size} serveur ${message.guild.channels.size} et ${message.guild.members.size} `)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`bizzozeferrhdjjqeiijk`)) {
var commande = ["dit moi quelque chose au lieu de me notif","c'est chiant dit moi quelque chose sinon je te répond plus","je ne sais pas si tu t'en rend compte mais tu m'a juste motif ET SA C'EST CHIANT"];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`swignin `)) {
var commande = ["Ouai .","Après ?","Pfff, sa dévient ennuyant ton histiore.","Tu veut manger un morceaux ?","ET , je suis un bot pas un docteur !","Oh non , j'adore t'emmerdé , reste encore un peu :tired_face: !","Tagoule tu me soule !!!","A ton avis :thinking: , c'est moi ou c'est Evilsquid qui est le plus fort a splatoon 2 ?","Ba pour la penne je fait la guelle ","","","","","",""];
message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`gravegeezuegu rh jf`)) {
var commande = ["Ouai .","Après ?","Pfff, sa dévient ennuyant ton histiore.","Tu veut manger un morceaux ?","ET , je suis un bot pas un docteur !","Oh non , j'adore t'emmerdé , reste encore un peu :tired_face: !","Tagoule tu me soule !!!","A ton avis :thinking: , c'est moi ou c'est Evilsquid qui est le plus fort a splatoon 2 ?","Ba pour la penne je fait la guelle ","","","","","",""];
message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})


var mentions = ["<@357912301216595971>",
"<@342932332283559936>",
"<@343862895509110805>",
"<@350616975401287680>",
"<@122730307312025600>",
"<@138034502692765696>",
"<@208582900965310464>",
"<@349595754551181312>" ,
"<@319176598270115850>" ,
"<@319502067146424342>",
"<@324511259582136320>",
"<@357169409460011010>",
"<@370624289508163585>" ,
"<@301685061454135296>",
"<@296636852906098698>",
"<@337649899871010816>",
"<@320934385748803594>",
"<@362908381796761601>",
];


bot.on('message', message => {
    for(var i = 0; i < mentions.length; i++){
        if (message.content.startsWith(`coucou ${mentions[i]}`)) {
            message.channel.send(`Pssssst ${mentions[i]} , ${message.author} vous fait un coucou ^^`)
        }
    }
})
 
var mentionsbot = [ ,"<@159985870458322944>",
"<@184405311681986560>",
"<@343852422663503882>",
"<@356053529783304192>",
"<@371276679710244864>",
];


bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`coucou ${mentionsbot[i]}`)) {
            message.channel.send(`Est ${message.author} c'est qu'un bot il pourra pas te répondre ^^`)
        }
    }
})


var mentionsplat = [ ,"<@356818100341047306>",
];


bot.on('message', message => {
    for(var i = 0; i < mentionsplat.length; i++){
        if (message.content.startsWith(`coucou ${mentionsplat[i]}`)) {
            message.channel.send(`Salut ${message.author} ça va ?^^`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentionsplat.length; i++){
        if (message.content.startsWith(`oui et toi ? ${mentionsplat[i]}`)) {
            message.channel.send(`Nickel merci de prendre de mes nouvelle ${message.author} ^^`)
        }
    }
})

bot.on('message', message => {
   if (message.content.startsWith('!tonserveur')) {
     var commande = [`merci ${message.author} de vouloir de moi sur ton serveur https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`,`merci beaucoup ${message.author} de me vouloir https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`,`Serieux ${message.author} tu me veut ? alors je t'aime https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`];
    message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}
})


bot.on("message", message => {

if (message.content === "test") {

var commande = ["Regarde, c'est du random","C'est magique t'as vu ?","Wouah","Merci becoup モ Splating","Sa faisait longtemps que je chercher cette commande"];

 message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}

})



bot.on("message", message => {

if (message.content === "!3dsthemes") {

message.channel.sendMessage(`Hey salut tout le monde donc voila juste pour dire qu'est-ce que vous en penser de la création de ${message.author} ?`)

message.channel.sendMessage(`voici la photo`)
message.channel.sendMessage("Bien sûr vous ne pouvez pas parler.Mais c'est normal parler avec des réaction")
message.channel.sendMessage('En tout cas merci ^_^')


}

})

client.on('ready', () => {
  // Get the channel via ID
  let channel = client.channels.get('378851818626613248');
  // Or via name (less persistent)
  channel = client.channels.find('musique splatoon', 'Music');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});


bot.on("message", message => {

if (message.content === "!woomy") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {

  message.channel.sendMessage(`La musique woomy est lancée`)
  connection.playFile('./music.mp3');


})}})

bot.on("message", message => {

if (message.content === "!voiceboy") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./Splatoon-Inkling Boy SFX.mp3')
    message.channel.sendMessage(`La musique voice boy est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!voicegirl") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./Splatoon-Inkling Girl SFX.mp3')
    message.channel.sendMessage(`La musique voice girl est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 1") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 1.mp3')
    message.channel.sendMessage(`La musique 1 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 2") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 2.mp3')
    message.channel.sendMessage(`La musique 2 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 3") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 3.mp3')
    message.channel.sendMessage(`La musique 3 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 4") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 4.mp3')
    message.channel.sendMessage(`La musique 4 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 5") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 5.mp3')
   message.channel.sendMessage(`La musique 5 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 6") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 6.mp3')
  message.channel.sendMessage(`La musique 6 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 7") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 7.mp3')
    message.channel.sendMessage(`La musique 7 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 8") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 8.mp3')
    message.channel.sendMessage(`La musique 8 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 9") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 9.mp3')
    message.channel.sendMessage(`La musique 9 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 10") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 10.mp3')
   message.channel.sendMessage(`La musique 10 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 11") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 11.mp3')
    message.channel.sendMessage(`La musique 11 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 12") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 12.mp3')
    message.channel.sendMessage(`La musique 12 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 13") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 13.mp3')
    message.channel.sendMessage(`La musique 13 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 14") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 14.mp3')
    message.channel.sendMessage(`La musique 14 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 15") {




let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 15.mp3')
    message.channel.sendMessage(`La musique 15 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 16") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 16.wav')
    message.channel.sendMessage(`La musique 16 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 17") {



let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 17.mp3')
    message.channel.sendMessage(`La musique 17 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 18") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 18.mp3')
    message.channel.sendMessage(`La musique 18 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 19") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 19.mp3')
    message.channel.sendMessage(`La musique 19 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 20") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 20.mp3')
    message.channel.sendMessage(`La musique 20 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 21") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 21.mp3')
    message.channel.sendMessage(`La musique 21 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 22") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 22.mp3')
    message.channel.sendMessage(`La musique 22 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 23") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 23.mp3')
    message.channel.sendMessage(`La musique 23 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 24") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 24.mp3')
    message.channel.sendMessage(`La musique 24 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 25") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 25.mp3')
    message.channel.sendMessage(`La musique 25 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 26") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 26.mp3')
    message.channel.sendMessage(`La musique 26 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 27") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 27.mp3')
    message.channel.sendMessage(`La musique 27 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 28") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 28.mp3')
    message.channel.sendMessage(`La musique 28 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 29") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join(378851818626613248)
.then(function (connection) {
  connection.playFile('./musique 29.mp3')
    message.channel.sendMessage(`La musique 29 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 30") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 30.mp3')
    message.channel.sendMessage(`La musique 30 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 31") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 31.mp3')
    message.channel.sendMessage(`La musique 31 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 32") {



let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 32.mp3')
    message.channel.sendMessage(`La musique 32 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 33") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 33.mp3')
    message.channel.sendMessage(`La musique 33 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 34") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 34.mp3')
    message.channel.sendMessage(`La musique 34 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 35") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 35.mp3')
    message.channel.sendMessage(`La musique 35 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 36") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 36.mp3')
    message.channel.sendMessage(`La musique 36 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 37") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 37.mp3')
    message.channel.sendMessage(`La musique 37 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 38") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 38.mp3')
    message.channel.sendMessage(`La musique 38 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 39") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 39.mp3')
    message.channel.sendMessage(`La musique 39 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 40") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 40.mp3')
    message.channel.sendMessage(`La musique 40 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 41") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 41.mp3')
    message.channel.sendMessage(`La musique 41 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 42") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 42.mp3')
    message.channel.sendMessage(`La musique 42 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 43") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 43.mp3')
    message.channel.sendMessage(`La musique 43 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 44") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 44.mp3')
    message.channel.sendMessage(`La musique 44 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 45") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 45.mp3')
    message.channel.sendMessage(`La musique 45 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 46") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 46.mp3')
    message.channel.sendMessage(`La musique 46 est lancée`)
})}})
bot.login('MzU2ODE4MTAwMzQxMDQ3MzA2.DKLXRw.lcg8cVGb3RhjHckAz4geQwsKAWQ')
