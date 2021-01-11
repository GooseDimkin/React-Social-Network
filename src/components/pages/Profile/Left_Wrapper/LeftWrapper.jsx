import s from './LeftWrapper.module.css';

import Avatar from './Avatar/Avatar';
import Gifts from './Gifts/Gifts';
import Friends from './Friends/Friends';

function LeftWrapper(props) {
    return(
        <div className={s.left_wrapper}>
            <Avatar profileAvatarData={props.profileData.profileAvatar}/>
            <Gifts profileGiftsData={props.profileData.GiftsData}/>
            <Friends profileFriendsData={props.profileData.FriendsData}/>
        </div>
    );
}

export default LeftWrapper;