const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]  });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;

    const regEx = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g;
    let content = message.content;

    if (regEx.test(content)) {
        await message.channel.send({
            content: `<@${message.author.id}> i link non sono consentiti`
        }).then(() => {
            message.delete();
        })
    }
})

client.login('')

