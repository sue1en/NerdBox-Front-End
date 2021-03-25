import http from '../config/http';

const getServiceAllBoxes = () => http.get('/caixas');
const getServiceBoxDetalhe = (id) => http.get(`/caixas/${id}`);

export {
    getServiceAllBoxes,
    getServiceBoxDetalhe
};