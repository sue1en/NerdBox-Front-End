import http from '../config/http';

const createServiceSubscription = (id, data) => http.post(`boxes/${id}/subscription`, data);
const createServiceUsers = (data) => http.post(`/account`, data);


export {
    createServiceSubscription,
    createServiceUsers
};