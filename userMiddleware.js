const axios = require('axios');
const User = require('../../backend/models/User');
const Document = require('../../backend/models/Document');

exports.registerUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/register', { username, password });
        return response.data;
    } catch (error) {
        console.error(error);
        return { message: 'Registration failed' };
    }
};

exports.loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
        return response.data;
    } catch (error) {
        console.error(error);
        return { message: 'Login failed' };
    }
};

exports.uploadDocument = async (fileId) => {
    try {
        const user = await User.findOne({ telegram_id: ctx.message.from.id });
        const response = await axios.post('http://localhost:5000/api/documents/upload', { userId: user.id, fileId });
        return response.data;
    } catch (error) {
        console.error(error);
        return { message: 'Document upload failed' };
    }
};

exports.getFinancialAdvice = async () => {
    try {
        const documents = await Document.find({ user: user.id, analyzed: true });
        if (documents.length === 0) {
            return { message: 'No analyzed documents found' };
        }

        const advice = await generateFinancialAdvice(documents);
        return { message: advice };
    } catch (error) {
        console.error(error);
        return { message: 'Failed to get financial advice' };
    }
};

const generateFinancialAdvice = async (documents) => {
    const responses = await Promise.all(documents.map(async (doc) => {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: `Analyze the following document and provide financial advice: ${doc.content}`,
            max_tokens: 150,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`
            }
        });

        return response.data.choices[0].text;
    }));

    return responses.join('\n\n');
};