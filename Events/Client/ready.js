const { ActivityType } = require("discord.js")
const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        client.user.setActivity({
            name: 'Twitch: remrem904',
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/remrem904"
        });

        loadCommands(client);
    }
}