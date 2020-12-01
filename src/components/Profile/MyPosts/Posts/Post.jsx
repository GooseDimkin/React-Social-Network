import s from './Post.module.css';

let avatar__;

function Post(props) {
    if(props.id !== 'owner')
    {
        avatar__ = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
    }
    else {
        avatar__ = 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6';
    }

    return(
        <div>
            <div className={s.item}>
                <img src={avatar__} />
                <div className={s.user_name}>{props.userName}</div>
                <div className={s.text}>{props.text}</div>
            </div>
            <hr className={s.likes_hr} />
            <div>
                <span className={s.likes_counter}>likes {props.likes}</span>
            </div>
            <hr className={s.post_hr} />
        </div>
    );
}

export default Post;