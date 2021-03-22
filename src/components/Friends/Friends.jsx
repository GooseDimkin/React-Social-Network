import style from './Friends.module.css';

import FriendElement from './FriendElement/FriendElement';

function Friends(props) {

    let friendElement = props.friends.map(friend => <FriendElement friendId={friend.id} friendName={friend.name} friendAvatar={friend.photos.small} />);

    return(
        <div className={style.friends_section}>
            {props.pages}
            {friendElement}
        </div>
    );
}

export default Friends;