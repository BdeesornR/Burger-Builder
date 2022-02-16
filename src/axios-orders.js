import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a5c59-default-rtdb.firebaseio.com/'
});

export default instance;