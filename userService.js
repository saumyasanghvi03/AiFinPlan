import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const getUsers = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return axios.get(API_URL, {
        headers: {
            'x-auth-token': user.token
        }
    });
};

export default {
    getUsers
};