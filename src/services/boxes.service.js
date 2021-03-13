import http from '../config/http';

const getServiceAllBoxes = () => http.get('/boxes');

export {
    getServiceAllBoxes
};