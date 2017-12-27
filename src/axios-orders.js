import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-37b99.firebaseio.com/'
});

export default instance;