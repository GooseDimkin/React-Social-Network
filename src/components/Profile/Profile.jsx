import s from './Profile.module.css';

function Profile(props) {
    return(
        <div className={s.profile}>
            <img src="https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6" alt="avatar"/>
            <div className={s.profileName}>{props.profile_name}</div>
        </div>
    );
}

export default Profile;