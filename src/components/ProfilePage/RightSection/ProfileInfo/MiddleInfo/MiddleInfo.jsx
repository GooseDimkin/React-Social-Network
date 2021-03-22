import style from './MiddleInfo.module.css';
import Preloader from './../../../../common/Preloader'

function MiddleInfo(props) {
    if(!props.profileData.anotherProfileData) {
        return <Preloader/>
    }
    
    return(
        <div>
            <div className={style.middle_info}>
                <ul className={style.labels}>
                    <li>Facebook:</li>
                    <li>Website:</li>
                    <li>Twitter:</li>
                </ul>
                <ul className={style.info}>
                    <li>{!props.profileData.anotherProfileData.contacts.facebook ? '-' : props.profileData.anotherProfileData.contacts.facebook}</li>
                    <li>{!props.profileData.anotherProfileData.contacts.website ? '-' : props.profileData.anotherProfileData.contacts.website}</li>
                    <li>{!props.profileData.anotherProfileData.contacts.twitter ? '-' : props.profileData.anotherProfileData.contacts.twitter}</li>
                </ul>
            </div>
            <div className={style.underline}/>
        </div>
    );
}

export default MiddleInfo;