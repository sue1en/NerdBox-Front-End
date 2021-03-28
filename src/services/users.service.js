import http from '../config/http';

const createServiceSubscription = (id, data) => http.post(`/caixas/${id}/assinar`, data);

const createServiceUsers = (id, data) => http.post(`/register/${id}`, data);

const deleteServiceUsers = (id_member) => http.delete(`/caixas/delete/${id_member}`);


export {
    createServiceSubscription,
    createServiceUsers,
    deleteServiceUsers
};