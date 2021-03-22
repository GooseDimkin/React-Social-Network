import style from './FriendElement.module.css';
import {NavLink} from 'react-router-dom';

function FriendElement(props) {
    return(
        <div className={style.friend_element}>
            <NavLink to={'/profile/' + props.friendId}>
                <div className={style.name}>{props.friendName}</div>
                <img className={style.avatar} src={props.friendAvatar} alt='avatar'/>
            </NavLink>
            <div className={style.underline}/>
        </div>
    );
}

export default FriendElement;