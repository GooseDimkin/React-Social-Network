import style from './ProfilePage.module.css'

import RightSection from './RightSection/RightSection';
import LeftSection from './LeftSection/LeftSection'

function ProfilePage(props) {
    return(
        <div className={style.sections}>
            <LeftSection avatar={!props.profileData.anotherProfileData ? '' : props.profileData.anotherProfileData.photos.large} ownerAvatar={props.profileData.avatar} />
            <RightSection profileData={props.profileData} />
        </div>
    );
}

export default ProfilePage;