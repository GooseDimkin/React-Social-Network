import style from './Avatar.module.css';
import box_style from './../../../../box-template.module.css'

function Avatar(props) {
    return(
        <div className={style.avatar_section}>
            <div className={box_style.box}>
                <img src={props.avatar} alt='avatar'/>
            </div>
        </div>
    );
}

export default Avatar;