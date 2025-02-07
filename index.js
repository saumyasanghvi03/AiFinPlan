const { startCommand, registerCommand, loginCommand, uploadDocumentCommand, getAdviceCommand } = require('./userCommands');

const registerCommands = (bot) => {
    bot.start(startCommand);
    bot.command('register', registerCommand);
    bot.command('login', loginCommand);
    bot.command('upload_document', uploadDocumentCommand);
    bot.command('get_advice', getAdviceCommand);
};

module.exports = { registerCommands };