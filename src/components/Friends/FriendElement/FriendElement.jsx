import style from './FriendElement.module.css';

function FriendElement(props) {
    return(
        <div className={style.friend_element}>
            <div className={style.name}>{props.friendName}</div>
            <img className={style.avatar} src={props.friendAvatar} alt='avatar'/>
            <div className={style.underline}/>
        </div>
    );
}

export default FriendElement;