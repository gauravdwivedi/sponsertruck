import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/actionTypes";

const initialState = {
    user: {},
    error: null,
    //in order to other components to use this auth state
    isLoggedin: false,
    //flag to disable and enable the Login button 
    inProgress: false
}

export default function auth(state = initialState, action) {

    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                inProgress: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoggedin: true,
                inProgress: false,
                error: null
            };
        case LOGIN_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}