import http from '../config/http';

const createServiceSubscription = (id, data) => http.post(`boxes/${id}/subscription`, data);
const createServiceUsers = (data) => http.post(`/account`, data);
const deleteServiceUsers = (id_box, id_member) => http.delete(`boxes/${id_box}/subscription/${id_member}`);


export {
    createServiceSubscription,
    createServiceUsers,
    deleteServiceUsers
};