import s from './FriendItem.module.css';

function FriendItem(props) {
    return(
        <div className={s.friend_item}>
            <img src={props.avatar} alt='friend'/>
            <span className={s.friend_name}>{props.name}</span>
        </div>
    );
}

export default FriendItem;