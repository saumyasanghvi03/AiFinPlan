import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transactions/';

const createTransaction = (type, amount) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return axios.post(API_URL, {
        type,
        amount
    }, {
        headers: {
            'x-auth-token': user.token
        }
    });
};

const getTransactions = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return axios.get(API_URL, {
        headers: {
            'x-auth-token': user.token
        }
    });
};

export default {
    createTransaction,
    getTransactions
};