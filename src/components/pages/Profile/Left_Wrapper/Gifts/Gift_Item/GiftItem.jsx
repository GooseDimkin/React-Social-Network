import s from './GiftItem.module.css';

function GiftItem(props) {
    return(
        <div className={s.gift_element}>
            <img src={props.src} alt='gift'/>
        </div>
    );
}

export default GiftItem;