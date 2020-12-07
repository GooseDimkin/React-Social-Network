import s from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';

function Messages() {
    return(
        <div className={s.postsArea}>
            <div className={s.posts}>
                <MessageItem message_text='Вот дурка блин' user_name='Валерий Жиган' />
                <MessageItem message_text='Pogchump' user_name='Дмитрий Лебедев' id='owner' />
            </div>
            <div className={s.inputArea}>
                <input />
                <div className={s.button}>Send</div>
            </div>
        </div>
    );
}

export default Messages;