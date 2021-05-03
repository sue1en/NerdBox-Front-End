import http from '../config/http';

const getServiceSubsAll = () => http.get('/users');
const createSubscriptionService = (id) => http.post(`/caixas/${id}/assinar`);
const deleteSubscriptionService = (idCaixa, idSubscription) => http.delete(`/caixas/${idCaixa}/assinar/${idSubscription}`);

export {
    getServiceSubsAll,
    createSubscriptionService,
    deleteSubscriptionService
}