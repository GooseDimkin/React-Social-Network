import s from './BottomProfileInfo.module.css';

function BottomProfileInfo(props) {
    return(
        <div className={s.detail_profile_info}>
            <div className={s.infoLabels}>
                <li>Birthday:</li> 
                <li>Company:</li>
                <li>Website:</li>
            </div>
            <div className={s.profile_info}>
                <div className={s.birth_day}><a href='#'>{props.birthDay}</a></div>
                <div className={s.company}><a href='#'>{props.companyName}</a></div>
                <div className={s.website}><a href='#'>{props.websiteUrl}</a></div>
            </div>
        </div>
    );
}

export default BottomProfileInfo;