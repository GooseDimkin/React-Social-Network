import s from './ProfileName.module.css';

function ProfileName(props) {
    return(
        <div className={s.profile_name}>
            <div className={s.profileName}>{props.profile_name}</div>
        </div>
    );
}

export default ProfileName;