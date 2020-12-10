import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return(
        <div className={s.profile_info}>
            <div className={s.birth_day}><a href='#'>{props.birthDay}</a></div>
            <div className={s.company}><a href='#'>{props.companyName}</a></div>
            <div className={s.website}><a href='#'>{props.websiteUrl}</a></div>
        </div>
    );
}

export default ProfileInfo;