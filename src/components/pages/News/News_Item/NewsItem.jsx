import s from './NewsItem.module.css';
import b from './../../../box.module.css';

function NewsItem(props) {
    return(
        <div className={b.box}>
            <div className={s.post_item}>
                <img className={s.user_avatar} src={props.profileData.profileAvatar} alt='avatar'/>
                <span className={s.user_name}>{props.profileData.profileName}</span>
                <div className={s.post_text}>{props.postText}</div>
            </div>
        </div>
    );
}

export default NewsItem;