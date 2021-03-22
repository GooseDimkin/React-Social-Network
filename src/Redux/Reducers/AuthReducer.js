import UsersAPI from './../../api/api'

const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';

let defaultState = {
    id: null,
    email: null,
    login: null,
    isLoginned: false
}

let AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_AUTH_PROFILE:
            return {
                ...state,
                ...action.data,
                isLoginned: true
            }

        default:
            return state;
    }
}

export const setAuthProfile = (data) => {
    return {type: SET_AUTH_PROFILE, data: data}
}

export const getAuthProfileThunkCreator = () => {
    return (dispatch) => {
        UsersAPI.auth().then(data => {
            if(data.resultCode === 0) 
                dispatch(setAuthProfile(data.data));
        })
    }
} 

export default AuthReducer;