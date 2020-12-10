import s from './Avatar.module.css';

function Avatar(props) {
    return(
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
    );
}

export default Avatar;