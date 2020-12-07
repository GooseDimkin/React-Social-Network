import s from './StorieItem.module.css';

function StorieItem(props) {
    return(
        <div className={s.storie_item}>
            <img src={props.storie_preview} alt='storie preview' />
        </div>
    );
}

export default StorieItem;