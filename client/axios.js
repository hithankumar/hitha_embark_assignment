import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7082'
});

export default instance;