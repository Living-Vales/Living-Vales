import axios from 'axios';

const url = import.meta.env.MODE === 'development' ? 'http://localhost:3001/api' : 'https://livingvales.interact.com.br/api'

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type' : 'application/json',
        'key': 'e9ceaa7c-deb6-11ed-b5ea-0242ac120002'
    }
});

export default api;