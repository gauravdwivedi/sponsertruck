//Auth action creator 
import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../util/urls';
import { getFormBody } from '../util/utils'
export function startLogin() {
    return {
        type: LOGIN_START,
    }
}

//Login Action
//async action 
export function login(email, password) {
    return (dispatch) => {
        const url = APIUrls.login;
        fetch(url, {
            method: 'POST',
            headers: {
                //by this our request will accept only json
                'Content-Type': 'application/x-ww-form-urlencoded'
            },
            body: getFormBody({ email, password })
        });
    }
}

