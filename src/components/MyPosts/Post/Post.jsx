import s from './Post.module.css';

function Post(props) {
    let profile_picture;
    if(props.id == 'owner') 
    {
        profile_picture = 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6';
    }
    else {
        profile_picture = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
    }

    return(
        <div className={s.post}>
            <img src={profile_picture} />
            <div className={s.userName}>{props.user_name}</div>
            <div className={s.postText}>{props.post_text}</div>
        </div>
    );
}

export default Post;