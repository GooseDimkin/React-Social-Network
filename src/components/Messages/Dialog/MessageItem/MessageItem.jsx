import s from './MessageItem.module.css';

function MessageItem(props) {

    return(
        <div className={s.message}>
            <img src={props.profile_picture} alt='profile' />
            <div className={s.userName}>{props.user_name}</div>
            <div className={s.messageText}>{props.message_text}</div>
        </div>
    );
}

export default MessageItem;