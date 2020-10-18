// -------------------------------------------------------------- //
//             ChangeLog Command Addon for SupportBot             //
//           Support Server - https://discord.gg/JzcFV8K          //
// -------------------------------------------------------------- //
//                           Version: 1.0                         //
// -------------------------------------------------------------- //

const { MessageEmbed } = require('discord.js');
const fs = require("fs");
const yaml = require('js-yaml');

const config = yaml.load(fs.readFileSync('./addons/settings/changelog.yml', 'utf8'));

module.exports = {
    name: config.ChangeLogCommand,
    description: config.ChangeLogDescription,

    execute(message, args) {
        let clchannel = message.guild.channels.cache.find(CLChannel => CLChannel.name === config.CLChannel);
        let logs = message.guild.channels.cache.find(CLLogs => CLLogs.name === config.CLLogs);
		const clem = new MessageEmbed()
            .setColor(config.CLEmbedColor)
            .setTitle(config.CLEmbedTitle)
            .setDescription(args.join(" "))
			.setFooter(config.CLFooterText, config.CLFooterIcon)
            .setTimestamp();
        clchannel.send(clem)

		const sem = new MessageEmbed()
            .setColor(config.CLSuccessColor)
            .setTitle(config.CLSuccessTitle)
            .setDescription(config.CLSuccessDescription)
            .setFooter(config.CLSuccessFooterText, config.CLSuccessFooterIcon)
        message.channel.send(sem)

		const lem = new MessageEmbed()
            .setColor(config.CLLogsEmbedColor)
            .setTitle(config.CLLogsEmbedTitle)
            .setDescription(config.CLLogsEmbedDescription.replace(/{userid}/g, message.author.id))
            .setFooter(config.CLLogsFooterText, config.CLLogsFooterIcon)
        logs.send(lem)
    }
};
