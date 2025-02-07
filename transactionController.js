const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    const { type, amount } = req.body;

    try {
        const transaction = new Transaction({
            user: req.user.id,
            type,
            amount
        });

        await transaction.save();
        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};