import style from './Nav.module.css'

import {NavLink} from 'react-router-dom'

function Nav(props) {
    return(
        <ul className={style.ul}>
            <NavLink to='/profile'><li>My proflie</li></NavLink>
            <li>News</li>
            <li>Messanger</li>
            <NavLink to='/friends/all'><li>Friends</li></NavLink>
            <li>Communities</li>
        </ul>
    );
}

export default Nav;