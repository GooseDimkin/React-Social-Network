import s from './Header.module.css';
function Header() {
    return(
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' />
        </header>
    );
}

export default Header;