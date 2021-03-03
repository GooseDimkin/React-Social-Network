import style from './ProfileInfo.module.css';
import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo';
import BottomInfo from './BottomInfo/BottomInfo';
import box_style from './../../../../box-template.module.css';

function ProfileInfo(props) {
    return(
        <div className={style.profile_info}>
            <div className={box_style.box}>
                <TopInfo profileData={props.profileData} />
                <MiddleInfo profileData={props.profileData} />
                <BottomInfo profileData={props.profileData} />
            </div>
        </div>
    );
}

export default ProfileInfo;