import http from '../config/http';

const getServiceAllProdutos = () => http.get('/product');
// const getServiceProdutos = (id) => http.get(`/product/${id}`);
// exemplo
// const createServiceCurso = (data) => http.post('/curso/create', data);

export {
    getServiceAllProdutos,
    // getServiceProdutos
}
