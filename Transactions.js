import React, { useState, useEffect } from 'react';
import transactionService from '../services/transactionService';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await transactionService.getTransactions();
                setTransactions(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction._id}>
                        {transaction.type} - ${transaction.amount} - {new Date(transaction.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;