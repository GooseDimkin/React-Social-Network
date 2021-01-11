import s from './Photos.module.css';
import b from './../../../../box.module.css';

import PhotoPreview from './Photo_Preview/PhotoPreview';

function Photos(props) {

    let photoPreviewItem = props.photosData.PhotosPreviewData.map(p => <PhotoPreview src={p.src} />)
    let photos_value = props.photosData.PhotosPreviewData.length;

    return(
        <div className={b.box}>
            <div className={s.my_photos_label}>
                My photos 
                <div className={s.photos_count}>{photos_value}</div>
            </div>
            <div className={s.photos}>
                {photoPreviewItem}
            </div>
        </div>
    );
}

export default Photos;