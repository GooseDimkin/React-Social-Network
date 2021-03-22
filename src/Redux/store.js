import {createStore, combineReducers, applyMiddleware} from 'redux';

import ProfilePageReducer from './Reducers/ProfilePageReducer'
import SiteReducer from './Reducers/SiteReducer'
import FriendsReducer from './Reducers/FriendsReducer';
import AuthReducer from './Reducers/AuthReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    commonData: SiteReducer,
    profileData: ProfilePageReducer,
    friendsData: FriendsReducer,
    auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store.getState();

export default store;