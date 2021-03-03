import {createStore, combineReducers} from 'redux';

import ProfilePageReducer from './Reducers/ProfilePageReducer'
import SiteReducer from './Reducers/SiteReducer'
import FriendsReducer from './Reducers/FriendsReducer';

let reducers = combineReducers({
    siteData: SiteReducer,
    profileData: ProfilePageReducer,
    friendsData: FriendsReducer
});

let store = createStore(reducers);

export default store;