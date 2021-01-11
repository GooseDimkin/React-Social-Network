import s from './Avatar.module.css';
import b from './../../../../box.module.css';

function Avatar(props) {
    return(
        <div>
            <div className={b.box}>
                <img className={s.avatar} src={props.profileAvatarData} alt='avatar'/>
                <div className={s.buttons}>
                    <a className={s.edit_button} href='#'>Edit</a>
                    <a className={s.dots_button} href='#'>...</a>
                </div>
            </div>
        </div>
    );
}

export default Avatar;