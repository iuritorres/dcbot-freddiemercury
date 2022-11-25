const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servidor')
        .setDescription('Mostra informações sobre o servidor.'),

    async execute(interaction) {
        const message = await interaction.reply({ content: `Esse é o server ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`, fetchReply: true});
        message.react('👍').then(() => message.react('👎'));

    },    
};