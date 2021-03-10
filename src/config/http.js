import Axios from 'axios';

const urlApi = process.env.REACT_APP_API;
// const urlApi = "https://projeto-02-backend.herokuapp.com/v1";

const http = Axios.create({
    baseURL: urlApi
});

http.defaults.headers['content-type'] = 'application/json';

export default http;
