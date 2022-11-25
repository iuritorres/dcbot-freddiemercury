const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('usuario')
        .setDescription('Mostra informações sobre o usuário.'),
    
    async execute(interaction) {
        await interaction.reply(`Esse comando foi executado por ${interaction.user.username}, que entrou no servidor em ${interaction.member.joinedAt}.`)
    },
};
