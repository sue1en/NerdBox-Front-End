import { TYPES } from './assinante.action'
const INITIAL_STATE = {
    all: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SUBSCRIBER_ALL:
            state.all = action.data
            return state;
        default:
            return state;
    }
}

export default reducer;