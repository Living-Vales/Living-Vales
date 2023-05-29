import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type' : 'application/json',
        'key': 'e9ceaa7c-deb6-11ed-b5ea-0242ac120002'
    }
});

export default api;