import http from '../config/http';

const getServiceSubsAll = () => http.get('/users');
const getServiceSubsId = () => http.get('/user')
const createSubscriptionService = (id) => http.post(`/caixas/${id}/assinar`);
const deleteSubscriptionService = (idCaixa, idSubscription) => http.delete(`/caixas/${idCaixa}/assinar/${idSubscription}`);

export {
    getServiceSubsAll,
    getServiceSubsId,
    createSubscriptionService,
    deleteSubscriptionService
}