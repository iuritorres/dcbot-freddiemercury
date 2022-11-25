const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mostrardata')
        .setDescription('Mostra a hora atual.'),

    async execute(interaction) {
        // Get Dates
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = (currentDate.getMonth() + 1);
        var year = currentDate.getFullYear();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();

        // Replys
        await interaction.reply('Meio dia pras 11!');

        await wait(2000);
        await interaction.editReply('e brincadeeira kkk...');

        await wait(2000);
        await interaction.editReply(`Hoje é dia ${day}/${month} de ${year}. Agora são ${hours}:${minutes}h.`);
    },
};

