import style from './Friends.module.css';
import {Route} from 'react-router-dom';

import FriendElement from './FriendElement/FriendElement';
import FriendsAll from './FriendsAll/FriendsAll';
import FriendsOnline from './FriendsOnline/FriendsOnline';

function Friends(props) {

    let friendElement = props.friendsData.friends.map(friend => <FriendElement friendName={friend.name} friendAvatar={friend.avatar} />);

    let friendsOnline = props.friendsData.friends.filter(friend => friend.online === true);
    let onlineFriendElement = friendsOnline.map(friend => <FriendElement friendName={friend.name} friendAvatar={friend.avatar} />);

    return(
        <div>
            <Route path='/friends/all' render={()=> <FriendsAll friends={props.friendsData.friends} friendElement={friendElement} onlineFriendElement={onlineFriendElement} />} />
            <Route path='/friends/online' render={()=> <FriendsOnline friends={props.friendsData.friends} friendElement={friendElement} onlineFriendElement={onlineFriendElement} />} />
        </div>
    );
}

export default Friends;