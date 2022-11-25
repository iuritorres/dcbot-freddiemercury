const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:fs');
const wait = require('node:timers/promises').setTimeout;

const commands = [];

// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// Deploy commands!
(async () => {
    try {
        console.log(`Atualizando ${commands.length} comandos (/) da aplicação.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log(`Recarregado com sucesso ${data.length} comandos (/) da aplicação.`);

        // Iterate anda console.log all commands
        for (const command of commands) {
            console.log(`-> ${command.name}`);
            await wait(100);
        };

    } catch (error) {
        // Catch and log any errors
        console.error(error);
    }
})();

