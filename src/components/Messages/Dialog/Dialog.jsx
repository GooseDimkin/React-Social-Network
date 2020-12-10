import s from './Dialog.module.css';

import MessageItem from './MessageItem/MessageItem';
import InputArea from 'D:/nodejs-first-project/first-app/src/components/InputArea/InputArea';

function Dialog() {

    let messageData = [
        {id: 1, message: 'Вот дурка блин', user_name: 'Валерий Жиган', profile_picture: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'},
        {id: 2, message: 'Pogchamp', user_name: 'Дмитрий Лебедев', profile_picture: 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6'}
    ]

    let messageElement = messageData.map(m => <MessageItem message_text={m.message} id={m.id} user_name={m.user_name} profile_picture={m.profile_picture} />);

    return(
        <div className={s.dialogsArea}>
            <div className={s.dialogs}>
                {messageElement}
            </div>
            <InputArea />
        </div>
    );
}

export default Dialog;