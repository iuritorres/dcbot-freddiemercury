const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`O comando ${interaction.commandName} não foi encontrado.`)
            return;
        };

        try {
            await command.execute(interaction);
        } catch (error) {
            await interaction.reply({ content: 'Ocorreu um erro ao executar esse comando!', ephemeral: true });
            console.error(error);
        };
    },
};