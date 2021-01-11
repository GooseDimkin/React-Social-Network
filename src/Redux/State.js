let store = {
    _rerender() {},
    _state: {
        ProfileData: {
            profileAvatar: 'https://sun9-66.userapi.com/impg/IdbZslw5iAv-bVG5vCqX1vI6zpTeLFii0-Vqew/zi563-XDmsg.jpg?size=859x859&quality=96&proxy=1&sign=bd0aa55d3b0842268abce47945cf33de&type=album',
            profileName: 'Dmitry Lebedev',
    
            ProfileInfoData: [
                { 
                    profileStatus: 'Что-то типа статуса', 
                    birthday: 'January 6', 
                    company: 'Cringe Universe', 
                    website: 'https:/none'
                }
            ],
            ProfileStatisticData: [
                {value: '1337', label: 'friends'},
                {value: '228', label: 'followers'},
                {value: '1488', label: 'photos'},
                {value: '223', label: 'tags'},
                {value: '1234', label: 'videos'},
                {value: '47', label: 'tracks'}
            ],
            PhotosPreviewData: [
                {src: 'https://sun9-49.userapi.com/impf/PY8nnvmu1baOf1ISaNcm9wZsVAJsrbvGwgxp4Q/loaHDIy8kUw.jpg?size=1125x1127&quality=96&proxy=1&sign=eb9eb5e3b4fee085ffc8c30d72d1d29f&type=album'},
                {src: 'https://sun9-73.userapi.com/impf/E30qp393GNAJ-mVVhhn-Jou20n6RzsdJLbglwQ/yZpHnP4Lsow.jpg?size=1125x1117&quality=96&proxy=1&sign=d8b0b8766f90913a5209ed279033d80c&type=album'},
                {src: 'https://sun9-53.userapi.com/impg/INcGYTOfYPRYc_TnhVY0-CihmbLcRek6yoW6_Q/dQGaxue5_Rw.jpg?size=1080x1080&quality=96&proxy=1&sign=fd939a5b7a33768c134be08fc9609836&type=album'},
                {src: 'https://sun9-68.userapi.com/impg/w6KilSYVPW1zLxDKBfSWkDsqJA041mIQL-ID_g/pca5GZ5DFeo.jpg?size=1415x1415&quality=96&proxy=1&sign=53224ec37deb127fe54f411b6f790d34&type=album'}
            ],
            PostsData: [],
            NewsData: [],
            GiftsData: [
                {src: 'https://vk.com/images/gift/1116/256.jpg'},
                {src: 'https://vk.com/images/gift/1116/256.jpg'},
                {src: 'https://vk.com/images/gift/1116/256.jpg'}
            ],
            FriendsData: [
                {name: 'Rafis', avatar: 'https://sun9-5.userapi.com/impf/Y6WRAG2SoHKw3rQinqse-19hyjI5uYJ0ldWB5Q/uir5h-Z11oM.jpg?size=1006x813&quality=96&proxy=1&sign=3a2f1991015f21e6b63c9ae2a6421869&type=album'},
                {name: 'Katya', avatar: 'https://sun9-36.userapi.com/impg/FTajpkxYET77z3fn1YqWrTxleIvJUzv1q2sPaA/B6njDlH99uY.jpg?size=1280x1280&quality=96&proxy=1&sign=45e85646b1a4b96831c106ff5feaaa76&type=album'},
                {name: 'Alexey', avatar: 'https://sun9-33.userapi.com/impg/1AZXKbKIGZf4-wMcxgbU-z5V1GwccRBQVhiafg/00C-RnRVhZE.jpg?size=673x610&quality=96&proxy=1&sign=8abcfe300e012584c24188d84524b2b6&type=album'},
                {name: 'Clifford', avatar: 'https://sun9-66.userapi.com/impg/c857432/v857432710/22cb10/FTm4S7uNoeU.jpg?size=736x741&quality=96&proxy=1&sign=9b1ec38904214d7c744218c5ee36a32c&type=album'},
            ],
            CurrentInputText: '',
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerender = observer;
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPostData = {postText: this._state.ProfileData.CurrentInputText};
            this._state.ProfileData.PostsData.push(newPostData);
            this._state.ProfileData.NewsData.push(newPostData);
            this._rerender();
        }
        else if(action.type === 'ADD-CURRENT-INPUT-TEXT') {
            this._state.ProfileData.CurrentInputText = action.currentText;
            this.rerender();
        }
    }
}

window.store = store;

export default store;