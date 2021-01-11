import s from './RightWrapper.module.css';

import ProfileInfo from './Profile_Info/ProfileInfo';
import Photos from './Photos/Photos'
import PostInput from './Post_Input/PostInput';
import Posts from './Posts/Posts';

function RightWrapper(props) {

    let profileInfoItem = props.profileData.ProfileInfoData.map(p => <ProfileInfo profileData={props.profileData} profileStatus={p.profileStatus} birthday={p.birthday} company={p.company} website={p.website} />);
    let postElement = props.profileData.PostsData.map(p => <Posts postText={p.postText} profileData={props.profileData} />)

    return(
        <div className={s.right_wrapper}>
            {profileInfoItem}
            <Photos photosData={props.profileData}/>
            <PostInput dispatch={props.dispatch} CurrentInputText={props.profileData.CurrentInputText} profileAvatar={props.profileData.profileAvatar}/>
            {postElement}
        </div>
    );
}

export default RightWrapper;