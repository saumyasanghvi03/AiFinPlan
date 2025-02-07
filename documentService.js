import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents/';

const getDocuments = () => {
    return axios.get(API_URL);
};

export default {
    getDocuments
};