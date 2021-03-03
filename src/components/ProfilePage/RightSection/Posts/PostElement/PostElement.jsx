import style from './PostElement.module.css';
import box_style from './../../../../../box-template.module.css';

function PostElement(props) {
    return(
        <div className={box_style.box}>
            <div className={style.post_element}>
                <div className={style.name}>Dmitry Lebedev</div>
                <img src='https://sun9-39.userapi.com/impg/Toc50SPSRvw9Sop9x0AE8xgQQVBan-75wYchcQ/GhVYaPqhE-0.jpg?size=1304x2160&quality=96&proxy=1&sign=09dc85767ae4ae45c97d02ba9adc50ef&type=album' alt='avatar'/>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
}

export default PostElement;