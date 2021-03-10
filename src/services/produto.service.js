import http from '../config/http';

const getServiceProdutos = () => http.get('/product');

// exemplo
// const createServiceCurso = (data) => http.post('/curso/create', data);

export {
    getServiceProdutos
}
