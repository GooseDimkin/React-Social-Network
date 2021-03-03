import style from './FriendsOnline.module.css';
import {NavLink} from 'react-router-dom';

function FriendsOnline(props) {

    return(
        <div>
            <div className={style.friends_switcher}>
                <NavLink to='/friends/all' className={style.all_friends_button}>
                    <span className={style.all_friends}>All friends</span>
                    <span className={style.value_of_all_friends}>{props.friendElement.length}</span>
                </NavLink>

                <NavLink to='/friends/online' className={style.friends_online_button}>
                    <span className={style.friends_online}>Friends online</span>
                    <span className={style.value_of_friends_online}>{props.onlineFriendElement.length}</span>
                </NavLink>
            </div>
            <div className={style.friends_section}>
                {props.onlineFriendElement}
            </div>
        </div>
    );
}

export default FriendsOnline;