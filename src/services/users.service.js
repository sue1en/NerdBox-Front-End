import http from '../config/http';

const getServiceUser = () => http.get(`/users`);
const getServiceBoxUser = () => http.get(`/users`);

export {
    getServiceUser,
    getServiceBoxUser
};