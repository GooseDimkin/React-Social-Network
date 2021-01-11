import s from './PostItem.module.css';

function PostItem(props) {
    return(
        <div className={s.post_item}>
            <img className={s.user_avatar} src={props.profileData.profileAvatar} alt='avatar'/>
            <span className={s.user_name}>{props.profileData.profileName}</span>
            <div className={s.post_text}>{props.postText}</div>
        </div>
    );
}

export default PostItem;