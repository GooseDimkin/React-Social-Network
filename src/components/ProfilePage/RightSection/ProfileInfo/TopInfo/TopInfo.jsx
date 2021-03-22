import style from './TopInfo.module.css'
import Preloader from './../../../../common/Preloader';

function TopInfo(props) {
    if(!props.profileData.anotherProfileData) {
        return <Preloader/>
    }
    return(
        <div className={style.top_info}>
            <div className={style.name_and_online_flex}>
                <span className={style.name}>{props.profileData.anotherProfileData.fullName}</span>
                <div className={style.online}>online</div>
            </div> 
            <div className={style.status}>{props.profileData.anotherProfileData.aboutMe}</div>
            <div className={style.underline}/>
        </div>
    );
}

export default TopInfo;