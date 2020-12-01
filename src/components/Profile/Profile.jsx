import s from './Profile.module.css';

let avatar = 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6';

function Profile(props) {
    return(
        <div className={s.content}>
            <img className={s.top_picture} src='https://ftp.nluug.nl/ftp/pub/os/Linux/distr/CentOS/build/HEADER.images/docs-header.bak.png' />
            <div className={s.user_inf}>
                <img className={s.profile_picture} src={avatar} />
                <div className={s.user_name}>{props.userName}</div>
            </div>
        </div>
    );
}

export default Profile;