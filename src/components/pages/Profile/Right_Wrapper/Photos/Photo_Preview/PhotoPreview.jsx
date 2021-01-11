import s from './PhotoPreview.module.css';

function PhotoPreview(props) {
    return(
        <div className={s.section}>
            <img src={props.src} alt='preview'/>
        </div>
    );
}

export default PhotoPreview;