import style from './Header.module.css'

function Header(props) {
    return(
        <div className={style.header}>
            <div className={style.content}>
                <img className={style.logo} src={props.logo} alt='logo'/>
                <input className={style.input} type='text'/>
            </div>
        </div>
    );
}

export default Header;