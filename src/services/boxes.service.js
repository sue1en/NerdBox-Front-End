import http from '../config/http';

const getServiceAllBoxes = () => http.get('/boxes');
const getServiceBoxDetalhe = (id) => http.get(`/boxes/${id}`);

export {
    getServiceAllBoxes,
    getServiceBoxDetalhe
};