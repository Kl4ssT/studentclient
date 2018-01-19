import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://31.31.203.89:8090/'
});


export default instance;