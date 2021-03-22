import style from './Header.module.css'

function Header(props) {
    return(
        <div className={style.header}>
            <div className={style.content}>
                <img className={style.logo} src={props.logo} alt='logo'/>
                <input className={style.input} type='text'/>
                {props.isLoginned ? <span className={style.owner_login}>{props.userLogin}</span>
                : <span>Guest</span>}
            </div>
        </div>
    );
}

export default Header;