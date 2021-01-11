import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
    return(
        <ul className={s.ul}>
            <NavLink to='/profile'><li className={s.list}>Home</li></NavLink>
            <NavLink to='/news'><li className={s.list}>News</li></NavLink>
            <li className={s.list}>Messages</li>
            <li className={s.list}>Settings</li>
        </ul>
    );
}

export default Nav;