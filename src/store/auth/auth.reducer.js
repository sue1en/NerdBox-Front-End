import { TYPES } from './auth.action'
import { getToken, getUser } from '../../config/auth';
const INITIAL_STATE = {
    admin: getUser().type === '1' || false,
    loading:false,
    token: getToken() || "",
    usuario: getUser() || {},
    error: [],
    registered: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_LOADING:
            state.error = [];
            state.loading = action.status
            return state;
        case TYPES.SIGN_IN:
            state.usuario = action.data.user
            state.token = action.data.token
            state.admin = action.data.user.type === '1'
            state.loading = false
            return state;
        case TYPES.SIGN_UP:
            state.usuario = action.data.user
            state.token = action.data.token
            state.registered = true
            state.loading = false
            return state;
        case TYPES.SIGN_OUT: // disponibiliza na mesa
            state.token = ""
            state.usuario = {}
            state.admin = false
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