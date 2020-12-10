import s from './ProfilePosts.module.css';

function ProfilePosts(props) {
    return(
        <div  className={s.posts}>
            <div className={s.autor_info}>
                <img src={props.autorAvatar} />
                <div className={s.autor_name}>{props.autorName}</div>
            </div>
            <div className={s.content}>
                {props.content}
            </div>
        </div>
    );
}

export default ProfilePosts;
