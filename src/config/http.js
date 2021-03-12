import Axios from 'axios';

const urlApi = process.env.REACT_APP_API;
// console.log(process.env);
// const urlApi = process.env.REACT_APP_API;

const http = Axios.create({
    baseURL: urlApi
});

http.defaults.headers['content-type'] = 'application/json';

export default http;
