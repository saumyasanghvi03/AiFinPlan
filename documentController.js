const Document = require('../models/Document');
const { analyzeDocument } = require('../utils/analyzeDocument');

exports.uploadDocument = async (req, res) => {
    const { userId, fileId } = req.body;

    try {
        const document = new Document({
            user: userId,
            file_id: fileId
        });

        await document.save();

        const analysisResult = await analyzeDocument(fileId);

        document.analyzed = true;
        await document.save();

        res.json({ message: 'Document uploaded and analyzed successfully', analysisResult });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};