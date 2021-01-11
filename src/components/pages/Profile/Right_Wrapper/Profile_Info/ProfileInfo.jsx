import b from './../../../../box.module.css';

import NameAndStatus from './Name_And_Status/NameAndStatus';
import  DetailProfileInfo from './Detail_Profile_Info/DetailProfileInfo';
import MediaStatistic from './Media_Statistic/MediaStatistic'

function ProfileInfo(props) {
    return(
        <div className={b.box}>
            <NameAndStatus profileName={props.profileData.profileName} profileStatus={props.profileStatus}/>
            <DetailProfileInfo birthday={props.birthday} company={props.company} website={props.website}/>
            <MediaStatistic profileData={props.profileData} />
        </div>
    );
}

export default ProfileInfo;