import { TYPES } from './auth.action'
import { getToken, getUser } from '../../config/auth';
const INITIAL_STATE = {
    loading:false,
    token: getToken() || "",
    usuario: getUser() || {},
    error: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            state.usuario = action.data.user
            state.token = action.data.token
            return state;
        case TYPES.SIGN_OUT: // disponibiliza na mesa
            state.token = ""
            state.usuario = {}
            state.error = []
            return state
        case TYPES.SIGN_ERROR: // disponibiliza na mesa
            const err = [...state.error, action.data]
            state.loading = false
            state.error = err;
            return state
        default:
            return state;
    }
}

export default reducer;