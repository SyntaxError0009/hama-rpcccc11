    const newTime = formatTime();

    if (newTime !== prevTime) {

      const newDetails = `DEV HAMA`;

      r.setDetails(newDetails);

      client.user.setActivity(r);

      prevTime = newTime;

    }

  }, 10000); // Update every second

});

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready', async () => {

  console.log(`Logged in as ${client.user.tag}!`);

  const targetGuild = client.guilds.cache.find(guild => guild.id === "1234133891107782768");//lera Away dane Id server

  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1234133892651290664");// Lera id channel dane

  const connection = joinVoiceChannel({
channelId: targetChannel.id,

    guildId: targetGuild.id,

    adapterCreator: targetGuild.voiceAdapterCreator,

  });

});
const orderrr = "1234133893515448400"

client.on("channelCreate", async channel => {

if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === orderrr) {

await new Promise(r => setTimeout(r, 3000))

channel.send(`>  **سلاو بەرێز بەخێر بێیت بۆ تیکیتک**

__IC STORE__

> **داوە کاریەکەت رون کەوە** 
**چاوەرەی سیلێر بکە هەتەوەکو ولامی داوەکریەکەت بدەنەوە**
 __HAMA__
**TB KATE TAWAW BWY LA DAWAKARYAKA** bo Delete krdne ticket cl**`)

}

});
          


               

client.login('NDc2NjY2MzM5OTI3NTIzMzI5.GAx3A1.hPgIm1rRl05FAb3NBlnDi0d0CjtVs-d_Zqd7sI')


/// Aghdar ba Token Lera damane Bro Bashe 🔒Secrets
