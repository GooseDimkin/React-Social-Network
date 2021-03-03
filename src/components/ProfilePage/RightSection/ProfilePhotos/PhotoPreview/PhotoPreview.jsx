import style from './PhotoPreview.module.css';

function PhotoPreview(props) {
    return(
        <img className={style.photo} src={props.photo} alt='preview'/>
    );
}

export default PhotoPreview;