import { getServiceAllBoxes } from "../../services/boxes.service"

export const TYPES = {
    BOX_LOADING: "BOX_LOADING",
    BOX_ALL: "BOX_ALL",
    BOXE_DETALHE: "BOXE_DETALHE",
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
export const getBoxDetalhe = () => {
    return
}