import s from './Profile.module.css';

import RightWrapper from './Right_Wrapper/RightWrapper'
import LeftWrapper from './Left_Wrapper/LeftWrapper'

function Profile(props) {
    return(
        <div className={s.wrapper}>
            <LeftWrapper profileData={props.state.ProfileData}/>
            <RightWrapper profileData={props.state.ProfileData} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;