import { getServiceAllBoxes, postBoxService, getServiceBoxDetalhe, removeBoxService, editBoxService } from "../../services/boxes.service"
import Assinantes from "../../views/assinantes"

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
        try {
            const { auth } = getState()
            const res =  await getServiceBoxDetalhe(id);
            res.data.registered = res.data.assinantes.some(item => item.member.email === auth.usuario.email)
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
            await postBoxService(form)
            dispatch(getBoxAll())
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }
    }
}
export const editBoxAction = ({id, name, description, price}) => {
    return async (dispatch) => {
        dispatch({type: TYPES.BOX_LOADING, status: true})
        try {
            const data = { name, description, price }
            await editBoxService(id, data)
            dispatch(getBoxAll())
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }
    }
}

export const deleteBoxAction = (id) => {
    return async (dispatch) => {
        dispatch({type: TYPES.BOX_LOADING, status: true})
        try {
            await removeBoxService(id)
            dispatch(getBoxAll())
        } catch (error) {
            dispatch({type: TYPES.BOX_LOADING, status: false})
        }
    }
}