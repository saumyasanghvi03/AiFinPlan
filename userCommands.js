const { registerUser, loginUser, uploadDocument, getFinancialAdvice } = require('../middlewares/userMiddleware');

const startCommand = (ctx) => {
    ctx.reply('Welcome to the Financial Planner Bot! Use /register to create an account or /login to login.');
};

const registerCommand = async (ctx) => {
    const [username, password] = ctx.message.text.split(' ').slice(1);
    const response = await registerUser(username, password);
    ctx.reply(response.message);
};

const loginCommand = async (ctx) => {
    const [username, password] = ctx.message.text.split(' ').slice(1);
    const response = await loginUser(username, password);
    ctx.reply(response.message);
};

const uploadDocumentCommand = async (ctx) => {
    if (ctx.message.document) {
        const documentId = ctx.message.document.file_id;
        const response = await uploadDocument(documentId);
        ctx.reply(response.message);
    } else {
        ctx.reply('Please upload a document.');
    }
};

const getAdviceCommand = async (ctx) => {
    const response = await getFinancialAdvice();
    ctx.reply(response.message);
};

module.exports = { startCommand, registerCommand, loginCommand, uploadDocumentCommand, getAdviceCommand };