import http from '../config/http';

const getServiceAllBoxes = () => http.get('/caixas');
const postBox = (data) => http.post('/novacaixa', data);
const getServiceBoxDetalhe = (id) => http.get(`/caixas/${id}`);

export {
    getServiceAllBoxes,
    getServiceBoxDetalhe,
    postBox
};