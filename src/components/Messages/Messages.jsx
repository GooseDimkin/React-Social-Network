import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';

function Messages() {
    return(
        <BrowserRouter>
            <div className={s.messages_area}>
                <div className={s.dialog_preview}>
                    <NavLink to='/messages/valeriy'><img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="avatar"/></NavLink>
                </div>
                <div className={s.dialogs}>
                    <Route path='/messages/valeriy' component={Dialog} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Messages;