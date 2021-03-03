import style from './RightSection.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePhotos from './ProfilePhotos/ProfilePhotos'
import PostsContainer from './Posts/PostsContainer'

function RightSection(props) {
    return(
        <div>
            <ProfileInfo profileData={props.profileData} />
            <ProfilePhotos photosValue={props.profileData.photosValue} photos={props.profileData.photos} />
            <PostsContainer />
        </div>
    );
}

export default RightSection