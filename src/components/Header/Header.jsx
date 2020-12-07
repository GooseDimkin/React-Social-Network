import s from './Header.module.css';

function Header() {
    return(
        <div className={s.header}>
            <div className={s.img_div}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='logo' />
            </div>
        </div>
    );
}

export default Header;