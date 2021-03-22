import UsersAPI from './../../api/api'

const SET_FRIENDS = 'SET-FRIENDS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let defaultState = {
    friendsArray: [],

    allUsersValue: 50,
    usersOnPageValue: 5,
    currentPageNumber: 1,
    showLoading: true
}

let FriendsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friendsArray: action.friends,
                showLoading: false
            }

        case CHANGE_PAGE:
            return {
                ...state, 
                currentPageNumber: action.currentPageNumber,
                showLoading: true
            }
        
        // case SET_TOTAL_USERS_COUNT: 
        //     return {
        //         ...state, 
        //         allUsersValue: action.totalCount
        //     }

        default: 
            return state;
    }
}

export const setFriendsActionCreator = (friends) => {
    return {type: SET_FRIENDS, friends: friends}
}
export const changePageActionCreator = (currentPageNumber) => {
    return {type: CHANGE_PAGE, currentPageNumber: currentPageNumber}
}
export const setTotalUsersCountActionCreator = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount}
}


export const getFriendsPageThunkCreator = (currentPageNumber, usersOnPageValue) => {
    return (dispatch) => {
        UsersAPI.showUsers(currentPageNumber, usersOnPageValue).then(data => {
            dispatch(setFriendsActionCreator(data.items));
            dispatch(setTotalUsersCountActionCreator(data.totalCount));
        })
    }
}

export default FriendsReducer;