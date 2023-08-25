const Discord = require('discord.js');
const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const MaCouleur = "#5664EF";

module.exports = {
    name: "ping",
    description: "Afficher le ping du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        const Embed1 = new Discord.EmbedBuilder()
        .setTitle('Ping du Bot')
        .setColor(MaCouleur)
        .setDescription(`🏓 **Mon ping est de :** ${client.ws.ping} ms.`)
        .setTimestamp()

        message.reply({embeds: [Embed1]});
    },
    async executeSlash(client, interaction) {
        const Embed2 = new Discord.EmbedBuilder()
        .setTitle('Ping du Bot')
        .setColor(MaCouleur)
        .setDescription(`🏓 **Mon ping est de :** ${client.ws.ping} ms.`)
        .setTimestamp()

        interaction.reply({embeds: [Embed2]});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}