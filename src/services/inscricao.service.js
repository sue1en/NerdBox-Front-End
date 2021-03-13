import http from '../config/http';

const getServiceInscricao = () => http.get('/account');

export {
    getServiceInscricao
};