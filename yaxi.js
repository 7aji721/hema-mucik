
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `@help | dev bot.bokani.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("906333162555199488"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("NjUyOTkwNjg4NzM2MTgyMjg1.YY5SNQ.kd1B_TDSXwxfGPb4N7027gzCKBM");
