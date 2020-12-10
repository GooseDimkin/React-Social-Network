import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return(
        <div className={s.nav}>
            <li><NavLink to='/profile'>Home</NavLink></li>
            <li><NavLink to='/messages'>Messages</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li><a href='#'>Settings</a></li> 
        </div>
    );
}

export default Nav;