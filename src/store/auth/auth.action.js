import { saveAuth } from '../../config/auth';
import { authService } from '../../services/auth.service';
import history from '../../config/history';

export const TYPES = {
    SIGN_IN: "SIGN_IN"
}

export const signInAction = (data) => {
    return async (dispatch) => {
        const result = await authService(data);
        if(result.data) {
            saveAuth(result.data)
        }
        dispatch({
            type: TYPES.SIGN_IN,
            data: result.data
        })
        history.push('/')
    };
}