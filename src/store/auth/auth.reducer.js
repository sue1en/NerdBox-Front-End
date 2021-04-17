import { TYPES } from './auth.action'
import { getToken, getUser } from '../../config/auth';
const INITIAL_STATE = {
    loading:false,
    token: getToken() || "",
    usuario: getUser() || {},
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            state.usuario = action.data.user
            state.token = action.data.token
            return state;
        default:
            return state;
    }
}

export default reducer;