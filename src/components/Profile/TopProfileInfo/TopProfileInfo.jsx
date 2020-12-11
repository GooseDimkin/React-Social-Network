import s from './TopProfileInfo.module.css'

function TopProfileInfo(props) {
    return(
        <div>
            <div className={s.profileName}>{props.profileName}</div>
            <div className={s.profileStatus}>
                {props.profileStatus}
            </div>
        </div>
    );
}

export default TopProfileInfo;