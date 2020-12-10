import s from './ProfileStatus.module.css';

function ProfileStatus(props) {
    return(
        <div>
            <div className={s.profileStatus}>{props.profile_status}</div>
        </div>
    );
}

export default ProfileStatus;