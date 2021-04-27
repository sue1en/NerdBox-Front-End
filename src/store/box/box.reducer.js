import { TYPES } from './box.action'
const INITIAL_STATE = {
    loading: false,
    detalhes: {},
    all: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.BOX_LOADING:
            state.loading = action.status
            return state;
        case TYPES.BOX_ALL:
            state.all = action.data
            state.loading = false
            return state;
        case TYPES.BOXE_DETALHE:
            state.detalhes = action.data
            state.loading = false
            return state;
        default:
            return state;
    }
}

export default reducer;