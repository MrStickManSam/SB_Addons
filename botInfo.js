/////////////////////
// BOT INFO COMMAND /
/////////////////////

// Addon created by SamCodesStuff#5225
// Support: https://discord.gg/tfsAK9hR24

const { MessageEmbed, version: djsversion } = require('discord.js');
const fs = require("fs");
const yaml = require('js-yaml');
const version = require('../package.json');
const os = require('os');

const config = yaml.load(fs.readFileSync('./addons/settings/botinfo.yml', 'utf8'));

module.exports = {
    name: config.name,
    description: config.description,

    execute(message, args) {
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
            if (config.embed.description.toLowerCase() != "none") {
                embed.setTitle(config.embed.title.replace('%users%', message.client.users.cache.size.toLocaleString()).replace('%tag%', message.client.user.tag).replace('%id%', message.client.user.id).replace('%guilds%', message.client.guilds.cache.size.toLocaleString()).replace('%channels%', message.client.channels.cache.size.toLocaleString()).replace('%version%', version.version).replace('%djs%', djsversion).replace('%node%', process.version))
            }
            if (config.embed.description.toLowerCase() != "none") {
                embed.setDescription(config.embed.description.replace('%users%', message.client.users.cache.size.toLocaleString()).replace('%tag%', message.client.user.tag).replace('%id%', message.client.user.id).replace('%guilds%', message.client.guilds.cache.size.toLocaleString()).replace('%channels%', message.client.channels.cache.size.toLocaleString()).replace('%version%', version.version).replace('%djs%', djsversion).replace('%node%', process.version))
            }
            embed.setThumbnail(message.client.user.displayAvatarURL())
            embed.setColor(message.guild.me.displayHexColor)
            embed.addField(config.embed.field.title, config.embed.field.description.replace('%users%', message.client.users.cache.size.toLocaleString()).replace('%tag%', message.client.user.tag).replace('%id%', message.client.user.id).replace('%guilds%', message.client.guilds.cache.size.toLocaleString()).replace('%channels%', message.client.channels.cache.size.toLocaleString()).replace('%version%', version.version).replace('%djs%', djsversion).replace('%node%', process.version))
        message.channel.send(embed)
    }
};