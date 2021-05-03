import http from '../config/http';

const getServiceAllBoxes = () => http.get('/caixas');

const postBoxService = (data) => http.post('/novacaixa', data);

const getServiceBoxDetalhe = (id) => http.get(`/caixas/${id}`);

const editBoxService = (id, data) => http.put(`/caixas/${id}`, data);

const removeBoxService = (id) => http.delete(`/caixas/${id}`);

export {
    getServiceAllBoxes,
    getServiceBoxDetalhe,
    postBoxService,
    editBoxService,
    removeBoxService
};