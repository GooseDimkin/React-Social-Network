import s from './InputArea.module.css';

function InputArea() {
    return(
        <div className={s.inputArea}>
            <input />
            <div className={s.button}>Send</div>
        </div>
    );
}

export default InputArea;