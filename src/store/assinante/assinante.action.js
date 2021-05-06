import { getServiceSubsAll, getServiceSubsId,createSubscriptionService, deleteSubscriptionService } from "../../services/assinante.service"
import { updateProfileService, getProfileService } from "../../services/auth.service"
import { getBoxDetalhe } from '../box/box.action';

export const TYPES = {
   SUBSCRIBER_ALL: "SUBSCRIBER_AL",
   USER_PROFILE: "USER_PROFILE"
}

export const getSubsAll = () => {
    return async (dispatch) => {
        try {
            const all = await getServiceSubsAll()
            dispatch({
                type: TYPES.SUBSCRIBER_ALL,
                data: all.data
            })
        } catch (error) {
            console.log('ERROR')
        }
    }
}
export const getSubsId = () => {
    return async (dispatch) => {
        try {
            const all = await getServiceSubsId()
            dispatch({
                type: TYPES.SUBSCRIBER_ALL,
                data: all.data
            })
        } catch (error) {
            console.log('ERROR')
        }
    }
}

export const createSubscription = (id) => {
    return async (dispatch) => {
        try {
            const all = await createSubscriptionService(id)
            if (all.data) {
                dispatch(getBoxDetalhe(id))
            }
        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }

    }
}

export const removeSubscription = (idCaixa, idSubscription) => {
    return async (dispatch) => {
        try {
            const all = await deleteSubscriptionService(idCaixa, idSubscription)
            if (all.data) {
                dispatch(getBoxDetalhe(idCaixa))
            }
        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }
}

export const updateProfile = ({id, ...data}) => {
    return async (dispatch) => {
        try {
            const response = await updateProfileService(id, data)
            if (response) {
                const usuario = await getProfileService()
                dispatch({
                    type: TYPES.USER_PROFILE,
                    data: usuario.data
                })
            }
        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }

}

