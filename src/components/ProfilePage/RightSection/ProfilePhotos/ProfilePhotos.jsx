import style from './ProfilePhotos.module.css';
import box_style from './../../../../box-template.module.css';

import PhotoPreview from './PhotoPreview/PhotoPreview'

function ProfilePhotos(props) {

    let photoElement = props.photos.map(p => <PhotoPreview photo={p.src} />)

    return(
        <div className={style.profile_photos}>
            <div className={box_style.box}>
                <span className={style.label}>My photos</span> 
                <span className={style.value}>{props.photosValue}</span>
                <div className={style.photos_preview}>
                    {photoElement}
                </div>
            </div>
        </div>
    );
}

export default ProfilePhotos;