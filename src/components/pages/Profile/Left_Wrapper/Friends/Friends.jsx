import s from './Friends.module.css';
import b from './../../../../box.module.css';

import FriendItem from './Friend_Item/FriendItem';

function Friends(props) {

    let friendsCount = props.profileFriendsData.length;
    let friendItem = props.profileFriendsData.map(f => <FriendItem name={f.name} avatar={f.avatar}/>);


    return(
        <div className={b.box}>
            <div className={s.friends_label}>
                Friends 
                <div className={s.friends_count}>{friendsCount}</div>
            </div>
            <div className={s.friends}>
                {friendItem}
            </div>
            <div className={s.underline}></div>

            <div className={s.friends_label}>
                Friends online
                <div className={s.friends_count}>1</div>
            </div>
            <div className={s.friends}>
                {friendItem[2]}
            </div>
        </div>
    );
}

export default Friends;