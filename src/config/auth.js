const TOKEN_KEY = 'auth_nerdbox'

export const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.token) {
        return data.token; // TODO:  geralmente é token
    }
    return false;
};

export const getUser = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.usuario) {
        return data.usuario;
    }
    return false;
};

export const isAuthenticated = () => {
    return getToken() !== false;
}


export const saveAuth = (data )=> localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
