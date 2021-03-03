import style from './ProfilePage.module.css'

import RightSection from './RightSection/RightSection';
import LeftSection from './LeftSection/LeftSection'

function ProfilePage(props) {
    return(
        <div className={style.sections}>
            <LeftSection avatar={props.state.profileData.avatar} />
            <RightSection profileData={props.state.profileData} state={props.state} />
        </div>
    );
}

export default ProfilePage;