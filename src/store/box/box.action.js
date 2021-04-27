import { getServiceAllBoxes, postBox, getServiceBoxDetalhe } from "../../services/boxes.service"

export const TYPES = {
    BOX_LOADING: "BOX_LOADING",
    BOX_ALL: "BOX_ALL",
    BOXE_DETALHE: "BOXE_DETALHE",
    BOX_CREATE: "BOX_CREATE"
}

export const getBoxAll = () => {
    return async (dispatch) => {
        dispatch({type: TYPES.BOX_LOADING, status: true})
        try {
            const all = await getServiceAllBoxes()
            dispatch({
                type: TYPES.BOX_ALL,
                data: all.data
            })
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }  
    }
}
export const getBoxDetalhe = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: TYPES.BOX_LOADING, status: true})
        const { auth } = getState()
        try {
            const res =  await getServiceBoxDetalhe(id);
            // res.data.registered = res.data.assinantes.some(item => item.email === auth.usuario.email) // ainda da false
            dispatch({
                type: TYPES.BOXE_DETALHE,
                data: res.data
            })
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }
    }
}

export const createBox = (form) => {
    return async (dispatch) => {
        dispatch({type: TYPES.BOX_LOADING, status: true})
        try {
            const cadastrarBox = await postBox(form)
            dispatch(getBoxAll())
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }
    }
}