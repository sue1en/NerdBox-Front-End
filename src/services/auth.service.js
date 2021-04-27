import http from '../config/http';

const authService = (data) => http.post('/auth', data);
const registerUserService = (data) => http.post('/users', data);
const updateProfileService = (id, data) => http.put(`/user/${id}`, data);
export {
    authService,
    registerUserService,
    updateProfileService
};