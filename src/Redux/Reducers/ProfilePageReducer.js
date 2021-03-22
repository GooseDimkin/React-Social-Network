import UsersAPI from './../../api/api';

const INPUT_UPDATE = 'INPUT-UPDATE';
const ADD_POST = 'ADD-POST';
const ADD_PROFILE_DATA = 'ADD-PROFILE-DATA';
const SHOW_LOADING = 'SHOW_LOADING';

let defaultState = {
    currentInputText: '',
    avatar: 'https://sun9-39.userapi.com/impg/Toc50SPSRvw9Sop9x0AE8xgQQVBan-75wYchcQ/GhVYaPqhE-0.jpg?size=1304x2160&quality=96&proxy=1&sign=09dc85767ae4ae45c97d02ba9adc50ef&type=album',
    name: 'Dmitry Lebedev',
    status: 'Что-то типа статуса.',
    birthday: 'January 6',
    company: 'Cringe Universe',
    website: 'https:/this',
    totalInfo: [
        {value: 1337, label: 'friends'},
        {value: 228, label: 'followers'},
        {value: 1488, label: 'photos'},
        {value: 322, label: 'tags'},
        {value: 123, label: 'videos'},
        {value: 1223, label: 'tracks'}
    ],
    photosValue: 253,
    photos: [
        {src: 'https://sun9-10.userapi.com/impg/-CpUGQMYTGVYsaxjW-RVZkMVIHJ1_o-l3yWPyg/mJZ4vtt1lXU.jpg?size=1026x1080&quality=96&proxy=1&sign=08a88cf7dd3c3d315ea5f01d62edf3c3&type=album'},
        {src: 'https://sun9-26.userapi.com/impg/c855736/v855736664/2419f1/vSZAgW8rW-c.jpg?size=534x358&quality=96&proxy=1&sign=3bbe609dd691a30a13022cc03a8c8673&type=album'},
        {src: 'https://sun9-61.userapi.com/impg/rsPbOKCNDnj_6EbAFdZbTctCVBIrDWi2Qa0oxQ/XZGKC8CM9Rs.jpg?size=750x749&quality=96&proxy=1&sign=9bc26b26d52e0a060dd642e526123ef0&type=album'},
        {src: 'https://sun9-63.userapi.com/impg/xJmK9v67HBRGQ4re-0MfKLm7j99vVqq5kgPJ_Q/dXJdEQH8i6E.jpg?size=600x500&quality=96&proxy=1&sign=84846d26ad32e71beb03c495f5397b39&type=album'}
    ],
    posts: [],
    anotherProfileData: null,
    showLoading: false
}

let ProfilePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case INPUT_UPDATE:
            return {
                ...state,
                currentInputText: action.currentInputText
            }

        case ADD_POST: 
            let newPost = {text: state.currentInputText}
            return {
                ...state,
                posts: [...state.posts, newPost],
                currentInputText: ''
            }

        case ADD_PROFILE_DATA: 
            return {
                ...state,
                anotherProfileData: action.profileData,
                showLoading: false
            }
        case SHOW_LOADING: 
            return {
                ...state,
                showLoading: action.isShow
            }

        default: 
            return state;
    }
}

export const showLoadingAC = (isShow) => {
    return {type: SHOW_LOADING, isShow: isShow}
}

export const inputUpdateActionCreator = (currentText) => {
    return {type: INPUT_UPDATE, currentInputText: currentText}
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const addProfileDataActionCreator = (profileData) => {
    return {type: ADD_PROFILE_DATA, profileData: profileData}
}


export const getUserDataThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(showLoadingAC(true));
        UsersAPI.getUserProfile(userId).then(data => {
            dispatch(addProfileDataActionCreator(data));
            dispatch(showLoadingAC(false));
        })
    }
}

export default ProfilePageReducer;