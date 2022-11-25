const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Devolve um 'Pong!'"),

    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
