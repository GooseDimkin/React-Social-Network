import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

const UsersAPI = {
    getUserProfile: (userId) => {
        return instance.get('profile/' + userId).then(
            response => response.data
        );
    },
    showUsers: (currentPageNumber, usersOnPageValue) => {
        return instance.get(`users?page=${currentPageNumber}&count=${usersOnPageValue}`).then(
            response => response.data
        );
    },
    auth: () => {
        return instance.get('auth/me').then(response => response.data)
    }
};

export default UsersAPI;