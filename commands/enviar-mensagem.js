const { SlashCommandBuilder, ChannelType } = require('discord.js');
const { client } = require('../main.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enviar-mensagem')
        .setDescription('Responde com o seu input!')

        // Echo input String
        .addStringOption(option => 
            option.setName('input')
                  .setDescription('Input para o echo voltar')
                  .setRequired(true)
        )

        // Input channel to echo
        .addChannelOption(option =>
            option.setName('channel')
                  .setDescription('Canal que o echo vai voltar')
                  
                  .addChannelTypes(ChannelType.GuildText)
                  
                  .setRequired(true)
        ),

    // Command execute
    async execute(interaction) {
        const userInput = interaction.options.getString('input');
        const selectedChannel = interaction.options.getChannel('channel');

        await client.channels.cache.find(channel => channel.name === selectedChannel.name)
            .send({
                content: userInput,
            });

        await interaction
            .reply({
                content: `Mensagem enviada em: ${selectedChannel}`,
                ephemeral: true,   
            });
    },
};